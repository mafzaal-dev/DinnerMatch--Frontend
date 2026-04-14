"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const HTML_SHELL_CLASS = "dm-user-app-shell";

export default function UserLoggedInBodyBackground() {
  const pathname = usePathname();
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const onAdminRoute = pathname?.startsWith("/admin") ?? false;
    const useDarkShell =
      !isLoading && isAuthenticated && !isAdmin && !onAdminRoute;

    const root = document.documentElement;
    if (useDarkShell) {
      root.classList.add(HTML_SHELL_CLASS);
    } else {
      root.classList.remove(HTML_SHELL_CLASS);
    }

    return () => {
      root.classList.remove(HTML_SHELL_CLASS);
    };
  }, [isLoading, isAuthenticated, isAdmin, pathname]);

  return null;
}
