"use client";

import ForgotPasswordPage from '../../../components/pages/ForgotPasswordPage';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const router = useRouter();

  const handleSubmit = (data) => {
    // Handle forgot password logic here
    console.log('Reset password requested for:', data.email);
    // Show success message
    alert('Password reset link has been sent to your email!');
    router.push('/login');
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
    />
  );
}

