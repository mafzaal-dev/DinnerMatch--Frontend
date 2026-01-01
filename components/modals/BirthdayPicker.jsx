"use client";

import React, { useState } from 'react';

const BirthdayPicker = ({ isOpen, onClose, onConfirm, onBack }) => {
  const [selectedDate, setSelectedDate] = useState('01/01/2000');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedDay, setSelectedDay] = useState(17);
  const [selectedYear, setSelectedYear] = useState(2024);

  if (!isOpen) return null;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const days = Array.from({ length: daysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 18 - i);

  const handleDateSelect = () => {
    const monthStr = String(selectedMonth + 1).padStart(2, '0');
    const dayStr = String(selectedDay).padStart(2, '0');
    const formattedDate = `${monthStr}/${dayStr}/${selectedYear}`;
    setSelectedDate(formattedDate);
    setShowDatePicker(false);
  };

  const handleConfirm = () => {
    const monthStr = String(selectedMonth + 1).padStart(2, '0');
    const dayStr = String(selectedDay).padStart(2, '0');
    const formattedDate = `${monthStr}/${dayStr}/${selectedYear}`;
    onConfirm(formattedDate);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-1">DinnersMatch</h2>
          <p className="text-sm text-[#F97315] uppercase tracking-wide">Identity</p>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            When is your birthday?
          </h3>

          {/* Date Input */}
          <div className="relative">
            <input
              type="text"
              value={selectedDate}
              readOnly
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full px-4 py-3 bg-[#0f1419] border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] transition-colors cursor-pointer"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Date Picker */}
          {showDatePicker && (
            <div className="mt-4 bg-[#0f1419] rounded-lg p-4 border-2 border-gray-700">
              <div className="grid grid-cols-3 gap-4">
                {/* Months */}
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {months.map((month, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedMonth(index);
                        const maxDays = daysInMonth(index, selectedYear);
                        if (selectedDay > maxDays) {
                          setSelectedDay(maxDays);
                        }
                      }}
                      className={`w-full px-3 py-2 rounded text-sm transition-colors ${
                        selectedMonth === index
                          ? 'bg-[#F97315] text-white'
                          : 'bg-[#1a1f2e] text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {month}
                    </button>
                  ))}
                </div>

                {/* Days */}
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`w-full px-3 py-2 rounded text-sm transition-colors ${
                        selectedDay === day
                          ? 'bg-[#F97315] text-white'
                          : 'bg-[#1a1f2e] text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* Years */}
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        const maxDays = daysInMonth(selectedMonth, year);
                        if (selectedDay > maxDays) {
                          setSelectedDay(maxDays);
                        }
                      }}
                      className={`w-full px-3 py-2 rounded text-sm transition-colors ${
                        selectedYear === year
                          ? 'bg-[#F97315] text-white'
                          : 'bg-[#1a1f2e] text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleDateSelect}
                className="w-full mt-4 bg-[#F97315] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#EA580C] transition-colors"
              >
                Select Date
              </button>
            </div>
          )}
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BirthdayPicker;

