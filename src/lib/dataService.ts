import fs from 'fs';
import path from 'path';

// Define the data structure
export interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  loginTime?: string;
  logoutTime?: string;
  lastActive?: string;
  createdAt: string;
  updatedAt: string;
  isApproved?: boolean; // For admin approval
  approvalDate?: string; // When admin was approved
  approvedBy?: string; // Who approved the admin
}

export interface AdminRequest {
  id: string;
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  approvalDate?: string;
  approvedBy?: string;
  rejectionReason?: string;
}

export interface AppData {
  users: User[];
  adminRequests: AdminRequest[];
  currentUser: User | null;
  lastUpdated: string;
}

// Path to the data file
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'app-data.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.dirname(DATA_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize default data
const getDefaultData = (): AppData => ({
  users: [],
  adminRequests: [],
  currentUser: null,
  lastUpdated: new Date().toISOString()
});

// Load data from JSON file
export const loadData = (): AppData => {
  try {
    ensureDataDirectory();
    
    if (!fs.existsSync(DATA_FILE_PATH)) {
      // Create default data file if it doesn't exist
      const defaultData = getDefaultData();
      saveData(defaultData);
      return defaultData;
    }
    
    const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    const data: AppData = JSON.parse(fileContent);
    
    // Ensure all required fields exist
    return {
      users: data.users || [],
      adminRequests: data.adminRequests || [],
      currentUser: data.currentUser || null,
      lastUpdated: data.lastUpdated || new Date().toISOString()
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return getDefaultData();
  }
};

// Save data to JSON file
export const saveData = (data: AppData): void => {
  try {
    ensureDataDirectory();
    
    const dataToSave = {
      ...data,
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(dataToSave, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// User management functions
export const getAllUsers = (): User[] => {
  const data = loadData();
  return data.users;
};

export const getApprovedUsers = (): User[] => {
  const data = loadData();
  return data.users.filter(user => user.role === 'user' || (user.role === 'admin' && user.isApproved));
};

export const getPendingAdminRequests = (): AdminRequest[] => {
  const data = loadData();
  return data.adminRequests.filter(request => request.status === 'pending');
};

export const getAllAdminRequests = (): AdminRequest[] => {
  const data = loadData();
  return data.adminRequests;
};

export const saveUser = (user: User): void => {
  const data = loadData();
  const existingUserIndex = data.users.findIndex(u => u.email === user.email);
  
  if (existingUserIndex >= 0) {
    // Update existing user
    data.users[existingUserIndex] = {
      ...user,
      updatedAt: new Date().toISOString()
    };
  } else {
    // Add new user
    const newUser: User = {
      ...user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    data.users.push(newUser);
  }
  
  saveData(data);
};

export const createAdminRequest = (requestData: Omit<AdminRequest, 'id' | 'createdAt' | 'status'>): AdminRequest => {
  const data = loadData();
  
  const newRequest: AdminRequest = {
    ...requestData,
    id: generateId(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  };
  
  data.adminRequests.push(newRequest);
  saveData(data);
  return newRequest;
};

export const approveAdminRequest = (requestId: string, approvedBy: string): boolean => {
  const data = loadData();
  const requestIndex = data.adminRequests.findIndex(req => req.id === requestId);
  
  if (requestIndex === -1) return false;
  
  const request = data.adminRequests[requestIndex];
  
  // Update request status
  data.adminRequests[requestIndex] = {
    ...request,
    status: 'approved',
    approvalDate: new Date().toISOString(),
    approvedBy
  };
  
  // Create approved admin user
  const newAdmin: User = {
    role: 'admin',
    username: request.username,
    email: request.email,
    mobile: request.mobile,
    password: request.password,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isApproved: true,
    approvalDate: new Date().toISOString(),
    approvedBy
  };
  
  data.users.push(newAdmin);
  saveData(data);
  return true;
};

export const rejectAdminRequest = (requestId: string, rejectedBy: string, reason: string): boolean => {
  const data = loadData();
  const requestIndex = data.adminRequests.findIndex(req => req.id === requestId);
  
  if (requestIndex === -1) return false;
  
  data.adminRequests[requestIndex] = {
    ...data.adminRequests[requestIndex],
    status: 'rejected',
    approvalDate: new Date().toISOString(),
    approvedBy: rejectedBy,
    rejectionReason: reason
  };
  
  saveData(data);
  return true;
};

export const deleteUser = (email: string): void => {
  const data = loadData();
  data.users = data.users.filter(u => u.email !== email);
  saveData(data);
};

export const getUserByEmail = (email: string): User | undefined => {
  const data = loadData();
  return data.users.find(u => u.email === email);
};

export const authenticateUser = (email: string, password: string): User | null => {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    // Check if admin is approved
    if (user.role === 'admin' && !user.isApproved) {
      return null; // Admin not approved yet
    }
    
    // Update login time
    const updatedUser = {
      ...user,
      loginTime: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveUser(updatedUser);
    return updatedUser;
  }
  return null;
};

export const setCurrentUser = (user: User | null): void => {
  const data = loadData();
  data.currentUser = user;
  saveData(data);
};

export const getCurrentUser = (): User | null => {
  const data = loadData();
  return data.currentUser;
};

export const updateUserActivity = (email: string, activity: 'login' | 'logout'): void => {
  const user = getUserByEmail(email);
  if (user) {
    const updatedUser = {
      ...user,
      [activity === 'login' ? 'loginTime' : 'logoutTime']: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveUser(updatedUser);
  }
};

// Helper function to generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Export the data file path for reference
export const getDataFilePath = (): string => DATA_FILE_PATH;
