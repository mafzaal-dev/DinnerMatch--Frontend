"use client";

import React, { useState } from 'react';
import Link from 'next/link';

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
      <div className="max-w-[616px] mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#F5F5F5]">DinnersMatch</h1>
          {onMyAccount && (
            <Link
              href="/account"
              className="text-[#F5F5F5] hover:text-[#FFAA55] transition-colors text-sm"
            >
              My Account
            </Link>
          )}
        </div>

        {/* DinnersMatch Pass Section */}
        <div 
          className="relative rounded-lg p-6 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 26, 45, 1) 0%, rgba(15, 20, 25, 1) 100%)',
            boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)',
          }}
        >
          {/* Top golden gradient line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, rgba(244, 208, 63, 0) 2%, rgba(244, 208, 63, 1) 50%, rgba(244, 208, 63, 0) 98%)',
            }}
          ></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="flex items-start justify-between">
              <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p className="text-[#E3BF3B] text-xs uppercase tracking-wide">MEMBER SINCE {subscription.memberSince}</p>
                <h2 className="text-[#E3BF3B] text-lg font-bold">DinnersMatch Pass</h2>
                <p className="text-[#F5F5F5] text-sm">{subscription.type}</p>
              </div>
              <div className="flex items-center gap-2 bg-[#162B2A] px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-[#41B36E] rounded-full"></div>
                <span className="text-white text-xs font-medium">{subscription.status}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-[#F5F5F5] text-sm">Unlimited dinners this month</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[#F5F5F5] text-sm">Renews: {subscription.renewalDate}</span>
              </div>
            </div>
            
            {onManageSubscription && (
              <button
                onClick={onManageSubscription}
                className="w-full bg-[#272727] border border-[#5B504C] rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#2F2F2F] transition-colors"
              >
                <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-white text-sm font-medium">Manage Subscription</span>
              </button>
            )}
          </div>
        </div>

        {/* Your Next Dinner Section */}
        <div className="bg-[#0F0F14] border border-[#191A1D] rounded-lg p-6" style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 className="text-[#F5F5F5] text-sm font-bold">Your Next Dinner</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* City */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p className="text-[#77777B] text-xs uppercase">CITY</p>
                <p className="text-[#F5F5F5] text-sm">{dinner.city}</p>
              </div>
            </div>
            
            {/* Date */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p className="text-[#77777B] text-xs uppercase">DATE</p>
                <p className="text-[#F5F5F5] text-sm">{dinner.date}</p>
              </div>
            </div>
            
            {/* Time */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p className="text-[#77777B] text-xs uppercase">TIME</p>
                <p className="text-[#F5F5F5] text-sm">{dinner.time}</p>
              </div>
            </div>
            
            {/* Restaurant */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p className="text-[#77777B] text-xs uppercase">RESTAURANT</p>
                <p className="text-[#F5F5F5] text-sm">{dinner.restaurant}</p>
                <p className="text-[#BDBDBD] text-xs">{dinner.address}</p>
              </div>
              {onCopyAddress && (
                <button
                  onClick={handleCopyAddress}
                  className="bg-[#2A2829] border border-[#5B504C] rounded-lg px-2 py-2 flex items-center gap-1 hover:bg-[#333] transition-colors flex-shrink-0 h-10"
                >
                  <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#E3BF3B] text-xs whitespace-nowrap">Copy Address</span>
                </button>
              )}
            </div>
            
            {/* Group */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#E3BF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p className="text-[#77777B] text-xs uppercase">Group</p>
                <p className="text-[#F5F5F5] text-sm">A little sneak peak of your group:</p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-[#1B1C1F]"></div>
          
          {/* Group Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p className="text-[#77777B] text-xs uppercase">LANGUAGES</p>
            <p className="text-[#F5F5F5] text-sm">{dinner.group.languages.join(', ')}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p className="text-[#77777B] text-xs uppercase">NATIONALITIES</p>
            <p className="text-[#F5F5F5] text-sm">
              {Object.entries(dinner.group.nationalities)
                .map(([key, value]) => `${key} ${value}%`)
                .join(' - ')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p className="text-[#77777B] text-xs uppercase">OCCUPATIONS</p>
            <p className="text-[#F5F5F5] text-sm">
              {Object.entries(dinner.group.occupations)
                .map(([key, value]) => `${key} ${value}%`)
                .join(' - ')}
            </p>
          </div>
          
          {/* Divider */}
          <div className="border-t border-[#1B1C1F]"></div>
          
          {/* RSVP Section */}
          <h3 className="text-[#F5F5F5] text-sm font-bold">RSPV FOR TONIGHT</h3>
          
          <div className="flex gap-4">
            <button
              onClick={() => handleRSVP('I\'ll be There')}
              className={`flex-1 rounded-lg py-3 px-2 flex items-center justify-center transition-colors ${
                rsvpStatus === 'I\'ll be There'
                  ? 'bg-[#FFAA55] border-[#FFAA55] text-white'
                  : 'bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]'
              }`}
            >
              <span className="text-sm font-medium">I'll be There</span>
            </button>
            <button
              onClick={() => handleRSVP('I\'ll be Late')}
              className={`flex-1 rounded-lg py-3 px-2 flex items-center justify-center transition-colors ${
                rsvpStatus === 'I\'ll be Late'
                  ? 'bg-[#FFAA55] border-[#FFAA55] text-white'
                  : 'bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]'
              }`}
            >
              <span className="text-sm font-medium">I'll be Late</span>
            </button>
            <button
              onClick={() => handleRSVP('Can\'t Make It')}
              className={`flex-1 rounded-lg py-3 px-2 flex items-center justify-center transition-colors ${
                rsvpStatus === 'Can\'t Make It'
                  ? 'bg-[#FFAA55] border-[#FFAA55] text-white'
                  : 'bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]'
              }`}
            >
              <span className="text-sm font-medium">Can't Make It</span>
            </button>
          </div>
          
          {/* Group Status */}
          <div className="bg-[#080810] rounded-lg p-6" style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="text-[#757575] text-xs uppercase">GROUP STATUS (ANONYMOUS)</p>
            <p className="text-white text-xs">
              You: <span className={rsvpStatus ? 'text-white' : 'text-red-500'}>{rsvpStatus || 'Not Responded'}</span>
            </p>
            <p className="text-[#757575] text-xs">2 attending, 1 late, 3 not responded</p>
          </div>
          
          {/* TableTalk Unlock */}
          <div className="bg-[#1A1711] border border-[#534A3E] rounded-lg p-4" style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="text-[#FFAA55] text-xs">TableTalk Unlocks at 7:00 PM</p>
          </div>
        </div>

        {/* Upcoming Dates Section */}
        {upcomingDates && upcomingDates.length > 0 && (
          <div>
            <h2 className="text-[#F5F5F5] text-sm font-bold mb-4">Upcoming Dates</h2>
            <div className="space-y-4">
              {upcomingDates.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 flex items-center justify-between ${
                    item.status === 'Selected'
                      ? 'bg-[#1A1711] border border-[#534A3E]'
                      : 'bg-[#0C0C11] border border-[#141418]'
                  }`}
                  style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)' }}
                >
                  <div>
                    <p className="text-[#F5F5F5] text-sm font-medium mb-1">{item.date}</p>
                    <p className="text-[#77777B] text-xs">{item.city}</p>
                  </div>
                  <div
                    className={`px-3 py-1.5 rounded-full flex items-center gap-2 ${
                      item.status === 'Selected'
                        ? 'bg-[#E3BF3B]'
                        : 'bg-[#18181D]'
                    }`}
                  >
                    {item.status === 'Selected' && (
                      <svg className="w-3 h-3 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <span
                      className={`text-xs font-medium ${
                        item.status === 'Selected' ? 'text-[#212121]' : 'text-[#4E4E52]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Your Access Section */}
        <div className="bg-[#0F0F14] border border-[#191A1D] rounded-lg p-6" style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)' }}>
          <h2 className="text-[#F5F5F5] text-sm font-bold mb-6">Your Access</h2>
          <div className="space-y-2">
            <p className="text-[#F5F5F5] text-sm">Unlimited dinners this month.</p>
            <p className="text-[#77777B] text-xs">Renewal on {subscription.renewalDate}.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {onManageSubscription && (
            <button
              onClick={onManageSubscription}
              className="w-full bg-[#121212] border border-[#242428] rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#1A1A1E] transition-colors"
              style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)' }}
            >
              <svg className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-white text-sm font-medium">Manage Subscription</span>
            </button>
          )}
          {onContactSupport && (
            <button
              onClick={onContactSupport}
              className="w-full bg-[#121212] border border-[#242428] rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#1A1A1E] transition-colors"
              style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.12)' }}
            >
              <svg className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white text-sm font-medium">Contact Support</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinnerDetailsPage;
