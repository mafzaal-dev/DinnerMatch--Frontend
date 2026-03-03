"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const QuizResultsModal = ({ isOpen, onClose, onContinue }) => {
  const [displayedScore, setDisplayedScore] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    let animationFrameId;

    if (isOpen) {
      setAnimationDone(false);
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
        } else {
          setAnimationDone(true);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    } else {
      setDisplayedScore(0);
      setAnimationDone(false);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const imageCard = (src, style, zIndex) => (
    <div className="absolute" style={{ ...style, zIndex }}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-[3px] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <Image src={src} alt="" fill className="object-cover" sizes="240px" />
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-[#010102] md:bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full h-full md:max-w-xl md:max-h-[90vh] md:rounded-2xl md:mx-4 bg-[#0a0a12] md:bg-[#0a0a12] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#FFAA55]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 md:top-6 md:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#999] hover:text-white hover:bg-white/10 transition-all z-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="w-full h-full flex flex-col">
          {/* Text section */}
          <div className="text-center pt-16 md:pt-14 px-8 flex-shrink-0 relative z-40">
            <h2
              className="text-xl font-bold italic tracking-wide text-[#F5F5F5]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              DinnersMatch
            </h2>
            <p
              className="font-bold italic text-[#FFAA55] leading-[0.9] mt-5"
              style={{
                fontSize: 'clamp(64px, 20vw, 96px)',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              {displayedScore}%
            </p>
            <p className="text-[#b0b0b0] text-[15px] mt-4 leading-relaxed max-w-[280px] mx-auto">
              The percentage of members you&apos;re compatible with
            </p>
          </div>

          {/* Image collage area */}
          <div className="flex-1 relative mt-4 min-h-0 overflow-hidden">
            {/* Left/back - Rectangle 6 */}
            {imageCard('/quiz-result-3.png', {
              left: '-2%',
              top: '8%',
              width: '55%',
              height: '75%',
              transform: 'rotate(-10deg)',
            }, 10)}

            {/* Right/back - Rectangle 4 */}
            {imageCard('/quiz-result-1.png', {
              right: '-5%',
              top: '10%',
              width: '55%',
              height: '75%',
              transform: 'rotate(14deg)',
            }, 20)}

            {/* Center/front - Rectangle 5 */}
            {imageCard('/quiz-result-2.png', {
              left: '50%',
              top: '25%',
              width: '55%',
              height: '75%',
              transform: 'translateX(-50%)',
            }, 30)}

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/80 to-transparent z-40 pointer-events-none" />
          </div>

          {/* Continue button */}
          <div className="flex-shrink-0 px-6 pb-8 pt-2 relative z-50 bg-[#0a0a12]">
            <button
              onClick={onContinue}
              className={`w-full max-w-md mx-auto block py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 ${
                animationDone
                  ? 'bg-[#FFAA55] text-white hover:bg-[#ffbb77] shadow-[0_4px_20px_rgba(255,170,85,0.3)]'
                  : 'bg-[#FFAA55]/60 text-white/70'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsModal;
