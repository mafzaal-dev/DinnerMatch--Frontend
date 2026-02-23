"use client";

import { AdminSidebar } from '../../components/admin';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { AccessDeniedModal } from '@/components/modals';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAdmin, isLoading, isAuthenticated, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Protect admin routes: require auth, and require admin for non-login pages
  useEffect(() => {
    if (pathname === '/admin/login') return;

    if (!isLoading && !isAuthenticated) {
      router.replace('/admin/login');
    }
  }, [isLoading, isAuthenticated, router, pathname]);

  const handleAccessDeniedRedirect = () => {
    router.push('/');
  };

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout('/admin/login');
  };

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (isLoading) {
      return <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
      return null;
  }

  if (isAuthenticated && !isAdmin) {
    return <AccessDeniedModal isOpen={true} onRedirect={handleAccessDeniedRedirect} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F9FAFB]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black opacity-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed width */}
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onLogout={handleLogout} 
      />

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header - Fixed */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between lg:hidden flex-shrink-0">
          <div className="flex items-center gap-3">
             <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="text-xl font-bold">
              Dinner<span className="text-[#F97316]">Match</span>
            </span>
          </div>
        </header>

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-[#F9FAFB]">
          {children}
        </main>
      </div>
    </div>
  );
}
