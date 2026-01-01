"use client";

import React, { useState } from 'react';

const BookDinnerModal = ({ isOpen, onClose, onSecureSpot, onBack, dinnerSlots = [] }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!isOpen) return null;

  // Default slots if none provided
  const slots = dinnerSlots.length > 0 ? dinnerSlots : [
    { id: '1', date: 'December 2', time: '7 pm' },
    { id: '2', date: 'December 2', time: '10 pm' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-2xl p-8 relative shadow-2xl">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            aria-label="Go back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-1">DinnersMatch</h2>
          <p className="text-sm text-[#F97315] uppercase tracking-wide">Identity</p>
        </div>

        {/* Content */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">✨</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#F97315]">
              Book Your Next Dinner
            </h3>
          </div>
          <p className="text-gray-400 mb-6">5 peoples can't wait to meet you.</p>

          {/* Dinner Slots */}
          <div className="space-y-4">
            {slots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => setSelectedSlot(slot.id)}
                className={`w-full bg-[#0f1419] border-2 rounded-lg p-6 flex items-center justify-between transition-all ${
                  selectedSlot === slot.id
                    ? 'border-[#F97315] bg-[#1a1f2e]'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-left">
                  <p className="text-white font-medium text-lg">{slot.date}</p>
                  <p className="text-gray-400">{slot.time}</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedSlot === slot.id
                      ? 'border-[#F97315] bg-[#F97315]'
                      : 'border-gray-600'
                  }`}
                >
                  {selectedSlot === slot.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Secure Spot Button */}
        <button
          onClick={() => selectedSlot && onSecureSpot(selectedSlot)}
          disabled={!selectedSlot}
          className={`w-full py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors ${
            selectedSlot
              ? 'bg-[#F97315] text-white hover:bg-[#EA580C]'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          Secure My Spot
        </button>
      </div>
    </div>
  );
};

export default BookDinnerModal;

