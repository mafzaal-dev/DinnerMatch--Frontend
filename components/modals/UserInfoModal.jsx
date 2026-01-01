"use client";

import React, { useState } from 'react';

const UserInfoModal = ({ isOpen, onClose, onContinue, onBack }) => {
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && mobileNumber) {
      onContinue({ firstName, mobileNumber });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">DinnersMatch</h2>
          <p className="text-gray-400">Tell us about yourself</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="w-full px-4 py-3 bg-[#0f1419] border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile number"
              className="w-full px-4 py-3 bg-[#0f1419] border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoModal;

