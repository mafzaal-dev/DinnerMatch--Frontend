"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { api, API_ENDPOINTS } from '@/utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
          } catch (parseError) {
            console.error('Failed to parse stored user:', parseError);
            localStorage.removeItem('user_data');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
          }
        }
      } catch (err) {
        console.error('Failed to load auth state:', err);
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
        
        if (!access || !refresh) {
          throw new Error('Invalid response: missing tokens');
        }
        
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
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
      const message = err.data?.message || err.message || 'Login failed';
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

  const logout = useCallback((redirectPath = ROUTES.LOGIN) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
    setUser(null);
    router.push('/');
  }, [router]);

  const getProfile = useCallback(async () => {
    try {
      // Don't set global loading state for background profile fetches if you don't want to block UI
      // But keeping it consistent with original hook for now, maybe consider separate loading state
      // or just rely on local component loading state if preferred.
      // For now, let's NOT set global isLoading to true for getProfile to avoid UI flickering 
      // if it's called often, unless it's critical. 
      // The original hook did set isLoading(true). Let's keep it but be aware.
      setIsLoading(true);
      setError(null);
      const response = await api.get(API_ENDPOINTS.USER_PROFILE);
      
      if (response.success && response.data) {
          return response.data;
      }
      return null;
    } catch (err) {
      console.error('Get profile failed:', err);
      if (err.status === 404 || err.response?.status === 404) {
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

  const value = {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    isAdmin: user?.is_staff || user?.role === 'admin',
    login,
    register,
    logout,
    getProfile,
    updateProfile,
    registerWithQuiz,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
