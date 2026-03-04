"use client";

import { ArrowLeft } from 'lucide-react';
import React from 'react';

const AreaSelectionModal = ({ isOpen, onClose, onSelectArea, selectedCity }) => {
  if (!isOpen) return null;

  const areas = selectedCity?.area ?? [];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0F1123] text-white rounded-lg p-4 md:p-8 max-w-2xl w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6 md:mb-10 mt-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">Select Your Area</h2>
          <p className="text-gray-300 text-base md:text-lg">Choose the area in {selectedCity?.name ?? 'your city'}:</p>
        </div>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <button onClick={onClose} class="mb-4 text-[#F9B456] hover:text-[#F9B456]/80 text-sm font-medium transition-colors flex items-center gap-2"><ArrowLeft /> Back to city selection</button>
          {areas.length === 0 && (
            <p className="text-center text-[#E0E0E0] py-4">No areas available for this city.</p>
          )}
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => onSelectArea(area)}
              className="w-full p-4 rounded-lg border-2 transition-all border-gray-700 hover:border-gray-600"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#EEEEEE] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-[#F5F5F5] font-normal text-base">{area.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaSelectionModal;


