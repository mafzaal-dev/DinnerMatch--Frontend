"use client";

import React, { useState } from 'react';

const EmailConfirmationModal = ({ isOpen, onClose, onContinue, onBack }) => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === confirmEmail && email) {
      onContinue(email);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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
          <p className="text-gray-400">Let's get started.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#0f1419] border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              placeholder="Confirm your email"
              className="w-full px-4 py-3 bg-[#0f1419] border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] transition-colors"
              required
            />
          </div>

          {email && confirmEmail && email !== confirmEmail && (
            <p className="text-red-500 text-sm">Emails do not match</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
          >
            Continue
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 space-y-2 text-center">
          {onBack && (
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors text-sm block w-full"
            >
              Back to Options
            </button>
          )}
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <button onClick={onBack} className="text-[#F97315] hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationModal;

