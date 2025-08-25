import { NextApiRequest, NextApiResponse } from 'next';
import { 
  getAllUsers, 
  getApprovedUsers,
  getPendingAdminRequests,
  getAllAdminRequests,
  saveUser, 
  deleteUser, 
  getUserByEmail,
  createAdminRequest,
  approveAdminRequest,
  rejectAdminRequest,
  authenticateUser,
  setCurrentUser,
  getCurrentUser,
  updateUserActivity,
  User,
  AdminRequest
} from '@/lib/dataService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        // Get all users, approved users, or specific user
        const { email, type } = req.query;
        
        if (email) {
          const user = getUserByEmail(email as string);
          if (user) {
            res.status(200).json(user);
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } else if (type === 'approved') {
          const users = getApprovedUsers();
          res.status(200).json(users);
        } else if (type === 'admin-requests') {
          const requests = getAllAdminRequests();
          res.status(200).json(requests);
        } else if (type === 'pending-admin') {
          const requests = getPendingAdminRequests();
          res.status(200).json(requests);
        } else {
          const users = getAllUsers();
          res.status(200).json(users);
        }
        break;

      case 'POST':
        // Create or update user, or create admin request
        const { action } = req.query;
        
        if (action === 'admin-request') {
          // Create admin request
          const requestData = req.body;
          const newRequest = createAdminRequest(requestData);
          res.status(200).json({ 
            message: 'Admin request submitted successfully', 
            request: newRequest 
          });
        } else {
          // Create or update regular user
          const userData: User = req.body;
          saveUser(userData);
          res.status(200).json({ message: 'User saved successfully', user: userData });
        }
        break;

      case 'PUT':
        // Update user or handle admin request approval/rejection
        const { action: putAction } = req.query;
        
        if (putAction === 'approve-admin') {
          const { requestId, approvedBy } = req.body;
          const success = approveAdminRequest(requestId, approvedBy);
          if (success) {
            res.status(200).json({ message: 'Admin request approved successfully' });
          } else {
            res.status(400).json({ message: 'Failed to approve admin request' });
          }
        } else if (putAction === 'reject-admin') {
          const { requestId, rejectedBy, reason } = req.body;
          const success = rejectAdminRequest(requestId, rejectedBy, reason);
          if (success) {
            res.status(200).json({ message: 'Admin request rejected successfully' });
          } else {
            res.status(400).json({ message: 'Failed to reject admin request' });
          }
        } else {
          // Update regular user
          const updateData: User = req.body;
          saveUser(updateData);
          res.status(200).json({ message: 'User updated successfully', user: updateData });
        }
        break;

      case 'DELETE':
        // Delete user
        const { email: deleteEmail } = req.query;
        if (deleteEmail) {
          deleteUser(deleteEmail as string);
          res.status(200).json({ message: 'User deleted successfully' });
        } else {
          res.status(400).json({ message: 'Email is required for deletion' });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
