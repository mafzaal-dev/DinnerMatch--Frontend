"use client";

import { AdminSidebar } from '../../components/admin';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { ROUTES } from '@/constants/routes';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAdmin, isLoading, isAuthenticated } = useAuth();

  // Protect admin routes
  useEffect(() => {
    // Skip protection for login page
    if (pathname === '/admin/login') return;

    if (!isLoading) {
      if (!isAuthenticated) {
         router.push('/admin/login');
      }
      //  else if (!isAdmin) {
      //    router.push('/');
      // }
    }
  }, [isLoading, isAuthenticated, isAdmin, router, pathname]);

  const handleLogout = () => {
    // Here you would typically clear authentication tokens/session
    console.log('Admin logged out');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
    router.push('/admin/login');
  };

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (isLoading) {
      return <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
      return null;
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <AdminSidebar onLogout={handleLogout} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
