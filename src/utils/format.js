/**
 * Formatting Utilities
 * Centralized formatting functions for dates, currency, etc.
 */

export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatDateTime = (date) => {
  return `${formatDate(date)} at ${formatTime(date)}`;
};

export const formatCurrency = (amount, currency = 'ZAR') => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

export const capitalizeFirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const formatName = (firstName, lastName) => {
  return `${capitalizeFirst(firstName)} ${capitalizeFirst(lastName)}`.trim();
};

