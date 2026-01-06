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
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 max-h-123.5 relative shadow-2xl" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
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
          <h2 className="text-[32px] text-center font-bold text-[#F5F5F5] mb-2">Select Your Place</h2>
          <p className="text-base text-center text-[#E0E0E0]">Choose the area place in {city || 'Cape Town'}:</p>
        </div>

        {/* Back Button */}
        <button
          onClick={onClose}
          
          className="flex items-center gap-2 text-orange-300 
          hover:text-[#F5F5F5] transition-colors mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to selection</span>
        </button>

        {/* Place Options */}
        <div className="space-y-4">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => onSelectArea(area)}
              className="w-full h-14 px-4 bg-[#111121]  rounded-lg p-4 hover:border-[#FFAA55] transition-colors text-left"
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

        <button className='text-center
         cursor-pointer text-white uppercase font-lg w-full h-12 rounded-lg mt-6 bg-[#ffaa55]'>
          Continue to quiz
        </button>
      </div>
    </div>
  );
};

export default AreaSelectionModal;

