"use client";

import React from 'react';

const WelcomeModal = ({ isOpen, onClose, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl flex flex-col" style={{ gap: '40px' }}>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="text-center flex flex-col" style={{ gap: '6px' }}>
          <h2 className="text-[32px] font-bold text-[#F5F5F5]">DinnerMatch</h2>
          <p className="text-sm text-[#FFAA55] uppercase tracking-wide">Identity</p>
        </div>

        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col shadow-lg" style={{ gap: '15px' }}>
          <h3 className="text-xl font-bold text-[#FFAA55]">
            Welcome to DinnerMatch
          </h3>
          <p className="text-base text-[#F5F5F5] leading-relaxed">
            Life's too short to work, sleep and die. A life well lived is one filled with adventure
            - Meeting new people, laughing until tears are streaming down your face, taking risks,
            making memories.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#FFAA55] text-[#F5F5F5] py-4 px-2 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;

