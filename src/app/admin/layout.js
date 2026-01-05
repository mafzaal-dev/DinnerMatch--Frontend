"use client";

import { AdminSidebar } from '../../components/admin';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = () => {
    // Here you would typically clear authentication tokens/session
    console.log('Admin logged out');
    router.push('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <AdminSidebar onLogout={handleLogout} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
