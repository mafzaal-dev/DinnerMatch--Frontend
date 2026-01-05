"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/routes';

/**
 * ProtectedRoute Component
 * Wraps routes that require authentication
 */
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push(`${ROUTES.LOGIN}?redirect=${encodeURIComponent(window.location.pathname)}`);
      } else if (requireAdmin && !isAdmin) {
        router.push(ROUTES.HOME);
      }
    }
  }, [isAuthenticated, isAdmin, isLoading, requireAdmin, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080814] flex items-center justify-center">
        <div className="text-[#F5F5F5]">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated || (requireAdmin && !isAdmin)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

