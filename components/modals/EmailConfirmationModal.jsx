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
      <div className="bg-[#080814] rounded-xl w-full max-w-[616px] p-10 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h2>
          <p className="text-[#E0E0E0]">Let's get started.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#E0E0E0] focus:outline-none focus:border-[#FFAA55] transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              placeholder="Confirm your email"
              className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#E0E0E0] focus:outline-none focus:border-[#FFAA55] transition-colors"
              required
            />
          </div>

          {email && confirmEmail && email !== confirmEmail && (
            <p className="text-red-500 text-sm">Emails do not match</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
          >
            Continue
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-10 space-y-2 text-center">
          {onBack && (
            <button
              onClick={onBack}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors text-sm block w-full"
            >
              Back to Options
            </button>
          )}
          <p className="text-[#E0E0E0] text-sm">
            Already have an account?{' '}
            <button onClick={onBack} className="text-[#FFAA55] hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationModal;

