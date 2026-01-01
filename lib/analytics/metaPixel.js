/**
 * Meta Pixel Tracking Utility
 * 
 * This utility provides a clean interface for Meta Pixel events.
 * Events are fired only when Meta Pixel is properly initialized.
 * 
 * Usage:
 * - PageView: Automatically tracked on page navigation
 * - Purchase: firePurchaseEvent({ value, currency, content_ids })
 * - Subscribe: fireSubscribeEvent({ value, currency, content_name })
 */

// Meta Pixel ID - should be set via environment variable
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Initialize Meta Pixel
 * Call this once in the root layout
 */
export function initMetaPixel() {
  if (typeof window === 'undefined' || !META_PIXEL_ID) {
    console.warn('Meta Pixel ID not configured. Set NEXT_PUBLIC_META_PIXEL_ID in environment variables.');
    return;
  }

  // Prevent double initialization
  if (window.fbq) {
    return;
  }

  // Initialize Meta Pixel
  (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  // Fire initial PageView
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}

/**
 * Fire a Purchase event
 * Should be called ONLY on successful checkout completion
 * 
 * @param {Object} params
 * @param {number} params.value - Purchase value
 * @param {string} params.currency - Currency code (e.g., 'ZAR', 'USD')
 * @param {string[]} [params.content_ids] - Array of content/product IDs
 * @param {string} [params.content_name] - Product name
 */
export function firePurchaseEvent({ value, currency, content_ids, content_name }) {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Meta Pixel not initialized. Purchase event not fired.');
    return;
  }

  if (!value || !currency) {
    console.error('Purchase event requires value and currency');
    return;
  }

  const eventData = {
    value,
    currency,
  };

  if (content_ids) {
    eventData.content_ids = content_ids;
  }

  if (content_name) {
    eventData.content_name = content_name;
  }

  window.fbq('track', 'Purchase', eventData);
}

/**
 * Fire a Subscribe event
 * Should be called ONLY on successful subscription checkout completion
 * 
 * @param {Object} params
 * @param {number} params.value - Subscription value
 * @param {string} params.currency - Currency code (e.g., 'ZAR', 'USD')
 * @param {string} [params.content_name] - Subscription plan name
 * @param {string} [params.predicted_ltv] - Predicted lifetime value (optional)
 */
export function fireSubscribeEvent({ value, currency, content_name, predicted_ltv }) {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Meta Pixel not initialized. Subscribe event not fired.');
    return;
  }

  if (!value || !currency) {
    console.error('Subscribe event requires value and currency');
    return;
  }

  const eventData = {
    value,
    currency,
  };

  if (content_name) {
    eventData.content_name = content_name;
  }

  if (predicted_ltv) {
    eventData.predicted_ltv = predicted_ltv;
  }

  window.fbq('track', 'Subscribe', eventData);
}

/**
 * Fire a custom event
 * Use sparingly - prefer standard events when possible
 * 
 * @param {string} eventName - Name of the custom event
 * @param {Object} [eventData] - Optional event data
 */
export function fireCustomEvent(eventName, eventData = {}) {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Meta Pixel not initialized. Custom event not fired.');
    return;
  }

  window.fbq('trackCustom', eventName, eventData);
}

