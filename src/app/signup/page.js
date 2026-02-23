"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/routes';
import { toast } from 'react-hot-toast';
import SignupPage from '../../../components/pages/SignupPage';

export default function Signup() {
  const router = useRouter();
  const { register, isLoading, error, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(ROUTES.DINNER_DETAILS);
    }
  }, [isAuthenticated, isLoading, router]);

  const handleRegister = async (formData) => {
    try {
      console.log({formData});
      
      await register(formData);
      toast.success('Account created successfully!');
      // After registration, you might want to auto-login or redirect to login
      // For now, assuming register hook handles or we redirect to login
      router.push('/login');
    } catch (err) {
      console.error('Registration error:', err);
      // Error is handled by useAuth state and passed to component, 
      // but we also show a toast for better visibility
      toast.error(err.response?.data?.detail || 'Registration failed. Please try again.');
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return (
    <SignupPage 
      onRegister={handleRegister} 
      onLogin={handleLoginRedirect} 
      isLoading={isLoading} 
      error={error} 
    />
  );
}

