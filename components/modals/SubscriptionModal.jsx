"use client";

import React, { useEffect } from "react";
import PricingSection from "@/components/pricing/PricingSection";

const SubscriptionModal = ({ isOpen, onClose, onContinue, onBack }) => {
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectPlan = (plan) => {
    onContinue?.(plan);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-[#080814] rounded-xl w-full max-w-6xl p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => onClose?.()}
          className="absolute top-10 right-10 z-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="absolute top-10 left-10 z-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
        )}

        <PricingSection onSelectPlan={handleSelectPlan} />
      </div>
    </div>
  );
};

export default SubscriptionModal;
