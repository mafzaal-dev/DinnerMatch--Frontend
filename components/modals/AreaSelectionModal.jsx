"use client";

import React from 'react';

const AreaSelectionModal = ({ isOpen, onClose, onSelectArea, selectedCity }) => {
  if (!isOpen) return null;

  const areas = selectedCity?.area ?? [];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20">
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-10">
          <h2 className="text-[32px] text-center font-bold text-[#F5F5F5] mb-2">Select Your Place</h2>
          <p className="text-base text-center text-[#E0E0E0]">Choose the area in {selectedCity?.name ?? 'your city'}:</p>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-orange-300 hover:text-[#F5F5F5] transition-colors mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to city selection</span>
        </button>

        <div className="flex flex-col gap-y-2 mt-4">
          {areas.length === 0 && (
            <p className="text-center text-[#E0E0E0] py-4">No areas available for this city.</p>
          )}
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => onSelectArea(area)}
              className="w-full h-14 px-4 border border-[#2f3a51] rounded-lg hover:border-[#FFAA55] transition-colors text-left"
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


