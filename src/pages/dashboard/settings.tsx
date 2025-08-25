import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sidebar } from '@/components/ui/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/theme/ModeToggle';
import {
  LogOut,
  User,
  Mail,
  Phone,
  Shield,
  Calendar,
  Clock,
  Edit,
  Save,
  X,
  Menu,
  Settings as SettingsIcon,
  Key,
  Eye,
  EyeOff
} from 'lucide-react';

interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  loginTime?: string;
  logoutTime?: string;
  lastActive?: string;
  isApproved?: boolean;
  approvalDate?: string;
  approvedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function SettingsPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [editForm, setEditForm] = useState({
    username: '',
    email: '',
    mobile: '',
    password: ''
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user || user.role !== 'admin') {
      alert('Access denied. Admin privileges required.');
      window.location.href = '/auth';
      return;
    }
    setCurrentUser(user);
    setEditForm({
      username: user.username,
      email: user.email,
      mobile: user.mobile,
      password: user.password
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditForm({
      username: currentUser?.username || '',
      email: currentUser?.email || '',
      mobile: currentUser?.mobile || '',
      password: currentUser?.password || ''
    });
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!currentUser) return;

    try {
      // Update user profile
      const updatedUser = {
        ...currentUser,
        ...editForm,
        updatedAt: new Date().toISOString()
      };

      // Update in localStorage
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);

      // Update in the main data store via API
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
        setIsEditing(false);
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Settings - ShopEase Admin</title>
        <meta name="description" content="Admin settings and profile management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Top Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="mr-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex flex-col h-full">
                    <Sidebar currentUser={currentUser} onLogout={handleLogout} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="mr-4 flex md:hidden">
              <h1 className="text-lg font-bold text-purple-700 dark:text-purple-400">
                ShopEase Admin
              </h1>
            </div>

            <div className="mr-4 hidden md:flex">
              <h1 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                ShopEase Admin
              </h1>
            </div>

            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  Welcome, {currentUser.username}
                </span>
                <ModeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex md:w-64 md:flex-col">
            <div className="flex flex-col flex-grow pt-5 bg-muted/30 overflow-y-auto border-r">
              <Sidebar currentUser={currentUser} onLogout={handleLogout} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6">
            <div className="space-y-6">
              {/* Page Header */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Settings & Profile</h2>
                <p className="text-muted-foreground">
                  Manage your admin profile and application settings.
                </p>
              </div>

              {/* Profile Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <User className="h-5 w-5" />
                        <span>Admin Profile</span>
                      </CardTitle>
                      <CardDescription>
                        Your personal information and account details
                      </CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button onClick={handleEdit} className="flex items-center space-x-2">
                        <Edit className="h-4 w-4" />
                        Edit Profile
                      </Button>
                    ) : (
                      <div className="flex space-x-2">
                        <Button onClick={handleSave} className="flex items-center space-x-2">
                          <Save className="h-4 w-4" />
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={handleCancel} className="flex items-center space-x-2">
                          <X className="h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture and Basic Info */}
                  <div className="flex items-start space-x-6">
                    <div className="h-20 w-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <Shield className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          {isEditing ? (
                            <Input
                              id="username"
                              value={editForm.username}
                              onChange={(e) => setEditForm(prev => ({ ...prev, username: e.target.value }))}
                              placeholder="Enter username"
                            />
                          ) : (
                            <div className="text-sm font-medium">{currentUser.username}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          {isEditing ? (
                            <Input
                              id="email"
                              type="email"
                              value={editForm.email}
                              onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="Enter email"
                            />
                          ) : (
                            <div className="text-sm font-medium">{currentUser.email}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number</Label>
                          {isEditing ? (
                            <Input
                              id="mobile"
                              type="tel"
                              value={editForm.mobile}
                              onChange={(e) => setEditForm(prev => ({ ...prev, mobile: e.target.value }))}
                              placeholder="Enter mobile number"
                            />
                          ) : (
                            <div className="text-sm font-medium">{currentUser.mobile}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          {isEditing ? (
                            <div className="relative">
                              <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={editForm.password}
                                onChange={(e) => setEditForm(prev => ({ ...prev, password: e.target.value }))}
                                placeholder="Enter password"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          ) : (
                            <div className="text-sm font-medium">••••••••</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Account Status */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Account Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <span className="text-sm font-medium">Role</span>
                        <Badge variant="default" className="bg-green-600">
                          {currentUser.role}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <span className="text-sm font-medium">Status</span>
                        <Badge variant="default" className="bg-blue-600">
                          {currentUser.isApproved ? 'Approved' : 'Pending'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <span className="text-sm font-medium">Approved By</span>
                        <span className="text-sm">{currentUser.approvedBy || 'System'}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <span className="text-sm font-medium">Approval Date</span>
                        <span className="text-sm">{formatDate(currentUser.approvalDate)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Activity Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Activity Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">Account Created</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.createdAt)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">Last Updated</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.updatedAt)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">Last Login</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.loginTime)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">Last Active</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.lastActive)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <SettingsIcon className="h-5 w-5" />
                    <span>Application Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Configure application preferences and system settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">Dark Mode</div>
                      <div className="text-sm text-gray-500">Toggle between light and dark themes</div>
                    </div>
                    <ModeToggle />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">Data Storage</div>
                      <div className="text-sm text-gray-500">Local JSON file storage system</div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">Admin Approval System</div>
                      <div className="text-sm text-gray-500">Requires approval for new admin accounts</div>
                    </div>
                    <Badge variant="default" className="bg-green-600">Enabled</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
