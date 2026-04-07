"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDinner } from '@/hooks/useDinner';
import { DatePicker } from '@/components/ui/date-picker';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { debounce, isValidSearchQuery } from '@/utils/searchHelper';
import {
  disabledBeforeYmd,
  disabledAfterYmd,
  compareYmd,
} from '@/utils/dateRangeFilters';
import {
  isDinnerPublished,
  formatDinnerTypeForDisplay,
  isDinnerTypeOpen,
} from '@/utils/dinnerStatus';
import { CustomDropdown } from '@/components/common';
import { TablePagination } from '@/components/ui/Pagination';
import { api, API_ENDPOINTS } from '@/utils/api';

const DinnerManagementPage = () => {
  const router = useRouter();
  const { getDinners, deleteDinner, loading } = useDinner();
  const [searchQuery, setSearchQuery] = useState('');
  const [dinners, setDinners] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cities, setCities] = useState([]);
  const [filterCityId, setFilterCityId] = useState('');
  const [filterDinnerType, setFilterDinnerType] = useState('');
  const [filterPublish, setFilterPublish] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [dinnerToDelete, setDinnerToDelete] = useState(null);

  // Fetch dinners from API
  const fetchDinners = async (query = null) => {
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
      
      if (startDate) {
        params.start_date = startDate;
      }
      
      if (endDate) {
        params.end_date = endDate;
      }
      
      if (filterCityId) {
        params.city_id = filterCityId;
      }

      if (filterDinnerType) {
        params.dinner_type = filterDinnerType;
      }

      if (filterPublish === 'true') {
        params.dinner_status = 'published';
      } else if (filterPublish === 'false') {
        params.dinner_status = 'draft';
      }

      const result = await getDinners(params);
      setDinners(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Error fetching dinners:', error);
      toast.error('Failed to fetch dinners');
    }
  };

  const fetchDinnersRef = React.useRef(fetchDinners);
  React.useEffect(() => {
    fetchDinnersRef.current = fetchDinners;
  });

  const debouncedSearchRef = React.useRef(null);
  if (!debouncedSearchRef.current) {
    debouncedSearchRef.current = debounce((query) => {
      setCurrentPage(0);
      fetchDinnersRef.current(query);
    }, 500);
  }
  const debouncedSearch = debouncedSearchRef.current;

  useEffect(() => {
    fetchDinners();
  }, [
    currentPage,
    startDate,
    endDate,
    filterCityId,
    filterDinnerType,
    filterPublish,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    api
      .get(API_ENDPOINTS.GET_CITY_AREA)
      .then((res) => {
        const raw = Array.isArray(res?.data)
          ? res.data
          : Array.isArray(res)
            ? res
            : [];
        setCities(raw);
      })
      .catch(() => setCities([]));
  }, []);

  const cityFilterOptions = [
    { value: '', label: 'All cities' },
    ...cities.map((c) => ({ value: c.id, label: c.name })),
  ];

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

  // Handle Create Dinner - Navigate to create page
  const handleCreateDinner = () => {
    router.push('/admin/dinner-management/create');
  };

  // Handle Edit Dinner - Navigate to edit page
  const handleEditDinner = (dinnerId) => {
    router.push(`/admin/dinner-management/edit/${dinnerId}`);
  };

  // Handle Delete Dinner
  const handleDeleteClick = (dinner) => {
    setDinnerToDelete(dinner);
    setShowDeleteConfirm(true);
  };
  
  const confirmDelete = async () => {
    if (!dinnerToDelete) return;

    try {
      await deleteDinner(dinnerToDelete.id);
      toast.success('Dinner deleted successfully!');
      setShowDeleteConfirm(false);
      setDinnerToDelete(null);
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
                <h2 className="text-xl font-semibold text-[#111827]">Dinner Management</h2>
                <p className="text-sm text-[#6B7280] mt-0.5">Manage your existing dinners.</p>
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
                  onClick={handleCreateDinner}
                  className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Create Dinner
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">City</span>
                <CustomDropdown
                  value={filterCityId}
                  onChange={(e) => setFilterCityId(e.target.value)}
                  options={cityFilterOptions}
                  placeholder="All cities"
                />
              </div>

              <div className="flex flex-col gap-1">
              <span className="text-xs text-[#6B7280]">From Date</span>
              <DatePicker
                date={startDate ? new Date(startDate) : undefined}
                onSelect={(date) => {
                  const val = date ? format(date, "yyyy-MM-dd") : "";
                  setStartDate(val);
                  setEndDate((prev) =>
                    val && prev && compareYmd(prev, val) < 0 ? "" : prev,
                  );
                }}
                placeholder="Select a Date"
                className="w-full"
                disabled={disabledAfterYmd(endDate)}
              />
              </div>

              <div className="flex flex-col gap-1">
              <span className="text-xs text-[#6B7280]">To Date</span>
              <DatePicker
                date={endDate ? new Date(endDate) : undefined}
                onSelect={(date) => {
                  const val = date ? format(date, "yyyy-MM-dd") : "";
                  if (val && startDate && compareYmd(val, startDate) < 0) {
                    toast.error("To date cannot be before from date");
                    return;
                  }
                  setEndDate(val);
                }}
                placeholder="Select a Date"
                className="w-full"
                disabled={disabledBeforeYmd(startDate)}
              />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">Type</span>
                <CustomDropdown
                  value={filterDinnerType}
                  onChange={(e) => setFilterDinnerType(e.target.value)}
                  options={[
                    { value: '', label: 'All types' },
                    { value: 'open', label: 'Open' },
                    { value: 'close', label: 'Close' },
                  ]}
                  placeholder="All types"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#6B7280]">Publish status</span>
                <CustomDropdown
                  value={filterPublish}
                  onChange={(e) => setFilterPublish(e.target.value)}
                  options={[
                    { value: '', label: 'All' },
                    { value: 'true', label: 'Published' },
                    { value: 'false', label: 'Draft' },
                  ]}
                  placeholder="All"
                />
              </div>

              {(filterCityId ||
                startDate ||
                endDate ||
                filterDinnerType ||
                filterPublish ||
                isValidSearchQuery(searchQuery)) && (
                <button
                  onClick={() => {
                    debouncedSearchRef.current?.cancel?.();
                    setSearchQuery('');
                    setCurrentPage(0);
                    setFilterCityId('');
                    setStartDate('');
                    setEndDate('');
                    setFilterDinnerType('');
                    setFilterPublish('');
                    setTimeout(() => fetchDinnersRef.current(''), 0);
                  }}
                  className="w-full px-4 py-2 text-sm text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-8 text-center text-[#6B7280]">Loading...</div>
            ) : dinners.length === 0 ? (
              <div className="p-8 text-center text-[#6B7280]">No dinners found</div>
            ) : (
              <table className="w-full">
                <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Groups</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Publish</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {dinners.map((dinner) => (
                    <tr key={dinner.id} className="hover:bg-[#F9FAFB] transition-colors">
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#374151]">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {dinner.groups_count || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isDinnerTypeOpen(dinner.dinner_type)
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {formatDinnerTypeForDisplay(dinner.dinner_type)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isDinnerPublished(dinner)
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {isDinnerPublished(dinner) ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditDinner(dinner.id)}
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
                            onClick={() => handleDeleteClick(dinner)}
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
      {showDeleteConfirm && dinnerToDelete && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Dinner</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete "{dinnerToDelete.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDinnerToDelete(null);
                }}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition-colors disabled:opacity-50"
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DinnerManagementPage;
