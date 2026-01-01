"use client";

import React from 'react';

const QuizResult = ({ isOpen, onClose, compatibilityScore = 90, onContinue }) => {
  if (!isOpen) return null;

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

        {/* Content */}
        <div className="text-center">
          {/* Brand */}
          <h2 className="text-2xl font-bold text-white mb-8">DinnersMatch</h2>

          {/* Score */}
          <div className="mb-6">
            <div className="text-7xl font-bold text-[#F97315] mb-4">{compatibilityScore}%</div>
            <p className="text-gray-400 text-sm">
              The percentage of members you're compatible with
            </p>
          </div>

          {/* Continue Button */}
          {onContinue && (
            <button
              onClick={onContinue}
              className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizResult;

