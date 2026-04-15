import axios from "axios";

// Define the base URL from the provided API details
// In a real project, this should be in process.env.NEXT_PUBLIC_API_URL
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend.dinnermatch.co.za/api/v1";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to get tokens
const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
  return null;
};

const getRefreshToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("refresh_token");
  }
  return null;
};

/** These endpoints must not send a stored JWT (stale tokens break password reset / login / register). */
const isPublicAuthPath = (url) => {
  if (!url || typeof url !== "string") return false;
  return (
    url.includes("/auth/login") ||
    url.includes("/auth/register") ||
    url.includes("/register-with-quiz") ||
    url.includes("/auth/forgot-password") ||
    url.includes("/auth/reset-password/")
  );
};

const clearAuthorizationHeader = (config) => {
  if (!config.headers) return;
  if (typeof config.headers.delete === "function") {
    config.headers.delete("Authorization");
  } else {
    delete config.headers.Authorization;
  }
};

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const path = config.url || "";
    if (isPublicAuthPath(path)) {
      clearAuthorizationHeader(config);
      return config;
    }
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/login") &&
      !originalRequest.url.includes("/register") &&
      !originalRequest.url.includes("/auth/forgot-password") &&
      !originalRequest.url.includes("/auth/reset-password/")
    ) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken();
      const isAuthOrProfileCall =
        originalRequest.url.includes("/auth/me") ||
        originalRequest.url.includes("/profile/me");

      // If no refresh token available
      if (!refreshToken) {
        // For auth/profile calls, just fail silently (user might be newly registered)
        if (isAuthOrProfileCall) {
          return Promise.reject(
            new Error("Unauthorized - new user profile not yet created"),
          );
        }

        // For other calls, fail without auto-redirecting (let the component handle it)
        return Promise.reject(new Error("No refresh token available"));
      }

      // Try to refresh the token
      try {
        // Call refresh endpoint
        const response = await axios.post(`${API_BASE_URL}/auth/refresh/`, {
          refresh: refreshToken,
        });

        const { access } = response.data.data;

        if (access) {
          localStorage.setItem("access_token", access);
          // Update the header for the original request
          originalRequest.headers.Authorization = `Bearer ${access}`;
          // Retry the original request
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails and this is not an AUTH_ME or profile call, logout user
        if (typeof window !== "undefined" && !isAuthOrProfileCall) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("user_data");
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }

    // Standard error handling
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    const status = error.response?.status;
    const data = error.response?.data;

    // Create a custom error object matching the previous structure if needed,
    // or just reject with the axios error enhanced.
    const customError = new Error(message);
    customError.status = status;
    customError.data = data;
    customError.originalError = error;

    return Promise.reject(customError);
  },
);

export const api = {
  get: (endpoint, config = {}) => axiosInstance.get(endpoint, config),
  post: (endpoint, data, config = {}) =>
    axiosInstance.post(endpoint, data, config),
  put: (endpoint, data, config = {}) =>
    axiosInstance.put(endpoint, data, config),
  delete: (endpoint, config = {}) => axiosInstance.delete(endpoint, config),
  patch: (endpoint, data, config = {}) =>
    axiosInstance.patch(endpoint, data, config),
};

export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login/",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: (uidb64, token) =>
    `/auth/reset-password/${encodeURIComponent(uidb64)}/${encodeURIComponent(token)}/`,
  REGISTER: "/auth/register/",
  REGISTER_WITH_QUIZ: "/auth/register-with-quiz/",
  REFRESH: "/auth/refresh/",
  LOGOUT: "/auth/logout/",
  AUTH_ME: "/auth/me/",

  // User
  USER_PROFILE: "/profile/me/",
  PROFILE_UPDATE: "/profile/update/",
  PROFILE_CHECK: "/profile/check/",
  USER_LIST: "/auth/users/list/",
  USER_EXPORT_CSV: "/auth/users/export-csv/",

  // Quiz
  QUIZ_QUESTIONS_LIST: "/quiz/questions/list",
  QUIZ_QUESTION_DETAIL: (id) => `/quiz/questions/list?question_id=${id}`,
  QUIZ_QUESTIONS_CREATE: "/quiz/questions/create",
  QUIZ_QUESTIONS_UPDATE: "/quiz/questions/update",
  QUIZ_QUESTIONS_DELETE: (id) => `/quiz/questions/delete/${id}`,
  QUIZ_QUESTION_ORDER: "/quiz/update-question-order",

  // Dinner Management
  DINNER_CREATE: "/dinner/create/",
  DINNER_UPDATE: "/dinner/update/",
  DINNER_LIST: "/dinner/list/",
  DINNER_DELETE: (id) => `/dinner/delete/${id}/`,

  // Restaurant Management
  RESTAURANT_CREATE: "/restaurant/create/",
  RESTAURANT_UPDATE: "/restaurant/update/",
  RESTAURANT_LIST: "/restaurant/list/",
  RESTAURANT_DELETE: (id) => `/restaurant/delete/${id}/`,

  // Group Management
  GROUP_CREATE: "/groups/create/",
  GROUP_LIST: "/groups/list/",
  GROUP_UPDATE: "/group/update/",
  GROUP_DELETE: (id) => `/group/delete/${id}/`,
  GROUP_MARK_BOOKED: "/group/mark-as-booked/",
  GROUP_REMOVE_USER: "/users/group/remove-user/",

  // Dinner Requests
  DINNER_MAKE_REQUEST: "/dinner/make-request/",
  DINNER_REQUESTS_LIST: "/dinner/requests/list/",

  // Email Management
  EMAIL_TEMPLATES_LIST: "/email-templates/list/",
  EMAIL_TEMPLATES_CREATE: "/email-templates/create/",
  EMAIL_TEMPLATES_UPDATE: "/email-templates/update/",
  EMAIL_TEMPLATES_DELETE: (id) => `/email-templates/delete/${id}/`,
  EMAIL_SEND_TO_USERS: "/email-templates/send/",

  // Others
  DINNERS: "/dinners/",
  BOOKINGS: "/bookings/",

  // Plans & Payments
  GET_ALL_PLANS: "/get-all-plans",
  PAYMENTS_CHECKOUT: "/payments/checkout/one-time",
  USER_SUBSCRIPTIONS: "/user/subscriptions",
  CANCEL_SUBSCRIPTION: "/payments/user/subscriptions/cancel",
  PAYMENT_TRANSACTIONS: "/user/payment-transactions",
  DINNER_REQUESTS_ME: "/dinner/all-requested-dinners/",
  DINNER_DETAIL: "/dinner/detail/",

  // Attendance
  ATTENDANCE_UPDATE: "/attendance/update/",

  // Cities & Areas
  GET_CITY_AREA: "/get-city-area/",
  DINNER_SWIPE: "/swipe/dinner/",
  MEMBER_RATING: "/group/members/rate/",
  RESTAURANT_RATING: "/restaurant/rate/",
};

export default axiosInstance;
