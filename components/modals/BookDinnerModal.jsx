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
          date: new Date(dinner.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          time: new Date(dinner.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
          fullDate: dinner.date
        }));
        setDinnerSlots(formattedSlots);
      }
    } catch (err) {
      console.error('Error fetching dinner slots:', err);
      setDinnerSlots([
        { id: '1', date: 'December 2', time: '7 pm' },
        { id: '2', date: 'December 2', time: '10 pm' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSecureSpot = async () => {
    if (!selectedSlot) return;

    const hasActiveSubscription = subscriptionData && subscriptionData.length > 0;
    if (!hasActiveSubscription) {
      toast.error('You need an active subscription to request a dinner.');
      return;
    }

    try {
      setSubmitting(true);
      setError('');

      const requestData = {
        dinner_id: selectedSlot,
        city: selectedCity?.name || '',
        area: selectedPlace?.name || ''
      };

      const response = await api.post(API_ENDPOINTS.DINNER_MAKE_REQUEST, requestData);

      if (response.success) {
        if (onSuccess) {
          onSuccess(response.data);
        }
      }
    } catch (err) {
      console.error('Error requesting dinner:', err);
      setError(err.message || 'Failed to book dinner. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 max-h-[90vh] overflow-y-auto">
          <div className="text-center text-[#F5F5F5]">Loading dinner slots...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-10 left-10 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        )}

        <div className="mb-10 text-center">
          <h2 className="text-[32px] font-bold text-[#F5F5F5] mb-1">DinnerMatch</h2>
          <p className="text-base text-[#FFAA55] uppercase tracking-wide">Identity</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">✨</span>
            <h3 className="text-3xl md:text-3xl font-bold text-center text-[#FFAA55]">
              Book Your Next <span className='text-white'> Dinner</span>
            </h3>
          </div>
          <p className="text-[#E0E0E0] mb-6 text-center">5 peoples can't wait to meet you.</p>

          <div className="space-y-4">
            {dinnerSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => setSelectedSlot(slot.id)}
                disabled={submitting}
                className={`w-full bg-[#111121] border rounded-lg p-6 flex items-center justify-between transition-all ${
                  selectedSlot === slot.id
                    ? 'border-[#FFAA55] bg-[#080814]'
                    : 'border-[#2F3A51] hover:border-[#FFAA55]'
                } ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="text-left">
                  <p className="text-[#F5F5F5] font-medium text-lg">{slot.date}</p>
                  <p className="text-[#E0E0E0] text-sm">{slot.time}</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedSlot === slot.id
                      ? 'border-[#FFAA55] bg-[#FFAA55]'
                      : 'border-[#2F3A51]'
                  }`}
                >
                  {selectedSlot === slot.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSecureSpot}
          disabled={!selectedSlot || submitting}
          className={`w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide transition-colors ${
            selectedSlot && !submitting
              ? 'bg-[#FFAA55] text-white hover:bg-[#FF9955]'
              : 'bg-[#2F3A51] text-[#E0E0E0] cursor-not-allowed'
          }`}
        >
          {submitting ? 'Securing spot...' : 'Secure My Spot'}
        </button>
      </div>
    </div>
  );
};

export default BookDinnerModal;

