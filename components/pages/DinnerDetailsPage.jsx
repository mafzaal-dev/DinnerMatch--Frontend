"use client";

import React from 'react';

const DinnerDetailsPage = ({
  dinner = {
    location: 'Cape Town - Southern Suburbs',
    date: 'Tuesday, December 9, 7:00 PM',
    groupRevealDate: 'Monday, December 8, 7:00 PM',
    restaurantRevealDate: 'Tuesday, December 9, 10:00 AM',
    experienceUnlockDate: 'Tuesday, December 9, 7:00 PM',
  },
  showPaymentAlert = true,
  onPurchaseTicket,
  onChangeLocation,
  onMyAccount,
}) => {
  const sections = [
    {
      id: 'dinner',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Dinner',
      details: [
        { label: 'Location', value: dinner.location, action: onChangeLocation ? 'Change Location' : null },
        { label: 'Date', value: dinner.date },
      ],
      button: onPurchaseTicket ? { text: 'Purchase Your Ticket', onClick: onPurchaseTicket } : null,
    },
    {
      id: 'group',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Your Group',
      details: [
        {
          label: null,
          value: `Find out more about your group on ${dinner.groupRevealDate}`,
        },
      ],
    },
    {
      id: 'restaurant',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: 'Your Restaurant',
      details: [
        {
          label: null,
          value: `Get your dinner location on ${dinner.restaurantRevealDate}`,
        },
      ],
    },
    {
      id: 'experience',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Your Dinner Experience',
      details: [
        {
          label: null,
          value: `Unlock the experience of your dinner ${dinner.experienceUnlockDate}`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-300">DinnersMatch</h1>
          {onMyAccount && (
            <button
              onClick={onMyAccount}
              className="text-gray-400 hover:text-white transition-colors"
            >
              My Account
            </button>
          )}
        </div>

        {/* Payment Alert */}
        {showPaymentAlert && (
          <div className="bg-yellow-600/20 border border-yellow-600 rounded-lg p-4 mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-300 flex-1">Payment incomplete - please finish checkout!</p>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-[#1a1f2e] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#F97315]">{section.icon}</div>
                <h2 className="text-white font-semibold text-lg">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.details.map((detail, index) => (
                  <div key={index}>
                    {detail.label && (
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400 text-sm">{detail.label}</span>
                        {detail.action && (
                          <button
                            onClick={onChangeLocation}
                            className="text-[#F97315] hover:underline text-sm"
                          >
                            {detail.action}
                          </button>
                        )}
                      </div>
                    )}
                    <p className="text-white">{detail.value}</p>
                  </div>
                ))}
              </div>

              {section.button && (
                <button
                  onClick={section.button.onClick}
                  className="w-full mt-4 bg-yellow-600 text-white py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
                >
                  {section.button.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DinnerDetailsPage;

