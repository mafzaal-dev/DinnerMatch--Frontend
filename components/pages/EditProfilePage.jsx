"use client";

import React, { useState, useEffect } from 'react';

const EditProfilePage = ({ onSave, onBack, initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullName: initialData.full_name || `${initialData.first_name || ''} ${initialData.last_name || ''}`.trim() || '',
    email: initialData.email || '',
    phoneNumber: initialData.phone_number || initialData.phoneNumber || '',
    languages: initialData.languages || ['English'],
    menuPreferences: initialData.menuPreferences || [],
    priceRange: initialData.priceRange || '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      fullName: initialData.full_name || `${initialData.first_name || ''} ${initialData.last_name || ''}`.trim() || prev.fullName,
      email: initialData.email || prev.email,
      phoneNumber: initialData.phone_number || initialData.phoneNumber || prev.phoneNumber,
    }));
  }, [initialData]);

  const languages = ['English', 'Afrikaans', 'Xhosa'];
  const menuOptions = ['I eat everything', 'Vegetarian', 'Meat', 'Fish', 'Vegan', 'Halaal'];
  const priceOptions = [
    { id: 'budget', label: '$ - Budget Friendly' },
    { id: 'moderate', label: '$$ - Moderate' },
    { id: 'premium', label: '$$$ - Premium' }
  ];

  const toggleLanguage = (lang) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang]
    }));
  };

  const toggleMenuPreference = (pref) => {
    setFormData(prev => ({
      ...prev,
      menuPreferences: prev.menuPreferences.includes(pref)
        ? prev.menuPreferences.filter(p => p !== pref)
        : [...prev.menuPreferences, pref]
    }));
  };

  const handleSave = () => {
    if (onSave) {
      // Split full name back into first and last for API if needed
      const nameParts = formData.fullName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      onSave({
        first_name: firstName,
        last_name: lastName,
        phone_number: formData.phoneNumber,
        languages: formData.languages,
        menu_preferences: formData.menuPreferences,
        price_range: formData.priceRange
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080714] text-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          {onBack && (
            <button onClick={onBack} className="text-[#F5F5F5] hover:text-[#FFAA55] transition-colors flex items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <h1 className="text-2xl font-bold text-[#FFAA55]">Edit Profile</h1>
        </div>

        <div className="space-y-6">
          {/* BASIC INFO Section */}
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">BASIC INFO</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#757575] focus:outline-none cursor-not-allowed"
                  placeholder="john.doe@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors"
                  placeholder="+1 (XXX) XXX-XXXX"
                />
              </div>
            </div>
          </div>

          {/* DINNER PREFERENCES Section */}
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">DINNER PREFERENCES</h2>
            
            {/* Languages */}
            <div className="mb-8">
              <label className="block text-sm text-[#757575] font-semibold mb-4">Languages</label>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => toggleLanguage(lang)}
                    className={`px-6 py-2.5 rounded-lg border transition-all text-sm font-bold ${
                      formData.languages.includes(lang)
                        ? 'bg-[#FFAA55] border-[#FFAA55] text-[#212121]'
                        : 'bg-[#111121] border-[#2F3A51] text-[#F5F5F5] hover:border-[#FFAA55]'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Preferences */}
            <div className="mb-8">
              <label className="block text-sm text-[#757575] font-semibold mb-4">Menu Preferences</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {menuOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleMenuPreference(option)}
                    className={`w-full px-4 py-3 rounded-lg border text-left transition-all text-sm font-semibold ${
                      formData.menuPreferences.includes(option)
                        ? 'bg-[#FFAA55] border-[#FFAA55] text-[#212121]'
                        : 'bg-[#111121] border-[#2F3A51] text-[#F5F5F5] hover:border-[#FFAA55]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm text-[#757575] font-semibold mb-4">Price Range</label>
              <div className="space-y-3 max-w-xs">
                {priceOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData({ ...formData, priceRange: option.id })}
                    className={`w-full px-4 py-3 rounded-lg border text-left transition-all text-sm font-semibold ${
                      formData.priceRange === option.id
                        ? 'bg-[#FFAA55] border-[#FFAA55] text-[#212121]'
                        : 'bg-[#111121] border-[#2F3A51] text-[#F5F5F5] hover:border-[#FFAA55]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-10">
          <button
            onClick={handleSave}
            className="w-full bg-[#FFAA55] text-[#212121] py-4 rounded-lg font-bold text-base uppercase tracking-wide hover:bg-[#FF9955] transition-colors shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>

  );
};

export default EditProfilePage;

