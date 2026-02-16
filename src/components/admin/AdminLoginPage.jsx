"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { adminLoginSchema } from '@/constants/validationSchemas';

const AdminLoginPage = ({ onLogin, isLoading, error }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminLoginSchema),
  });

  const onSubmit = (data) => {
    // Handle admin login logic here
    if (onLogin) {
      onLogin(data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#FAFAFA' }}>
      <div 
        className="w-full max-w-[616px] bg-white rounded-lg border"
        style={{ 
          borderColor: '#E3E8F3',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h1 className="text-[#212121] font-semibold" style={{ fontSize: '17px', lineHeight: '17px' }}>
            Data Admin Login
          </h1>
          <p 
            className="text-[#757575] text-center" 
            style={{ fontSize: '14px', lineHeight: '14px', maxWidth: '235px' }}
          >
            Access user data management system
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Email Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label 
              htmlFor="email" 
              className="text-[#424242]" 
              style={{ fontSize: '10px', lineHeight: '10px' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              placeholder="Write here"
              className={`w-full bg-white border rounded-lg focus:outline-none focus:border-[#F97316] transition-colors ${errors.email ? 'border-red-500' : ''}`}
              style={{
                borderColor: errors.email ? '#EF4444' : '#EEEEEE',
                height: '48px',
                padding: '0 16px',
                fontSize: '11px',
                color: '#212121',
              }}
              disabled={isLoading}
            />
            {errors.email && (
              <span className="text-red-500" style={{ fontSize: '10px' }}>{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label 
              htmlFor="password" 
              className="text-[#424242]" 
              style={{ fontSize: '10px', lineHeight: '10px' }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              placeholder="Write here"
              className={`w-full bg-white border rounded-lg focus:outline-none focus:border-[#F97316] transition-colors ${errors.password ? 'border-red-500' : ''}`}
              style={{
                borderColor: errors.password ? '#EF4444' : '#EEEEEE',
                height: '48px',
                padding: '0 16px',
                fontSize: '11px',
                color: '#212121',
              }}
              disabled={isLoading}
            />
            {errors.password && (
              <span className="text-red-500" style={{ fontSize: '10px' }}>{errors.password.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
            style={{
              backgroundColor: '#F97316',
              height: '48px',
              fontSize: '12px',
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading && (
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            Sign In
          </button>
        </form>
      </div>

      <style jsx>{`
        input::placeholder {
          color: #BDBDBD;
        }
      `}</style>
    </div>
  );
};

export default AdminLoginPage;

