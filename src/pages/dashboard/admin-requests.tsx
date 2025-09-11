import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  CheckCircle,
  XCircle,
  AlertCircle,
  Shield,
  UserCheck
} from 'lucide-react';
import { adminRequestAPI } from '@/lib/apiClient';
import { AdminRequest } from '@/lib/types';

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
}

export default function AdminRequestsPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [adminRequests, setAdminRequests] = useState<AdminRequest[]>([]);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<AdminRequest | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [loading, setLoading] = useState(true);
  const { t, currentLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user || user.role !== 'admin') {
      alert(t('dashboard.adminRequests.messages.accessDenied'));
      window.location.href = '/auth';
      return;
    }
    setCurrentUser(user);
    loadAdminRequests();
  }, [t]);

  const loadAdminRequests = async () => {
    try {
      setLoading(true);
      const requests = await adminRequestAPI.getAll();
      setAdminRequests(requests);
    } catch (error) {
      console.error('Error loading admin requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const handleApprove = async (request: AdminRequest) => {
    if (!currentUser) return;
    
    try {
      await adminRequestAPI.approve(request.id, currentUser.username);
      alert(t('dashboard.adminRequests.messages.requestApproved'));
      loadAdminRequests(); // Reload the list
    } catch (error) {
      console.error('Error approving request:', error);
      alert(t('dashboard.adminRequests.messages.approveFailed'));
    }
  };

  const handleReject = async () => {
    if (!selectedRequest || !currentUser) return;
    
    try {
      await adminRequestAPI.reject(selectedRequest.id, currentUser.username, rejectionReason);
      alert(t('dashboard.adminRequests.messages.requestRejected'));
      setIsRejectDialogOpen(false);
      setSelectedRequest(null);
      setRejectionReason('');
      loadAdminRequests(); // Reload the list
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert(t('dashboard.adminRequests.messages.rejectFailed'));
    }
  };

  const openRejectDialog = (request: AdminRequest) => {
    setSelectedRequest(request);
    setIsRejectDialogOpen(true);
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

  const translateRole = (role: string) => {
    return t(`roles.${role.toLowerCase()}`) || role;
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
        <title>{t('dashboard.adminRequests.pageTitle')} - ShopEase Admin</title>
        <meta name="description" content={t('dashboard.adminRequests.pageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

              <div className="min-h-screen bg-background">
        {/* Top Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            {/* Logo */}
            <div className="flex items-center mr-4">
              <Image
                src="/logo-stackly.png"
                alt={t('common.ecommerceLogo')}
                className="w-28 h-8"
                height={32}
                width={112}
              />
            </div>

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

                            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  {t('dashboard.adminRequests.welcome')}, {currentUser.username}
                </span>
                <ModeToggle />
                <LanguageSelector />
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
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('dashboard.adminRequests.pageHeader.title')}</h2>
                <p className="text-muted-foreground">
                  {t('dashboard.adminRequests.pageHeader.description')}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.adminRequests.stats.totalRequests')}</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{adminRequests.length}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.adminRequests.stats.pending')}</CardTitle>
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
                    <CardTitle className="text-sm font-medium">{t('dashboard.adminRequests.stats.approved')}</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {adminRequests.filter(req => req.status === 'approved').length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Admin Requests Table */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.adminRequests.table.title')}</CardTitle>
                  <CardDescription>
                    {t('dashboard.adminRequests.table.description')}
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
                            <TableHead>{t('dashboard.adminRequests.table.headers.applicant')}</TableHead>
                            <TableHead className="hidden md:table-cell">{t('dashboard.adminRequests.table.headers.role')}</TableHead>
                            <TableHead className="hidden md:table-cell">{t('dashboard.adminRequests.table.headers.contact')}</TableHead>
                            <TableHead className="hidden lg:table-cell">{t('dashboard.adminRequests.table.headers.requestedOn')}</TableHead>
                            <TableHead>{t('dashboard.adminRequests.table.headers.status')}</TableHead>
                            <TableHead className="hidden xl:table-cell">{t('dashboard.adminRequests.table.headers.actions')}</TableHead>
                            <TableHead>{t('dashboard.adminRequests.table.headers.actions')}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {adminRequests.map((request) => (
                            <TableRow key={request.id}>
                              <TableCell>
                                                                  <div className={`flex items-center ${isRTL ? "space-x-reverse space-x-3" : "space-x-3"}`}>
                                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                                      <UserCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                      <div className="font-medium">{request.username}</div>
                                      <div className="text-sm text-muted-foreground md:hidden">
                                        {request.email}
                                      </div>
                                    </div>
                                  </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="text-sm font-medium">
                                  {translateRole(request.role)}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="space-y-1">
                                  <div className={`flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"} text-sm`}>
                                    <Mail className="h-3 w-3 text-muted-foreground" />
                                    <span>{request.email}</span>
                                  </div>
                                  <div className={`flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"} text-sm text-muted-foreground`}>
                                    <Phone className="h-3 w-3" />
                                    <span>{request.mobile}</span>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">
                                <div className={`flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"} text-sm`}>
                                  <Calendar className="h-3 w-3 text-muted-foreground" />
                                  <span>{formatDate(request.createdAt)}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                {getStatusBadge(request.status)}
                              </TableCell>
                              <TableCell className="hidden xl:table-cell">
                                {request.status === 'pending' ? (
                                  <div className={`flex ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"}`}>
                                    <Button
                                      size="sm"
                                      onClick={() => handleApprove(request)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <CheckCircle className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                                      {t('dashboard.adminRequests.actions.approve')}
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => openRejectDialog(request)}
                                    >
                                      <XCircle className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                                      {t('dashboard.adminRequests.actions.reject')}
                                    </Button>
                                  </div>
                                ) : request.status === 'approved' ? (
                                  <div className="text-sm text-green-600 dark:text-green-400">
                                    {t('dashboard.adminRequests.status.approvedOn')} {request.approvalDate ? formatDate(request.approvalDate) : t('common.notAvailable')}
                                  </div>
                                ) : (
                                  <div className="text-sm text-red-600 dark:text-red-400">
                                    {t('dashboard.adminRequests.status.rejectedOn')} {request.approvalDate ? formatDate(request.approvalDate) : t('common.notAvailable')}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell>
                                {request.status === 'pending' ? (
                                  <div className={`flex ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"}`}>
                                    <Button
                                      size="sm"
                                      onClick={() => handleApprove(request)}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <CheckCircle className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => openRejectDialog(request)}
                                    >
                                      <XCircle className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <span className="text-sm text-muted-foreground">
                                    {request.status === 'approved' ? t('dashboard.adminRequests.status.approved') : t('dashboard.adminRequests.status.rejected')}
                                  </span>
                                )}
                              </TableCell>
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

        {/* Reject Dialog */}
        <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('dashboard.adminRequests.rejectDialog.title')}</DialogTitle>
              <DialogDescription>
                {t('dashboard.adminRequests.rejectDialog.description')}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rejectionReason">{t('dashboard.adminRequests.rejectDialog.reasonLabel')}</Label>
                <Input
                  id="rejectionReason"
                  placeholder={t('dashboard.adminRequests.rejectDialog.reasonPlaceholder')}
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  required
                />
              </div>
              <div className={`flex justify-end ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"}`}>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsRejectDialogOpen(false);
                    setSelectedRequest(null);
                    setRejectionReason('');
                  }}
                >
                  {t('common.cancel')}
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleReject}
                  disabled={!rejectionReason.trim()}
                >
                  {t('dashboard.adminRequests.rejectDialog.rejectButton')}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
