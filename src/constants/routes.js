/**
 * Application Routes Constants
 * Centralized route definitions for the application
 */

export const ROUTES = {
  // Public Routes
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_CONDITIONS: '/terms-conditions',
  
  // User Routes
  ACCOUNT: '/account',
  EDIT_PROFILE: '/edit-profile',
  PREFERENCES: '/preferences',
  YOUR_DINNER: '/your-dinner',
  DINNER_DETAILS: '/dinner-details',
  HELP_CENTER: '/help-center',
  
  // Admin Routes
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_DINNERS: '/admin/dinners',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_SETTINGS: '/admin/settings',
};

export const PROTECTED_ROUTES = [
  ROUTES.ACCOUNT,
  ROUTES.EDIT_PROFILE,
  ROUTES.PREFERENCES,
  ROUTES.YOUR_DINNER,
  ROUTES.DINNER_DETAILS,
];

export const ADMIN_ROUTES = [
  ROUTES.ADMIN,
  ROUTES.ADMIN_DASHBOARD,
  ROUTES.ADMIN_USERS,
  ROUTES.ADMIN_DINNERS,
  ROUTES.ADMIN_BOOKINGS,
  ROUTES.ADMIN_SETTINGS,
];

