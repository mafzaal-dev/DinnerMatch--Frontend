"use client";

import LoginPage from '../../../components/pages/LoginPage';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (credentials) => {
    // Handle login logic here
    console.log('Login:', credentials);
    // Redirect to account or home after login
    router.push('/account');
  };

  const handleSignUp = () => {
    router.push('/');
  };

  return <LoginPage onLogin={handleLogin} onSignUp={handleSignUp} />;
}

