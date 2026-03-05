"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';

const CitySelectionModal = ({ isOpen, onClose, onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCityId, setSelectedCityId] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedCityId(null);
      return;
    }
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

  const handleSelect = (city) => {
    setSelectedCityId(city.id);
    setTimeout(() => {
      onSelectCity(city);
    }, 350);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0F1123] text-white rounded-lg p-4 md:p-8 max-w-2xl w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mb-6 md:mb-10 mt-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">Select Your City</h2>
          <p className="text-gray-300 text-base md:text-lg">Choose the city where you'd like to have dinner:</p>
        </div>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
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
          {!loading && !error && cities.map((city) => {
            const isSelected = selectedCityId === city.id;
            return (
              <button
                key={city.id}
                onClick={() => handleSelect(city)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ease-out  ${isSelected
                  ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111] shadow-[0_8px_24px_rgba(255,170,85,0.25)] -translate-y-1'
                  : 'bg-transparent text-white border-white hover:border-white/30 hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <svg
                    className={`w-6 h-6 shrink-0 ${isSelected ? 'text-[#111]' : 'text-[#EEEEEE]'}`}
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
                    <p className={`text-base leading-tight font-medium ${isSelected ? 'text-[#111]' : 'text-[#F5F5F5]'}`}>
                      {city.name}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CitySelectionModal;


