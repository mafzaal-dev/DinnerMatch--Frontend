"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', href: ROUTES.ADMIN_DASHBOARD, icon: '📊' },
    { label: 'Users', href: ROUTES.ADMIN_USERS, icon: '👥' },
    { label: 'Dinners', href: ROUTES.ADMIN_DINNERS, icon: '🍽️' },
    { label: 'Bookings', href: ROUTES.ADMIN_BOOKINGS, icon: '📅' },
    { label: 'Settings', href: ROUTES.ADMIN_SETTINGS, icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-[#111121] border-r border-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#FFAA55]">Admin</h1>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#FFAA55] text-[#F5F5F5]'
                  : 'text-[#E0E0E0] hover:bg-[#0F1419]'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;

