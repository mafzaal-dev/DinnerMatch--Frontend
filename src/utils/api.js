import axios from 'axios';

// Define the base URL from the provided API details
// In a real project, this should be in process.env.NEXT_PUBLIC_API_URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://13.247.250.146/api/v1';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper to get tokens
const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
  return null;
};

const getRefreshToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refresh_token');
  }
  return null;
};

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response?.status === 401 && !originalRequest._retry && !originalRequest.url.includes('/auth/login')) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        // Call refresh endpoint
        const response = await axios.post(`${API_BASE_URL}/auth/refresh/`, {
          refresh: refreshToken,
        });

        const { access } = response.data.data;
        
        if (access) {
          localStorage.setItem('access_token', access);
          // Update the header for the original request
          originalRequest.headers.Authorization = `Bearer ${access}`;
          // Retry the original request
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, logout user
        if (typeof window !== 'undefined') {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user_data');
          // Redirect to login or dispatch an event
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    // Standard error handling
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    const status = error.response?.status;
    const data = error.response?.data;

    // Create a custom error object matching the previous structure if needed, 
    // or just reject with the axios error enhanced.
    const customError = new Error(message);
    customError.status = status;
    customError.data = data;
    customError.originalError = error;

    return Promise.reject(customError);
  }
);

export const api = {
  get: (endpoint, config = {}) => axiosInstance.get(endpoint, config),
  post: (endpoint, data, config = {}) => axiosInstance.post(endpoint, data, config),
  put: (endpoint, data, config = {}) => axiosInstance.put(endpoint, data, config),
  delete: (endpoint, config = {}) => axiosInstance.delete(endpoint, config),
  patch: (endpoint, data, config = {}) => axiosInstance.patch(endpoint, data, config),
};

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login/',
  REGISTER: '/auth/register/',
  REGISTER_WITH_QUIZ: '/register-with-quiz/',
  REFRESH: '/auth/refresh/',
  LOGOUT: '/auth/logout/', 
  AUTH_ME: '/auth/me/',
  
  // User
  USER_PROFILE: '/profile/me/',
  
  // Quiz
  QUIZ_QUESTIONS_LIST: '/quiz/questions/list',
  QUIZ_QUESTION_DETAIL: (id) => `/quiz/questions/list?question_id=${id}`,
  QUIZ_QUESTIONS_CREATE: '/quiz/questions/create',
  QUIZ_QUESTIONS_UPDATE: '/quiz/questions/update',
  QUIZ_QUESTIONS_DELETE: (id) => `/quiz/questions/delete/${id}`,
  QUIZ_QUESTION_ORDER: '/quiz/update-question-order',
  
  // Others
  DINNERS: '/dinners/',
  BOOKINGS: '/bookings/',
};

export default axiosInstance;
