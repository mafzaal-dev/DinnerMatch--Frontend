"use client";

import AdminLoginPage from '@/components/admin/AdminLoginPage';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';

export default function AdminLogin() {
  const { login, isLoading, error } = useAuth();

  const handleAdminLogin = async (credentials) => {
    try {
      await login(credentials, '/admin/dashboard');
      toast.success('Welcome back, Admin!');
    } catch (err) {
      console.error('Admin login failed:', err);
      // Error is handled in useAuth, but showing toast here as well
      // toast.error(err.response?.data?.detail || 'Invalid credentials');
    }
  };

  return <AdminLoginPage onLogin={handleAdminLogin} isLoading={isLoading} error={error} />;
}
