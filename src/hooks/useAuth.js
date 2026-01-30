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
        
        if (token && storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsLoading(false);
          } catch (parseError) {
            console.error('Failed to parse stored user:', parseError);
            localStorage.removeItem('user_data');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Failed to load auth state:', err);
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
        
        if (!access || !refresh) {
          throw new Error('Invalid response: missing tokens');
        }
        
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        localStorage.setItem('user_data', JSON.stringify(userData));
        
        setUser(userData);
        setIsLoading(false);

        if (redirectPath) {
          setTimeout(() => router.push(redirectPath), 100);
        }
        
        return response;
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login failed:', err);
      const message = err.data?.message || err.message || 'Login failed';
      setError(message);
      setIsLoading(false);
      throw err;
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
          return response.data;
      }
      return null;
    } catch (err) {
      console.error('Get profile failed:', err);
      // For new users, profile might not exist yet - that's okay
      if (err.status === 404 || err.response?.status === 404) {
        console.log('Profile not found (new user) - returning null');
        return null;
      }
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
