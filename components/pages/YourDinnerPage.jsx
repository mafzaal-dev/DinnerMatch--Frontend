"use client";

import React from 'react';
import Link from 'next/link';

const YourDinnerPage = ({ dinners = [], onViewDetails, onMyAccount }) => {
  // Sample data if none provided
  const defaultDinners = [
    {
      id: 1,
      date: 'Sunday, December 3',
      time: '7:00 PM',
      location: 'Local restaurant, Downtown',
      cuisine: 'Italian',
    },
    {
      id: 2,
      date: 'Sunday, December 17',
      time: '7:00 PM',
      location: 'Local restaurant, Downtown',
      cuisine: 'Mediterranean',
    },
  ];

  const displayDinners = dinners.length > 0 ? dinners : defaultDinners;

  return (
    <div className="min-h-screen bg-[#080814] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h1>
            <p className="text-sm text-[#FFAA55] uppercase tracking-wide">YOUR DINNER</p>
          </div>
          {onMyAccount && (
            <button
              onClick={onMyAccount}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
            >
              My Account
            </button>
          )}
        </div>

        {/* Dinners List */}
        <div className="space-y-4">
          {displayDinners.map((dinner) => (
            <div
              key={dinner.id}
              className="bg-[#111121] border border-white rounded-lg p-6 hover:border-[#FFAA55] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#F5F5F5] font-medium text-lg">
                      {dinner.date}, {dinner.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-[#E0E0E0]">{dinner.location}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-[#FFAA55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <p className="text-[#E0E0E0]">{dinner.cuisine}</p>
                  </div>
                </div>
                <button
                  onClick={() => onViewDetails && onViewDetails(dinner.id)}
                  className="bg-[#FFAA55] text-[#F5F5F5] px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors whitespace-nowrap"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {displayDinners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#E0E0E0] text-lg mb-4">No upcoming dinners scheduled</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuiz'))}
              className="bg-[#FFAA55] text-[#F5F5F5] px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
            >
              Book Your First Dinner
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourDinnerPage;

