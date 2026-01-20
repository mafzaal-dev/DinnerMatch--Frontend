"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRestaurant } from '@/hooks/useRestaurant';
import toast from 'react-hot-toast';

const RestaurantManagementPage = () => {
  const router = useRouter();
  const { getRestaurants, deleteRestaurant, loading } = useRestaurant();
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  // Fetch restaurants from API
  const fetchRestaurants = async () => {
    try {
      const params = {
        index: currentPage,
        offset: pageSize,
      };
      
      if (searchQuery) {
        params.search = searchQuery;
      }

      const result = await getRestaurants(params);
      setRestaurants(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      toast.error('Failed to fetch restaurants');
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [currentPage, searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle Create Restaurant - Navigate to create page
  const handleCreateRestaurant = () => {
    router.push('/admin/restaurants/create');
  };

  // Handle Edit Restaurant - Navigate to edit page
  const handleEditRestaurant = (restaurantId) => {
    router.push(`/admin/restaurants/edit/${restaurantId}`);
  };

  // Handle Delete Restaurant
  const handleDeleteRestaurant = async (restaurantId) => {
    if (!confirm('Are you sure you want to delete this restaurant?')) {
      return;
    }

    try {
      await deleteRestaurant(restaurantId);
      toast.success('Restaurant deleted successfully!');
      fetchRestaurants();
    } catch (error) {
      console.error('Error deleting restaurant:', error);
      toast.error(error.message || 'Failed to delete restaurant');
    }
  };

  // Format price for display
  const formatPrice = (price) => {
    return `R ${parseFloat(price).toFixed(2)}`;
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
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Controls */}
          <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between gap-3">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#111827]">Restaurants</h2>
              <p className="text-sm text-[#6B7280] mt-0.5">Manage all of the restaurants</p>
            </div>
            
            <div className="flex items-center gap-3">
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
              <button className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm text-[#374151] hover:bg-gray-50 bg-white">
                <span>Sort by</span>
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                onClick={handleCreateRestaurant}
                className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Add Restaurant
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-8 text-center text-[#6B7280]">Loading...</div>
            ) : restaurants.length === 0 ? (
              <div className="p-8 text-center text-[#6B7280]">No restaurants found</div>
            ) : (
              <table className="w-full min-w-max">
                <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-24">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Restaurant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Contact No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Date Added</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-10">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {restaurants.map((restaurant) => (
                    <tr key={restaurant.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {restaurant.id.split('-')[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151] font-medium">
                        {restaurant.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {restaurant.location}, {restaurant.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {restaurant.number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {restaurant.created_at ? new Date(restaurant.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleEditRestaurant(restaurant.id)}
                            className="text-[#3B82F6] hover:text-[#2563EB] text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteRestaurant(restaurant.id)}
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

export default RestaurantManagementPage;
