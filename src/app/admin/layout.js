"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="min-h-screen bg-[#080814] flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}

