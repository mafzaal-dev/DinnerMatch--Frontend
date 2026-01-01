/**
 * Checkout Utility Functions
 * 
 * These functions handle checkout completion and fire appropriate
 * Meta Pixel events. They should be called after successful payment processing.
 * 
 * IMPORTANT: These events should ONLY fire on successful checkout completion.
 * Do not fire on failed payments, cancelled checkouts, or test transactions
 * (unless in test mode).
 */

import { firePurchaseEvent, fireSubscribeEvent } from '../analytics/metaPixel';
import { getUTMParametersForSubmission } from '../analytics/utmTracking';

/**
 * Handle successful ticket purchase checkout
 * 
 * @param {Object} params
 * @param {number} params.value - Purchase value
 * @param {string} params.currency - Currency code (default: 'ZAR')
 * @param {number} params.ticketQuantity - Number of tickets purchased
 * @param {string} [params.ticketId] - Ticket product ID
 * @returns {Promise<void>}
 */
export async function handleTicketPurchaseSuccess({
  value,
  currency = 'ZAR',
  ticketQuantity,
  ticketId,
}) {
  // Fire Meta Pixel Purchase event
  firePurchaseEvent({
    value,
    currency,
    content_ids: ticketId ? [ticketId] : undefined,
    content_name: `${ticketQuantity} Ticket${ticketQuantity > 1 ? 's' : ''}`,
  });

  // Get UTM parameters for API submission
  const utmParams = getUTMParametersForSubmission();

  // TODO: Submit purchase to backend API with UTM parameters
  // await submitPurchaseToAPI({
  //   value,
  //   currency,
  //   ticketQuantity,
  //   ticketId,
  //   utmParams,
  // });
}

/**
 * Handle successful subscription checkout
 * 
 * @param {Object} params
 * @param {number} params.value - Subscription value
 * @param {string} params.currency - Currency code (default: 'ZAR')
 * @param {string} params.planName - Subscription plan name (e.g., 'Monthly', 'Annual')
 * @param {string} params.planId - Subscription plan ID
 * @param {string} [params.payfastSubscriptionId] - PayFast subscription ID
 * @returns {Promise<void>}
 */
export async function handleSubscriptionSuccess({
  value,
  currency = 'ZAR',
  planName,
  planId,
  payfastSubscriptionId,
}) {
  // Fire Meta Pixel Subscribe event
  fireSubscribeEvent({
    value,
    currency,
    content_name: planName,
  });

  // Get UTM parameters for API submission
  const utmParams = getUTMParametersForSubmission();

  // TODO: Submit subscription to backend API with UTM parameters
  // await submitSubscriptionToAPI({
  //   value,
  //   currency,
  //   planName,
  //   planId,
  //   payfastSubscriptionId,
  //   utmParams,
  // });
}

