import { User, AdminRequest } from './dataService';

// API base URL
const API_BASE = '/api';

// Generic API request function
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// User management API calls
export const userAPI = {
  // Get all users
  getAll: async (): Promise<User[]> => {
    return apiRequest('/users');
  },

  // Get approved users only
  getApproved: async (): Promise<User[]> => {
    return apiRequest('/users?type=approved');
  },

  // Get user by email
  getByEmail: async (email: string): Promise<User> => {
    return apiRequest(`/users?email=${encodeURIComponent(email)}`);
  },

  // Create or update user
  save: async (user: User): Promise<{ message: string; user: User }> => {
    return apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },

  // Update user
  update: async (user: User): Promise<{ message: string; user: User }> => {
    return apiRequest('/users', {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  },

  // Delete user
  delete: async (email: string): Promise<{ message: string }> => {
    return apiRequest(`/users?email=${encodeURIComponent(email)}`, {
      method: 'DELETE',
    });
  },
};

// Admin request management API calls
export const adminRequestAPI = {
  // Get all admin requests
  getAll: async (): Promise<AdminRequest[]> => {
    return apiRequest('/users?type=admin-requests');
  },

  // Get pending admin requests
  getPending: async (): Promise<AdminRequest[]> => {
    return apiRequest('/users?type=pending-admin');
  },

  // Submit admin request
  submit: async (requestData: Omit<AdminRequest, 'id' | 'createdAt' | 'status'>): Promise<{ message: string; request: AdminRequest }> => {
    return apiRequest('/users?action=admin-request', {
      method: 'POST',
      body: JSON.stringify(requestData),
    });
  },

  // Approve admin request
  approve: async (requestId: string, approvedBy: string): Promise<{ message: string }> => {
    return apiRequest('/users?action=approve-admin', {
      method: 'PUT',
      body: JSON.stringify({ requestId, approvedBy }),
    });
  },

  // Reject admin request
  reject: async (requestId: string, rejectedBy: string, reason: string): Promise<{ message: string }> => {
    return apiRequest('/users?action=reject-admin', {
      method: 'PUT',
      body: JSON.stringify({ requestId, rejectedBy, reason }),
    });
  },
};

// Authentication API calls
export const authAPI = {
  // Login user
  login: async (email: string, password: string): Promise<{ message: string; user: User }> => {
    return apiRequest('/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Get current user session
  getCurrentUser: async (): Promise<{ user: User }> => {
    return apiRequest('/auth');
  },

  // Logout user
  logout: async (email?: string): Promise<{ message: string }> => {
    const endpoint = email ? `/auth?email=${encodeURIComponent(email)}` : '/auth';
    return apiRequest(endpoint, {
      method: 'DELETE',
    });
  },
};

// Helper function to create a new user with timestamps
export const createNewUser = (userData: Omit<User, 'createdAt' | 'updatedAt' | 'loginTime' | 'logoutTime' | 'lastActive'>): User => {
  const now = new Date().toISOString();
  return {
    ...userData,
    createdAt: now,
    updatedAt: now,
    loginTime: now,
    logoutTime: '-',
    lastActive: now,
  };
};

// Helper function to create a new admin request
export const createNewAdminRequest = (requestData: Omit<AdminRequest, 'id' | 'createdAt' | 'status'>): Omit<AdminRequest, 'id' | 'createdAt' | 'status'> => {
  return requestData;
};

// Helper function to update user timestamps
export const updateUserTimestamps = (user: User, updates: Partial<User>): User => {
  return {
    ...user,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
};
