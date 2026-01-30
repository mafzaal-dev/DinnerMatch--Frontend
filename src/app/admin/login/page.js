"use client";

import AdminLoginPage from '@/components/admin/AdminLoginPage';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLogin() {
  const { login, isLoading, error, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.replace('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleAdminLogin = async (credentials) => {
    try {
      await login(credentials, '/admin/dashboard');
      toast.success('Welcome back, Admin!');
    } catch (err) {
      toast.error(err.data?.message || err.message || 'Invalid credentials');
    }
  };

  return <AdminLoginPage onLogin={handleAdminLogin} isLoading={isLoading} error={error} />;
}
