"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { api, API_ENDPOINTS } from '../../utils/api';
import { toast } from 'react-hot-toast';
import { debounce, formatDisplayValue, isValidSearchQuery, capitalizeWords } from '../../utils/searchHelper';
import { CustomDropdown } from '@/components/common';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createGroupSchema } from '@/constants/validationSchemas';

const GroupAttendeesPage = () => {
  const [activeTab, setActiveTab] = useState('groups'); // 'groups' or 'users'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDinner, setSelectedDinner] = useState('');
  const [dinners, setDinners] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [dinnerRequests, setDinnerRequests] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Modals
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showMakeBookingModal, setShowMakeBookingModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showViewProfile, setShowViewProfile] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  
  // React Hook Form for Create Group
  const {
    register: registerGroup,
    handleSubmit: handleSubmitGroup,
    control: controlGroup,
    setValue: setValueGroup,
    reset: resetGroup,
    formState: { errors: errorsGroup },
  } = useForm({
    resolver: yupResolver(createGroupSchema),
    defaultValues: {
      groupName: '',
      selectedDinnerForGroup: '',
      selectedUsers: [],
    },
  });

  // Infinity Scroll - Groups
  const [groupsPage, setGroupsPage] = useState(0);
  const [groupsPageSize] = useState(10);
  const [groupsTotal, setGroupsTotal] = useState(0);
  const [hasMoreGroups, setHasMoreGroups] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const groupsObserverRef = useRef(null);
  const lastGroupElementRef = useCallback(node => {
    if (loading || isLoadingMore) return;
    if (groupsObserverRef.current) groupsObserverRef.current.disconnect();
    
    groupsObserverRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreGroups) {
        setGroupsPage(prev => prev + 1);
      }
    });
    
    if (node) groupsObserverRef.current.observe(node);
  }, [loading, isLoadingMore, hasMoreGroups]);
  
  // Pagination - Requests
  const [requestsPage, setRequestsPage] = useState(0);
  const [requestsPageSize, setRequestsPageSize] = useState(10);
  const [requestsTotal, setRequestsTotal] = useState(0);
  
  // Filters - Groups
  const [filterCity, setFilterCity] = useState('');
  const [filterDinner, setFilterDinner] = useState('');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');
  
  // Filters - Requests
  const [filterRequestCity, setFilterRequestCity] = useState('');
  const [filterRequestDinner, setFilterRequestDinner] = useState('');
  const [filterRequestDateFrom, setFilterRequestDateFrom] = useState('');
  const [filterRequestDateTo, setFilterRequestDateTo] = useState('');

  useEffect(() => {
    fetchDinners();
    fetchRestaurants();
    fetchGroups();
  }, []);

  useEffect(() => {
    if (selectedDinner) {
      fetchDinnerRequests();
    }
  }, [selectedDinner, requestsPage, filterRequestCity, filterRequestDinner, filterRequestDateFrom, filterRequestDateTo]); // eslint-disable-line

  useEffect(() => {
    if (activeTab === 'groups') {
      if (groupsPage === 0) {
        fetchGroups(false);
      } else {
        fetchGroups(true); // Load more
      }
    }
  }, [activeTab, groupsPage]); // eslint-disable-line

  // Reset and fetch when filters change
  useEffect(() => {
    if (activeTab === 'groups') {
      setGroupsPage(0);
      setGroups([]);
      setHasMoreGroups(true);
      fetchGroups(false);
    }
  }, [filterCity, filterDinner, filterDateFrom, filterDateTo]); // eslint-disable-line

  const fetchGroupsRef = useRef(null);
  const fetchDinnerRequestsRef = useRef(null);

  // Debounced search for both tabs
  const debouncedSearch = useCallback(
    debounce((query) => {
        if (activeTab === 'groups') {
          setGroupsPage(0);
          setGroups([]);
          setHasMoreGroups(true);
          // fetchGroups is async, but we don't await here.
          // passing query to ensure latest is used
          if (fetchGroupsRef.current) fetchGroupsRef.current(false, query);
        } else {
          setRequestsPage(0);
          if (fetchDinnerRequestsRef.current) fetchDinnerRequestsRef.current(query);
        }
    }, 500),
    [activeTab] // eslint-disable-line react-hooks/exhaustive-deps
  );

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

  const fetchDinners = async () => {
    try {
      const response = await api.get(`${API_ENDPOINTS.DINNER_LIST}?index=0&offset=100`);
      if (response.success) {
        setDinners(response.data || []);
        if (response.data && response.data.length > 0) {
          setSelectedDinner(response.data[0].id);
        }
      }
    } catch (err) {
      console.error('Error fetching dinners:', err);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const response = await api.get(`${API_ENDPOINTS.RESTAURANT_LIST}?index=0&offset=100`);
      if (response.success) {
        setRestaurants(response.data || []);
      }
    } catch (err) {
      console.error('Error fetching restaurants:', err);
    }
  };

  const fetchDinnerRequests = async (query = null) => {
    try {
      const isBackground = activeTab !== 'users';
      if (!isBackground) setLoading(true);
      setError('');
      
      const params = new URLSearchParams();
      params.append('index', requestsPage);
      params.append('offset', requestsPageSize);
      if (selectedDinner) params.append('dinner_id', selectedDinner);
      
      const term = query !== null ? query : searchQuery;

      // Only add search if valid (3+ characters)
      if (isValidSearchQuery(term)) {
        params.append('search', term);
      }
      if (filterRequestCity) params.append('city', filterRequestCity);
      if (filterRequestDinner) params.append('dinner', filterRequestDinner);
      if (filterRequestDateFrom) params.append('date_from', filterRequestDateFrom);
      if (filterRequestDateTo) params.append('date_to', filterRequestDateTo);
      
      const response = await api.get(`${API_ENDPOINTS.DINNER_REQUESTS_LIST}?${params}`);
      
      if (response.success) {
        setDinnerRequests(response.data || []);
        setRequestsTotal(response.total || response.data?.length || 0);
      }
    } catch (err) {
      console.error('Error fetching dinner requests:', err);
      setError('Failed to load dinner requests');
    } finally {
      const isBackground = activeTab !== 'users';
      if (!isBackground) setLoading(false);
    }
  };

  const fetchGroups = async (isLoadMore = false, query = null) => {
    try {
      if (isLoadMore) {
        setIsLoadingMore(true);
      } else {
        setLoading(true);
      }
      
      const params = new URLSearchParams();
      params.append('index', groupsPage);
      params.append('offset', groupsPageSize);
      
      const term = query !== null ? query : searchQuery;

      // Only add search if valid (3+ characters)
      if (isValidSearchQuery(term)) {
        params.append('search', term);
      }
      if (filterCity) params.append('city', filterCity);
      if (filterDinner) params.append('dinner', filterDinner);
      if (filterDateFrom) params.append('date_from', filterDateFrom);
      if (filterDateTo) params.append('date_to', filterDateTo);
      
      const response = await api.get(`${API_ENDPOINTS.GROUP_LIST}?${params}`);
      
      if (response.success) {
        const newGroups = response.groups || [];
        
        if (isLoadMore) {
          // Append to existing groups for infinity scroll
          setGroups(prev => [...prev, ...newGroups]);
        } else {
          // Replace groups for initial load or filter change
          setGroups(newGroups);
        }
        
        setGroupsTotal(response.total || 0);
        setHasMoreGroups(newGroups.length === groupsPageSize);
      }
    } catch (err) {
      console.error('Error fetching groups:', err);
      setError('Failed to load groups');
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchGroupsRef.current = fetchGroups;
    fetchDinnerRequestsRef.current = fetchDinnerRequests;
  });

  const handleSelectUser = (userId, checked) => {
    let newSelectedUsers;
    if (checked) {
      newSelectedUsers = [...selectedUsers, userId];
    } else {
      newSelectedUsers = selectedUsers.filter(id => id !== userId);
    }
    setSelectedUsers(newSelectedUsers);
    
    // Update RHF value if modal is open
    if (showCreateGroupModal) {
       setValueGroup('selectedUsers', newSelectedUsers, { shouldValidate: true });
    }
  };

  const handleSelectAll = (checked) => {
    let newSelectedUsers;
    if (checked) {
      newSelectedUsers = dinnerRequests.map(request => request.user.id);
    } else {
      newSelectedUsers = [];
    }
    setSelectedUsers(newSelectedUsers);

    // Update RHF value if modal is open
    if (showCreateGroupModal) {
       setValueGroup('selectedUsers', newSelectedUsers, { shouldValidate: true });
    }
  };

  const handleCreateGroup = async (data) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await api.post(API_ENDPOINTS.GROUP_CREATE, {
        name: data.groupName,
        users: data.selectedUsers,
        dinner_id: data.selectedDinnerForGroup,
        restaurant_id: selectedRestaurant || null
      });

      if (response.success) {
        toast.success('Group created successfully!');
        setShowCreateGroupModal(false);
        resetGroup();
        setSelectedRestaurant('');
        setSelectedUsers([]);
        fetchGroups();
        setActiveTab('groups');
      }
    } catch (err) {
      console.error('Error creating group:', err);
      toast.error(err.message || 'Failed to create group');
    } finally {
      setLoading(false);
    }
  };

  const handleMakeBooking = async () => {
    if (!selectedGroup) return;

    try {
      setLoading(true);
      const response = await api.put(API_ENDPOINTS.GROUP_MARK_BOOKED, {
        group_id: selectedGroup.id,
        restaurant_id: selectedRestaurant || null
      });

      if (response.success) {
        toast.success('Booking confirmed successfully!');
        setShowMakeBookingModal(false);
        setSelectedGroup(null);
        setSelectedRestaurant('');
        fetchGroups();
      }
    } catch (err) {
      console.error('Error making booking:', err);
      toast.error('Failed to confirm booking');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGroup = async () => {
    if (!selectedGroup) return;

    try {
      setLoading(true);
      // Assuming there's a delete endpoint
      const response = await api.delete(`${API_ENDPOINTS.GROUP_LIST}/${selectedGroup.id}`);
      
      if (response.success) {
        toast.success('Group deleted successfully');
        setShowDeleteConfirm(false);
        setSelectedGroup(null);
        fetchGroups();
      }
    } catch (err) {
      console.error('Error deleting group:', err);
      toast.error('Failed to delete group');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRequestStatus = async (requestId, status) => {
    try {
      setLoading(true);
      // Assuming there's an update endpoint for request status
      const response = await api.put(`${API_ENDPOINTS.DINNER_REQUESTS_LIST}/${requestId}`, {
        status: status
      });

      if (response.success) {
        toast.success(`Request ${status} successfully`);
        fetchDinnerRequests();
      }
    } catch (err) {
      console.error('Error updating request status:', err);
      toast.error('Failed to update request status');
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      const response = await api.get(API_ENDPOINTS.USER_EXPORT_CSV, {
        params: { search: searchQuery },
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `export-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Error exporting CSV:', err);
      toast.error('Failed to export CSV');
    }
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return '-';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const GenderBadge = ({ gender }) => {
    if (!gender) return <span>-</span>;
    
    const normalizedGender = gender?.toUpperCase();
    const isValid = normalizedGender === 'F' || normalizedGender === 'M' || normalizedGender === 'FEMALE' || normalizedGender === 'MALE';
    const isFemale = normalizedGender === 'F' || normalizedGender === 'FEMALE';
    const displayGender = isFemale ? 'F' : normalizedGender === 'M' || normalizedGender === 'MALE' ? 'M' : '-';
    
    if (displayGender === '-') return <span>-</span>;
    
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-medium ${
        isFemale 
          ? 'bg-pink-100 text-pink-600' 
          : 'bg-blue-100 text-blue-600'
      }`}>
        {displayGender}
      </span>
    );
  };

  // Groups Table Component with Infinity Scroll
  const GroupsTable = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
        <div className="overflow-x-auto max-h-[calc(100vh-300px)] overflow-y-auto">
          <table className="w-full min-w-max">
            <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB] sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Group Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Dinner</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Restaurant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Members</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Area</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Booked</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-[#6B7280] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {groups.length === 0 && !loading ? (
                <tr>
                  <td colSpan="8" className="px-4 py-8 text-center text-sm text-[#6B7280]">
                    No groups found
                  </td>
                </tr>
              ) : (
                <>
                  {groups.map((group, index) => {
                    const isLastElement = groups.length === index + 1;
                    return (
                      <tr 
                        key={group.id} 
                        ref={isLastElement ? lastGroupElementRef : null}
                        className="hover:bg-[#F9FAFB] transition-colors"
                      >
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#111827] font-medium">
                          {formatDisplayValue(group.name)}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                          {formatDisplayValue(group.dinner?.title)}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                          {group.restaurant?.name ? capitalizeWords(group.restaurant.name) : 'Not assigned'}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                          {group.total_members || group.members?.length || 0}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                          {formatDisplayValue(group.dinner?.location)}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                            group.is_booked 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {group.is_booked ? 'Yes' : 'No'}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            {capitalizeWords(group.status || 'Not Responded')}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-2">
                            {!group.is_booked && (
                              <button
                                onClick={() => {
                                  setSelectedGroup(group);
                                  setShowMakeBookingModal(true);
                                }}
                                className="px-3 py-1.5 bg-[#F97316] text-white rounded text-xs font-medium hover:bg-[#EA580C] transition-colors"
                              >
                                Make Booking
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setSelectedGroup(group);
                                setShowDeleteConfirm(true);
                              }}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {isLoadingMore && (
                    <tr>
                      <td colSpan="8" className="px-4 py-4 text-center text-sm text-[#6B7280]">
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 text-[#F97316]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="ml-2">Loading more...</span>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Showing count */}
        {groups.length > 0 && (
          <div className="px-6 py-4 border-t border-[#E5E7EB]">
            <div className="text-sm text-[#6B7280]">
              Showing {groups.length} of {groupsTotal} groups {hasMoreGroups && '(scroll for more)'}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Requests Table Component
  const RequestsTable = () => {
    const allSelected = dinnerRequests.length > 0 && selectedUsers.length === dinnerRequests.length;

    return (
      <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    checked={allSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Gender</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Age</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Area</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Language</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Meal Pref.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Budget</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-[#6B7280] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {dinnerRequests.length === 0 ? (
                <tr>
                  <td colSpan="11" className="px-4 py-8 text-center text-sm text-[#6B7280]">
                    No dinner requests found
                  </td>
                </tr>
              ) : (
                dinnerRequests.map((item) => {
                  const user = item.user;
                  const profile = user.profile || {};
                  const isSelected = selectedUsers.includes(user.id);

                  return (
                    <tr key={`${user.id}-${item.id || index}`} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-4 py-3">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                          checked={isSelected}
                          onChange={(e) => handleSelectUser(user.id, e.target.checked)}
                        />
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#111827]">
                        {formatDisplayValue(user.first_name || user.last_name ? `${user.first_name} ${user.last_name}`.trim() : '')}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{formatDisplayValue(user.email)}</td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <GenderBadge gender={profile.gender} />
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {calculateAge(profile.date_of_birth)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.area)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.language)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.meal_preference)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.budget)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                          item.request_status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : item.request_status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {capitalizeWords(item.request_status)}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedProfile(user);
                              setShowViewProfile(true);
                            }}
                            className="px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded text-xs font-medium transition-colors"
                          >
                            View Profile
                          </button>
                          {item.request_status !== 'approved' && (
                            <button
                              onClick={() => handleUpdateRequestStatus(item.id, 'approved')}
                              className="px-3 py-1.5 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition-colors"
                            >
                              Approve
                            </button>
                          )}
                          {item.request_status !== 'rejected' && (
                            <button
                              onClick={() => handleUpdateRequestStatus(item.id, 'rejected')}
                              className="px-3 py-1.5 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors"
                            >
                              Reject
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {requestsTotal > 0 && (
          <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <div className="text-sm text-[#6B7280]">
              Showing {requestsPage * requestsPageSize + 1} to {Math.min((requestsPage + 1) * requestsPageSize, requestsTotal)} of {requestsTotal} results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setRequestsPage(Math.max(0, requestsPage - 1))}
                disabled={requestsPage === 0}
                className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => setRequestsPage(requestsPage + 1)}
                disabled={(requestsPage + 1) * requestsPageSize >= requestsTotal}
                className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b border-[#E5E7EB] flex-shrink-0">
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-[#111827]">Group & Attendees Management</h1>
            <p className="text-sm text-[#6B7280] mt-1">Manage dinner requests and create groups</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeTab === 'users' ? (
              <>
                <CustomDropdown
                  value={selectedDinner}
                  onChange={(e) => setSelectedDinner(e.target.value)}
                  options={[
                    { value: '', label: 'Select Dinner' },
                    ...dinners.map(dinner => ({
                      value: dinner.id,
                      label: `${dinner.title} - ${new Date(dinner.date).toLocaleDateString()}`,
                    })),
                  ]}
                  placeholder="Select Dinner"
                />
                <input
                  type="text"
                  placeholder="Search by email (min 3 characters)"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-[#F9FAFB]"
                />
                <button 
                  onClick={handleExportCSV}
                  className="w-full px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export All CSV
                </button>
                <button 
                  onClick={() => {
                    setShowCreateGroupModal(true);
                    // Initialize form with current selection if any
                    setValueGroup('selectedUsers', selectedUsers); 
                  }}
                  disabled={selectedUsers.length === 0}
                  className="w-full px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Group ({selectedUsers.length})
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Search groups (min 3 characters)"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-[#F9FAFB]"
                />
                <button 
                  onClick={handleExportCSV}
                  className="w-full px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export All CSV
                </button>
                <button 
                  onClick={() => {
                    setShowCreateGroupModal(true);
                    setValueGroup('selectedUsers', selectedUsers);
                  }}
                  className="w-full px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C]"
                >
                  Create Group
                </button>
              </>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('groups')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'groups'
                ? 'bg-[#111827] text-white'
                : 'bg-transparent text-[#6B7280] hover:bg-gray-100'
            }`}
          >
            Groups ({groups.length})
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-[#111827] text-white'
                : 'bg-transparent text-[#6B7280] hover:bg-gray-100'
            }`}
          >
            Dinner Requests ({requestsTotal})
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 border-b border-[#E5E7EB] flex-shrink-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <CustomDropdown
            value={activeTab === 'groups' ? filterCity : filterRequestCity}
            onChange={(e) => activeTab === 'groups' ? setFilterCity(e.target.value) : setFilterRequestCity(e.target.value)}
            options={[
              { value: '', label: 'All Cities' },
              { value: 'Cape Town', label: 'Cape Town' },
              { value: 'Johannesburg', label: 'Johannesburg' },
              { value: 'Durban', label: 'Durban' },
            ]}
            placeholder="All Cities"
          />
          
          <CustomDropdown
            value={activeTab === 'groups' ? filterDinner : filterRequestDinner}
            onChange={(e) => activeTab === 'groups' ? setFilterDinner(e.target.value) : setFilterRequestDinner(e.target.value)}
            options={[
              { value: '', label: 'All Dinners' },
              ...dinners.map(dinner => ({
                value: dinner.id,
                label: dinner.title,
              })),
            ]}
            placeholder="All Dinners"
          />
          
          <input
            type="date"
            value={activeTab === 'groups' ? filterDateFrom : filterRequestDateFrom}
            onChange={(e) => activeTab === 'groups' ? setFilterDateFrom(e.target.value) : setFilterRequestDateFrom(e.target.value)}
            placeholder="From Date"
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
          />
          
          <input
            type="date"
            value={activeTab === 'groups' ? filterDateTo : filterRequestDateTo}
            onChange={(e) => activeTab === 'groups' ? setFilterDateTo(e.target.value) : setFilterRequestDateTo(e.target.value)}
            placeholder="To Date"
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
          />
          
          {((activeTab === 'groups' && (filterCity || filterDinner || filterDateFrom || filterDateTo)) ||
            (activeTab === 'users' && (filterRequestCity || filterRequestDinner || filterRequestDateFrom || filterRequestDateTo))) && (
            <button
              onClick={() => {
                if (activeTab === 'groups') {
                  setFilterCity('');
                  setFilterDinner('');
                  setFilterDateFrom('');
                  setFilterDateTo('');
                } else {
                  setFilterRequestCity('');
                  setFilterRequestDinner('');
                  setFilterRequestDateFrom('');
                  setFilterRequestDateTo('');
                }
              }}
              className="w-full px-4 py-2 text-sm text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        )}

        {!loading && activeTab === 'groups' && <GroupsTable />}
        {!loading && activeTab === 'users' && selectedDinner && <RequestsTable />}
        
        {!loading && activeTab === 'users' && !selectedDinner && (
          <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Dinner</h3>
            <p className="text-gray-500">Please select a dinner event to view its requests</p>
          </div>
        )}
      </div>

      {/* Create Group Modal */}
      {showCreateGroupModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#111827]">Create New Group</h3>
              <button 
                onClick={() => {
                  setShowCreateGroupModal(false);
                  resetGroup();
                  setSelectedRestaurant('');
                  setError('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Group Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...registerGroup('groupName')}
                  placeholder="e.g., Group 01"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errorsGroup.groupName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errorsGroup.groupName && <p className="text-red-500 text-xs mt-1">{errorsGroup.groupName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Dinner <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="selectedDinnerForGroup"
                  control={controlGroup}
                  render={({ field }) => (
                    <CustomDropdown
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={[
                        { value: '', label: 'Select a dinner' },
                        ...dinners.map(dinner => ({
                          value: dinner.id,
                          label: `${dinner.title} - ${new Date(dinner.date).toLocaleDateString()}`,
                        })),
                      ]}
                      placeholder="Select a dinner"
                      required
                      className={errorsGroup.selectedDinnerForGroup ? 'border-red-500' : ''}
                    />
                  )}
                />
                {errorsGroup.selectedDinnerForGroup && <p className="text-red-500 text-xs mt-1">{errorsGroup.selectedDinnerForGroup.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Restaurant (Optional)
                </label>
                <CustomDropdown
                  value={selectedRestaurant}
                  onChange={(e) => setSelectedRestaurant(e.target.value)}
                  options={[
                    { value: '', label: 'Select a restaurant (optional)' },
                    ...restaurants.map(restaurant => ({
                      value: restaurant.id,
                      label: `${restaurant.name} - ${restaurant.location}`,
                    })),
                  ]}
                  placeholder="Select a restaurant (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Users <span className="text-red-500">*</span>
                </label>
                {/* Hidden input to register selectedUsers array for validation */}
                <input type="hidden" {...registerGroup('selectedUsers')} />
                <div className={`bg-gray-50 rounded-lg p-3 max-h-48 overflow-y-auto ${errorsGroup.selectedUsers ? 'border border-red-500' : ''}`}>
                  {selectedUsers.length === 0 ? (
                    <p className="text-sm text-gray-500">No users selected</p>
                  ) : (
                    <ul className="space-y-1">
                      {selectedUsers.map(userId => {
                        const request = dinnerRequests.find(r => r.user.id === userId);
                        // If coming from existing groups list or searched users not in requests, might need user fetch or store user info.
                        // Assuming dinnerRequests contains all eligible users for now or fetching logic is separate.
                        const user = request?.user; 
                        // Fallback display if user not found in current list (e.g. pagination) - might be just ID if not found
                        const displayName = user ? `${user.first_name} ${user.last_name} (${user.email})` : `User ID: ${userId}`;
                        return (
                          <li key={userId} className="text-sm text-gray-700">
                            • {displayName}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                {errorsGroup.selectedUsers && <p className="text-red-500 text-xs mt-1">{errorsGroup.selectedUsers.message}</p>}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowCreateGroupModal(false);
                    resetGroup();
                    setSelectedRestaurant('');
                    setError('');
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitGroup(handleCreateGroup)}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating...' : 'Create Group'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Make Booking Modal */}
      {showMakeBookingModal && selectedGroup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#111827]">Make Booking</h3>
              <button 
                onClick={() => {
                  setShowMakeBookingModal(false);
                  setSelectedGroup(null);
                  setSelectedRestaurant('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Confirm booking for group: <span className="font-semibold">{selectedGroup.name}</span>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Restaurant (Optional)
                </label>
                <CustomDropdown
                  value={selectedRestaurant}
                  onChange={(e) => setSelectedRestaurant(e.target.value)}
                  options={[
                    { value: '', label: 'Select a restaurant (optional)' },
                    ...restaurants.map(restaurant => ({
                      value: restaurant.id,
                      label: `${restaurant.name} - ${restaurant.location}`,
                    })),
                  ]}
                  placeholder="Select a restaurant (optional)"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowMakeBookingModal(false);
                    setSelectedGroup(null);
                    setSelectedRestaurant('');
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleMakeBooking}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] disabled:opacity-50"
                >
                  {loading ? 'Confirming...' : 'Confirm Booking'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && selectedGroup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Group</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete "{selectedGroup.name}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setSelectedGroup(null);
                }}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteGroup}
                className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Profile Modal */}
      {showViewProfile && selectedProfile && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#111827]">User Profile</h3>
              <button 
                onClick={() => {
                  setShowViewProfile(false);
                  setSelectedProfile(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-sm text-gray-900">{formatDisplayValue(`${selectedProfile.first_name || ''} ${selectedProfile.last_name || ''}`.trim())}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-sm text-gray-900">{formatDisplayValue(selectedProfile.email)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Gender</label>
                  <p className="text-sm text-gray-900">{formatDisplayValue(selectedProfile.profile?.gender)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Age</label>
                  <p className="text-sm text-gray-900">{calculateAge(selectedProfile.profile?.date_of_birth)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Area</label>
                  <p className="text-sm text-gray-900">{formatDisplayValue(selectedProfile.profile?.area)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Language</label>
                  <p className="text-sm text-gray-900">{capitalizeWords(selectedProfile.profile?.language)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Meal Preference</label>
                  <p className="text-sm text-gray-900">{capitalizeWords(selectedProfile.profile?.meal_preference)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Budget</label>
                  <p className="text-sm text-gray-900">{formatDisplayValue(selectedProfile.profile?.budget)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Nationality</label>
                  <p className="text-sm text-gray-900">{capitalizeWords(selectedProfile.profile?.nationality)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Industry</label>
                  <p className="text-sm text-gray-900">{capitalizeWords(selectedProfile.profile?.industry)}</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setShowViewProfile(false);
                    setSelectedProfile(null);
                  }}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupAttendeesPage;
