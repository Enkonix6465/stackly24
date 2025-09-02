import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sidebar } from '@/components/ui/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Users,
  LogOut,
  User,
  Mail,
  Phone,
  Clock,
  Calendar,
  Menu,
  Shield,
  UserCheck,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { userAPI, adminRequestAPI } from '@/lib/apiClient';

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

interface AdminRequest {
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

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [adminRequests, setAdminRequests] = useState<AdminRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user || user.role !== 'admin') {
      alert('Access denied. Admin privileges required.');
      window.location.href = '/auth';
      return;
    }
    setCurrentUser(user);
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [usersData, requestsData] = await Promise.all([
        userAPI.getApproved(),
        adminRequestAPI.getAll()
      ]);
      setUsers(usersData);
      setAdminRequests(requestsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">{t('dashboard.adminRequests.status.pending')}</Badge>;
      case 'approved':
        return <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{t('dashboard.adminRequests.status.approved')}</Badge>;
      case 'rejected':
        return <Badge variant="destructive">{t('dashboard.adminRequests.status.rejected')}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = currentLanguage === 'ar' ? 'ar-SA' : currentLanguage === 'he' ? 'he-IL' : 'en-US';
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleString(locale, options);
  };



  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  const approvedUsers = users.filter(user => user.role === 'user' || (user.role === 'admin' && user.isApproved));
  const pendingAdminRequests = adminRequests.filter(req => req.status === 'pending');
  const approvedAdminRequests = adminRequests.filter(req => req.status === 'approved');
  const rejectedAdminRequests = adminRequests.filter(req => req.status === 'rejected');

  return (
    <>
      <Head>
        <title>{t('dashboard.main.pageTitle')} - ShopEase</title>
        <meta name="description" content={t('dashboard.main.pageDescription')} />
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
                {t('dashboard.main.brandName')}
              </h1>
            </div>

                            <div className="mr-4 hidden md:flex">
              <h1 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                {t('dashboard.main.brandName')}
              </h1>
            </div>

            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  {t('dashboard.main.welcome')}, {currentUser.username}
                </span>
                <LanguageSelector />
                <ModeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('nav.logout')}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('dashboard.main.pageHeader.title')}</h2>
                <p className="text-muted-foreground">
                  {t('dashboard.main.pageHeader.description')}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.main.stats.totalUsers')}</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{users.length}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.main.stats.pendingRequests')}</CardTitle>
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">
                      {adminRequests.filter(req => req.status === 'pending').length}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.main.stats.approvedRequests')}</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {adminRequests.filter(req => req.status === 'approved').length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.main.quickActions.title')}</CardTitle>
                  <CardDescription>
                    {t('dashboard.main.quickActions.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Button onClick={() => window.location.href = '/dashboard/admin-requests'}>
                      <Shield className="h-4 w-4 mr-2" />
                      {t('dashboard.main.quickActions.manageAdminRequests')}
                    </Button>
                    <Button onClick={() => window.location.href = '/dashboard/users'}>
                      <Users className="h-4 w-4 mr-2" />
                      {t('dashboard.main.quickActions.manageUsers')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Admin Requests */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.main.recentRequests.title')}</CardTitle>
                  <CardDescription>
                    {t('dashboard.main.recentRequests.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t('dashboard.main.recentRequests.headers.username')}</TableHead>
                            <TableHead>{t('dashboard.main.recentRequests.headers.email')}</TableHead>
                            <TableHead>{t('dashboard.main.recentRequests.headers.status')}</TableHead>
                            <TableHead>{t('dashboard.main.recentRequests.headers.date')}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {adminRequests.slice(0, 5).map((request) => (
                            <TableRow key={request.id}>
                              <TableCell>
                                <div className="flex items-center space-x-3">
                                  <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                                    <UserCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <div className="font-medium">{request.username}</div>
                                </div>
                              </TableCell>
                              <TableCell>{request.email}</TableCell>
                              <TableCell>{getStatusBadge(request.status)}</TableCell>
                              <TableCell>{formatDate(request.createdAt)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
