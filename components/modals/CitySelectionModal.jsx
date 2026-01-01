"use client";

import React from 'react';

const CitySelectionModal = ({ isOpen, onClose, onSelectCity }) => {
  if (!isOpen) return null;

  const cities = [
    { id: 'cape-town', name: 'Cape Town', province: 'Western Cape' },
    { id: 'johannesburg', name: 'Johannesburg', province: 'Gauteng' },
  ];

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
          <h2 className="text-3xl font-bold text-white mb-2">Select Your City</h2>
          <p className="text-gray-400">Choose the city where you'd like to have dinner:</p>
        </div>

        {/* City Options */}
        <div className="space-y-3">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => onSelectCity(city)}
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
                <div>
                  <p className="text-white font-bold text-lg">{city.name}</p>
                  <p className="text-gray-400 text-sm">{city.province}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySelectionModal;

