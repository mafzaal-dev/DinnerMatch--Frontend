/**
 * Storage Utilities
 * Wrapper for localStorage with error handling and type safety
 */

const isClient = typeof window !== 'undefined';

export const storage = {
  get: (key, defaultValue = null) => {
    if (!isClient) return defaultValue;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  set: (key, value) => {
    if (!isClient) return false;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
      return false;
    }
  },

  remove: (key) => {
    if (!isClient) return false;
    
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
      return false;
    }
  },

  clear: () => {
    if (!isClient) return false;
    
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },
};

// Storage keys constants
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  QUIZ_DATA: 'quiz_data',
  PREFERENCES: 'preferences',
  THEME: 'theme',
};

