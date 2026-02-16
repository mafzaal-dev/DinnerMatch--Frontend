"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useDinner } from '@/hooks/useDinner';
import { api, API_ENDPOINTS } from '@/utils/api';
import { CustomDropdown } from '@/components/common';

const CreateEditDinnerPage = ({ dinnerId = null, isEdit = false }) => {
  const router = useRouter();
  const { getDinner, createDinner, updateDinner, deleteDinner, loading } = useDinner();
  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [locations, setLocations] = useState([]);
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    dinner_type: 'Open',
    is_published: false,
  });

  useEffect(() => {
    fetchLocations();
    if (isEdit && dinnerId) {
      fetchDinner();
    }
  }, [isEdit, dinnerId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchLocations = async () => {
    try {
      // TODO: Replace with actual API endpoint when backend is ready
      setLocations([
        { id: 'cape-town', name: 'Cape Town' },
        { id: 'johannesburg', name: 'Johannesburg' },
        { id: 'durban', name: 'Durban' },
        { id: 'pretoria', name: 'Pretoria' },
        { id: 'lahore', name: 'Lahore' },
      ]);
    } catch (err) {
      console.error('Error fetching locations:', err);
    }
  };

  const fetchDinner = async () => {
    try {
      setInitialLoading(true);
      const dinner = await getDinner(dinnerId);
      
      if (dinner) {
        // Check if dinner_status indicates published state
        const isPublished = dinner.is_published || 
                           dinner.dinner_status === 'Upcoming' || 
                           dinner.dinner_status === 'Published';
        
        setFormData({
            title: dinner.title || '',
            date: dinner.date ? formatDateForInput(dinner.date) : '',
            location: dinner.location || '',
            dinner_type: dinner.dinner_type || 'Open',
            is_published: isPublished
        });
      } else {
        toast.error('Dinner not found');
        router.push('/admin/dinner-management');
      }
    } catch (error) {
      console.error('Failed to fetch dinner:', error);
      toast.error('Failed to load dinner details');
      router.push('/admin/dinner-management');
    } finally {
      setInitialLoading(false);
    }
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    // Format: YYYY-MM-DDTHH:MM
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveDinner = async () => {
    // Validation
    if (!formData.title.trim()) {
      toast.error('Please enter a title');
      return;
    }
    if (!formData.date) {
      toast.error('Please select a date and time');
      return;
    }
    if (!formData.location.trim()) {
      toast.error('Please enter a location');
      return;
    }

    try {
      // Format date to ISO string if needed
      const dateToSend = formData.date.includes('T') 
        ? new Date(formData.date).toISOString()
        : formData.date;

      const payload = {
        title: formData.title,
        date: dateToSend,
        location: formData.location,
        dinner_type: formData.dinner_type,
        is_published: formData.is_published,
        // Also send as dinner_status for backwards compatibility
        dinner_status: formData.is_published ? 'Upcoming' : 'Draft',
      };

      if (isEdit && dinnerId) {
        await updateDinner(dinnerId, payload);
        toast.success('Dinner updated successfully');
      } else {
        await createDinner(payload);
        toast.success('Dinner created successfully');
      }
      
      router.push('/admin/dinner-management');
    } catch (error) {
      console.error('Operation failed:', error);
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleCancel = () => {
    router.push('/admin/dinner-management');
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this dinner? This action cannot be undone.')) {
      return;
    }

    try {
      await deleteDinner(dinnerId);
      toast.success('Dinner deleted successfully');
      router.push('/admin/dinner-management');
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete dinner');
    }
  };

  if (initialLoading) {
    return (
      <div className="flex-1 bg-[#F9FAFB] min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading dinner...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 border-b border-[#E5E7EB] flex-shrink-0">
        <h1 className="text-xl font-semibold text-[#111827]">
          {isEdit ? 'Edit Dinner' : 'Create Dinner'}
        </h1>
        <p className="text-sm text-[#6B7280] mt-0.5">
          Please provide all of the information below to {isEdit ? 'update' : 'create'} your dinner.
        </p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">
              {isEdit ? 'Edit Dinner Details' : 'Dinner Details'}
            </h2>
            <p className="text-sm text-[#6B7280]">Please provide all of the information below.</p>
          </div>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter dinner title"
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                required
              />
            </div>

            {/* Date and Time */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Date & Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                required
              />
              <p className="mt-1 text-xs text-[#6B7280]">
                Select the date and time for the dinner event
              </p>
            </div>

            {/* Location - Backend Driven */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <CustomDropdown
                name="location"
                value={formData.location}
                onChange={handleChange}
                options={[
                  { value: '', label: 'Select location' },
                  ...locations.map((loc) => ({
                    value: loc.name,
                    label: loc.name,
                  })),
                ]}
                placeholder="Select location"
                required
              />
              <p className="mt-1 text-xs text-[#6B7280]">
                City or venue where the dinner will take place (API required for dynamic locations)
              </p>
            </div>

            {/* Status (formerly Dinner Type) */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <CustomDropdown
                name="dinner_type"
                value={formData.dinner_type}
                onChange={handleChange}
                options={[
                  { value: 'Open', label: 'Open' },
                  { value: 'Upcoming', label: 'Upcoming' },
                ]}
                placeholder="Select status"
              />
              <p className="mt-1 text-xs text-[#6B7280]">
                Select whether this is an open or upcoming dinner event
              </p>
            </div>

            {/* Publish Toggle (formerly Dinner Status) */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Publish
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, is_published: !prev.is_published }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 ${
                    formData.is_published ? 'bg-[#F97316]' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      formData.is_published ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-sm text-[#374151]">
                  {formData.is_published ? 'Published' : 'Draft'}
                </span>
              </div>
              <p className="mt-1 text-xs text-[#6B7280]">
                Toggle to publish or keep as draft
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB] mt-8">
            {/* Delete Button (only show in edit mode) */}
            <div>
              {isEdit && (
                <button
                  onClick={handleDelete}
                  className="px-5 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                  disabled={loading}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Dinner
                </button>
              )}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCancel}
                className="px-5 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveDinner}
                className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors disabled:opacity-50 flex items-center gap-2"
                disabled={loading}
              >
                {loading && (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isEdit ? 'Update Dinner' : 'Create Dinner'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditDinnerPage;