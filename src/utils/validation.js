/**
 * Validation Utilities
 * Centralized validation functions for forms and inputs
 */

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validatePhoneNumber = (phone) => {
  // Basic phone validation - adjust regex based on requirements
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

export const validateMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength;
};

export const validateMaxLength = (value, maxLength) => {
  return !value || value.toString().length <= maxLength;
};

export const validateDate = (date) => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
};

export const validateAge = (dateOfBirth, minAge = 18) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= minAge;
  }
  
  return age >= minAge;
};

export const getValidationError = (field, value, rules = {}) => {
  if (rules.required && !validateRequired(value)) {
    return `${field} is required`;
  }

  if (rules.minLength && !validateMinLength(value, rules.minLength)) {
    return `${field} must be at least ${rules.minLength} characters`;
  }

  if (rules.maxLength && !validateMaxLength(value, rules.maxLength)) {
    return `${field} must be no more than ${rules.maxLength} characters`;
  }

  if (rules.email && !validateEmail(value)) {
    return 'Please enter a valid email address';
  }

  if (rules.password && !validatePassword(value)) {
    return 'Password must be at least 8 characters with uppercase, lowercase, and number';
  }

  if (rules.phone && !validatePhoneNumber(value)) {
    return 'Please enter a valid phone number';
  }

  if (rules.date && !validateDate(value)) {
    return 'Please enter a valid date';
  }

  if (rules.age && !validateAge(value, rules.age)) {
    return `You must be at least ${rules.age} years old`;
  }

  return null;
};

