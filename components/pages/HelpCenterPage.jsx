"use client";

import React, { useState } from 'react';

const HelpCenterPage = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    reason: '',
    subject: '',
    description: '',
  });

  const reasons = [
    'General Inquiry',
    'Technical Issue',
    'Billing Question',
    'Account Problem',
    'Other',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors mb-4 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#F97315] uppercase text-center">Help Center</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#1a1f2e] rounded-xl p-6 md:p-8">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Your email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315]"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315]"
                required
              />
            </div>

            {/* Reason */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Reason for contacting us <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F97315] appearance-none pr-10"
                  required
                >
                  <option value="">Select reason</option>
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of your message"
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315]"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Please provide detailed information about your inquiry or issue"
                rows={6}
                className="w-full px-4 py-3 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpCenterPage;

