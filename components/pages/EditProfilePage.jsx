"use client";

import React, { useState, useEffect } from 'react';

const EditProfilePage = ({ onSave, onBack, initialData = {} }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.first_name || initialData.firstName || '',
    lastName: initialData.last_name || initialData.lastName || '',
    email: initialData.email || '',
    phoneNumber: initialData.phone_number || initialData.phoneNumber || '', 
    dateOfBirth: initialData.date_of_birth || initialData.dateOfBirth || '',
    gender: initialData.gender || '',
    cityId: initialData.city_id || initialData.cityId || '', 
    cuisine: initialData.cuisine || [],
    dietaryPreference: initialData.dietaryPreference || [],
    alcoholPreference: initialData.alcoholPreference || [],
    dayOfWeek: initialData.dayOfWeek || [],
    timeOfDay: initialData.timeOfDay || [],
    budget: initialData.budget || '',
  });

  // Update form data when initialData changes
  useEffect(() => {
    setFormData((prev) => ({
        ...prev,
        firstName: initialData.first_name || initialData.firstName || prev.firstName,
        lastName: initialData.last_name || initialData.lastName || prev.lastName,
        email: initialData.email || prev.email,
        phoneNumber: initialData.phone_number || initialData.phoneNumber || prev.phoneNumber,
        dateOfBirth: initialData.date_of_birth || initialData.dateOfBirth || prev.dateOfBirth,
        gender: initialData.gender || prev.gender,
        cityId: initialData.city_id || initialData.cityId || prev.cityId,
    }));
  }, [initialData]);

  const genders = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
  const cuisines = ['Italian', 'Mexican', 'Asian', 'French', 'Mediterranean', 'American', 'Indian', 'Japanese', 'Thai', 'Other'];
  const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Keto', 'Paleo', 'Halal', 'Kosher', 'No restrictions'];
  const alcoholOptions = ['Wine', 'Beer', 'Spirits', 'Non-alcoholic', 'No preference'];
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timesOfDay = ['Morning', 'Afternoon', 'Evening'];

  const toggleArrayItem = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  const handleSave = () => {
    if (onSave) {
      // Map frontend state to API expected format if needed
      // Based on Postman: { gender: "Male", city_id: "..." }
      // We should send everything that changed or is relevant
      
      const apiData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          // email: formData.email, // Email usually not editable directly without verification
          gender: formData.gender,
          date_of_birth: formData.dateOfBirth || null,
          // Add other fields as supported by API
          // ...formData
      };
      
      onSave(apiData);
    }
  };

  return (
    <div className="min-h-screen bg-[#080814] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="text-[#E0E0E0] hover:text-[#F5F5F5]
               transition-colors mb-4 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h1>
          <p className="text-sm text-[#FFAA55] uppercase tracking-wide">My Account</p>
        </div>

        {/* Basic Info Section */}
        <div className="bg-[#111121] border border-gray-700 rounded-lg p-6 mb-6">
          <i className="text-xl font-bold text-[#F5F5F5]  uppercase">Basic Info</i>
          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#E0E0E0] text-sm mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0F1419] border border-[#2F3A51]
                   rounded-lg text-[#F5F5F5] placeholder-[#757575] focus:outline-none focus:border-[#FFAA55]"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-[#E0E0E0] text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0F1419
                   border border-gray-700 rounded-lg text-[#F5F5F5] placeholder-[#757575] focus:outline-none focus:border-[#FFAA55]"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0F1419] border border-gray-700 
                rounded-lg text-[#F5F5F5] placeholder-[#757575] focus:outline-none focus:border-[#FFAA55]"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 bg-[#0F1419] border
                 border-gray-700 rounded-lg text-[#F5F5F5] placeholder-[#757575] focus:outline-none focus:border-[#FFAA55]"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full px-4 py-3 bg-[#0F1419] border border-gray-700 
                rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#FFAA55]"
              />
            </div>
            <div>
              <label className="block text-[#E0E0E0] text-sm font-semibold mb-2">Gender</label>
              <div className="flex flex-wrap gap-3">
                {genders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setFormData({ ...formData, gender })}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      formData.gender === gender
                        ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                        : 'bg-[#0F1419] border-gray-700 text-[#E0E0E0] hover:border-[#FFAA55]'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dinner Preferences Section */}
        <div className="bg-[#111121] border border-gray-700 rounded-lg p-6 mb-6">
          <i className="text-lg font-bold text-[#F5F5F5] mb-6 uppercase">Dinner Preferences</i>
          
          {/* Cuisine */}
          <div className="mb-6 mt-2">
            <label className="block text-[#E0E0E0] font-semibold  text-sm mb-3">Cuisine</label>
            <div className="flex flex-wrap gap-3">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => toggleArrayItem('cuisine', cuisine)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    formData.cuisine.includes(cuisine)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Preference */}
          <div className="mb-6">
            <label className="block text-[#E0E0E0] font-semibold  text-sm mb-3">Dietary Preference</label>
            <div className="flex flex-wrap gap-3">
              {dietaryOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleArrayItem('dietaryPreference', option)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    formData.dietaryPreference.includes(option)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Alcohol Preference */}
          <div className="mb-6">
            <label className="block text-[#E0E0E0] font-semibold  text-sm mb-3">Alcohol Preference</label>
            <div className="flex flex-wrap gap-3">
              {alcoholOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleArrayItem('alcoholPreference', option)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    formData.alcoholPreference.includes(option)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Day of Week */}
          <div className="mb-6">
            <label className="block text-[#E0E0E0] font-semibold  text-sm mb-3">Day of the Week</label>
            <div className="flex flex-wrap gap-3">
              {daysOfWeek.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleArrayItem('dayOfWeek', day)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    formData.dayOfWeek.includes(day)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Time of Day */}
          <div className="mb-6">
            <label className="block text-[#E0E0E0] font-semibold text-sm mb-3">Time of Day</label>
            <div className="flex flex-wrap gap-3">
              {timesOfDay.map((time) => (
                <button
                  key={time}
                  onClick={() => toggleArrayItem('timeOfDay', time)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    formData.timeOfDay.includes(time)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[#E0E0E0] font-semibold  text-sm mb-2">Budget</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0E0E0]">$</span>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="Enter budget"
                className="w-full pl-8 pr-4 py-3 bg-[#0F1419] border border-gray-700 rounded-lg text-[#F5F5F5] placeholder-[#A0A0A0] focus:outline-none focus:border-[#FFAA55]"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#FFAA55] text-[#212121] py-4 px-2
           rounded-lg  text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
