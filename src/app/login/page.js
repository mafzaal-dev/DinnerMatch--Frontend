"use client";

import { useState, useEffect } from 'react';
import LoginPage from '../../../components/pages/LoginPage';
import { AccessDeniedModal } from '../../../components/modals';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/routes';
import { toast } from 'react-hot-toast';

export default function Login() {
  const router = useRouter();
  const { login, isLoading, error, isAuthenticated } = useAuth();
  const [showAdminLoginRequired, setShowAdminLoginRequired] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(ROUTES.DINNER_DETAILS);
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogin = async (credentials) => {
    try {
      setShowAdminLoginRequired(false);
      const response = await login(credentials);
      if (response?.success && response?.data?.is_admin === true) {
        setShowAdminLoginRequired(true);
        return;
      }
      toast.success('Welcome back!');
    } catch (err) {
      console.error('Login error:', err);
      toast.error(err.response?.data?.detail || err.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  const handleGoToAdminLogin = () => {
    setShowAdminLoginRequired(false);
    router.push('/admin/login');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <>
      <LoginPage onLogin={handleLogin} onSignUp={handleSignUp} isLoading={isLoading} error={error} />
      <AccessDeniedModal
        isOpen={showAdminLoginRequired}
        onRedirect={handleGoToAdminLogin}
        title="Admin account"
        message="You are an admin user. Please sign in through the Admin Login page."
        buttonText="Go to Admin Login"
      />
    </>
  );
}
