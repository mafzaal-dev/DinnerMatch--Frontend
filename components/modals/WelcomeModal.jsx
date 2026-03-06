"use client";

import React from 'react';

const WelcomeModal = ({ isOpen, onClose, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1123] md:bg-black/80 md:flex md:items-center md:justify-center overflow-y-auto">
      <div className="min-h-full h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-12">
          <h1 class="text-2xl md:text-4xl font-bold mb-1"><span class="text-white">Dinner</span><span class="text-[#FFAA55]">Match</span></h1>
        </div>

        <div className="w-full border border-[#2F3A51] rounded-2xl p-6 shadow-2xl mb-12 max-w-xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-[#FFAA55] mb-6">Welcome to DinnerMatch</h2>
          <p className="text-[#F5F5F5] leading-relaxed opacity-90">
            Life's too short to work, sleep and die. A life well lived is one filled with adventure
            - Meeting new people, laughing until tears are streaming down your face, taking risks,
            making memories.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#FFAA55] text-white py-3 px-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#FF9955] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,170,85,0.4)] max-w-xl mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
