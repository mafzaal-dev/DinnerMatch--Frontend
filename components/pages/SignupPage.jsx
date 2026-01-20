"use client";

import React, { useState } from 'react';

const SignupPage = ({ onRegister, onLogin, isLoading, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRegister) {
      onRegister(formData);
    }
  };

  return (
    <div className="min-h-screen bg-[#080714] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h1>
        </div>

        {/* Main Content */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2 text-center">JOIN THE CLUB</h2>
          <p className="text-[#E0E0E0] text-center mb-8">Create your account</p>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="first_name" className="block text-sm font-semibold text-[#757575] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors disabled:opacity-50"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last_name" className="block text-sm font-semibold text-[#757575] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors disabled:opacity-50"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#757575] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors disabled:opacity-50"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#757575] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors pr-12 disabled:opacity-50"
                  required
                  disabled={isLoading}
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

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFAA55] text-[#F5F5F5] py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center mt-6"
            >
              {isLoading ? (
                 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Sign Up'}
            </button>

            {/* Login Link */}
            <p className="text-center text-[#E0E0E0] text-sm mt-4">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onLogin}
                className="text-[#FFAA55] hover:underline"
              >
                Login
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

export default SignupPage;

