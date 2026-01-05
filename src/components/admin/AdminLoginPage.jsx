"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminLoginPage = ({ onLogin }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle admin login logic here
    if (onLogin) {
      onLogin(formData);
    } else {
      // Default behavior: navigate to admin dashboard
      router.push('/admin/dashboard');
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

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Write here"
              className="w-full bg-white border rounded-lg focus:outline-none focus:border-[#F97316] transition-colors"
              style={{
                borderColor: '#EEEEEE',
                height: '48px',
                padding: '0 16px',
                fontSize: '11px',
                color: '#212121',
              }}
              required
            />
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Write here"
              className="w-full bg-white border rounded-lg focus:outline-none focus:border-[#F97316] transition-colors"
              style={{
                borderColor: '#EEEEEE',
                height: '48px',
                padding: '0 16px',
                fontSize: '11px',
                color: '#212121',
              }}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: '#F97316',
              height: '48px',
              fontSize: '12px',
            }}
          >
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

