"use client";

import { useState } from 'react';
import AdminLoginPage from '@/components/admin/AdminLoginPage';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AccessDeniedModal } from '@/components/modals';

export default function AdminLogin() {
  const router = useRouter();
  const { login, isLoading, error, isAuthenticated } = useAuth();
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.replace('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleAdminLogin = async (credentials) => {
    try {
      setShowAccessDenied(false);
      const response = await login(credentials, '/admin/dashboard');
      if (response?.success && response?.data?.is_admin === false) {
        setShowAccessDenied(true);
        return;
      }
      toast.success('Welcome back, Admin!');
    } catch (err) {
      toast.error(err.data?.message || err.message || 'Invalid credentials');
    }
  };

  const handleAccessDeniedRedirect = () => {
    setShowAccessDenied(false);
    router.push('/');
  };

  return (
    <>
      <AdminLoginPage onLogin={handleAdminLogin} isLoading={isLoading} error={error} />
      <AccessDeniedModal isOpen={showAccessDenied} onRedirect={handleAccessDeniedRedirect} />
    </>
  );
}
