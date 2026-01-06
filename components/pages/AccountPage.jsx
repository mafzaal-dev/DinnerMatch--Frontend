"use client";

import React from 'react';

const AccountPage = ({
  onEditProfile,
  onMyTickets,
  onHelpCenter,
  onPrivacyPolicy,
  onTermsConditions,
  onBack,
}) => {
  const menuItems = [
    {
      id: 'edit-profile',
      icon: (
        <svg className="w-6 h-6 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      iconBg: 'bg-[#FFAA55]',
      title: 'Edit Profile',
      subtitle: 'Update your personal information and preferences',
      onClick: onEditProfile,
    },
    {
      id: 'my-tickets',
      icon: (
        <svg className="w-6 h-6 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      iconBg: 'bg-[#FFAA55]',
      title: 'My Tickets',
      subtitle: 'View and manage your dinner tickets',
      onClick: onMyTickets,
    },
  ];

  const helpItems = [
    {
      id: 'help-center',
      icon: (
        <svg className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      iconBg: 'bg-[#F97316]',
      title: 'Help Center',
      subtitle: 'Get support and contact our team',
      onClick: onHelpCenter,
    },
  ];

  const legalItems = [
    {
      id: 'privacy-policy',
      icon: (
        <svg className="w-6 h-6 text-[#F5F5F5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.5L4.5 6.03v5.52c0 5.25 3.47 10.17 7.5 11.42 4.03-1.25 7.5-6.17 7.5-11.42V6.03L12 2.5z" />
        </svg>
      ),
      iconBg: 'bg-[#3B82F6]',
      title: 'Privacy Policy',
      subtitle: 'How we protect and use your personal information',
      onClick: onPrivacyPolicy,
    },
    {
      id: 'terms-service',
      icon: (
        <svg className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      iconBg: 'bg-[#22C55E]',
      title: 'Terms & Conditions',
      subtitle: 'Our service terms and user agreement',
      onClick: onTermsConditions,
    },
    {
      id: 'community-guidelines',
      icon: (
        <svg className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      iconBg: 'bg-[#A855F7]',
      title: 'Terms & Conditions',
      subtitle: 'Community guidelines and expected behavior',
      onClick: onTermsConditions,
    },
  ];

  const renderMenuItem = (item) => (
    <button
      key={item.id}
      onClick={item.onClick}
      className="w-full bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex items-center gap-4 hover:bg-[#1A1F2E] transition-colors text-left"
      style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)' }}
    >
      <div className={`${item.iconBg} rounded-lg w-10 h-10 flex items-center justify-center shrink-0`}>
        {item.icon}
      </div>
      <div className="flex-1">
        <p className="text-[#F5F5F5] font-bold text-xl ">{item.title}</p>
        <p className="text-[#757575] text-sm font-semibold">{item.subtitle}</p>
      </div>
      <svg className="w-4 h-4 text-[#F5F5F5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 20 20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4l6 6-6 6" />
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#010102] p-4 md:p-8">
      <div className="max-w-154 mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-center relative">
          {onBack && (
            <button
              onClick={onBack}
              className="absolute left-0 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4l-6 6 6 6" />
              </svg>
              <span className="text-sm">Back</span>
            </button>
          )}
          <h1 className="text-[32px] font-bold text-[#FFAA55]">My Account</h1>
        </div>

        {/* All sections in one container with 24px spacing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Menu Items - No Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {menuItems.map(renderMenuItem)}
          </div>

          {/* Help & Support Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="text-[#F5F5F5] text-xl font-semibold ">Help & Support</h2>
            {helpItems.map(renderMenuItem)}
          </div>

          {/* Legal Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="text-[#F5F5F5] text-xl font-semibold">Legal</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {legalItems.map(renderMenuItem)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
