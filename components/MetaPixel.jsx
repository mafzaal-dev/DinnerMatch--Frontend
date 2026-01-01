"use client";

import { useEffect } from 'react';
import { initMetaPixel } from '../lib/analytics/metaPixel';

/**
 * Meta Pixel Component
 * 
 * This component initializes Meta Pixel on the client side.
 * It should be included in the root layout.
 */
export default function MetaPixel() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return null;
}

