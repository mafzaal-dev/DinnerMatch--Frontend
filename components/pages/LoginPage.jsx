"use client";

import React, { useState } from 'react';

const LoginPage = ({ onLogin, onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin({ email, password });
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
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2 text-center">WANT TO MEET YOUR PEOPLE?</h2>
          <p className="text-[#E0E0E0] text-center mb-8">Welcome back!</p>

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

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-[#0F1419] border border-white rounded-lg text-[#F5F5F5] placeholder-[#A0A0A0] focus:outline-none focus:border-[#FFAA55] transition-colors pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/forgot-password';
                  }
                }}
                className="text-sm text-[#FFAA55] hover:underline transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#FFAA55] text-[#F5F5F5] py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-[#E0E0E0] text-sm">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSignUp}
                className="text-[#FFAA55] hover:underline"
              >
                Sign up
              </button>
            </p>

            {/* Terms */}
            <p className="text-xs text-[#A0A0A0] text-center mt-4">
              By continuing, you agree to our{' '}
              <a href="/terms-conditions" className="text-[#FFAA55] hover:underline">Terms of Service</a> and{' '}
              <a href="/privacy-policy" className="text-[#FFAA55] hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>

        {/* Background Text */}
        <div className="mt-8 text-center">
          <p className="text-[#E0E0E0] text-lg">REAL PEOPLE. UNREAL NIGHTS</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

