"use client";

import React from 'react';

const AccessDeniedModal = ({
  isOpen,
  onRedirect,
  title = 'Access Denied',
  message = "You don't have permission to access the admin area. Please use the main site or contact support if you believe this is an error.",
  buttonText = 'Go to Home',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-md p-10 relative shadow-2xl flex flex-col gap-6">
        <div className="text-center flex flex-col gap-2">
          <div className="mx-auto w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[#F5F5F5]">{title}</h2>
          <p className="text-[#E0E0E0] text-sm leading-relaxed">{message}</p>
        </div>
        <button
          type="button"
          onClick={onRedirect}
          className="w-full bg-[#FFAA55] text-[#F5F5F5] py-3 px-4 rounded-lg font-medium text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AccessDeniedModal;
