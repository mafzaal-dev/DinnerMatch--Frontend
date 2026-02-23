"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

/**
 * When an admin is logged in, redirect them from user routes to the admin dashboard.
 * Works with middleware (cookie) for full navigation; this handles first load before cookie is set.
 */
export default function AdminUserRouteGuard() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated || !isAdmin) return;
    if (pathname.startsWith('/admin')) return;

    router.replace('/admin/dashboard');
  }, [pathname, isAuthenticated, isAdmin, isLoading, router]);

  return null;
}
