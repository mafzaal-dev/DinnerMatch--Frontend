"use client";

import AdminLoginPage from '@/components/admin/AdminLoginPage';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();

  const handleAdminLogin = ({ email, password }) => {
    console.log('Admin login attempt:', { email, password });
    // Here you would typically call an API to authenticate the admin
    // For now, we'll simulate a successful login and redirect
    if (email && password) {
      // In a real app, you would validate credentials against your backend
      // For demo purposes, we'll just redirect to the dashboard
      router.push('/admin/dashboard');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return <AdminLoginPage onLogin={handleAdminLogin} />;
}

