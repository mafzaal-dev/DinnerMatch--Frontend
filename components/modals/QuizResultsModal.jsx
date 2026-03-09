"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const SparkleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 5.52285 16.4772 10 22 10C16.4772 10 12 14.4771 12 20C12 14.4771 7.52285 10 2 10C7.52285 10 12 5.52285 12 0Z" />
  </svg>
);

const QuizResultsModal = ({ isOpen, onClose, onContinue }) => {
  const [displayedScore, setDisplayedScore] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const [targetScore] = useState(() => Math.floor(Math.random() * 5) + 94); // Range 94-98

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    let animationFrameId;

    if (isOpen) {
      setAnimationDone(false);
      setDisplayedScore(0);
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

      // Slight delay for the score animation so images animate in first
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
      }, 500);

    } else {
      setDisplayedScore(0);
      setAnimationDone(false);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen, targetScore]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <style>
        {`
          @keyframes flyInTL {
            0% { transform: translate(-200%, -200%) rotate(-45deg); opacity: 0; }
            100% { transform: translate(0, 0) rotate(var(--rotation)); opacity: 1; }
          }
          @keyframes flyInTR {
            0% { transform: translate(200%, -200%) rotate(45deg); opacity: 0; }
            100% { transform: translate(0, 0) rotate(var(--rotation)); opacity: 1; }
          }
          @keyframes flyInBL {
            0% { transform: translate(-200%, 200%) rotate(45deg); opacity: 0; }
            100% { transform: translate(0, 0) rotate(var(--rotation)); opacity: 1; }
          }
          @keyframes flyInBR {
            0% { transform: translate(200%, 200%) rotate(-45deg); opacity: 0; }
            100% { transform: translate(0, 0) rotate(var(--rotation)); opacity: 1; }
          }
          @keyframes popInCenter {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
          @keyframes fadeInOpacity {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          .anim-img-tl { animation: flyInTL 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .anim-img-tr { animation: flyInTR 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .anim-img-bl { animation: flyInBL 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .anim-img-br { animation: flyInBR 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .anim-center-card { animation: popInCenter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s calc(1) both; }
          .anim-fade-in { animation: fadeInOpacity 0.5s ease-in forwards; }
        `}
      </style>

      <div
        className="
          bg-[#0A0C1A] md:bg-[#0F1123] text-white rounded-4xl w-full max-w-md relative h-[85vh] min-h-[550px] max-h-[850px] overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/5 anim-fade-in
          md:max-w-4xl md:h-[600px] md:min-h-0 md:max-h-[90vh]
        "
      >

        {/* <button
          onClick={onClose}
          className="absolute top-4 md:top-5 left-4 md:left-5 text-white/50 hover:text-white transition-colors z-50 flex items-center justify-center bg-black/20 md:bg-white/5 p-2 rounded-full backdrop-blur-md"
        >
          <ArrowLeft className="w-6 h-6" />
        </button> */}

        <div className="flex-1 relative overflow-hidden bg-[#0A0C1A]">

          <div className="absolute top-[8%] left-[-10%] md:top-[0%] md:left-[4%] w-[55%] md:w-[280px] lg:w-[340px] aspect-4/5 rounded-3xl overflow-hidden shadow-2xl anim-img-tl" style={{ '--rotation': '-12deg' }}>
            <img src="/quiz-result2.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-[-5%] right-[-15%] md:top-[-10%] md:right-[2%] w-[60%] md:w-[320px] lg:w-[380px] aspect-4/5 rounded-3xl overflow-hidden shadow-2xl anim-img-tr" style={{ '--rotation': '18deg' }}>
            <img src="/quiz-result3.png" alt="" className="w-full h-full object-cover pointer-events-none" />
          </div>

          <div className="absolute bottom-[8%] left-[-10%] md:bottom-[-5%] md:left-[2%] w-[50%] md:w-[260px] lg:w-[300px] aspect-4/5 rounded-3xl overflow-hidden shadow-2xl anim-img-bl" style={{ '--rotation': '-8deg' }}>
            <img src="/quiz-result1.png" alt="" className="w-full h-full object-cover pointer-events-none" />
          </div>

          <div className="absolute bottom-[-5%] right-[-10%] md:bottom-[-10%] md:right-[6%] w-[55%] md:w-[300px] lg:w-[360px] aspect-4/5 rounded-3xl overflow-hidden shadow-2xl anim-img-br" style={{ '--rotation': '12deg' }}>
            <img src="/quiz-result2.png" alt="" className="w-full h-full object-cover pointer-events-none" />
          </div>

          <div className="absolute inset-0 bg-black/10 md:bg-black/5 pointer-events-none z-10" />

          <div className="absolute top-1/2 left-1/2 w-[85%] sm:w-[80%] max-w-[340px] md:max-w-[380px] bg-white rounded-3xl p-8 pt-10 pb-10 md:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.6)] flex flex-col items-center text-center anim-center-card z-20">
            <SparkleIcon className="text-[#111] w-7 h-7 sm:w-8 sm:h-8 absolute top-6 right-8" />
            <SparkleIcon className="text-[#111] w-4 h-4 sm:w-5 sm:h-5 absolute top-[50%] left-8 transform -translate-y-1/2" />

            <span className="text-[90px] md:text-[110px] font-serif font-normal text-[#111] leading-none tracking-tight mb-4 mt-2">
              {displayedScore}%
            </span>

            <p className="text-[#333] text-[15.5px] md:text-[17px] font-medium leading-[1.4] px-1">
              The percentage of our dinner groups that rate themselves as compatible
            </p>
          </div>
        </div>

        <div className="w-full p-5 md:p-8 md:px-12 bg-linear-to-t from-[#0A0C1A] via-[#0A0C1A]/95 to-transparent relative z-30 pt-10">
          <button
            onClick={onContinue}
            disabled={!animationDone}
            className={`
              w-full max-w-[340px] md:max-w-[400px] mx-auto block py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-[15px] md:text-[16px] tracking-wider uppercase
              transition-all duration-300
              ${animationDone
                ? 'bg-[#FFAA55] text-[#09090f] hover:bg-[#ffbb77] shadow-[0_8px_32px_rgba(255,170,85,0.35)] active:scale-[0.98]'
                : 'bg-[#FFAA55]/30 text-white/30 cursor-not-allowed'
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsModal;
