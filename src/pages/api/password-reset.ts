import { NextApiRequest, NextApiResponse } from 'next';
import { 
  resetUserPassword,
  getUserByEmail
} from '@/lib/dataService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'POST':
        const { action, email, newPassword } = req.body;
        
        if (action === 'reset') {
          // Reset password directly
          if (!email || !newPassword) {
            return res.status(400).json({ message: 'Email and new password are required' });
          }

          if (newPassword.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
          }

          // Check if user exists
          const user = getUserByEmail(email);
          if (!user) {
            return res.status(404).json({ message: 'User not found with this email' });
          }

          // Reset the password
          if (resetUserPassword(email, newPassword)) {
            res.status(200).json({ message: 'Password reset successfully' });
          } else {
            res.status(500).json({ message: 'Failed to reset password' });
          }
        } else {
          res.status(400).json({ message: 'Invalid action. Use "reset"' });
        }
        break;

      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Password Reset API Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
