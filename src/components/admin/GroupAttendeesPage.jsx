"use client";

import React, { useState } from 'react';

const GroupAttendeesPage = () => {
  const [activeTab, setActiveTab] = useState('groups'); // 'groups' or 'users'
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data
  const allUsers = [
    { id: 1, name: 'Theodore R.', email: 'theodore.roth@email.com', gender: 'F', age: 28, area: 'South', language: 'Afrikaans', nationality: 'South African', mealPref: 'Vegetarian', budget: '$$' },
    { id: 2, name: 'Arlo R.', email: 'arlo.reichert@email.com', gender: 'F', age: 28, area: 'CBD', language: 'Afrikaans, English', nationality: 'Spanish', mealPref: 'Meat', budget: '$$' },
    { id: 3, name: 'Shea S.', email: 'shea.sanford@email.com', gender: 'F', age: 28, area: 'CBD', language: 'Afrikaans', nationality: 'Zimbabwean', mealPref: 'Halal', budget: '$$' },
    { id: 4, name: 'Kobe C.', email: 'kobe.crona@email.com', gender: 'M', age: 28, area: 'South', language: 'Afrikaans', nationality: 'South African', mealPref: 'Fish', budget: '$$' },
    { id: 5, name: 'Theodore R.', email: 'theodore.roth@email.com', gender: 'F', age: 28, area: 'South', language: 'Afrikaans', nationality: 'South African', mealPref: 'Vegetarian', budget: '$$' },
    { id: 6, name: 'Arlo R.', email: 'arlo.reichert@email.com', gender: 'F', age: 28, area: 'CBD', language: 'Afrikaans, English', nationality: 'Spanish', mealPref: 'Meat', budget: '$$' },
    { id: 7, name: 'Shea S.', email: 'shea.sanford@email.com', gender: 'F', age: 28, area: 'CBD', language: 'Afrikaans', nationality: 'Zimbabwean', mealPref: 'Halal', budget: '$$' },
    { id: 8, name: 'Kobe C.', email: 'kobe.crona@email.com', gender: 'M', age: 28, area: 'South', language: 'Afrikaans', nationality: 'South African', mealPref: 'Fish', budget: '$$' },
    { id: 9, name: 'Theodore R.', email: 'theodore.roth@email.com', gender: 'F', age: 28, area: 'South', language: 'Afrikaans', nationality: 'South African', mealPref: 'Vegetarian', budget: '$$' },
    { id: 10, name: 'Arlo R.', email: 'arlo.reichert@email.com', gender: 'F', age: 28, area: 'CBD', language: 'Afrikaans, English', nationality: 'Spanish', mealPref: 'Meat', budget: '$$' },
  ];

  const groups = [
    {
      id: '02',
      name: 'Group 02',
      details: '5 peoples . 3F/2M . Age 25-32',
      members: allUsers.slice(0, 5),
      restaurant: {
        name: "Tiger's Milk",
        area: "Southern Suburbs",
        dietary: { meat: true, vegetarian: true, vegan: false, fish: true, halal: true },
        price: "$$"
      }
    },
    {
      id: '01',
      name: 'Group 01',
      details: '5 peoples . 3F/2M . Age 25-32',
      members: allUsers.slice(5, 10),
      restaurant: {
        name: "Tiger's Milk",
        area: "Southern Suburbs",
        dietary: { meat: true, vegetarian: true, vegan: false, fish: true, halal: true },
        price: "$$"
      }
    }
  ];

  // Helper for Gender Badge
  const GenderBadge = ({ gender }) => (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-medium ${
      gender === 'F' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
    }`}>
      {gender}
    </span>
  );

  // Helper for Dietary Check
  const DietaryCheck = ({ label, available }) => (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-[#374151] w-20">{label}:</span>
      {available ? (
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </div>
  );

  // User Table Component
  const UserTable = ({ data, showActions = true }) => (
    <div className="overflow-x-auto">
      <table className="w-full min-w-max">
        <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
          <tr>
            {/* Checkbox column if needed */}
            {activeTab === 'users' && (
               <th className="px-4 py-3 w-10">
                 <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
               </th>
            )}
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Email</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Gender</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Age</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Area</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Language</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Nationality</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Meal Pref.</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Budget</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-[#6B7280] uppercase tracking-wide"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3F4F6]">
          {data.map((user, index) => (
            <tr key={`${user.id}-${index}`} className="hover:bg-[#F9FAFB] transition-colors">
               {activeTab === 'users' && (
                 <td className="px-4 py-3">
                   <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                 </td>
               )}
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#111827]">{user.name}</td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.email}</td>
              <td className="px-4 py-3.5 whitespace-nowrap"><GenderBadge gender={user.gender} /></td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.age}</td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.area}</td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.language}</td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.nationality}</td>
              <td className="px-4 py-3.5 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded border border-[#E5E7EB] bg-white text-xs font-medium text-[#374151]">
                  {user.mealPref}
                </span>
              </td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.budget}</td>
              <td className="px-4 py-3.5 whitespace-nowrap text-right">
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
  );

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-6 border-b border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-[#111827]">User Data Management</h1>
            <p className="text-sm text-[#6B7280] mt-1">Manage customers data and bookings</p>
          </div>
          <div className="flex items-center gap-3">
             {activeTab === 'users' ? (
                 <>
                   <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-4 pr-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-64 bg-[#F9FAFB]"
                      />
                   </div>
                   <button className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                     </svg>
                     Export All CSV
                   </button>
                    <button className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50">
                     Create Manual Group
                   </button>
                   <button className="px-4 py-2 bg-[#FFAA55] text-white rounded-lg text-sm font-medium hover:bg-[#FF9933]">
                     AI Match
                   </button>
                 </>
             ) : (
                <>
                  <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-4 pr-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-64 bg-[#F9FAFB]"
                      />
                   </div>
                   <button className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                     </svg>
                     Export All CSV
                   </button>
                   <button className="px-4 py-2 bg-[#FFAA55] text-white rounded-lg text-sm font-medium hover:bg-[#FF9933]">
                     Finalize Groups
                   </button>
                </>
             )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'groups'
                ? 'bg-[#111827] text-white'
                : 'bg-transparent text-[#6B7280] hover:bg-gray-100'
            }`}
          >
            Groups
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-[#111827] text-white'
                : 'bg-transparent text-[#6B7280] hover:bg-gray-100'
            }`}
          >
            Users
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'groups' && (
          <div className="space-y-6">
             <div className="text-sm text-[#6B7280]">10 attendees across 2 groups</div>
            {groups.map((group) => (
              <div key={group.id} className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                {/* Group Header */}
                <div className="px-6 py-4 border-b border-[#E5E7EB] bg-orange-50/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF0E0] flex items-center justify-center text-[#F97316]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#111827]">{group.name}</h3>
                      <p className="text-xs text-[#6B7280]">{group.details}</p>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-red-500 hover:text-red-700">
                    Delete Group
                  </button>
                </div>

                {/* Group Members */}
                <UserTable data={group.members} showActions={false} />

                {/* Restaurant Suggestion */}
                <div className="p-6 border-t border-[#E5E7EB] bg-white">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Restaurant Info */}
                        <div className="flex gap-4 min-w-[300px]">
                            <div className="w-12 h-12 rounded bg-[#FFF0E0] flex items-center justify-center shrink-0 text-[#F97316]">
                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                 </svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-semibold mb-1">SUGGESTED RESTAURANT</p>
                                <h4 className="text-base font-bold text-[#111827]">{group.restaurant.name}</h4>
                                <p className="text-sm text-[#6B7280]">Area: {group.restaurant.area}</p>
                            </div>
                        </div>

                         {/* Dietary Coverage */}
                         <div className="flex-1">
                             <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-semibold mb-2">DIETARY COVERAGE</p>
                             <div className="space-y-1">
                                 <DietaryCheck label="Meat" available={group.restaurant.dietary.meat} />
                                 <DietaryCheck label="Vegetarian" available={group.restaurant.dietary.vegetarian} />
                                 <DietaryCheck label="Vegan" available={group.restaurant.dietary.vegan} />
                                 <DietaryCheck label="Fish" available={group.restaurant.dietary.fish} />
                                 <DietaryCheck label="Halal" available={group.restaurant.dietary.halal} />
                             </div>
                         </div>

                          {/* Price Tier */}
                          <div className="min-w-[100px]">
                             <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-semibold mb-2">PRICE TIER</p>
                             <p className="text-base font-medium text-[#111827]">{group.restaurant.price}</p>
                          </div>

                           {/* Actions */}
                           <div className="flex flex-col gap-2 justify-center min-w-[160px]">
                               <button className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-xs font-medium hover:bg-gray-50">
                                   View Contact Info
                               </button>
                               <button className="px-4 py-2 bg-[#FFAA55] text-white rounded-lg text-xs font-medium hover:bg-[#FF9933]">
                                   Mark as Booked
                               </button>
                           </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'users' && (
           <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
             <UserTable data={allUsers} showActions={true} />
           </div>
        )}
      </div>
    </div>
  );
};

export default GroupAttendeesPage;
