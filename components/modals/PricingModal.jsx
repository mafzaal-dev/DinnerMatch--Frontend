"use client";

import React, { useState } from "react";

const PricingModal = ({ isOpen, onClose, onSelectPlan }) => {
  const [loadingPlanId, setLoadingPlanId] = useState(null);

  if (!isOpen) return null;

  const handleSelectPlan = async (planId) => {
    try {
      setLoadingPlanId(planId);
      await onSelectPlan(planId);
    } finally {
      setLoadingPlanId(null);
    }
  };

  const plans = [
    {
      id: "annual",
      title: "Annual Pass",
      badge: "BEST VALUE",
      badgeColor: "bg-[#FFAA55]",
      originalPrice: "R3000",
      price: "R2000",
      priceColor: "text-[#FFAA55]",
      savings: "Save R1000",
      billing: "Billed Annually",
      features: [
        "Unlimited DinnerMatch Dinner for 12 months.",
        "First access to every dinner",
        "Discount + First access to exclusive DinnerMatch parties",
        "Community member perks",
      ],
      buttonText: "Get Annual Pass",
      buttonColor: "bg-[#FFAA55] hover:bg-[#FF9955]",
    },
    {
      id: "monthly",
      title: "Monthly Pass",
      badge: null,
      badgeColor: "",
      price: "R250",
      priceColor: "text-[#F5F5F5]",
      savings: null,
      billing: "Billed Monthly",
      features: [
        "Access to all Dinners - build your social rhythm.",
        "Early access to exclusive DinnerMatch parties",
        "Cancel anytime - no question asked.",
      ],
      buttonText: "Start Monthly Pass",
      buttonColor: "bg-[#FFAA55] hover:bg-[#FF9955]",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#080814] border border-white rounded-xl w-full max-w-6xl p-8 relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
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

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            Choose Your DinnerMatch Pass
          </h2>
          <p className="text-[#E0E0E0]">
            No more waiting for plans. Join Cape Town most exciting social
            community.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#111121] border border-white rounded-xl p-6 relative flex flex-col hover:border-[#FFAA55] transition-colors"
            >
              {plan.badge && (
                <div
                  className={`${plan.badgeColor} text-[#F5F5F5] text-xs font-bold px-3 py-1 rounded-full w-fit mb-4`}
                >
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
                {plan.title}
              </h3>
              <div className="mb-4">
                {plan.originalPrice && (
                  <span className="text-[#A0A0A0] line-through text-lg mr-2">
                    {plan.originalPrice}
                  </span>
                )}
                <span className={`text-3xl font-bold ${plan.priceColor}`}>
                  {plan.price}
                </span>
              </div>
              {plan.savings && (
                <p className="text-[#FFAA55] text-sm mb-2 font-medium">
                  {plan.savings}
                </p>
              )}
              {plan.billing && (
                <p className="text-[#E0E0E0] text-sm mb-4">{plan.billing}</p>
              )}
              <ul className="space-y-3 mb-6 grow">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#E0E0E0] text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#FFAA55] mr-2 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSelectPlan(plan.id)}
                disabled={loadingPlanId !== null}
                className={`w-full cursor-pointer ${plan.buttonColor} text-[#F5F5F5] py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2 ${loadingPlanId !== null ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {loadingPlanId === plan.id && (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {loadingPlanId === plan.id ? 'Processing...' : plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Why Subscription Section */}
        <div className="bg-[#111121] border border-white rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">
            Why a subscription?
          </h3>
          <p className="text-[#E0E0E0] leading-relaxed">
            Building a social life isn't a once-off event - it's a rhythm.
            DinnerMatch happens every 2 weeks, and the magic only works when
            people show up consistently. A subscription lets us guarantee great
            groups, exciting restaurants, and a reliable social rhythm you can
            count on.
          </p>
        </div>

        {/* Legal Text */}
        <p className="text-xs text-[#A0A0A0] text-center">
          By continuing you agree to our{" "}
          <a
            href="/terms-conditions"
            className="text-[#FFAA55] hover:underline"
          >
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="text-[#FFAA55] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PricingModal;
