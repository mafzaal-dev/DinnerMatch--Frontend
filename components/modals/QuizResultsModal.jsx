"use client";

import React, { useState, useEffect } from 'react';

const QuizResultsModal = ({ isOpen, onClose, onContinue }) => {
  const [displayedScore, setDisplayedScore] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const [targetScore] = useState(() => Math.floor(Math.random() * (90 - 80 + 1)) + 80);

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

      animationFrameId = requestAnimationFrame(animate);
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
    <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-0 md:p-4 lg:p-6">
      {/*
        ─── MOBILE: full-screen card  ───────────────────────────────
        ─── DESKTOP (md+): centered modal, side-by-side layout ──────
      */}
      <div
        className="
          relative w-full h-full bg-[#09090f]
          md:h-auto md:max-h-[92vh] md:w-full md:max-w-3xl lg:max-w-4xl
          md:rounded-3xl md:overflow-hidden
          flex flex-col md:flex-row
          overflow-hidden
        "
      >
        {/* ── Close button ────────────────────────────── */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute top-4 right-4 z-50
            w-9 h-9 flex items-center justify-center
            rounded-full bg-white/8 border border-white/10
            text-white/50 hover:text-white hover:bg-white/15
            transition-all duration-200
          "
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div
          className="
            relative flex-shrink-0
            w-full h-[52vw] min-h-[220px] max-h-[340px]
            md:w-[44%] md:h-auto md:max-h-none
            bg-[#0d0d18] overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#FFAA5520_0%,_transparent_70%)] pointer-events-none" />

          <div
            className="absolute rounded-xl md:rounded-2xl overflow-hidden border-[3px] border-[#09090f] shadow-2xl"
            style={{
              width: '38%',
              aspectRatio: '6 / 7',
              left: '4%',
              top: '12%',
              transform: 'rotate(-10deg)',
              zIndex: 10,
            }}
          >
            <img src="/quiz-result2.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute rounded-xl md:rounded-2xl overflow-hidden border-[3px] border-[#09090f] shadow-2xl"
            style={{
              width: '38%',
              aspectRatio: '6 / 7',
              right: '4%',
              top: '6%',
              transform: 'rotate(12deg)',
              zIndex: 20,
            }}
          >
            <img src="/quiz-result3.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute rounded-xl md:rounded-2xl overflow-hidden border-[3px] border-[#09090f] shadow-2xl"
            style={{
              width: '40%',
              aspectRatio: '6 / 7',
              left: '50%',
              top: '22%',
              transform: 'translateX(-50%)',
              zIndex: 30,
            }}
          >
            <img src="/quiz-result1.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-0 bg-gradient-to-t from-[#09090f] to-transparent pointer-events-none z-40" />

          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#09090f] to-transparent pointer-events-none z-40" />
        </div>

        <div
          className="
            flex-1 flex flex-col justify-between
            px-6 pt-6 pb-20
            md:px-10 md:py-12
            overflow-y-auto
          "
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase mb-6 md:mb-8">
              DinnerMatch
            </p>

            {/* Score */}
            <div className="mb-2 leading-none">
              <span
                className="font-black text-[#FFAA55] tabular-nums"
                style={{ fontSize: 'clamp(72px, 18vw, 108px)', lineHeight: 1 }}
              >
                {displayedScore}
                <span className="text-[0.6em] font-bold text-[#FFAA55]/80">%</span>
              </span>
            </div>

            <p className="text-[15px] text-white/50 leading-relaxed max-w-[260px] mt-3 mb-8 md:mb-10">
              of members you&apos;re compatible with
            </p>

            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {[
                { label: 'Compatibility', value: `${targetScore}%` },
                { label: 'Lifestyle Fit', value: '94%' },
                { label: 'Dinner Vibe', value: '88%' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07]"
                >
                  <span className="text-[10px] font-medium text-white/35 uppercase tracking-widest">{label}</span>
                  <span className="text-sm font-bold text-[#FFAA55] mt-0.5">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <button
              onClick={onContinue}
              disabled={!animationDone}
              className={`
                w-full py-4 rounded-2xl font-semibold text-[13px] tracking-widest uppercase
                transition-all duration-300
                ${animationDone
                  ? 'bg-[#FFAA55] text-[#09090f] hover:bg-[#ffbb77] shadow-[0_8px_32px_rgba(255,170,85,0.35)] active:scale-[0.98]'
                  : 'bg-[#FFAA55]/30 text-white/30 cursor-not-allowed'
                }
              `}
            >
              Continue
            </button>

            <p className="text-center text-[11px] text-white/20">
              Your results are private and only used for matching
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsModal;
