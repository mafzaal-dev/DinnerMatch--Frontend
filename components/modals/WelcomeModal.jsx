"use client";

import React from 'react';

const WelcomeModal = ({ isOpen, onClose, onNext, onBack }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-[616px] p-10 relative shadow-2xl flex flex-col" style={{ gap: '40px' }}>
        {/* Top Row - Back and Close */}
        <div className="flex items-center justify-between">
          {/* Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors"
              aria-label="Go back"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back</span>
            </button>
          )}
          
          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Header */}
        <div className="text-center flex flex-col" style={{ gap: '16px' }}>
          <h2 className="text-[23px] font-bold text-[#F5F5F5]">DinnersMatch</h2>
          <p className="text-[10px] text-[#FFAA55] uppercase tracking-wide">Identity</p>
        </div>

        {/* Content */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col shadow-lg" style={{ gap: '24px' }}>
          <h3 className="text-sm font-bold text-[#FFAA55]">
            Welcome to DinnersMatch
          </h3>
          <p className="text-sm text-[#F5F5F5] leading-relaxed">
            Life's too short to work, sleep and die. A life well lived is one filled with adventure
            - Meeting new people, laughing until tears are streaming down your face, taking risks,
            making memories.
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-[#FFAA55] text-[#F5F5F5] py-3 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;

