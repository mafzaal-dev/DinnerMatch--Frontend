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
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center  justify-center mb-2">
            <h2 className="text-[32px] font-bold text-[#F5F5F5]">Select Your City</h2>
          </div>
          <p className="text-[20px] text-[#E0E0E0] text-center">Choose the city where you'd like to have dinner:</p>
        </div>

        {/* City Options */}
        <div className="space-y-4">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => onSelectCity(city)}
              className="w-full bg-[#111121] 
              border border-[#2f3a51]
               rounded-lg flex px-4 items-center h-14.75 hover:border-[#FFAA55] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#EEEEEE] shrink-"
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
                <div>
                  <p className="text-[#F5F5F5]  text-base leading-tight">{city.name}</p>
                  <p className="text-[#E0E0E0] text-xs font-light mt-1">{city.province}</p>
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


