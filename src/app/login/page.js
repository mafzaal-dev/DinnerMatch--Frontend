"use client";

import LoginPage from '../../../components/pages/LoginPage';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';

export default function Login() {
  const router = useRouter();
  const { login, isLoading, error } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      await login(credentials, '/');
      toast.success('Welcome back!');
    } catch (err) {
      console.error('Login error:', err);
      toast.error(err.response?.data?.detail || 'Login failed. Please check your credentials.');
    }
  };

  const handleSignUp = () => {
    // Determine where sign up is. Assuming it's the home page quiz flow for now
    router.push('/signup');
  };

  return <LoginPage onLogin={handleLogin} onSignUp={handleSignUp} isLoading={isLoading} error={error} />;
}
