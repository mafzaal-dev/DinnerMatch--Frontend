"use client";

import React from 'react';

const AreaSelectionModal = ({ isOpen, onClose, onSelectArea, city, selectedCityId }) => {
  if (!isOpen) return null;

  // Define places for each city
  const placesByCity = {
    'cape-town': [
      { id: 'v-a-waterfront', name: 'V&A Waterfront' },
      { id: 'camps-bay', name: 'Camps Bay' },
      { id: 'kloof-street', name: 'Kloof Street' },
    ],
    'johannesburg': [
      { id: 'sandton', name: 'Sandton' },
      { id: 'rosebank', name: 'Rosebank' },
      { id: 'melrose-arch', name: 'Melrose Arch' },
    ],
  };

  // Get places for the selected city, default to Cape Town if not specified
  const areas = placesByCity[selectedCityId] || placesByCity['cape-town'];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Select Your Place</h2>
          <p className="text-gray-400">Choose a place in {city || 'Cape Town'}:</p>
        </div>

        {/* Back Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to selection</span>
        </button>

        {/* Place Options */}
        <div className="space-y-3 mb-6">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => onSelectArea(area)}
              className="w-full bg-[#0f1419] border-2 border-gray-700 rounded-lg p-4 hover:border-[#F97315] transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-white font-medium text-lg">{area.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaSelectionModal;

