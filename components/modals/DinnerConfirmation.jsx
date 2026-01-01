"use client";

import React from 'react';

const DinnerConfirmation = ({ preferences, onEdit, onConfirm }) => {
  const { language, budget, hasDietaryRestrictions, menuOptions } = preferences || {};

  return (
    <div className="bg-[#1a1f2e] rounded-2xl p-8 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#F97315] text-center">YOUR DINNER</h2>
      </div>

      {/* Preferences Display */}
      <div className="bg-[#2a3441] rounded-lg p-6 space-y-4 mb-6">
        {/* Budget */}
        <div className="border-b border-gray-600 pb-4">
          <p className="text-gray-400 text-sm mb-1">Budget</p>
          <p className="text-white text-lg font-medium">{budget || '$$'}</p>
        </div>

        {/* Dietary Restrictions */}
        <div className="border-b border-gray-600 pb-4">
          <p className="text-gray-400 text-sm mb-1">Dietary Restrictions</p>
          <p className="text-white text-lg font-medium">
            {hasDietaryRestrictions
              ? menuOptions?.join(', ') || 'Vegetarian'
              : 'I have no restrictions'}
          </p>
        </div>

        {/* Language */}
        <div>
          <p className="text-gray-400 text-sm mb-1">Language</p>
          <p className="text-white text-lg font-medium">{language || 'English'}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onEdit}
          className="w-full bg-[#2a3441] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#3a4451] transition-colors"
        >
          Edit My Preferences
        </button>
        <button
          onClick={onConfirm}
          className="w-full bg-[#F97315] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DinnerConfirmation;

