"use client";

import React from 'react';

const QuizResultsModal = ({ isOpen, onClose, onContinue, compatibilityScore = 90 }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center space-y-4">
          <h2 className="text-[32px] font-bold text-[#F5F5F5]">DinnersMatch</h2>

          <div>
            <p className="text-[80px] font-bold text-[#FFAA55]">{compatibilityScore}%</p>
            <p className="text-[#f5f5f5] text-lg">
              The percentage of members you're compatible with
            </p>
          </div>

          <button
            onClick={onContinue}
            className="w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsModal;
