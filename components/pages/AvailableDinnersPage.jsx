"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '../../src/utils/api';

const AvailableDinnersPage = ({ onMyAccount, onViewDetails }) => {
  const [dinners, setDinners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [requestingDinner, setRequestingDinner] = useState(null);

  useEffect(() => {
    fetchDinners();
  }, []);

  const fetchDinners = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await api.get(API_ENDPOINTS.DINNER_LIST, {
        params: {
          index: 0,
          offset: 50,
          // Only get dinners from today onwards
          start_date: new Date().toISOString().split('T')[0]
        }
      });

      if (response.success) {
        setDinners(response.data || []);
      }
    } catch (err) {
      console.error('Error fetching dinners:', err);
      setError('Failed to load dinners');
    } finally {
      setLoading(false);
    }
  };

  const handleRequestDinner = async (dinnerId) => {
    try {
      setRequestingDinner(dinnerId);
      setError('');

      const response = await api.post(API_ENDPOINTS.DINNER_MAKE_REQUEST, {
        dinner_id: dinnerId
      });

      if (response.success) {
        alert('Request sent successfully! We will notify you once confirmed.');
        // Refresh dinners to update any status
        fetchDinners();
      }
    } catch (err) {
      console.error('Error requesting dinner:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Failed to request dinner';
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setRequestingDinner(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-[#080714] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">DinnersMatch</h1>
            <p className="text-sm text-[#FFAA55] uppercase tracking-wide">Available Dinners</p>
          </div>
          {onMyAccount && (
            <button
              onClick={onMyAccount}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
            >
              My Account
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500 rounded-lg p-4">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]"></div>
          </div>
        )}

        {/* Dinners List */}
        {!loading && (
          <div className="space-y-4">
            {dinners.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[#E0E0E0] text-lg mb-4">No upcoming dinners available</p>
                <p className="text-[#757575] text-sm">Check back soon for new dinner events!</p>
              </div>
            ) : (
              dinners.map((dinner) => (
                <div
                  key={dinner.id}
                  className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 hover:border-[#FFAA55] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">
                        {dinner.title}
                      </h3>

                      {/* Date & Time */}
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-[#FFAA55] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-[#F5F5F5] font-medium">
                          {formatDate(dinner.date)}
                        </p>
                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-[#FFAA55] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-[#E0E0E0]">
                          {formatTime(dinner.date)}
                        </p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-[#FFAA55] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-[#E0E0E0]">{dinner.location}</p>
                      </div>

                      {/* Dinner Type Badge */}
                      <div className="mt-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          dinner.dinner_type === 'Open' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {dinner.dinner_type}
                        </span>
                        <span className={`ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          dinner.dinner_status === 'Published'
                            ? 'bg-[#FFAA55]/20 text-[#FFAA55]'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {dinner.dinner_status}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-col gap-2">
                      {onViewDetails && (
                        <button
                          onClick={() => onViewDetails(dinner.id)}
                          className="bg-transparent border-2 border-[#FFAA55] text-[#FFAA55] px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FFAA55] hover:text-[#F5F5F5] transition-all whitespace-nowrap"
                        >
                          View Details
                        </button>
                      )}
                      <button
                        onClick={() => handleRequestDinner(dinner.id)}
                        disabled={requestingDinner === dinner.id || dinner.dinner_status !== 'Published'}
                        className="bg-[#FFAA55] text-[#F5F5F5] px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {requestingDinner === dinner.id ? 'Requesting...' : 'Request to Join'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableDinnersPage;
