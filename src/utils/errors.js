/**
 * Error Utilities
 * Centralized error handling and formatting
 */

export class AppError extends Error {
  constructor(message, code, statusCode = 500) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = statusCode;
  }
}

export const handleError = (error, context = '') => {
  const errorMessage = error.message || 'An unexpected error occurred';
  const errorCode = error.code || 'UNKNOWN_ERROR';
  
  console.error(`[${context}] Error:`, {
    message: errorMessage,
    code: errorCode,
    error,
  });

  // TODO: Send to error tracking service (e.g., Sentry)
  
  return {
    message: errorMessage,
    code: errorCode,
  };
};

export const getErrorMessage = (error) => {
  if (error instanceof AppError) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred';
};

