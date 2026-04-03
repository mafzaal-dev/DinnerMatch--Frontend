// Debounce helper for search functionality
export const debounce = (func, wait = 500) => {
  let timeout;
  const executedFunction = function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      timeout = undefined;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
  executedFunction.cancel = () => {
    if (timeout !== undefined) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  };
  return executedFunction;
};

// Format display value - replace N/A with dash
export const formatDisplayValue = (value) => {
  if (value === null || value === undefined || value === '' || value === 'N/A') {
    return '-';
  }
  return value;
};

// Capitalize text
export const capitalizeText = (text) => {
  if (!text) return '-';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Capitalize first letter of each word
export const capitalizeWords = (text) => {
  if (!text) return '-';
  return text.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

// Validate search query (minimum 3 characters)
export const isValidSearchQuery = (query) => {
  return query && query.trim().length >= 3;
};
