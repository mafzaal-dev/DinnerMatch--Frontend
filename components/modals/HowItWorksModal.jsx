"use client";

import React from 'react';

const HowItWorksModal = ({ isOpen, onClose, onNext, onBack }) => {
  if (!isOpen) return null;

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
            className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="ml-2">Back</span>
          </button>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-1">DinnersMatch</h2>
          <p className="text-sm text-[#F97315] uppercase tracking-wide">Identity</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-8"></div>

        {/* Content */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#F97315] mb-6">How It Works</h3>
          <p className="text-white text-lg leading-relaxed">
            This isn't just dinner - it's your invitation to connect with other interesting people
            who say yes to life. Share unforgettable meals, conversations, and moments with
            strangers who won't feel like strangers for long.
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HowItWorksModal;

