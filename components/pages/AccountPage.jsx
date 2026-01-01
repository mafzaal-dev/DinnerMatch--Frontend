"use client";

import React from 'react';

const AccountPage = ({ onEditProfile, onMyTickets, onHelpCenter, onPrivacyPolicy, onTermsConditions, onBack }) => {
  const menuItems = [
    {
      id: 'edit-profile',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0m1 10a2 2 0 11-4 0"
          />
        </svg>
      ),
      title: 'Edit Profile',
      subtitle: 'Update your personal information and preferences',
      color: 'bg-[#F97315]',
      onClick: onEditProfile,
    },
    {
      id: 'my-tickets',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      title: 'My Tickets',
      subtitle: 'View and manage your dinner tickets',
      color: 'bg-[#F97315]',
      onClick: onMyTickets,
    },
  ];

  const helpItems = [
    {
      id: 'help-center',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Help Center',
      subtitle: 'Get support and contact our team',
      color: 'bg-[#F97315]',
      onClick: onHelpCenter,
    },
  ];

  const legalItems = [
    {
      id: 'privacy-policy',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Privacy Policy',
      subtitle: 'How we protect and use your personal information',
      color: 'bg-blue-500',
      onClick: onPrivacyPolicy,
    },
    {
      id: 'terms-service',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Terms & Conditions',
      subtitle: 'Our service terms and user agreement',
      color: 'bg-green-500',
      onClick: onTermsConditions,
    },
    {
      id: 'terms-community',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Terms & Conditions',
      subtitle: 'Community guidelines and expected behavior',
      color: 'bg-purple-500',
      onClick: onTermsConditions,
    },
  ];

  const renderMenuItem = (item) => (
    <button
      key={item.id}
      onClick={item.onClick}
      className="w-full bg-[#0f1419] rounded-lg p-4 flex items-center gap-4 hover:bg-[#1a1f2e] transition-colors"
    >
      <div className={`${item.color} p-3 rounded-lg`}>{item.icon}</div>
      <div className="flex-1 text-left">
        <p className="text-white font-medium text-lg">{item.title}</p>
        <p className="text-gray-400 text-sm">{item.subtitle}</p>
      </div>
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          {onBack && (
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#F97315] flex-1 text-center">My Account</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* My Account Section */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">My Account</h2>
          <div className="space-y-3">{menuItems.map(renderMenuItem)}</div>
        </div>

        {/* Help & Support Section */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">Help & Support</h2>
          <div className="space-y-3">{helpItems.map(renderMenuItem)}</div>
        </div>

        {/* Legal Section */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">Legal</h2>
          <div className="space-y-3">{legalItems.map(renderMenuItem)}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

