"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '../../utils/api';

const AdminDashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSignupTime, setSelectedSignupTime] = useState('All Signup Times');
  const [selectedUserType, setSelectedUserType] = useState('All Users');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedUpcomingDinner, setSelectedUpcomingDinner] = useState('Any Upcoming Dinner');
  const [selectedStatus, setSelectedStatus] = useState('All Users');
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState('0');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Stats cards data
  const stats = [
    {
      id: 'total-users',
      label: 'Total Users',
      value: totalUsers,
      change: '1.3%',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'bg-[#F97316]',
      textColor: 'text-white',
      valueColor: 'text-white',
      labelColor: 'text-white/90',
    },
    {
      id: 'active-tickets',
      label: 'Active Tickets',
      value: '671',
      change: '1.3%',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      bgColor: 'bg-white',
      textColor: 'text-[#424242]',
      valueColor: 'text-[#111827]',
      labelColor: 'text-[#6B7280]',
    },
    {
      id: 'confirmed-bookings',
      label: 'Confirmed Bookings',
      value: '314',
      change: '1.3%',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: 'bg-white',
      textColor: 'text-[#424242]',
      valueColor: 'text-[#111827]',
      labelColor: 'text-[#6B7280]',
    },
    {
      id: 'total-revenue',
      label: 'Total Revenue',
      value: 'R160058.00',
      change: '1.3%',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      bgColor: 'bg-white',
      textColor: 'text-[#424242]',
      valueColor: 'text-[#111827]',
      labelColor: 'text-[#6B7280]',
    },
  ];

  const fetchUsers = async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = query 
        ? `${API_ENDPOINTS.USER_LIST}?search=${encodeURIComponent(query)}`
        : API_ENDPOINTS.USER_LIST;
      
      const response = await api.get(endpoint);
      // Based on API response: { success: true, message: "...", data: { users: [...], total: N } }
      // The interceptor returns response.data, so response here is the outer object.
      const userData = response.data?.users || [];
      const total = response.data?.total || 0;
      
      setUsers(userData);
      setTotalUsers(total.toString());
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = () => {
    fetchUsers(searchQuery);
  };

  const handleExportCSV = async () => {
    try {
      // Use axiosInstance directly from api to handle responseType: 'blob'
      // Or if the utility doesn't expose the instance, we might need to handle it in api.js
      // Let's check api.js again.
      const response = await api.get(API_ENDPOINTS.USER_EXPORT_CSV, {
        responseType: 'blob'
      });
      
      // Create a link to download the blob
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `users-export-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error exporting CSV:', err);
      alert('Failed to export CSV. Please try again.');
    }
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">User Data Management</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Manage customers data and bookings</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bgColor} rounded-xl p-5 shadow-sm border border-[#E5E7EB]`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.textColor}`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.id === 'total-users' ? 'text-white/90' : 'text-[#10B981]'}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>+{stat.change}</span>
                </div>
              </div>
              <h3 className={`text-2xl font-bold ${stat.valueColor} mb-1`}>{stat.value}</h3>
              <p className={`text-xs ${stat.labelColor}`}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-5 mb-5">
          <div className="flex flex-col lg:flex-row gap-3 mb-4">
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Search by name, email or mobile (Press enter to search)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors"
              >
                Search
              </button>
            </div>
            <button
              onClick={handleExportCSV}
              className="px-5 py-2.5 bg-white border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export CSV
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="relative">
              <select
                value={selectedSignupTime}
                onChange={(e) => setSelectedSignupTime(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10"
              >
                <option>All Signup Times</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select
                value={selectedUserType}
                onChange={(e) => setSelectedUserType(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10"
              >
                <option>All Users</option>
                <option>Subscribed</option>
                <option>Free</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10"
              >
                <option>All Cities</option>
                <option>Cape Town</option>
                <option>Johannesburg</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select
                value={selectedUpcomingDinner}
                onChange={(e) => setSelectedUpcomingDinner(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10"
              >
                <option>Any Upcoming Dinner</option>
                <option>Has Booking</option>
                <option>No Booking</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10"
              >
                <option>All Users</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-[#111827]">Users</h2>
              <div className="flex items-center gap-4 mt-1.5">
                <button className="text-xs text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Context all users
                </button>
                <button className="text-xs text-[#6B7280] hover:text-[#F97316] transition-colors">
                  Copy Context Link
                </button>
              </div>
            </div>
            <button className="px-5 py-2.5 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors flex items-center gap-2 whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email These Users
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[140px]">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[180px]">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[130px]">
                    Mobile
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[110px]">
                    City
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[80px]">
                    Tickets
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[100px]">
                    Membership
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[80px]">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[100px]">
                    Next Dinner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide min-w-[100px]">
                    Past Dinner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide w-[50px]">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F3F4F6]">
                {loading ? (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-sm text-[#6B7280]">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-[#F97316]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading users...
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-sm text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-sm text-[#6B7280]">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id || user.email} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#111827] font-medium">
                        {user.name || `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.email || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.mobile || user.phone_number || user.profile?.phone_number || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.city || user.profile?.city_id || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.tickets || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.membership || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.status || 'N/A'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.nextDinner || user.next_dinner || 'Not Booked'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {user.pastDinner || user.past_dinner || 'Not Booked'}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        <button className="p-1 hover:bg-[#F3F4F6] rounded transition-colors">
                          <svg className="w-5 h-5 text-[#6B7280]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
