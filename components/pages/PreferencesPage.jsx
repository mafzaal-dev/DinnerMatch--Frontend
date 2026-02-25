"use client";

import React, { useState } from 'react';

const PreferencesPage = ({ onSave, onBack }) => {
  const [preferences, setPreferences] = useState({
    language: 'English',
    budget: '',
    cuisine: [],
    dayOfWeek: [],
    timeOfDay: [],
    dietaryPreference: [],
    alcoholPreference: [],
  });

  const languages = ['English', 'Afrikaans', 'Xhosa', 'Zulu'];
  const cuisines = ['Italian', 'Mexican', 'Asian', 'French', 'Mediterranean', 'American', 'Indian', 'Japanese', 'Thai', 'Other'];
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timesOfDay = ['Morning', 'Afternoon', 'Evening'];
  const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Keto', 'Paleo', 'Halal', 'Kosher', 'No restrictions'];
  const alcoholOptions = ['Wine', 'Beer', 'Spirits', 'Non-alcoholic', 'No preference'];

  const toggleArrayItem = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(preferences);
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
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors mb-4 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">DinnerMatch</h1>
          <p className="text-sm text-[#FFAA55] uppercase tracking-wide">PREFERENCES</p>
          <p className="text-[#E0E0E0] mt-2">Set Your Dining Preferences</p>
        </div>

        {/* Preferences Form */}
        <div className="space-y-6">
          {/* Language */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What language do you prefer to speak at dinner?
            </label>
            <select
              value={preferences.language}
              onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
              className="w-full px-4 py-3 bg-[#0F1419] border border-white rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#FFAA55]"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What are you willing to spend at dinner? (Optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0E0E0]">$</span>
              <input
                type="text"
                value={preferences.budget}
                onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 bg-[#0F1419] border border-white rounded-lg text-[#F5F5F5] placeholder-[#A0A0A0] focus:outline-none focus:border-[#FFAA55]"
              />
            </div>
          </div>

          {/* Cuisine */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What cuisine do you prefer?
            </label>
            <div className="flex flex-wrap gap-3">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => toggleArrayItem('cuisine', cuisine)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    preferences.cuisine.includes(cuisine)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {/* Day of Week */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What day of the week do you prefer your dinner?
            </label>
            <div className="flex flex-wrap gap-3">
              {daysOfWeek.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleArrayItem('dayOfWeek', day)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    preferences.dayOfWeek.includes(day)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Time of Day */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What time of day do you prefer your dinner?
            </label>
            <div className="flex flex-wrap gap-3">
              {timesOfDay.map((time) => (
                <button
                  key={time}
                  onClick={() => toggleArrayItem('timeOfDay', time)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    preferences.timeOfDay.includes(time)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Preference */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What is your dietary preference?
            </label>
            <div className="flex flex-wrap gap-3">
              {dietaryOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleArrayItem('dietaryPreference', option)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    preferences.dietaryPreference.includes(option)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Alcohol Preference */}
          <div className="bg-[#111121] border border-white rounded-lg p-6">
            <label className="block text-[#F5F5F5] font-medium mb-3">
              What is your alcohol preference?
            </label>
            <div className="flex flex-wrap gap-3">
              {alcoholOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleArrayItem('alcoholPreference', option)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    preferences.alcoholPreference.includes(option)
                      ? 'bg-[#FFAA55] border-[#FFAA55] text-[#F5F5F5]'
                      : 'bg-[#0F1419] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-[#FFAA55] text-[#F5F5F5] py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;

