"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/constants/validationSchemas';

const LoginModal = ({ isOpen, onClose, onLogin }) => { // Added onLogin prop if it was missing or implied
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  if (!isOpen) return null;

  const onSubmit = (data) => {
    // Handle login
    console.log('Login data:', data);
    // If there is an onLogin prop, use it.
    // The original code didn't have onLogin in props destructuring but the user might expect it or it might be handled inside via API call directly?
    // The original code just had `onSubmit={(e) => e.preventDefault()}` so it was a dummy form.
    // I should probably just leave it as validatable form that logs or calls a prop if exists.
    if (onLogin) onLogin(data);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl max-w-154 w-full max-h-103.5 p-6 relative shadow-2xl">
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

        {/* Header */}
        <div className="space-y-2 mb-1 text-center">
          <h2 className="text-xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-200 text-sm">Sign in to continue your dinner experience</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#757575] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              placeholder="Enter your email"
              className={`w-full h-12 px-3 bg-white border rounded-lg text-white placeholder-[#bdbdbd] focus:outline-none focus:border-[#F97315] focus:ring-1 focus:ring-[#F97315] transition-colors ${errors.email ? 'border-red-500' : 'border-gray-500'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#757575] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password')}
                placeholder="Enter your password"
                className={`w-full h-12 px-3 bg-white border rounded-lg placeholder-[#bdbdbd] focus:outline-none focus:border-[#F97315] focus:ring-1 focus:ring-[#F97315] transition-colors pr-12 ${errors.password ? 'border-red-500' : 'border-gray-700'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
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
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#FFAA55]  text-white h-12 rounded-lg
             font-normal text-sm  tracking-wide flex justify-center
              items-center hover:bg-[#EA580C] transition-colors"
          >
            Sign In
          </button>

          {/* Terms */}
          <p className="text-xs text-[#A0A0A0] text-center">
            By continuing, you agree to our{' '}
            <a href="/terms-conditions" className="hover:underline">Terms of Service</a> and{' '}
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

