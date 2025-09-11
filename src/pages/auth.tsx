import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { adminRequestAPI, createNewAdminRequest } from '@/lib/apiClient';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageSelector } from '@/components/LanguageSelector';

interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<User>({
    role: '',
    username: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { t, currentLanguage, isRTL } = useLanguage();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.role === 'admin') {
        // Submit admin request instead of creating user directly
        const adminRequest = createNewAdminRequest({
          role: formData.role,
          username: formData.username,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password
        });

        await adminRequestAPI.submit(adminRequest);
        alert(t('auth.adminRequestSuccess'));
        setIsLogin(true);
        setFormData({ role: '', username: '', email: '', mobile: '', password: '' });
      } else {
        // Regular user registration - create user directly
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            loginTime: new Date().toISOString(),
            logoutTime: '-',
            lastActive: new Date().toISOString()
          }),
        });

        if (response.ok) {
          alert(t('auth.registrationSuccess'));
          setIsLogin(true);
          setFormData({ role: '', username: '', email: '', mobile: '', password: '' });
        } else {
          const error = await response.json();
          alert(error.message || t('auth.registrationFailed'));
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(t('auth.registrationFailed') + ' ' + t('auth.tryAgain'));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        
        if (result.user.role === 'admin') {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/home1';
        }
      } else {
        const error = await response.json();
        if (error.message === 'Invalid email or password') {
          alert(t('auth.invalidCredentials'));
        } else {
          alert(error.message || t('auth.loginFailed'));
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(t('auth.loginFailed') + ' ' + t('auth.tryAgain'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{t('auth.title')}</title>
        <meta name="description" content={t('auth.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        {/* Logo */}
        <div className="absolute top-4 left-4 z-10">
          <Image
            src="/logo-stackly.png"
            alt={t('common.ecommerceLogo')}
            className="w-28 h-8"
            height={32}
            width={112}
          />
        </div>

        {/* Language Selector */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector />
        </div>
        
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {isLogin ? t('auth.welcomeBack') : t('auth.createAccount')}
            </CardTitle>
            {isLogin && (
              <CardDescription>
                {t('auth.signInToAccount')}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {isLogin ? (
              // Login Form
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">{t('auth.email')}</Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">{t('auth.password')}</Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                  disabled={loading}
                >
                  {loading ? t('auth.signingIn') : t('auth.signIn')}
                </Button>
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('auth.dontHaveAccount')}{' '}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline cursor-pointer"
                    >
                      {t('auth.signUpNow')}
                    </button>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 block"
                  >
                    {t('auth.resetPassword')}
                  </Link>
                </div>
              </form>
            ) : (
              // Registration Form
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="role">{t('auth.role')}</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('auth.selectRole')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">{t('auth.user')}</SelectItem>
                      <SelectItem value="admin">{t('auth.admin')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">{t('auth.username')}</Label>
                  <Input
                    id="username"
                    placeholder={t('auth.usernamePlaceholder')}
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('auth.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">{t('auth.mobile')}</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder={t('auth.mobilePlaceholder')}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                
                {formData.role === 'admin' && (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>{t('common.note')}:</strong> {t('auth.adminNote')}
                    </p>
                  </div>
                )}
                
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                  disabled={loading}
                >
                  {loading ? t('auth.creatingAccount') : t('auth.createAccountButton')}
                </Button>
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('auth.alreadyHaveAccount')}{' '}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline cursor-pointer"
                    >
                      {t('auth.signIn')}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
