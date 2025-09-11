import { User, AdminRequest } from './dataService';

// API base URL
const API_BASE = '/api';

// Development mode check
const isDevelopment = process.env.NODE_ENV === 'development';

// Generic API request function with improved error handling and retry mechanism
const apiRequest = async (endpoint: string, options: RequestInit = {}, retryCount = 0): Promise<any> => {
  const maxRetries = 3;
  const retryDelay = Math.pow(2, retryCount) * 1000; // Exponential backoff: 1s, 2s, 4s
  
  try {
    const url = `${API_BASE}${endpoint}`;
    if (isDevelopment) {
      console.log(`Making API request to: ${url} (attempt ${retryCount + 1})`);
    }
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (isDevelopment) {
      console.log(`Response status: ${response.status} for ${url}`);
    }

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (parseError) {
        console.warn('Could not parse error response:', parseError);
        // Use the default error message
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    if (isDevelopment) {
      console.log(`Successfully fetched data from ${url}`);
    }
    return data;
  } catch (error) {
    console.error(`API request failed for ${endpoint} (attempt ${retryCount + 1}):`, error);
    
    // Retry logic for network errors
    if (retryCount < maxRetries && (
      error instanceof TypeError && error.message.includes('fetch') ||
      (error instanceof Error && error.message.includes('Network'))
    )) {
      if (isDevelopment) {
        console.log(`Retrying request in ${retryDelay}ms...`);
      }
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      return apiRequest(endpoint, options, retryCount + 1);
    }
    
    // Handle different types of errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network connection failed. Please check your internet connection.');
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('An unexpected error occurred while making the API request.');
  }
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
