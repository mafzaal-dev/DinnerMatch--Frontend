"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useRestaurant } from '@/hooks/useRestaurant';

const CreateEditRestaurantPage = ({ restaurantId = null, isEdit = false }) => {
  const router = useRouter();
  const { getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant, loading } = useRestaurant();
  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    location: '',
    number: '',
    price: '',
    is_meat: false,
    is_vegetarian: false,
    is_vegan: false,
    is_fish: false,
    is_halal: false,
  });

  useEffect(() => {
    if (isEdit && restaurantId) {
      fetchRestaurant();
    }
  }, [isEdit, restaurantId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchRestaurant = async () => {
    try {
      setInitialLoading(true);
      const restaurant = await getRestaurant(restaurantId);
      
      if (restaurant) {
        setFormData({
          name: restaurant.name || '',
          city: restaurant.city || '',
          location: restaurant.location || '',
          number: restaurant.number || '',
          price: restaurant.price || '',
          is_meat: restaurant.is_meat || false,
          is_vegetarian: restaurant.is_vegetarian || false,
          is_vegan: restaurant.is_vegan || false,
          is_fish: restaurant.is_fish || false,
          is_halal: restaurant.is_halal || false,
        });
      } else {
        toast.error('Restaurant not found');
        router.push('/admin/restaurants');
      }
    } catch (error) {
      console.error('Failed to fetch restaurant:', error);
      toast.error('Failed to load restaurant details');
      router.push('/admin/restaurants');
    } finally {
      setInitialLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      toast.error('Please enter restaurant name');
      return;
    }
    if (!formData.city.trim()) {
      toast.error('Please enter city');
      return;
    }
    if (!formData.location.trim()) {
      toast.error('Please enter location');
      return;
    }
    if (!formData.number.trim()) {
      toast.error('Please enter contact number');
      return;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      toast.error('Please enter a valid price');
      return;
    }

    try {
      const payload = {
        name: formData.name,
        city: formData.city,
        location: formData.location,
        number: formData.number,
        price: parseFloat(formData.price).toFixed(2),
        is_meat: formData.is_meat,
        is_vegetarian: formData.is_vegetarian,
        is_vegan: formData.is_vegan,
        is_fish: formData.is_fish,
        is_halal: formData.is_halal,
      };

      if (isEdit && restaurantId) {
        await updateRestaurant(restaurantId, payload);
        toast.success('Restaurant updated successfully');
      } else {
        await createRestaurant(payload);
        toast.success('Restaurant created successfully');
      }
      
      router.push('/admin/restaurants');
    } catch (error) {
      console.error('Operation failed:', error);
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleCancel = () => {
    router.push('/admin/restaurants');
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this restaurant? This action cannot be undone.')) {
      return;
    }

    try {
      await deleteRestaurant(restaurantId);
      toast.success('Restaurant deleted successfully');
      router.push('/admin/restaurants');
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete restaurant');
    }
  };

  if (initialLoading) {
    return (
      <div className="flex-1 bg-[#F9FAFB] min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading restaurant...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">
          {isEdit ? 'Edit Restaurant' : 'Create Restaurant'}
        </h1>
        <p className="text-sm text-[#6B7280] mt-0.5">
          Please provide all of the information below to {isEdit ? 'update' : 'create'} the restaurant.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">
              {isEdit ? 'Edit Restaurant Details' : 'Restaurant Details'}
            </h2>
            <p className="text-sm text-[#6B7280]">Please provide all of the information below.</p>
          </div>

          <div className="space-y-6">
            {/* Restaurant Name */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Restaurant Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter restaurant name"
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                required
              />
            </div>

            {/* City and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location/area"
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  required
                />
              </div>
            </div>

            {/* Contact Number and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Price (per person) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#6B7280]">R</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Food Options */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-3">
                Food Options
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_meat"
                    checked={formData.is_meat}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Meat</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_vegetarian"
                    checked={formData.is_vegetarian}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Vegetarian</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_vegan"
                    checked={formData.is_vegan}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Vegan</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_fish"
                    checked={formData.is_fish}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Fish</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_halal"
                    checked={formData.is_halal}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Halal</span>
                </label>
              </div>
              <p className="mt-2 text-xs text-[#6B7280]">
                Select all food options that apply to this restaurant
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
                  Delete Restaurant
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
                onClick={handleSubmit}
                className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors disabled:opacity-50 flex items-center gap-2"
                disabled={loading}
              >
                {loading && (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isEdit ? 'Update Restaurant' : 'Create Restaurant'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditRestaurantPage;
