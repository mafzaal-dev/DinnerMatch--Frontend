"use client";

import { useEffect } from 'react';
import { extractUTMParameters, storeUTMParameters } from '../lib/analytics/utmTracking';

/**
 * UTM Tracker Component
 * 
 * This component automatically captures and stores UTM parameters
 * from the URL on page load. It should be included in the root layout.
 * 
 * Future-proofing: Ensures UTM data is available for storing on users/purchases
 * when that functionality is implemented.
 */
export default function UTMTracker() {
  useEffect(() => {
    // Extract and store UTM parameters on mount
    const utmParams = extractUTMParameters();
    if (Object.keys(utmParams).length > 0) {
      storeUTMParameters(utmParams);
    }
  }, []);

  return null;
}

