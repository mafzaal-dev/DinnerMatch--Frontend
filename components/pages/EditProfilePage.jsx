"use client";

import React, { useState } from 'react';

const EditProfilePage = ({ onSave, onBack, initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullName: initialData.fullName || 'John Doe',
    email: initialData.email || 'john.doe@gmail.com',
    phoneNumber: initialData.phoneNumber || '+1 (XXX) XXX-XXXX',
    language: initialData.language || 'English',
    priceRange: initialData.priceRange || '',
    menuPreferences: initialData.menuPreferences || [],
  });

  const languages = ['English', 'Afrikaans', 'Xhosa'];
  const priceRanges = [
    { id: '$', label: '$ - Budget Friendly' },
    { id: '$$', label: '$$ - Moderate' },
    { id: '$$$', label: '$$$ - Premium' },
  ];
  const menuOptions = [
    'I eat everything',
    'Meat',
    'Vegetarian',
    'Vegan',
    'Fish',
    'Halaal',
  ];

  const handleSave = () => {
    onSave(formData);
  };

  const toggleMenuPreference = (option) => {
    setFormData((prev) => ({
      ...prev,
      menuPreferences: prev.menuPreferences.includes(option)
        ? prev.menuPreferences.filter((item) => item !== option)
        : [...prev.menuPreferences, option],
    }));
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors mb-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
        </div>

        {/* Basic Info Section */}
        <div className="bg-[#1a1f2e] rounded-xl p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-6 uppercase">Basic Info</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F97315]"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F97315]"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F97315]"
              />
            </div>
          </div>
        </div>

        {/* Dinner Preferences Section */}
        <div className="bg-[#1a1f2e] rounded-xl p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-6 uppercase">Dinner Preferences</h2>

          {/* Languages */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-3">Languages</label>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFormData({ ...formData, language: lang })}
                  className={`px-6 py-3 rounded-lg border-2 transition-all ${
                    formData.language === lang
                      ? 'bg-[#F97315] border-[#F97315] text-white'
                      : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-3">Price Range</label>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setFormData({ ...formData, priceRange: range.id })}
                  className={`w-full px-6 py-3 rounded-lg border-2 transition-all text-left ${
                    formData.priceRange === range.id
                      ? 'bg-[#F97315] border-[#F97315] text-white'
                      : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Preferences */}
          <div>
            <label className="block text-gray-400 text-sm mb-3">Menu Preferences</label>
            <div className="grid grid-cols-2 gap-3">
              {menuOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMenuPreference(option)}
                  className={`px-6 py-3 rounded-lg border-2 transition-all ${
                    formData.menuPreferences.includes(option)
                      ? 'bg-[#F97315] border-[#F97315] text-white'
                      : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;

