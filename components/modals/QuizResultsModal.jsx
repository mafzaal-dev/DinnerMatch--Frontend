"use client";

import React, { useState, useEffect } from 'react';

const QuizResultsModal = ({ isOpen, onClose, onContinue }) => {
  const [displayedScore, setDisplayedScore] = useState(0);

  useEffect(() => {
    let animationFrameId;

    if (isOpen) {
      const targetScore = Math.floor(Math.random() * (90 - 80 + 1)) + 80;
      let startTime = null;
      const duration = 2000;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setDisplayedScore(Math.floor(ease * targetScore));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    } else {
      setDisplayedScore(0);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
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
          <h2 className="text-[32px] font-bold text-[#F5F5F5]">DinnerMatch</h2>

          <div>
            <p className="text-[80px] font-bold text-[#FFAA55]">{displayedScore}%</p>
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
