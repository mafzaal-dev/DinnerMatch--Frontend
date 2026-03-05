"use client";

import { ArrowLeft } from 'lucide-react';
import React, { useEffect } from 'react';

const AreaSelectionModal = ({ isOpen, onClose, onSelectArea, selectedCity }) => {
  const [selectedAreaId, setSelectedAreaId] = React.useState(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedAreaId(null);
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSelect = (area) => {
    setSelectedAreaId(area.id);
    setTimeout(() => {
      onSelectArea(area);
    }, 350);
  };

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
          <button onClick={onClose} className="mb-4 text-[#F9B456] hover:text-[#F9B456]/80 text-sm font-medium transition-colors flex items-center gap-2"><ArrowLeft /> Back to city selection</button>
          {areas.length === 0 && (
            <p className="text-center text-[#E0E0E0] py-4">No areas available for this city.</p>
          )}
          {areas.map((area) => {
            const isSelected = selectedAreaId === area.id;
            return (
              <button
                key={area.id}
                onClick={() => handleSelect(area)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ease-out  ${isSelected
                  ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111] shadow-[0_8px_24px_rgba(255,170,85,0.25)] -translate-y-1'
                  : 'bg-transparent text-white border-white hover:border-white/30 hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <svg
                    className={`w-6 h-6 shrink-0 ${isSelected ? 'text-[#111]' : 'text-[#EEEEEE]'}`}
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
                  <p className={`font-medium text-base ${isSelected ? 'text-[#111]' : 'text-[#F5F5F5]'}`}>
                    {area.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AreaSelectionModal;


