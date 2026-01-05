"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES, PROTECTED_ROUTES, ADMIN_ROUTES } from '@/constants/routes';

/**
 * Custom hook for authentication management
 * Handles user authentication state and role-based access
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session/token
    const checkAuth = async () => {
      try {
        // TODO: Implement actual auth check with API
        const token = localStorage.getItem('auth_token');
        if (token) {
          // Verify token and get user data
          // const userData = await verifyToken(token);
          // setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      setIsLoading(true);
      // TODO: Implement actual login API call
      // const response = await api.login(credentials);
      // localStorage.setItem('auth_token', response.token);
      // setUser(response.user);
      // router.push(ROUTES.ACCOUNT);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    setUser(null);
    router.push(ROUTES.HOME);
  }, [router]);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  const requireAuth = useCallback((path) => {
    if (!isAuthenticated) {
      router.push(`${ROUTES.LOGIN}?redirect=${encodeURIComponent(path)}`);
      return false;
    }
    return true;
  }, [isAuthenticated, router]);

  const requireAdmin = useCallback((path) => {
    if (!isAuthenticated || !isAdmin) {
      router.push(ROUTES.HOME);
      return false;
    }
    return true;
  }, [isAuthenticated, isAdmin, router]);

  return {
    user,
    isLoading,
    isAuthenticated,
    isAdmin,
    login,
    logout,
    requireAuth,
    requireAdmin,
  };
};

