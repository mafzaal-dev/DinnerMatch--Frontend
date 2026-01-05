"use client";

import { useEffect, useState } from 'react';

/**
 * NoSSR Component
 * Prevents hydration errors by only rendering children on the client
 * Useful for components that rely on browser APIs or have browser extension conflicts
 */
const NoSSR = ({ children, fallback = null }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return <>{children}</>;
};

export default NoSSR;

