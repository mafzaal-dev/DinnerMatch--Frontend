"use client";

import React, { useState } from 'react';

const DinnerManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const dinners = [
    {
      id: '2564666',
      restaurant: 'The Sea Shack',
      city: 'Durban',
      date: 'Select Date',
      time: 'Select Time',
      group: 4,
      language: 'English',
      nationality: 'Multi',
      createdOn: 'Dec 30, 2025',
    },
    {
      id: '2564670',
      restaurant: 'La Baguette',
      city: 'Bloemfontein',
      date: 'Select Date',
      time: 'Select Time',
      group: 4,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Apr 15, 2026',
    },
    {
      id: '2564673',
      restaurant: 'The Grill House',
      city: 'Nelspruit',
      date: 'Select Date',
      time: 'Select Time',
      group: 8,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Jul 15, 2026',
    },
    {
      id: '2564676',
      restaurant: 'The Coffee Spot',
      city: 'Richards Bay',
      date: 'Select Date',
      time: 'Select Time',
      group: 2,
      language: 'Afrikaans',
      nationality: 'Afrikaans',
      createdOn: 'Oct 01, 2026',
    },
    {
      id: '2564667',
      restaurant: 'Savory Bistro',
      city: 'Johannesburg',
      date: 'Dec 25, 2025',
      time: 'Select Time',
      group: 2,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Jan 05, 2026',
    },
    {
      id: '2564671',
      restaurant: 'Sushi Express',
      city: 'East London',
      date: 'Jun 05, 2026',
      time: '07:30 PM',
      group: 5,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'May 01, 2026',
    },
    {
      id: '2564674',
      restaurant: 'Bistro Belle',
      city: 'Pietermaritzburg',
      date: 'Sep 30, 2026',
      time: '01:30 PM',
      group: 3,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Aug 20, 2026',
    },
    {
      id: '2564677',
      restaurant: 'Vegan Vibes',
      city: 'Tshwane',
      date: 'Dec 15, 2026',
      time: '06:45 PM',
      group: 4,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Nov 05, 2026',
    },
    {
      id: '2564668',
      restaurant: 'Royal Indian Cuisine',
      city: 'Pretoria',
      date: 'Mar 03, 2026',
      time: '07:15 PM',
      group: 6,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Feb 01, 2026',
    },
    {
      id: '2564672',
      restaurant: 'Café Delight',
      city: 'George',
      date: 'Jul 18, 2026',
      time: '09:00 AM',
      group: 2,
      language: 'English',
      nationality: 'Multi',
      createdOn: 'Jun 10, 2026',
    },
    {
      id: '2564675',
      restaurant: 'Curry Palace',
      city: 'Kimberley',
      date: 'Oct 22, 2026',
      time: '07:00 PM',
      group: 7,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Sep 10, 2026',
    },
    {
      id: '2564678',
      restaurant: 'Ocean View Café',
      city: 'Stellenbosch',
      date: 'Jan 25, 2027',
      time: '01:00 PM',
      group: 5,
      language: 'Multi',
      nationality: 'Multi',
      createdOn: 'Dec 20, 2026',
    },
  ];

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">Dinner Management</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Manage your existing dinners.</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Controls */}
          <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-end gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-64 bg-white"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#374151] hover:bg-gray-50 bg-white">
                    <span>Sort by</span>
                    <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-24">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Restaurant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">City</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-20">Group</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Language</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Nationality</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Created On</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6]">
                {dinners.map((dinner) => (
                  <tr key={dinner.id} className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      {dinner.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                      {dinner.restaurant}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                      {dinner.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={dinner.date === 'Select Date' ? 'text-[#F97316]' : 'text-[#374151]'}>
                        {dinner.date}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                         <span className={dinner.time === 'Select Time' && dinner.date !== 'Select Date' ? 'text-[#F97316]' : (dinner.time === 'Select Time' ? 'text-[#9CA3AF]' : 'text-[#374151]')}>
                             {dinner.time}
                         </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                      {dinner.group}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                      {dinner.language}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                      {dinner.nationality}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                      {dinner.createdOn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-[#9CA3AF] hover:text-[#111827]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinnerManagementPage;

