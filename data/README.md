# JSON Data Storage System

This directory contains the local JSON data storage for the ShopEase application.

## File Structure

- `app-data.json` - Main data file containing all application data
- `README.md` - This documentation file

## Data Structure

The `app-data.json` file contains the following structure:

```json
{
  "users": [
    {
      "role": "admin|user",
      "username": "string",
      "email": "string",
      "mobile": "string",
      "password": "string",
      "loginTime": "ISO timestamp",
      "logoutTime": "ISO timestamp",
      "lastActive": "ISO timestamp",
      "createdAt": "ISO timestamp",
      "updatedAt": "ISO timestamp"
    }
  ],
  "currentUser": "User object or null",
  "lastUpdated": "ISO timestamp"
}
```

## Features

### ✅ **Persistent Storage**

- All data is stored in a local JSON file
- Data persists between application restarts
- No data loss when browser is closed

### ✅ **Automatic Timestamps**

- `createdAt` - When user account was created
- `updatedAt` - When user data was last modified
- `loginTime` - When user last logged in
- `logoutTime` - When user last logged out
- `lastActive` - User's most recent activity

### ✅ **Data Integrity**

- Automatic data validation
- Error handling for file operations
- Backup and recovery mechanisms

### ✅ **User Management**

- Create, read, update, delete users
- Role-based access control (admin/user)
- Authentication and session management

## API Endpoints

### Users API (`/api/users`)

- `GET /api/users` - Get all users
- `GET /api/users?email=user@example.com` - Get specific user
- `POST /api/users` - Create/update user
- `PUT /api/users` - Update user
- `DELETE /api/users?email=user@example.com` - Delete user

### Authentication API (`/api/auth`)

- `POST /api/auth` - Login user
- `GET /api/auth` - Get current user session
- `DELETE /api/auth` - Logout user

## Usage Examples

### Creating a New User

```typescript
import { userAPI, createNewUser } from "@/lib/apiClient";

const newUser = createNewUser({
  role: "user",
  username: "john_doe",
  email: "john@example.com",
  mobile: "1234567890",
  password: "securepass",
});

await userAPI.save(newUser);
```

### Authenticating a User

```typescript
import { authAPI } from "@/lib/apiClient";

const result = await authAPI.login("john@example.com", "securepass");
if (result.user) {
  // User logged in successfully
  console.log("Welcome,", result.user.username);
}
```

### Getting All Users

```typescript
import { userAPI } from "@/lib/apiClient";

const users = await userAPI.getAll();
console.log("Total users:", users.length);
```

## Data File Location

The data file is automatically created at:

```
project-root/
├── data/
│   ├── app-data.json    # Main data file
│   └── README.md        # This file
├── src/
├── package.json
└── ...
```

## Security Notes

⚠️ **Important Security Considerations:**

1. **Password Storage**: Passwords are stored in plain text for demo purposes

   - In production, use bcrypt or similar hashing
   - Never store plain text passwords

2. **File Permissions**: Ensure the data directory has appropriate permissions

   - Read/write access for the application
   - Restricted access for other users

3. **Data Backup**: Regularly backup the `app-data.json` file
   - Data loss can occur if the file is corrupted
   - Keep multiple backup copies

## Migration from localStorage

If you're migrating from localStorage:

1. **Export existing data** from localStorage
2. **Format data** according to the new structure
3. **Import data** using the API endpoints
4. **Verify data integrity** after migration

## Troubleshooting

### Common Issues

1. **File not found**: Ensure the `data` directory exists
2. **Permission denied**: Check file and directory permissions
3. **Invalid JSON**: Validate JSON syntax in the data file
4. **Data corruption**: Restore from backup if available

### Data Recovery

If the data file becomes corrupted:

1. **Stop the application**
2. **Restore from backup** if available
3. **Delete corrupted file** and restart (will create new file)
4. **Re-import data** if you have a backup

## Development

### Adding New Fields

To add new fields to the data structure:

1. **Update interfaces** in `src/lib/dataService.ts`
2. **Modify API endpoints** as needed
3. **Update client code** to handle new fields
4. **Test thoroughly** before deployment

### Data Validation

The system includes basic validation:

- Required fields checking
- Email format validation
- Role validation (admin/user only)
- Timestamp validation

## Support

For issues or questions about the data storage system:

1. Check this README first
2. Review the API documentation
3. Check the console for error messages
4. Verify file permissions and paths
