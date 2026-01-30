"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '../../utils/api';

const GroupAttendeesPage = () => {
  const [activeTab, setActiveTab] = useState('groups'); // 'groups' or 'users'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDinner, setSelectedDinner] = useState('');
  const [dinners, setDinners] = useState([]);
  const [dinnerRequests, setDinnerRequests] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [groupName, setGroupName] = useState('');

  // Fetch dinners on component mount
  useEffect(() => {
    fetchDinners();
    fetchGroups();
  }, []);

  // Fetch dinner requests when a dinner is selected
  useEffect(() => {
    if (selectedDinner && activeTab === 'users') {
      fetchDinnerRequests();
    }
  }, [selectedDinner, activeTab]);

  const fetchDinners = async () => {
    try {
      setLoading(true);
      const response = await api.get(API_ENDPOINTS.DINNER_LIST, {
        params: { index: 0, offset: 100 }
      });
      
      if (response.success) {
        setDinners(response.data || []);
        if (response.data && response.data.length > 0) {
          setSelectedDinner(response.data[0].id);
        }
      }
    } catch (err) {
      console.error('Error fetching dinners:', err);
      setError('Failed to load dinners');
    } finally {
      setLoading(false);
    }
  };

  const fetchDinnerRequests = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get(API_ENDPOINTS.DINNER_REQUESTS_LIST, {
        params: { 
          index: 0, 
          offset: 100,
          dinner_id: selectedDinner,
          search: searchQuery 
        }
      });
      
      if (response.success) {
        setDinnerRequests(response.data || []);
      }
    } catch (err) {
      console.error('Error fetching dinner requests:', err);
      setError('Failed to load dinner requests');
    } finally {
      setLoading(false);
    }
  };

  const fetchGroups = async () => {
    try {
      setLoading(true);
      const response = await api.get(API_ENDPOINTS.GROUP_LIST, {
        params: { index: 0, offset: 100 }
      });
      
      if (response.success) {
        setGroups(response.groups || []);
      }
    } catch (err) {
      console.error('Error fetching groups:', err);
      setError('Failed to load groups');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUser = (userId, checked) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      const allUserIds = dinnerRequests.map(request => request.user.id);
      setSelectedUsers(allUserIds);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleCreateGroup = async () => {
    if (selectedUsers.length === 0) {
      setError('Please select at least one user');
      return;
    }

    if (!groupName.trim()) {
      setError('Please enter a group name');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const response = await api.post(API_ENDPOINTS.GROUP_CREATE, {
        name: groupName,
        users: selectedUsers,
        dinner_id: selectedDinner
      });

      if (response.success) {
        alert('Group created successfully!');
        setShowCreateGroupModal(false);
        setGroupName('');
        setSelectedUsers([]);
        fetchGroups();
        setActiveTab('groups');
      }
    } catch (err) {
      console.error('Error creating group:', err);
      setError(err.message || 'Failed to create group');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsBooked = async (groupId) => {
    try {
      setLoading(true);
      const response = await api.put(API_ENDPOINTS.GROUP_MARK_BOOKED, {
        group_id: groupId
      });

      if (response.success) {
        alert('Group marked as booked!');
        fetchGroups();
      }
    } catch (err) {
      console.error('Error marking group as booked:', err);
      setError('Failed to mark group as booked');
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
      link.setAttribute('download', 'users.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Error exporting CSV:', err);
      setError('Failed to export CSV');
    }
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 'N/A';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Helper for Gender Badge
  const GenderBadge = ({ gender }) => {
    const normalizedGender = gender?.toUpperCase();
    const isValid = normalizedGender === 'F' || normalizedGender === 'M' || normalizedGender === 'FEMALE' || normalizedGender === 'MALE';
    const isFemale = normalizedGender === 'F' || normalizedGender === 'FEMALE';
    const displayGender = isFemale ? 'F' : normalizedGender === 'M' || normalizedGender === 'MALE' ? 'M' : 'N/A';
    
    return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-medium ${
        !isValid 
          ? 'bg-gray-100 text-gray-600'
          : isFemale 
          ? 'bg-pink-100 text-pink-600' 
          : 'bg-blue-100 text-blue-600'
      }`}>
        {displayGender}
    </span>
  );
  };

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
  const UserTable = ({ data, showActions = true, isRequestsTable = false }) => {
    const allSelected = isRequestsTable && data.length > 0 && selectedUsers.length === data.length;
    
    return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-max">
        <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
          <tr>
              {isRequestsTable && (
               <th className="px-4 py-3 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    checked={allSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
               </th>
            )}
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Email</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Gender</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Age</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Nationality</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Industry</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wide">Status</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-[#6B7280] uppercase tracking-wide"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3F4F6]">
            {data.length === 0 ? (
              <tr>
                <td colSpan={isRequestsTable ? 9 : 8} className="px-4 py-8 text-center text-sm text-[#6B7280]">
                  {isRequestsTable ? 'No dinner requests found' : 'No data available'}
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const user = isRequestsTable ? item.user : item;
                const userId = user.id;
                const profile = user.profile || {};
                const isSelected = selectedUsers.includes(userId);
                
                return (
                  <tr key={`${userId}-${index}`} className="hover:bg-[#F9FAFB] transition-colors">
                    {isRequestsTable && (
                 <td className="px-4 py-3">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                          checked={isSelected}
                          onChange={(e) => handleSelectUser(userId, e.target.checked)}
                        />
                 </td>
               )}
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#111827]">
                      {user.first_name || user.last_name ? `${user.first_name} ${user.last_name}`.trim() : 'N/A'}
                    </td>
              <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">{user.email}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <GenderBadge gender={profile.gender || 'N/A'} />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                      {calculateAge(profile.date_of_birth)}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                      {profile.nationality || 'N/A'}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                      {profile.industry || 'N/A'}
                    </td>
              <td className="px-4 py-3.5 whitespace-nowrap">
                      {isRequestsTable && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                          item.request_status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : item.request_status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.request_status}
                </span>
                      )}
              </td>
              <td className="px-4 py-3.5 whitespace-nowrap text-right">
                <button className="text-[#9CA3AF] hover:text-[#111827]">
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
  );
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-6 border-b border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-[#111827]">Group & Attendees Management</h1>
            <p className="text-sm text-[#6B7280] mt-1">Manage dinner requests and create groups</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
             {activeTab === 'users' ? (
                 <>
                   <select
                     value={selectedDinner}
                     onChange={(e) => setSelectedDinner(e.target.value)}
                     className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                   >
                     <option value="">Select Dinner</option>
                     {dinners.map(dinner => (
                       <option key={dinner.id} value={dinner.id}>
                         {dinner.title} - {new Date(dinner.date).toLocaleDateString()}
                       </option>
                     ))}
                   </select>
                   <div className="relative">
                      <input
                        type="text"
                        placeholder="Search by email"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && fetchDinnerRequests()}
                        className="pl-4 pr-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-64 bg-[#F9FAFB]"
                      />
                   </div>
                   <button 
                     onClick={handleExportCSV}
                     className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
                   >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                     </svg>
                     Export All CSV
                   </button>
                   <button 
                     onClick={() => setShowCreateGroupModal(true)}
                     disabled={selectedUsers.length === 0}
                     className="px-4 py-2 bg-[#FFAA55] text-white rounded-lg text-sm font-medium hover:bg-[#FF9933] disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     Create Group ({selectedUsers.length})
                   </button>
                 </>
             ) : (
                <>
                  <div className="relative">
                      <input
                        type="text"
                        placeholder="Search groups"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-4 pr-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-64 bg-[#F9FAFB]"
                      />
                   </div>
                   <button 
                     onClick={handleExportCSV}
                     className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
                   >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                     </svg>
                     Export All CSV
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
            Groups ({groups.length})
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-[#111827] text-white'
                : 'bg-transparent text-[#6B7280] hover:bg-gray-100'
            }`}
          >
            Dinner Requests ({dinnerRequests.length})
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        )}

        {!loading && activeTab === 'groups' && (
          <div className="space-y-6">
            {groups.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Groups Yet</h3>
                <p className="text-gray-500">Create your first group from dinner requests</p>
              </div>
            ) : (
              <>
                <div className="text-sm text-[#6B7280]">
                  Total: {groups.reduce((acc, g) => acc + g.total_members, 0)} attendees across {groups.length} groups
                </div>
                {groups.map((group) => {
                  const genderCounts = group.members?.reduce((acc, member) => {
                    const gender = member.profile?.gender || 'N/A';
                    acc[gender] = (acc[gender] || 0) + 1;
                    return acc;
                  }, {});
                  
                  return (
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
                            <p className="text-xs text-[#6B7280]">
                              {group.total_members} members
                              {genderCounts && Object.keys(genderCounts).length > 0 && 
                                ` . ${Object.entries(genderCounts).map(([g, c]) => `${c}${g}`).join('/')}`
                              }
                            </p>
                    </div>
                          {group.is_booked && (
                            <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Booked
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#6B7280]">
                            Created: {new Date(group.created_at).toLocaleDateString()}
                          </span>
                             </div>
                         </div>

                      {/* Group Members */}
                      <UserTable data={group.members || []} showActions={false} isRequestsTable={false} />

                      {/* Group Actions */}
                      <div className="p-6 border-t border-[#E5E7EB] bg-white flex justify-end gap-3">
                        <button className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#374151] rounded-lg text-sm font-medium hover:bg-gray-50">
                          View Details
                               </button>
                        {!group.is_booked && (
                          <button 
                            onClick={() => handleMarkAsBooked(group.id)}
                            className="px-4 py-2 bg-[#FFAA55] text-white rounded-lg text-sm font-medium hover:bg-[#FF9933]"
                          >
                                   Mark as Booked
                               </button>
                        )}
                           </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}

        {!loading && activeTab === 'users' && (
          <>
            {!selectedDinner ? (
              <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Dinner</h3>
                <p className="text-gray-500">Please select a dinner event to view its requests</p>
              </div>
            ) : (
           <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E5E7EB] bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-900">
                    Showing requests for: {dinners.find(d => d.id === selectedDinner)?.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Total requests: {dinnerRequests.length} | Selected: {selectedUsers.length}
                  </p>
                </div>
                <UserTable data={dinnerRequests} showActions={true} isRequestsTable={true} />
           </div>
            )}
          </>
        )}
      </div>

      {/* Create Group Modal */}
      {showCreateGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#111827]">Create New Group</h3>
              <button 
                onClick={() => {
                  setShowCreateGroupModal(false);
                  setGroupName('');
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
                  Group Name
                </label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="e.g., Group 01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Users
                </label>
                <div className="bg-gray-50 rounded-lg p-3 max-h-48 overflow-y-auto">
                  {selectedUsers.length === 0 ? (
                    <p className="text-sm text-gray-500">No users selected</p>
                  ) : (
                    <ul className="space-y-1">
                      {selectedUsers.map(userId => {
                        const request = dinnerRequests.find(r => r.user.id === userId);
                        const user = request?.user;
                        return (
                          <li key={userId} className="text-sm text-gray-700">
                            • {user?.first_name} {user?.last_name} ({user?.email})
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowCreateGroupModal(false);
                    setGroupName('');
                    setError('');
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateGroup}
                  disabled={loading || !groupName.trim() || selectedUsers.length === 0}
                  className="flex-1 px-4 py-2 bg-[#FFAA55] text-white rounded-lg hover:bg-[#FF9933] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating...' : 'Create Group'}
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
