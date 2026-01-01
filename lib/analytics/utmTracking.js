/**
 * UTM Parameter Tracking Utility
 * 
 * This utility captures and stores UTM parameters from URL for future use.
 * Currently, we only capture and store - no reporting or attribution logic required.
 * 
 * Future-proofing: This ensures UTM data can be stored on users/purchases
 * when that functionality is needed.
 */

/**
 * Extract UTM parameters from URL
 * 
 * @param {string} [url] - Optional URL string (defaults to window.location)
 * @returns {Object} Object containing UTM parameters
 */
export function extractUTMParameters(url = null) {
  if (typeof window === 'undefined' && !url) {
    return {};
  }

  const urlObj = url ? new URL(url) : window.location;
  const params = new URLSearchParams(urlObj.search);

  const utmParams = {
    utm_source: params.get('utm_source') || null,
    utm_medium: params.get('utm_medium') || null,
    utm_campaign: params.get('utm_campaign') || null,
    utm_term: params.get('utm_term') || null,
    utm_content: params.get('utm_content') || null,
  };

  // Remove null values
  Object.keys(utmParams).forEach(key => {
    if (utmParams[key] === null) {
      delete utmParams[key];
    }
  });

  return utmParams;
}

/**
 * Store UTM parameters in sessionStorage
 * This preserves UTM data across page navigations within the session
 * 
 * @param {Object} [utmParams] - Optional UTM parameters object (will extract if not provided)
 */
export function storeUTMParameters(utmParams = null) {
  if (typeof window === 'undefined') {
    return;
  }

  const params = utmParams || extractUTMParameters();

  // Only store if there are actual UTM parameters
  if (Object.keys(params).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(params));
  }
}

/**
 * Get stored UTM parameters from sessionStorage
 * 
 * @returns {Object} Stored UTM parameters or empty object
 */
export function getStoredUTMParameters() {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading stored UTM parameters:', error);
    return {};
  }
}

/**
 * Clear stored UTM parameters
 */
export function clearUTMParameters() {
  if (typeof window === 'undefined') {
    return;
  }

  sessionStorage.removeItem('utm_params');
}

/**
 * Get UTM parameters for API submission
 * Returns current URL UTMs if present, otherwise stored UTMs
 * 
 * @returns {Object} UTM parameters ready for API submission
 */
export function getUTMParametersForSubmission() {
  const currentUTMs = extractUTMParameters();
  
  // If current URL has UTMs, use those (they're more recent)
  if (Object.keys(currentUTMs).length > 0) {
    return currentUTMs;
  }

  // Otherwise, use stored UTMs from session
  return getStoredUTMParameters();
}

