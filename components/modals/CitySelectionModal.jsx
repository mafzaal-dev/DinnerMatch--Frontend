"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';

const CitySelectionModal = ({ isOpen, onClose, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    setError(null);
    setLoading(true);
    api
      .get(API_ENDPOINTS.GET_CITY_AREA)
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        setCities(raw);
      })
      .catch((err) => setError(err?.message ?? 'Failed to load cities'))
      .finally(() => setLoading(false));
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-10">
          <h2 className="text-[32px] font-bold text-[#F5F5F5] text-center mb-2">Select Your City</h2>
          <p className="text-[20px] text-[#E0E0E0] text-center">Choose the city where you'd like to have dinner:</p>
        </div>

        <div className="flex flex-col gap-y-4">
          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-8 h-8 border-2 border-[#FFAA55] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {error && (
            <p className="text-center text-red-400 py-4">{error}</p>
          )}
          {!loading && !error && cities.length === 0 && (
            <p className="text-center text-[#E0E0E0] py-4">No cities available.</p>
          )}
          {!loading && !error && cities.map((city) => (
            <button
              key={city.id}
              onClick={() => onSelectCity(city)}
              className="w-full bg-[#111121] border border-[#2f3a51] rounded-lg flex px-4 items-center h-14.75 hover:border-[#FFAA55] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#EEEEEE] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <p className="text-[#F5F5F5] text-base leading-tight">{city.name}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySelectionModal;


