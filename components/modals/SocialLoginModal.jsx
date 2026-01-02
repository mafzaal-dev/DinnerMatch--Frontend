"use client";

import React from 'react';

const SocialLoginModal = ({ isOpen, onClose, onSelectMethod, onBackToOptions, onSignIn }) => {
  if (!isOpen) return null;

  const socialOptions = [
    {
      id: 'apple',
      label: 'Continue with Apple',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.95-18.4c1.5-1.83 4.02-2.45 6.15-1.3-.25 2.16-1.5 3.84-3.15 4.9-1.35-.78-2.7-2.05-3-3.6z" />
        </svg>
      ),
    },
    {
      id: 'google',
      label: 'Continue with Google',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      ),
    },
    {
      id: 'email',
      label: 'Continue with Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

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

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h2>
          <p className="text-[#E0E0E0]">Let's get started.</p>
        </div>

        {/* Social Login Options */}
        <div className="space-y-4 mb-10">
          {socialOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSelectMethod(option.id)}
              className="w-full bg-[#111121] border border-white rounded-lg px-6 py-4 flex items-center gap-4 hover:border-[#FFAA55] transition-colors"
            >
              <div className="text-[#F5F5F5]">{option.icon}</div>
              <span className="text-[#F5F5F5] font-medium flex-1 text-left">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Footer Links */}
        <div className="space-y-2 text-center">
          {onBackToOptions && (
            <button
              onClick={onBackToOptions}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors text-sm"
            >
              Back to Options
            </button>
          )}
          {onSignIn && (
            <p className="text-[#E0E0E0] text-sm">
              Already have an account?{' '}
              <button onClick={onSignIn} className="text-[#FFAA55] hover:underline">
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialLoginModal;

