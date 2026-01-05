/**
 * API Utilities
 * Centralized API client with error handling and authentication
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

const buildHeaders = (customHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  const token = getAuthToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');

  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    throw new ApiError(
      data.message || `HTTP error! status: ${response.status}`,
      response.status,
      data
    );
  }

  return data;
};

export const api = {
  get: async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: buildHeaders(options.headers),
      ...options,
    });

    return handleResponse(response);
  },

  post: async (endpoint, data, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: buildHeaders(options.headers),
      body: JSON.stringify(data),
      ...options,
    });

    return handleResponse(response);
  },

  put: async (endpoint, data, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: buildHeaders(options.headers),
      body: JSON.stringify(data),
      ...options,
    });

    return handleResponse(response);
  },

  delete: async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: buildHeaders(options.headers),
      ...options,
    });

    return handleResponse(response);
  },
};

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  
  // User
  USER_PROFILE: '/user/profile',
  USER_PREFERENCES: '/user/preferences',
  
  // Dinners
  DINNERS: '/dinners',
  DINNER_DETAILS: (id) => `/dinners/${id}`,
  BOOK_DINNER: '/dinners/book',
  
  // Admin
  ADMIN_USERS: '/admin/users',
  ADMIN_DINNERS: '/admin/dinners',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_STATS: '/admin/stats',
};

