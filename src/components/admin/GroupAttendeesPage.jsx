"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { api, API_ENDPOINTS } from '../../utils/api';
import { DatePicker } from "@/components/ui/date-picker";
import { format } from "date-fns";
import { toast } from 'react-hot-toast';
import {
  disabledBeforeYmd,
  disabledAfterYmd,
  compareYmd,
} from '@/utils/dateRangeFilters';
import { debounce, formatDisplayValue, isValidSearchQuery, capitalizeWords } from '../../utils/searchHelper';
import { CustomDropdown, InlineSpinner } from '@/components/common';
import { TablePagination } from '@/components/ui/Pagination';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createGroupSchema } from '@/constants/validationSchemas';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';

// Helper Components defined outside to prevent re-creation on render
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

const DroppableGroupCard = ({ groupId, children, innerRef }) => {
  const { setNodeRef, isOver } = useDroppable({ id: `group-${groupId}` });
  const mergeRef = (el) => {
    setNodeRef(el);
    if (innerRef) innerRef.current = el;
  };
  return (
    <div
      ref={mergeRef}
      className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden transition-colors min-h-[120px] ${
        isOver ? 'border-[#F97316] bg-orange-50/30 ring-2 ring-[#F97316]/30' : 'border-[#E5E7EB]'
      }`}
    >
      {children}
    </div>
  );
};

const DraggableMemberRow = ({ group, member }) => {
  const dragId = `user-${member.id}-group-${group.id}`;
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: dragId });
  return (
    <tr
      ref={setNodeRef}
      className={`transition-colors ${isDragging ? 'bg-[#F3F4F6] opacity-40' : 'hover:bg-[#F9FAFB]'}`}
    >
      <td className="px-6 py-4 text-[#9CA3AF]">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing touch-none w-fit p-1 -m-1 rounded hover:bg-[#E5E7EB]"
          title="Drag to move to another group"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#111827]">
        {formatDisplayValue(`${member.first_name || ''} ${member.last_name || ''}`.trim())}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
        {formatDisplayValue(member.email)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <GenderBadge gender={member.profile?.gender} />
      </td>
    </tr>
  );
};

const GroupAttendeesPage = () => {
  const [activeTab, setActiveTab] = useState('groups'); // 'groups' or 'users'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDinner, setSelectedDinner] = useState('');
  const [dinners, setDinners] = useState([]);
  const [cities, setCities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [dinnerRequests, setDinnerRequests] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exportingCsv, setExportingCsv] = useState(false);
  const [error, setError] = useState('');
  
  // Modals
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showMakeBookingModal, setShowMakeBookingModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showViewProfile, setShowViewProfile] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [activeDragId, setActiveDragId] = useState(null);

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
  
  // Pagination - Requests (Users tab) – same pattern as other admin tables
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
    api.get(API_ENDPOINTS.GET_CITY_AREA)
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        setCities(raw);
      })
      .catch(() => setCities([]));
  }, []);

  const cityOptions = [
    { value: '', label: 'All Cities' },
    ...cities.map((c) => ({ value: c.id, label: c.name })),
  ];

  useEffect(() => {
    if (activeTab !== "users") return;
    fetchDinnerRequests();
  }, [
    activeTab,
    selectedDinner,
    requestsPage,
    requestsPageSize,
    filterRequestCity,
    filterRequestDinner,
    filterRequestDateFrom,
    filterRequestDateTo,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

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
  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab;

  const debouncedSearchRef = useRef(null);
  if (!debouncedSearchRef.current) {
    debouncedSearchRef.current = debounce((query) => {
      if (activeTabRef.current === 'groups') {
        setGroupsPage(0);
        setGroups([]);
        setHasMoreGroups(true);
        if (fetchGroupsRef.current) fetchGroupsRef.current(false, query);
      } else {
        setRequestsPage(0);
        if (fetchDinnerRequestsRef.current) {
          fetchDinnerRequestsRef.current(query);
        }
      }
    }, 500);
  }
  const debouncedSearch = debouncedSearchRef.current;

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
        const list = response.data || [];
        setDinners(list);
        setSelectedDinner((prev) =>
          prev === "" && list.length > 0 ? String(list[0].id) : prev,
        );
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
      // Same as other admin pages: index = start record index (skip), offset = page size (limit)
      const startIndex = requestsPage * requestsPageSize;
      params.append('index', startIndex);
      params.append('offset', requestsPageSize);
      if (selectedDinner) {
        const did = String(selectedDinner);
        params.append("dinner_id", did);
        params.append("dinner", did);
      }
      
      const term = query !== null ? query : searchQuery;

      // Only add search if valid (3+ characters)
      if (isValidSearchQuery(term)) {
        params.append('search', term);
      }
      if (filterRequestCity) params.append('city', filterRequestCity);
      if (filterRequestDinner) params.append('dinner', filterRequestDinner);
      if (filterRequestDateFrom) params.append('start_date', filterRequestDateFrom);
      if (filterRequestDateTo) params.append('end_date', filterRequestDateTo);
      
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
      if (filterDateFrom) params.append('start_date', filterDateFrom);
      if (filterDateTo) params.append('end_date', filterDateTo);
      
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
      const memberIds = (selectedGroup.members || []).map((m) => m.id);
      const response = await api.put(API_ENDPOINTS.GROUP_UPDATE, {
        group_id: selectedGroup.id,
        is_booked: true,
        members: memberIds,
        restaurant_id: selectedRestaurant || null,
        dinner_id: selectedGroup.dinner_id || null,
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
      toast.error(err?.message || 'Failed to confirm booking');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGroup = async () => {
    if (!selectedGroup) return;

    try {
      setLoading(true);
      const response = await api.delete(API_ENDPOINTS.GROUP_DELETE(selectedGroup.id));

      if (response.success) {
        toast.success('Group deleted successfully');
        setShowDeleteConfirm(false);
        setSelectedGroup(null);
        fetchGroups();
      }
    } catch (err) {
      console.error('Error deleting group:', err);
      toast.error(err?.message || 'Failed to delete group');
    } finally {
      setLoading(false);
    }
  };

  /** Move a user from source group to target group; updates both groups via API. */
  const updateGroupAPI = async (group, newMembers) => {
    // Check if `group.dinner` or `group.restaurant` are objects or if we have direct IDs
    const dinnerId = group.dinner_id || group.dinner?.id || null;
    const restaurantId = group.restaurant_id || group.restaurant?.id || null;

    return api.put(API_ENDPOINTS.GROUP_UPDATE, {
      group_id: group.id,
      is_booked: group.is_booked ?? false,
      members: newMembers,
      restaurant_id: restaurantId,
      dinner_id: dinnerId,
    });
  };

  const handleMoveUserToGroup = async (sourceGroup, targetGroup, userId) => {
    // 1. Calculate new states
    const movedMember = (sourceGroup.members || []).find((m) => m.id === userId);
    if (!movedMember) {
      console.error("Member not found in source group");
      return;
    }

    const sourceMembers = (sourceGroup.members || []).filter((m) => m.id !== userId);
    const sourceMemberIds = sourceMembers.map((m) => m.id);
    
    // Use filter to ensure no duplicates in target group
    const targetMembersRaw = targetGroup.members || [];
    const targetMembers = [...targetMembersRaw.filter(m => m.id !== userId), movedMember];
    const targetMemberIds = targetMembers.map((m) => m.id);

    // 2. Optimistic Update
    const previousGroups = [...groups];
    
    setGroups(prevGroups => {
      return prevGroups.map(g => {
        if (g.id === sourceGroup.id) {
          return { ...g, members: sourceMembers };
        }
        if (g.id === targetGroup.id) {
          return { ...g, members: targetMembers };
        }
        return g;
      });
    });

    try {
      // 3. API Calls
      // We update both groups to reflect the move persistently
      const [updateSource, updateTarget] = await Promise.all([
        updateGroupAPI(sourceGroup, sourceMemberIds),
        updateGroupAPI(targetGroup, targetMemberIds),
      ]);

      if (updateSource?.success && updateTarget?.success) {
        toast.success('User moved successfully');
        // Optional: fetchGroups(false) to ensure server sync, but optimistic should be enough for smoothness
      } else {
        throw new Error(updateSource?.message || updateTarget?.message || 'Failed to move user');
      }
    } catch (err) {
      console.error('Error moving user between groups:', err);
      toast.error(err?.message || 'Failed to move user');
      // 4. Revert on failure
      setGroups(previousGroups);
    }
  };

  const handleDragStart = useCallback((event) => {
    setActiveDragId(event.active.id);
  }, []);

  const handleDragEnd = useCallback(
    (event) => {
      setActiveDragId(null);
      const { active, over } = event;
      if (!over?.id) return;
      const dragId = String(active.id);
      const overId = String(over.id);
      if (!dragId.startsWith('user-') || !overId.startsWith('group-')) return;
      const match = dragId.match(/^user-(.+)-group-(.+)$/);
      if (!match) return;
      const [, userId, sourceGroupId] = match;
      const targetGroupId = overId.replace(/^group-/, '');
      if (sourceGroupId === targetGroupId) return;

      const sourceGroup = groups.find((g) => String(g.id) === sourceGroupId);
      const targetGroup = groups.find((g) => String(g.id) === targetGroupId);
      if (!sourceGroup || !targetGroup) return;

      const userIdActual = isNaN(Number(userId)) ? userId : Number(userId);
      handleMoveUserToGroup(sourceGroup, targetGroup, userIdActual);
    },
    [groups]
  );

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
    setExportingCsv(true);
    try {
      if (activeTab === 'groups') {
        const params = new URLSearchParams();
        params.append("export", "true");
        
        if (isValidSearchQuery(searchQuery)) {
          params.append("search", searchQuery);
        }
        if (filterCity) params.append('city', filterCity);
        if (filterDinner) params.append('dinner', filterDinner);
        if (filterDateFrom) params.append('start_date', filterDateFrom);
        if (filterDateTo) params.append('end_date', filterDateTo);

        const response = await api.get(`${API_ENDPOINTS.GROUP_LIST}?${params}`);
        const allGroups = response.groups || [];

        if (allGroups.length === 0) {
          toast.error("No groups to export");
          return;
        }

        const headers = ["Group Name", "Member Name", "Member Email", "Member Gender"];
        
        const csvRows = [headers.join(",")];

        allGroups.forEach(group => {
           const members = group.members || [];
           if (members.length === 0) {
             csvRows.push([
               `"${String(group.name).replace(/"/g, '""')}"`,
               "-",
               "-",
               "-"
             ].join(","));
           } else {
             members.forEach(member => {
               csvRows.push([
                 `"${String(group.name).replace(/"/g, '""')}"`,
                 `"${String(member.first_name || '' + ' ' + member.last_name || '').trim().replace(/"/g, '""')}"`,
                 `"${String(member.email).replace(/"/g, '""')}"`,
                 `"${String(member.profile?.gender || '-').replace(/"/g, '""')}"`
               ].join(","));
             });
           }
        });

        const csvContent = csvRows.join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `groups_export_${new Date().toISOString().split("T")[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

      } else {
        // Users Tab (Dinner Requests)
        const params = new URLSearchParams();
        params.append("export", "true");
        if (selectedDinner) {
          const did = String(selectedDinner);
          params.append("dinner_id", did);
          params.append("dinner", did);
        }
        
        if (isValidSearchQuery(searchQuery)) {
          params.append('search', searchQuery);
        }
        if (filterRequestCity) params.append('city', filterRequestCity);
        if (filterRequestDinner) params.append('dinner', filterRequestDinner);
        if (filterRequestDateFrom) params.append('start_date', filterRequestDateFrom);
        if (filterRequestDateTo) params.append('end_date', filterRequestDateTo);
        
        const response = await api.get(`${API_ENDPOINTS.DINNER_REQUESTS_LIST}?${params}`);
        const allRequests = response.data || [];

        if (allRequests.length === 0) {
          toast.error("No requests to export");
          return;
        }

        const headers = [
          "Name", "Email", "Gender", "Age", "Area", 
          "Language", "Nationality", "Meal Preference", "Budget"
        ];

        const csvContent = [
          headers.join(","),
          ...allRequests.map(item => {
            const user = item.user || {};
            const profile = user.profile || {};
            
            const row = [
              formatDisplayValue(`${user.first_name || ''} ${user.last_name || ''}`.trim()),
              formatDisplayValue(user.email),
              formatDisplayValue(profile.gender),
              calculateAge(profile.date_of_birth),
              formatDisplayValue(profile.area),
              capitalizeWords(profile.language),
              capitalizeWords(profile.nationality),
              capitalizeWords(profile.meal_preference),
              formatDisplayValue(profile.budget)
            ];
            
            return row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(",");
          })
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `dinner_requests_export_${new Date().toISOString().split("T")[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error('Error exporting CSV:', err);
      toast.error('Failed to export CSV');
    } finally {
      setExportingCsv(false);
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

  const dndSensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    })
  );

  const getDraggedMemberAndGroup = useCallback((dragId) => {
    if (!dragId) return null;
    const match = String(dragId).match(/^user-(.+)-group-(.+)$/);
    if (!match) return null;
    const [, userId, groupId] = match;
    const group = groups.find((g) => String(g.id) === groupId);
    if (!group?.members) return null;
    const member = group.members.find((m) => String(m.id) === userId);
    return member && group ? { member, group } : null;
  }, [groups]);

  // Derived state for dragged item overlay
  const draggedItem = activeDragId ? getDraggedMemberAndGroup(activeDragId) : null;

  // Requests Table Component
  const RequestsTable = () => {
    const allSelected = dinnerRequests.length > 0 && selectedUsers.length === dinnerRequests.length;

    return (
      <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <tr>
                <th className="px-6 py-3 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 h-4 w-4"
                    checked={allSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Age</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Area</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Language</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Nationality</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Meal Pref.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Budget</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {dinnerRequests.length === 0 ? (
                <tr>
                  <td colSpan="11" className="px-6 py-8 text-center text-sm text-[#6B7280]">
                    No requests found
                  </td>
                </tr>
              ) : (
                dinnerRequests.map((item, index) => {
                  const user = item.user;
                  const profile = user.profile || {};
                  const isSelected = selectedUsers.includes(user.id);

                  return (
                    <tr key={`${user.id}-${item.id || index}`} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-4">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 h-4 w-4"
                          checked={isSelected}
                          onChange={(e) => handleSelectUser(user.id, e.target.checked)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#111827]">
                        {formatDisplayValue(user.first_name || user.last_name ? `${user.first_name} ${user.last_name}`.trim() : '')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">{formatDisplayValue(user.email)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <GenderBadge gender={profile.gender} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {calculateAge(profile.date_of_birth)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.area)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.language)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.nationality)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.meal_preference)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(profile.budget)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={(e) => {
                              e.stopPropagation();
                              // Implement dropdown or actions
                              setSelectedProfile(user);
                              setShowViewProfile(true);
                          }}
                          className="text-[#9CA3AF] hover:text-[#111827] p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination – same as other admin pages (e.g. Admin Dashboard) */}
        <TablePagination
          currentPage={requestsPage}
          total={requestsTotal}
          pageSize={requestsPageSize}
          onPageChange={setRequestsPage}
          pageSizeOptions={[
            { value: 10, label: '10 per page' },
            { value: 25, label: '25 per page' },
            { value: 50, label: '50 per page' },
            { value: 100, label: '100 per page' },
          ]}
          onPageSizeChange={(size) => {
            setRequestsPageSize(size);
            setRequestsPage(0);
          }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b border-[#E5E7EB] flex-shrink-0">
        <div className="flex flex-col gap-6 mb-6">
          <div>
            <h1 className="text-xl font-bold text-[#111827]">User Data Management</h1>
            <p className="text-sm text-[#6B7280] mt-1">Manage customers data and bookings</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center bg-[#F3F4F6] p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('groups')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'groups'
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#374151]'
                }`}
              >
                Groups
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'users'
                    ? 'bg-[#111827] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#374151]'
                }`}
              >
                Users
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {activeTab === 'users' ? (
                <>
                  <div className="relative flex-1 sm:w-64">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={handleExportCSV}
                    disabled={exportingCsv}
                    className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {exportingCsv ? (
                      <InlineSpinner className="h-4 w-4 text-[#374151]" label="Exporting" />
                    ) : (
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    )}
                    {exportingCsv ? 'Exporting…' : 'Export All CSV'}
                  </button>
                  <button 
                    onClick={() => {
                      setShowCreateGroupModal(true);
                      setValueGroup('selectedUsers', selectedUsers); 
                    }}
                    className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 whitespace-nowrap"
                  >
                    Create Manual Group
                  </button>
                  <button 
                    className="px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] whitespace-nowrap"
                  >
                    AI Match
                  </button>
                </>
              ) : (
                <>
                  <div className="relative flex-1 sm:w-64">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={handleExportCSV}
                    disabled={exportingCsv}
                    className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {exportingCsv ? (
                      <InlineSpinner className="h-4 w-4 text-[#374151]" label="Exporting" />
                    ) : (
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    )}
                    {exportingCsv ? 'Exporting…' : 'Export All CSV'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 border-b border-[#E5E7EB] flex-shrink-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Dinner Context for Users Tab */}
          {activeTab === 'users' ? (
             <CustomDropdown
               value={selectedDinner}
               onChange={(e) => {
                 setRequestsPage(0);
                 const v = e.target.value;
                 setSelectedDinner(v === "" || v == null ? "" : String(v));
               }}
               options={[
                 { value: '', label: 'All dinner events' },
                 ...dinners.map((dinner) => ({
                   value: String(dinner.id),
                   label: `${dinner.title} - ${new Date(dinner.date).toLocaleDateString()}`,
                 })),
               ]}
               placeholder="All dinner events"
             />
          ) : (
            <div className="hidden">
              <CustomDropdown
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                options={cityOptions}
                placeholder="All Cities"
              />
            </div>
          )}
          
          {/* Second Filter */}
          {activeTab === 'users' ? (
            <CustomDropdown
              value={filterRequestCity}
              onChange={(e) => {
                setRequestsPage(0);
                setFilterRequestCity(e.target.value);
              }}
              options={cityOptions}
              placeholder="All Cities"
            />
          ) : (
            <CustomDropdown
              value={filterDinner}
              onChange={(e) => setFilterDinner(e.target.value)}
              options={[
                { value: '', label: 'All Dinners' },
                ...dinners.map((dinner) => ({
                  value: String(dinner.id),
                  label: dinner.title,
                })),
              ]}
              placeholder="All Dinners"
            />
          )}
          
          <DatePicker
            date={
                activeTab === 'groups' 
                ? (filterDateFrom ? new Date(filterDateFrom) : undefined)
                : (filterRequestDateFrom ? new Date(filterRequestDateFrom) : undefined)
            }
            onSelect={(date) => {
                const val = date ? format(date, "yyyy-MM-dd") : "";
                if (activeTab === "users") setRequestsPage(0);
                if (activeTab === 'groups') {
                  setFilterDateFrom(val);
                  setFilterDateTo((prev) =>
                    val && prev && compareYmd(prev, val) < 0 ? "" : prev,
                  );
                } else {
                  setFilterRequestDateFrom(val);
                  setFilterRequestDateTo((prev) =>
                    val && prev && compareYmd(prev, val) < 0 ? "" : prev,
                  );
                }
            }}
            placeholder="From Date"
            className="w-full"
            disabled={
              activeTab === 'groups'
                ? disabledAfterYmd(filterDateTo)
                : disabledAfterYmd(filterRequestDateTo)
            }
          />
          
          <DatePicker
            date={
                activeTab === 'groups' 
                ? (filterDateTo ? new Date(filterDateTo) : undefined)
                : (filterRequestDateTo ? new Date(filterRequestDateTo) : undefined)
            }
            onSelect={(date) => {
                const val = date ? format(date, "yyyy-MM-dd") : "";
                if (activeTab === 'groups') {
                  if (val && filterDateFrom && compareYmd(val, filterDateFrom) < 0) {
                    toast.error("To date cannot be before from date");
                    return;
                  }
                  setFilterDateTo(val);
                } else {
                  if (
                    val &&
                    filterRequestDateFrom &&
                    compareYmd(val, filterRequestDateFrom) < 0
                  ) {
                    toast.error("To date cannot be before from date");
                    return;
                  }
                  setFilterRequestDateTo(val);
                }
                if (activeTab === "users") setRequestsPage(0);
            }}
            placeholder="To Date"
            className="w-full"
            disabled={
              activeTab === 'groups'
                ? disabledBeforeYmd(filterDateFrom)
                : disabledBeforeYmd(filterRequestDateFrom)
            }
          />
          
          {((activeTab === 'groups' &&
            (filterCity ||
              filterDinner ||
              filterDateFrom ||
              filterDateTo ||
              isValidSearchQuery(searchQuery))) ||
            (activeTab === 'users' &&
              (filterRequestCity ||
                filterRequestDinner ||
                filterRequestDateFrom ||
                filterRequestDateTo ||
                isValidSearchQuery(searchQuery)))) && (
            <div className="sm:col-span-2 lg:col-span-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  debouncedSearchRef.current?.cancel?.();
                  setSearchQuery('');
                  if (activeTab === 'groups') {
                    setFilterCity('');
                    setFilterDinner('');
                    setFilterDateFrom('');
                    setFilterDateTo('');
                    setGroupsPage(0);
                    setGroups([]);
                    setHasMoreGroups(true);
                    setTimeout(() => fetchGroupsRef.current?.(false, ''), 0);
                  } else {
                    setFilterRequestCity('');
                    setFilterRequestDinner('');
                    setFilterRequestDateFrom('');
                    setFilterRequestDateTo('');
                    setRequestsPage(0);
                    setTimeout(() => fetchDinnerRequestsRef.current?.(''), 0);
                  }
                }}
                className="text-sm text-[#F97316] hover:text-[#EA580C] font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
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

        {!loading && activeTab === 'groups' && (
          <DndContext sensors={dndSensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="space-y-6">
              {groups.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-[#E5E7EB]">
                  <p className="text-sm text-[#6B7280]">No groups found</p>
                </div>
              ) : (
                <>
                  {groups.map((group, index) => {
                    const isLastElement = groups.length === index + 1;
                    const members = group.members || [];
                    
                    const femaleCount = members.filter(m => m.profile?.gender === 'Female' || m.profile?.gender === 'F').length;
                    const maleCount = members.filter(m => m.profile?.gender === 'Male' || m.profile?.gender === 'M').length;
                    
                    return (
                      <DroppableGroupCard
                        key={group.id}
                        groupId={group.id}
                        innerRef={isLastElement ? lastGroupElementRef : undefined}
                      >
                        {/* Group Header */}
                        <div className="px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#FFF7ED] rounded-lg flex items-center justify-center text-[#F97316]">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-base font-bold text-[#111827]">{group.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-[#6B7280] mt-0.5">
                                <span>{members.length} peoples</span>
                                <span>•</span>
                                <span>{femaleCount}F/{maleCount}M</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                  setSelectedGroup(group);
                                  setShowDeleteConfirm(true);
                              }}
                              className="p-1.5 hover:bg-[#FEE2E2] text-[#DC2626] rounded transition-colors"
                              title="Delete Group"
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
                        </div>

                        {/* Members Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full">
                              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                                <tr>
                                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide w-10">
                                    {/* Drag handle */}
                                  </th>
                                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                                    Name
                                  </th>
                                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                                    Email
                                  </th>
                                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                                    Gender
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#F3F4F6]">
                                {members.length === 0 ? (
                                  <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-[#6B7280]">
                                      No members in this group — drag users from another group to add
                                    </td>
                                  </tr>
                                ) : (
                                  members.map((member) => (
                                    <DraggableMemberRow
                                      key={member.id}
                                      group={group}
                                      member={member}
                                    />
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
                      </DroppableGroupCard>
                    );
                  })}
                  {isLoadingMore && (
                    <div className="flex justify-center items-center py-4">
                      <svg className="animate-spin h-5 w-5 text-[#F97316]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="ml-2 text-sm text-[#6B7280]">Loading more...</span>
                    </div>
                  )}
                </>
              )}
              
              {/* Showing count */}
              {groups.length > 0 && (
                <div className="text-center py-4 text-sm text-[#6B7280]">
                  Showing {groups.length} of {groupsTotal} groups {hasMoreGroups && '(scroll for more)'}
                </div>
              )}
            </div>

            <DragOverlay dropAnimation={null}>
              {draggedItem ? (
                <div
                  className="flex items-center gap-0 bg-white rounded-xl border-2 border-[#F97316] shadow-2xl shadow-black/20 py-3 px-4 cursor-grabbing min-w-[320px]"
                  style={{ boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(249,115,22,0.2)' }}
                >
                  <div className="flex items-center justify-center w-10 shrink-0 text-[#9CA3AF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 flex items-center gap-4 pl-2">
                    <span className="text-sm font-medium text-[#111827] truncate">
                      {formatDisplayValue(`${draggedItem.member.first_name || ''} ${draggedItem.member.last_name || ''}`.trim()) || '—'}
                    </span>
                    <span className="text-sm text-[#6B7280] truncate hidden sm:inline">
                      {formatDisplayValue(draggedItem.member.email)}
                    </span>
                    <span className="shrink-0">
                      <GenderBadge gender={draggedItem.member.profile?.gender} />
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#F97316] bg-[#FFF7ED] px-2 py-1 rounded-lg shrink-0">
                    Moving to another group
                  </span>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        )}
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
                  Dinner <span className="text-red-500">*</span>
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
                  Restaurant (Optional)
                </label>
                <CustomDropdown
                  value={selectedRestaurant}
                  onChange={(e) => setSelectedRestaurant(e.target.value)}
                  options={[
                    { value: '', label: 'Select a restaurant' },
                    ...restaurants.map(restaurant => ({
                      value: restaurant.id,
                      label: `${restaurant.name} - ${restaurant.location}`,
                    })),
                  ]}
                  placeholder="Select a restaurant"
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
