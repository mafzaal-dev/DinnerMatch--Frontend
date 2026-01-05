"use client";

import React from 'react';

const AccountPage = ({
  subscription = {
    memberSince: 'NOV 2025',
    type: 'Monthly Member',
    status: 'Active',
    unlimitedDinners: true,
    renewalDate: 'December 29, 2025',
  },
  onEditProfile,
  onMyTickets,
  onHelpCenter,
  onPrivacyPolicy,
  onTermsConditions,
  onLogOut,
  onBack,
}) => {
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
        </svg>
      ),
      title: 'Edit Profile',
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
      title: 'Help & Support',
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
      onClick: onTermsConditions,
    },
  ];

  const renderMenuItem = (item) => (
    <button
      key={item.id}
      onClick={item.onClick}
      className="w-full bg-[#111121] border border-white rounded-lg p-4 flex items-center gap-4 hover:border-[#FFAA55] transition-colors text-left"
    >
      <div className="text-[#FFAA55]">{item.icon}</div>
      <div className="flex-1">
        <p className="text-[#F5F5F5] font-medium text-lg">{item.title}</p>
      </div>
      <svg className="w-5 h-5 text-[#E0E0E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#080814] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          {onBack && (
            <button
              onClick={onBack}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#F5F5F5] flex-1 text-center">My Account</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Subscription Info */}
        {subscription && (
          <div className="bg-[#111121] border border-white rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[#E0E0E0] text-sm mb-1">MEMBER SINCE {subscription.memberSince}</p>
                <h2 className="text-2xl font-bold text-[#F5F5F5]">DinnersMatch Pass</h2>
                <p className="text-[#E0E0E0]">{subscription.type}</p>
              </div>
              <span className="bg-green-500 text-[#F5F5F5] px-3 py-1 rounded-full text-sm font-medium">
                • {subscription.status}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-[#E0E0E0]">
                {subscription.unlimitedDinners ? 'Unlimited dinners this month.' : 'Limited dinners available.'}
              </p>
              <p className="text-[#E0E0E0]">Renewal on {subscription.renewalDate}.</p>
            </div>
          </div>
        )}

        {/* My Account Section */}
        <div className="mb-8">
          <h2 className="text-[#F5F5F5] text-xl font-semibold mb-4">My Account</h2>
          <div className="space-y-3">{menuItems.map(renderMenuItem)}</div>
        </div>

        {/* Help & Support Section */}
        <div className="mb-8">
          <h2 className="text-[#F5F5F5] text-xl font-semibold mb-4">Help & Support</h2>
          <div className="space-y-3">{helpItems.map(renderMenuItem)}</div>
        </div>

        {/* Legal Section */}
        <div className="mb-8">
          <h2 className="text-[#F5F5F5] text-xl font-semibold mb-4">Legal</h2>
          <div className="space-y-3">{legalItems.map(renderMenuItem)}</div>
        </div>

        {/* Log Out Button */}
        {onLogOut && (
          <button
            onClick={onLogOut}
            className="w-full bg-[#111121] border border-red-500 text-red-500 py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-red-500/10 transition-colors"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
