// Define the data structure types
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
  isMainAdmin?: boolean; // For main admin identification
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
