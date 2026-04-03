"use client";

import { useState } from 'react';
import ForgotPasswordPage from '../../../components/pages/ForgotPasswordPage';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { api, API_ENDPOINTS } from '@/utils/api';

export default function ForgotPassword() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await api.post(API_ENDPOINTS.FORGOT_PASSWORD, {
        email: data.email,
      });
      const msg =
        (response && typeof response.message === 'string' && response.message) ||
        'If an account exists for that email, you will receive reset instructions shortly.';
      toast.success(msg);
      router.push('/login');
    } catch (err) {
      const message =
        err.data?.detail ||
        err.data?.message ||
        err.message ||
        'Could not send reset email. Please try again.';
      toast.error(typeof message === 'string' ? message : 'Could not send reset email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <ForgotPasswordPage
      onSubmit={handleSubmit}
      onSignIn={handleSignIn}
      onBack={handleBack}
      isSubmitting={isSubmitting}
    />
  );
}

