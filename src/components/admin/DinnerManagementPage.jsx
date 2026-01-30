"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDinner } from '@/hooks/useDinner';
import toast from 'react-hot-toast';

const DinnerManagementPage = () => {
  const router = useRouter();
  const { getDinners, deleteDinner, loading } = useDinner();
  const [searchQuery, setSearchQuery] = useState('');
  const [dinners, setDinners] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [startDate, setStartDate] = useState('');

  // Fetch dinners from API
  const fetchDinners = async () => {
    try {
      const params = {
        index: currentPage,
        offset: pageSize,
      };
      
      if (searchQuery) {
        params.search = searchQuery;
      }
      
      if (startDate) {
        params.start_date = startDate;
      }

      const result = await getDinners(params);
      setDinners(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Error fetching dinners:', error);
      toast.error('Failed to fetch dinners');
    }
  };

  useEffect(() => {
    fetchDinners();
  }, [currentPage, searchQuery, startDate]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle Create Dinner - Navigate to create page
  const handleCreateDinner = () => {
    router.push('/admin/dinner-management/create');
  };

  // Handle Edit Dinner - Navigate to edit page
  const handleEditDinner = (dinnerId) => {
    router.push(`/admin/dinner-management/edit/${dinnerId}`);
  };

  // Handle Delete Dinner
  const handleDeleteDinner = async (dinnerId) => {
    if (!confirm('Are you sure you want to delete this dinner?')) {
      return;
    }

    try {
      await deleteDinner(dinnerId);
      toast.success('Dinner deleted successfully!');
      fetchDinners();
    } catch (error) {
      console.error('Error deleting dinner:', error);
      toast.error(error.message || 'Failed to delete dinner');
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Select Date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Format time for display
  const formatTime = (dateString) => {
    if (!dateString) return 'Select Time';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-6 border-b border-[#E5E7EB]">
        <h1 className="text-2xl font-semibold text-[#111827]">User Data Management</h1>
        <p className="text-sm text-[#6B7280] mt-1">Manage customers data and bookings</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Section Header */}
       

        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Controls */}
          <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between gap-3">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#111827]">Dinner Management</h2>
              <p className="text-sm text-[#6B7280] mt-0.5">Manage your existing dinners.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="pl-4 pr-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                  placeholder="Start Date"
                />
              </div>
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
              <button 
                onClick={handleCreateDinner}
                className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Create Dinner
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-8 text-center text-[#6B7280]">Loading...</div>
            ) : dinners.length === 0 ? (
              <div className="p-8 text-center text-[#6B7280]">No dinners found</div>
            ) : (
              <table className="w-full min-w-max">
                <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-24">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-10">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {dinners.map((dinner) => (
                    <tr key={dinner.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {dinner.id.split('-')[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151] font-medium">
                        {dinner.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {dinner.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={!dinner.date ? 'text-[#F97316]' : 'text-[#374151]'}>
                          {formatDate(dinner.date)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {formatTime(dinner.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          dinner.dinner_type === 'Open' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {dinner.dinner_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          dinner.dinner_status === 'Draft' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {dinner.dinner_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleEditDinner(dinner.id)}
                            className="text-[#3B82F6] hover:text-[#2563EB] text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteDinner(dinner.id)}
                            className="text-[#EF4444] hover:text-[#DC2626] text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          {!loading && total > 0 && (
            <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <div className="text-sm text-[#6B7280]">
                Showing {currentPage * pageSize + 1} to {Math.min((currentPage + 1) * pageSize, total)} of {total} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="px-3 py-1 border border-[#E5E7EB] rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={(currentPage + 1) * pageSize >= total}
                  className="px-3 py-1 border border-[#E5E7EB] rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinnerManagementPage;
