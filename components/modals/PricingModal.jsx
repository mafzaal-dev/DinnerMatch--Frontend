"use client";

import React from 'react';

const PricingModal = ({ isOpen, onClose, onSelectPlan }) => {
  if (!isOpen) return null;

  const plans = [
    {
      id: 'annual',
      title: 'Annual Pass',
      badge: 'BEST VALUE',
      badgeColor: 'bg-yellow-500',
      originalPrice: 'R2500',
      price: 'R2000/year',
      priceColor: 'text-yellow-500',
      savings: 'Save R500 when you pay upfront',
      features: [
        'Unlimited DinnersMatch Dinner for 12 months.',
        'First access to every dinner',
        'Discount + First access to exclusive DinnersMatch parties',
        'Community member perks',
      ],
      buttonText: 'Get Annual Pass',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
    },
    {
      id: 'monthly',
      title: 'Monthly Pass',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-blue-500',
      price: 'R250/month',
      priceColor: 'text-white',
      savings: "You're saving R75 per dinner when you attend more than one.",
      features: [
        'Access to all Dinners - build your social rhythm.',
        'Early access to exclusive DinnersMatch parties',
        'Cancel anytime - no question asked.',
      ],
      buttonText: 'Start Monthly Pass',
      buttonColor: 'bg-[#F97315] hover:bg-[#EA580C]',
    },
    {
      id: 'single',
      title: 'Single Dinner',
      price: 'R200/once off',
      priceColor: 'text-white',
      features: ['Limited to 1 dinner'],
      buttonText: 'Get Single Ticket',
      buttonColor: 'bg-[#F97315] hover:bg-[#EA580C]',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-6xl p-8 relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Choose Your DinnersMatch Pass</h2>
          <p className="text-gray-400">
            No more waiting for plans. Join Cape Town most exciting social community.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#0f1419] rounded-xl p-6 border border-gray-700 relative flex flex-col"
            >
              {plan.badge && (
                <div
                  className={`${plan.badgeColor} text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4`}
                >
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-4">{plan.title}</h3>
              <div className="mb-4">
                {plan.originalPrice && (
                  <span className="text-gray-500 line-through text-lg mr-2">
                    {plan.originalPrice}
                  </span>
                )}
                <span className={`text-3xl font-bold ${plan.priceColor}`}>{plan.price}</span>
              </div>
              {plan.savings && (
                <p className="text-green-500 text-sm mb-4">{plan.savings}</p>
              )}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <svg
                      className="w-5 h-5 text-[#F97315] mr-2 flex-shrink-0 mt-0.5"
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
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Why Subscription Section */}
        <div className="bg-[#0f1419] rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-3">Why a subscription?</h3>
          <p className="text-gray-400 leading-relaxed">
            Building a social life isn't a once-off event - it's a rhythm. DinnersMatch happens
            every 2 weeks, and the magic only works when people show up consistently. A
            subscription lets us guarantee great groups, exciting restaurants, and a reliable
            social rhythm you can count on.
          </p>
        </div>

        {/* Legal Text */}
        <p className="text-xs text-gray-500 text-center">
          By selecting a plan, you agree to our{' '}
          <a href="#" className="text-[#F97315] hover:underline underline">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#F97315] hover:underline underline">
            Privacy Policy
          </a>
          . Subscriptions can be cancelled anytime. Single tickets are non-refundable.
        </p>
      </div>
    </div>
  );
};

export default PricingModal;

