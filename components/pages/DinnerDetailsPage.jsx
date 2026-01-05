"use client";

import React, { useState } from 'react';

const DinnerDetailsPage = ({
  dinner = {
    city: 'Cape Town',
    date: 'December 9, 2025',
    time: '7:00 PM',
    restaurant: 'Tiger\'s Milk, Claremont',
    address: '123 Main Road, Claremont',
    group: {
      languages: ['English', 'Afrikaans', 'Xhosa'],
      nationalities: { 'South African': 70, 'German': 20, 'Japanese': 10 },
      occupations: { 'Tech': 40, 'Creative': 20, 'Business': 20, 'Medical': 20 },
    },
  },
  subscription = {
    memberSince: 'NOV 2025',
    type: 'Monthly Member',
    status: 'Active',
    unlimitedDinners: true,
    renewalDate: 'December 29, 2025',
  },
  upcomingDates = [
    { date: 'December 9', city: 'Cape Town', status: 'Selected' },
    { date: 'December 23', city: 'Cape Town', status: 'Coming Soon' },
  ],
  onManageSubscription,
  onContactSupport,
  onMyAccount,
  onRSVP,
  onCopyAddress,
}) => {
  const [rsvpStatus, setRsvpStatus] = useState(null);

  const handleRSVP = (status) => {
    setRsvpStatus(status);
    if (onRSVP) {
      onRSVP(status);
    }
  };

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(dinner.address);
    }
    if (onCopyAddress) {
      onCopyAddress(dinner.address);
    }
  };

  return (
    <div className="min-h-screen bg-[#080814] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#E0E0E0]">dinner details</h1>
          <div className="flex items-center gap-4">
            <span className="text-[#F5F5F5]">DinnersMatch</span>
            {onMyAccount && (
              <button
                onClick={onMyAccount}
                className="text-[#FFAA55] hover:underline"
              >
                My Account
              </button>
            )}
          </div>
        </div>

        {/* DinnersMatch Pass Section */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 mb-6">
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
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[#E0E0E0]">Unlimited dinners this month.</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[#E0E0E0]">Renews: {subscription.renewalDate}</span>
            </div>
          </div>
          {onManageSubscription && (
            <button
              onClick={onManageSubscription}
              className="w-full bg-[#FFAA55] text-[#F5F5F5] py-3 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Manage Subscription
            </button>
          )}
        </div>

        {/* Your Next Dinner Section */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Your Next Dinner</h2>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#E0E0E0]">CITY: {dinner.city}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[#E0E0E0]">DATE: {dinner.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#E0E0E0]">TIME: {dinner.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div className="flex-1">
                <span className="text-[#E0E0E0]">RESTAURANT: {dinner.restaurant}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#E0E0E0] text-sm">{dinner.address}</span>
                  {onCopyAddress && (
                    <button
                      onClick={handleCopyAddress}
                      className="text-[#FFAA55] hover:underline text-sm"
                    >
                      Copy Address
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-4">
              <svg className="w-5 h-5 text-[#FFAA55] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="flex-1">
                <span className="text-[#E0E0E0]">GROUP: A little sneak peak of your group:</span>
                <div className="mt-3 space-y-2">
                  <div>
                    <span className="text-[#E0E0E0] font-medium">LANGUAGES: </span>
                    <span className="text-[#E0E0E0]">{dinner.group.languages.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-[#E0E0E0] font-medium">NATIONALITIES: </span>
                    <span className="text-[#E0E0E0]">
                      {Object.entries(dinner.group.nationalities)
                        .map(([key, value]) => `${key} ${value}%`)
                        .join(' - ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#E0E0E0] font-medium">OCCUPATIONS: </span>
                    <span className="text-[#E0E0E0]">
                      {Object.entries(dinner.group.occupations)
                        .map(([key, value]) => `${key} ${value}%`)
                        .join(' - ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Section */}
        {onRSVP && (
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">RSVP FOR TONIGHT</h2>
            <div className="flex flex-wrap gap-3 mb-4">
              {['I\'ll Be There', 'I\'ll Be Late', 'Can\'t Make It'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleRSVP(option)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    rsvpStatus === option
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="bg-[#0F1419] rounded-lg p-4 mb-2">
              <p className="text-[#E0E0E0] text-sm mb-2">GROUP STATUS (ANONYMOUS)</p>
              <p className="text-[#E0E0E0]">You: {rsvpStatus || 'Not Responded'}</p>
              <p className="text-[#E0E0E0] text-sm mt-1">2 attending, 1 late, 3 not responded</p>
            </div>
            <p className="text-[#E0E0E0] text-sm">TableTalk Unlocks at 7:00 PM</p>
          </div>
        )}

        {/* Upcoming Dates Section */}
        {upcomingDates && upcomingDates.length > 0 && (
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Upcoming Dates</h2>
            <div className="space-y-3">
              {upcomingDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-[#F5F5F5] font-medium">{item.date}</p>
                    <p className="text-[#E0E0E0] text-sm">{item.city}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Selected'
                        ? 'bg-[#FFAA55] text-[#F5F5F5]'
                        : 'bg-[#2F3A51] text-[#E0E0E0]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Your Access Section */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Your Access</h2>
          <div className="space-y-2 mb-4">
            <p className="text-[#E0E0E0]">Unlimited dinners this month.</p>
            <p className="text-[#E0E0E0]">Renewal on {subscription.renewalDate}.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {onManageSubscription && (
              <button
                onClick={onManageSubscription}
                className="flex-1 bg-[#0F1419] border border-white text-[#F5F5F5] py-3 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#2F3A51] transition-colors"
              >
                Manage Subscription
              </button>
            )}
            {onContactSupport && (
              <button
                onClick={onContactSupport}
                className="flex-1 bg-[#0F1419] border border-white text-[#F5F5F5] py-3 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#2F3A51] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact Support
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinnerDetailsPage;
