"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '../../src/utils/api';
import { useSubscription } from '../../src/hooks/useDinners';
import { toast } from 'react-hot-toast';

const BookDinnerModal = ({ isOpen, onClose, onSuccess, onBack, selectedCity, selectedPlace }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [dinnerSlots, setDinnerSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { data: subscriptionData } = useSubscription();

  useEffect(() => {
    if (isOpen) {
      fetchDinnerSlots();
    }
  }, [isOpen]);

  const fetchDinnerSlots = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get(API_ENDPOINTS.DINNER_LIST);

      if (response.success && response.data) {
        const formattedSlots = response.data.map(dinner => ({
          id: dinner.id,
          date: new Date(dinner.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          time: new Date(dinner.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
          fullDate: dinner.date
        }));
        setDinnerSlots(formattedSlots);
      }
    } catch (err) {
      console.error('Error fetching dinner slots:', err);
      setDinnerSlots([
        { id: '1', date: 'December 2, 2025', time: '7:00 PM' },
        { id: '2', date: 'December 2, 2025', time: '10:00 PM' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSecureSpot = () => {
    if (!selectedSlot) return;
    if (onSuccess) {
      onSuccess(selectedSlot);
    }
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#111121] border border-[#2F3A51] rounded-2xl w-full max-w-md p-10 relative shadow-2xl">
          <div className="text-center text-[#F5F5F5]">Loading dinner slots...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1123] md:bg-black/80 md:flex md:items-center md:justify-center overflow-y-auto">
      <div className="min-h-full h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-12 relative w-full">
          {onBack && (
            <button
              onClick={onBack}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm md:block hidden">Back</span>
            </button>
          )}
          <h1 className="text-2xl md:text-4xl font-bold mb-1"><span className="text-white">Dinner</span><span className="text-[#FFAA55]">Match</span></h1>
        </div>

        <div className="w-full max-w-xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#FFAA55]">Book Your Next Dinner</h2>
            <p className="text-sm text-gray-400 mt-1">5 new people can't wait to meet you</p>
          </div>

          <div className="w-full space-y-4">
            {dinnerSlots.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${isSelected
                    ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111]'
                    : 'bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5'
                    }`}
                >
                  <div className="text-left">
                    <p className={`text-base font-bold ${isSelected ? 'text-[#111]' : 'text-white'}`}>{slot.date}</p>
                    <p className={`text-xs ${isSelected ? 'text-[#111]/80' : 'text-gray-400'}`}>{slot.time}</p>
                  </div>
                  {isSelected && (
                    <svg className="w-4 h-4 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleSecureSpot}
            disabled={!selectedSlot || submitting}
            className={`w-full bg-[#FFAA55] text-white py-3 px-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#FF9955] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,170,85,0.4)]`}
          >
            {submitting ? 'Securing spot...' : 'Secure My Spot'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDinnerModal;
