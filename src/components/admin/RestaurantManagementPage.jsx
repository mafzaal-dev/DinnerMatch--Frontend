"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRestaurant } from '@/hooks/useRestaurant';
import toast from 'react-hot-toast';
import { debounce, formatDisplayValue, isValidSearchQuery } from '@/utils/searchHelper';
import { CustomDropdown } from '@/components/common';
import { TablePagination } from '@/components/ui/Pagination';

const RestaurantManagementPage = () => {
  const router = useRouter();
  const { getRestaurants, deleteRestaurant, loading } = useRestaurant();
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] = useState(null);

  // Filters
  const [filterRating, setFilterRating] = useState('');
  const [filterBudget, setFilterBudget] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  // Fetch restaurants from API
  const fetchRestaurants = async (query = null) => {
    try {
      const params = {
        index: currentPage,
        offset: pageSize,
      };
      
      const term = query !== null ? query : searchQuery;

      // Only add search if valid (3+ characters)
      if (isValidSearchQuery(term)) {
        params.search = term;
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

  const fetchRestaurantsRef = React.useRef(fetchRestaurants);
  React.useEffect(() => {
    fetchRestaurantsRef.current = fetchRestaurants;
  });

  const debouncedSearchRef = React.useRef(null);
  if (!debouncedSearchRef.current) {
    debouncedSearchRef.current = debounce((query) => {
      setCurrentPage(0);
      fetchRestaurantsRef.current(query);
    }, 500);
  }
  const debouncedSearch = debouncedSearchRef.current;

  useEffect(() => {
    fetchRestaurants();
  }, [currentPage, filterRating, filterBudget, filterLocation]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const wasValidSearch = searchQuery.length >= 3;
    const isValidSearch = value.length >= 3;
    
    setSearchQuery(value);
    
    if (isValidSearch) {
      debouncedSearch(value);
    } else if (wasValidSearch && !isValidSearch) {
      debouncedSearch('');
    }
  };

  // Handle Create Restaurant - Navigate to create page
  const handleCreateRestaurant = () => {
    router.push('/admin/restaurants/create');
  };

  // Handle Edit Restaurant - Navigate to edit page
  const handleEditRestaurant = (restaurantId) => {
    router.push(`/admin/restaurants/edit/${restaurantId}`);
  };

  const handleDeleteClick = (restaurant) => {
    setRestaurantToDelete(restaurant);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteRestaurant = async () => {
    if (!restaurantToDelete) return;
    try {
      await deleteRestaurant(restaurantToDelete.id);
      toast.success('Restaurant deleted successfully!');
      setShowDeleteConfirm(false);
      setRestaurantToDelete(null);
      fetchRestaurants();
    } catch (error) {
      console.error('Error deleting restaurant:', error);
      toast.error(error.message || 'Failed to delete restaurant');
    }
  };

  // Budget display: use value as-is (option text = value) or legacy format
  const getBudgetDisplay = (budget) => {
    if (budget == null || budget === "") return null;
    const b = String(budget);
    if (b === "$ - Budget Friendly" || b === "$$ - Moderate" || b === "$$$ - Premium") return b;
    return formatDisplayValue(budget);
  };

  const formatPrice = (price) => {
    if (price == null || price === "") return null;
    const p = parseFloat(price);
    if (Number.isNaN(p)) return null;
    return `R ${p.toFixed(2)}`;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b border-[#E5E7EB] flex-shrink-0">
        <h1 className="text-2xl font-semibold text-[#111827]">User Data Management</h1>
        <p className="text-sm text-[#6B7280] mt-1">Manage customers data and bookings</p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Controls */}
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-semibold text-[#111827]">Restaurants</h2>
                <p className="text-sm text-[#6B7280] mt-0.5">Manage all of the restaurants</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <input
                    type="text"
                    placeholder="Search (min 3 characters)"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full sm:w-64 pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button 
                  onClick={handleCreateRestaurant}
                  className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Add Restaurant
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                    { value: '$ - Budget Friendly', label: '$ - Budget Friendly' },
                    { value: '$$ - Moderate', label: '$$ - Moderate' },
                    { value: '$$$ - Premium', label: '$$$ - Premium' },
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
              {(filterRating ||
                filterBudget ||
                filterLocation ||
                isValidSearchQuery(searchQuery)) && (
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      debouncedSearchRef.current?.cancel?.();
                      setSearchQuery('');
                      setCurrentPage(0);
                      setFilterRating('');
                      setFilterBudget('');
                      setFilterLocation('');
                      setTimeout(() => fetchRestaurantsRef.current(''), 0);
                    }}
                    className="w-full px-3 py-2 text-sm text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap"
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
              <table className="w-full">
                <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Restaurant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Groups</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Contact No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Date Added</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Actions</th>
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
                        {getBudgetDisplay(restaurant.budget) || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        {formatPrice(restaurant.price) || "-"}
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
                            className="p-1.5 hover:bg-[#FEF3C7] text-[#92400E] rounded transition-colors"
                            title="Edit"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteClick(restaurant)}
                            className="p-1.5 hover:bg-[#FEE2E2] text-[#DC2626] rounded transition-colors"
                            title="Delete"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
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
          {!loading && (
            <TablePagination
              currentPage={currentPage}
              total={total}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && restaurantToDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Restaurant</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete &quot;{restaurantToDelete.name || 'this restaurant'}&quot;? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => { setShowDeleteConfirm(false); setRestaurantToDelete(null); }}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteRestaurant}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition-colors disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantManagementPage;
