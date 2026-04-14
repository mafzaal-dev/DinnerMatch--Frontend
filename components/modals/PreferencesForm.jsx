"use client";

import React, { useState } from 'react';
import { LANGUAGES, BUDGETS, MENU_CHOICES } from '@/constants/preferences';

const PreferencesForm = ({ onContinue, onBack }) => {
  const [language, setLanguage] = useState('English');
  const [budget, setBudget] = useState('$');
  const [hasDietaryRestrictions, setHasDietaryRestrictions] = useState(false);
  const [menuOptions, setMenuOptions] = useState(['Vegetarian']);

  const toggleMenuOption = (option) => {
    setMenuOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="bg-[#1a1f2e] rounded-2xl p-8 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Preferences</p>
        <h2 className="text-3xl font-bold text-white">
          Set Your Dining <span className="text-[#F97315]">Preferences</span>
        </h2>
      </div>

      <div className="space-y-8">
        {/* Language Selection */}
        <div>
          <label className="block text-white mb-4 text-lg">
            What language do you prefer to speak at dinner?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-6 py-4 rounded-lg border-2 transition-all ${
                  language === lang
                    ? 'bg-[#F97315] border-[#F97315] text-white'
                    : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{lang}</span>
                  {language === lang && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Budget Selection */}
        <div>
          <label className="block text-white mb-4 text-lg">
            What are you willing to spend at dinner?{' '}
            <span className="text-[#F97315]">(Required)</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BUDGETS.map((budgetLevel) => (
              <button
                key={budgetLevel}
                onClick={() => setBudget(budgetLevel)}
                className={`px-6 py-4 rounded-lg border-2 transition-all ${
                  budget === budgetLevel
                    ? 'bg-[#F97315] border-[#F97315] text-white'
                    : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xl">{budgetLevel}</span>
                  {budget === budgetLevel && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Restrictions Toggle */}
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-white text-lg">
              I have dietary restrictions. <span className="text-gray-400">(Optional)</span>
            </label>
            <button
              onClick={() => setHasDietaryRestrictions(!hasDietaryRestrictions)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                hasDietaryRestrictions ? 'bg-[#F97315]' : 'bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  hasDietaryRestrictions ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Menu Options */}
        <div>
          <label className="block text-white mb-2 text-lg">
            What menu options do you want to see at your dinner?{' '}
            <span className="text-[#F97315]">(Required)</span>
          </label>
          <p className="text-gray-400 text-sm mb-4">
            We take your preferences and restrictions into account in order to ensure you'll have
            several options available.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {MENU_CHOICES.map((option) => (
              <button
                key={option}
                onClick={() => toggleMenuOption(option)}
                className={`px-6 py-4 rounded-lg border-2 transition-all ${
                  menuOptions.includes(option)
                    ? 'bg-[#F97315] border-[#F97315] text-white'
                    : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {menuOptions.includes(option) && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => onContinue({ language, budget, hasDietaryRestrictions, menuOptions })}
          className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PreferencesForm;

