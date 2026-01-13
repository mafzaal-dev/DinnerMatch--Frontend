"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { api, API_ENDPOINTS } from '@/utils/api';

/**
 * Custom hook for authentication management
 * Handles user authentication state and role-based access
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Load user from storage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem('user_data');
        const token = localStorage.getItem('access_token');
        
        if (token) {
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
          
          // Verify/Fetch fresh user data
          try {
            const response = await api.get(API_ENDPOINTS.AUTH_ME);
            if (response.success && response.data) {
              setUser(response.data);
              localStorage.setItem('user_data', JSON.stringify(response.data));
            }
          } catch (apiError) {
            console.error('Failed to fetch user profile:', apiError);
            // If token is invalid (401), the interceptor might have handled it or we should clear it
            // Interceptor handles 401 refresh logic.
          }
        }
      } catch (err) {
        console.error('Failed to load auth state:', err);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_data');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = useCallback(async (credentials, redirectPath = ROUTES.ACCOUNT) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
      
      if (response.success && response.data) {
        const { access, refresh, ...userData } = response.data;
        
        // Store tokens
        if (access) localStorage.setItem('access_token', access);
        if (refresh) localStorage.setItem('refresh_token', refresh);
        
        // Store user data
        localStorage.setItem('user_data', JSON.stringify(userData));
        setUser(userData);

        if (redirectPath) {
          router.push(redirectPath);
        }
        return response;
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login failed:', err);
      const message = err.response?.data?.detail || err.message || 'Login failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const register = useCallback(async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await api.post(API_ENDPOINTS.REGISTER, data);
      
      // Some APIs login automatically after register, others require manual login
      // We'll assume manual login or return success for now
      return response;
    } catch (err) {
      console.error('Registration failed:', err);
      const message = err.response?.data?.detail || 
                      (err.response?.data ? JSON.stringify(err.response.data) : err.message) || 
                      'Registration failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const registerWithQuiz = useCallback(async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await api.post(API_ENDPOINTS.REGISTER_WITH_QUIZ, data);
      
      return response;
    } catch (err) {
      console.error('Registration with quiz failed:', err);
      const message = err.response?.data?.detail || 
                      (err.response?.data ? JSON.stringify(err.response.data) : err.message) || 
                      'Registration failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
    setUser(null);
    router.push(ROUTES.LOGIN);
  }, [router]);

  const getProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get(API_ENDPOINTS.USER_PROFILE);
      
      if (response.success && response.data) {
          // Merge profile data with user data if needed, or return as is
          return response.data;
      }
      return null;
    } catch (err) {
      console.error('Get profile failed:', err);
      throw err;
    } finally {
        setIsLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.put(API_ENDPOINTS.USER_PROFILE, data);
      
      if (response.success && response.data) {
          // Update local state if needed
          return response.data;
      }
      throw new Error(response.message || 'Update failed');
    } catch (err) {
      console.error('Update profile failed:', err);
      const message = err.response?.data?.detail || err.message || 'Update failed';
      setError(message);
      throw err;
    } finally {
        setIsLoading(false);
    }
  }, []);

  const isAuthenticated = !!user;
  const isAdmin = user?.is_staff || user?.role === 'admin'; // Adjust based on actual user role field

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    isAdmin,
    login,
    register,
    logout,
    getProfile,
    updateProfile,
    registerWithQuiz,
  };
};
