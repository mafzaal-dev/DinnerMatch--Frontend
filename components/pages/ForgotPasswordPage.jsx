"use client";

import React, { useState } from 'react';

const ForgotPasswordPage = ({ onSubmit, onBack, onSignIn }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email });
    }
  };

  return (
    <div className="min-h-screen bg-[#080814] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h1>
        </div>

        {/* Main Content */}
        <div className="bg-[#111121] border border-white rounded-xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2 text-center">Forgot Password?</h2>
          <p className="text-[#E0E0E0] text-center mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#0F1419] border border-white rounded-lg text-[#F5F5F5] placeholder-[#A0A0A0] focus:outline-none focus:border-[#FFAA55] transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FFAA55] text-[#F5F5F5] py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
            >
              Send Reset Link
            </button>

            {/* Back to Sign In */}
            <div className="text-center">
              <button
                type="button"
                onClick={onSignIn}
                className="text-[#FFAA55] hover:underline text-sm"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

