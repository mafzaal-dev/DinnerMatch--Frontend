"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useRestaurant } from '@/hooks/useRestaurant';
import toast from 'react-hot-toast';
import { debounce, formatDisplayValue, isValidSearchQuery } from '@/utils/searchHelper';
import { CustomDropdown } from '@/components/common';

const RestaurantManagementPage = () => {
  const router = useRouter();
  const { getRestaurants, deleteRestaurant, loading } = useRestaurant();
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  
  // Filters
  const [filterRating, setFilterRating] = useState('');
  const [filterBudget, setFilterBudget] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  // Fetch restaurants from API
  const fetchRestaurants = async () => {
    try {
      const params = {
        index: currentPage,
        offset: pageSize,
      };
      
      // Only add search if valid (3+ characters)
      if (isValidSearchQuery(searchQuery)) {
        params.search = searchQuery;
      }
      
      if (filterRating) {
        params.rating = filterRating;
      }
      if (filterBudget) {
        params.budget = filterBudget;
      }
      if (filterLocation) {
        params.location = filterLocation;
      }

      const result = await getRestaurants(params);
      setRestaurants(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      toast.error('Failed to fetch restaurants');
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (isValidSearchQuery(query) || query.length === 0) {
        setCurrentPage(0);
        fetchRestaurants();
      }
    }, 500),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    fetchRestaurants();
  }, [currentPage, filterRating, filterBudget, filterLocation]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

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
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-semibold text-[#111827]">Restaurants</h2>
                <p className="text-sm text-[#6B7280] mt-0.5">Manage all of the restaurants</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                <input
                  type="text"
                  placeholder="Search (min 3 characters)"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-64 bg-white"
                />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button 
                  onClick={handleCreateRestaurant}
                  className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Add Restaurant
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-xs text-[#6B7280] mb-1">Rating</label>
                <CustomDropdown
                  value={filterRating}
                  onChange={(e) => setFilterRating(e.target.value)}
                  options={[
                    { value: '', label: 'All Ratings' },
                    { value: '5', label: '5 Stars' },
                    { value: '4', label: '4+ Stars' },
                    { value: '3', label: '3+ Stars' },
                    { value: '2', label: '2+ Stars' },
                    { value: '1', label: '1+ Star' },
                  ]}
                  placeholder="All Ratings"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-[#6B7280] mb-1">Budget</label>
                <CustomDropdown
                  value={filterBudget}
                  onChange={(e) => setFilterBudget(e.target.value)}
                  options={[
                    { value: '', label: 'All Budgets' },
                    { value: 'R0-R250', label: 'R0 - R250' },
                    { value: 'R250-R500', label: 'R250 - R500' },
                    { value: 'R500-R750', label: 'R500 - R750' },
                    { value: 'R750-R1000', label: 'R750 - R1000' },
                    { value: 'R1000+', label: 'R1000+' },
                  ]}
                  placeholder="All Budgets"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-[#6B7280] mb-1">Location</label>
                <CustomDropdown
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  options={[
                    { value: '', label: 'All Locations' },
                    { value: 'City Centre', label: 'City Centre' },
                    { value: 'Waterfront', label: 'Waterfront' },
                    { value: 'Suburbs', label: 'Suburbs' },
                  ]}
                  placeholder="All Locations"
                />
              </div>
              {(filterRating || filterBudget || filterLocation) && (
                <div className="pt-5">
                  <button
                    onClick={() => {
                      setFilterRating('');
                      setFilterBudget('');
                      setFilterLocation('');
                    }}
                    className="px-3 py-2 text-sm text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Restaurant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Groups</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Contact No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Date Added</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#9CA3AF] uppercase tracking-wide w-10">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {restaurants.map((restaurant) => (
                    <tr key={restaurant.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151] font-medium">
                        {restaurant.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {restaurant.location}, {restaurant.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {restaurant.rating ? (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <span>{restaurant.rating}</span>
                          </div>
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {restaurant.budget || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {restaurant.groups_count || 0}
                        </span>
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
