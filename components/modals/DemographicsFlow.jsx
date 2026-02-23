"use client";

import React, { useState } from 'react';
import { DatePicker } from '@/components/ui/date-picker';
import { format } from "date-fns";

const STEPS = [
  {
    id: 'gender',
    title: 'Identity',
    question: 'How do you define yourself?',
    type: 'choice',
    options: [
      { value: 'woman', label: 'Women' },
      { value: 'man', label: 'Men' },
      { value: 'non_binary', label: 'Non-Binary' }
    ]
  },
  {
    id: 'relationship_status',
    title: 'Identity',
    question: "What's your relationship status?",
    type: 'choice',
    options: [
      { value: 'single', label: 'Flying Solo' },
      { value: 'married', label: 'Locked in for Life (Married)' },
      { value: 'complicated', label: "It's a rollercoaster (Complicated)" },
      { value: 'taken', label: 'Taken' },
      { value: 'prefer_not_to_say', label: 'Prefer not to say' }
    ]
  },
  {
    id: 'industry',
    title: 'Identity',
    question: 'What industry do you work in?',
    type: 'choice',
    options: [
      { value: 'not_working', label: 'Not Working' },
      { value: 'studying', label: 'Studying' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'technology', label: 'Technology' },
      { value: 'retail', label: 'Retail' },
      { value: 'food', label: 'Food' },
      { value: 'services', label: 'Services' },
      { value: 'arts', label: 'Arts' },
      { value: 'others', label: 'Others' }
    ]
  },
  {
    id: 'nationality',
    title: 'Identity',
    question: 'What is your nationality?',
    type: 'search',
    placeholder: 'Search your nationality',
    options: [
      // Common nationalities
      { value: 'american', label: 'American' },
      { value: 'british', label: 'British' },
      { value: 'canadian', label: 'Canadian' },
      { value: 'australian', label: 'Australian' },
      { value: 'indian', label: 'Indian' },
      { value: 'chinese', label: 'Chinese' },
      { value: 'japanese', label: 'Japanese' },
      { value: 'german', label: 'German' },
      { value: 'french', label: 'French' },
      { value: 'italian', label: 'Italian' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'brazilian', label: 'Brazilian' },
      { value: 'mexican', label: 'Mexican' },
      { value: 'russian', label: 'Russian' },
      { value: 'south_african', label: 'South African' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'language',
    title: 'Identity',
    question: 'What is your primary language?',
    type: 'search',
    placeholder: 'Search your language',
    options: [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'mandarin', label: 'Mandarin Chinese' },
      { value: 'hindi', label: 'Hindi' },
      { value: 'french', label: 'French' },
      { value: 'arabic', label: 'Arabic' },
      { value: 'bengali', label: 'Bengali' },
      { value: 'portuguese', label: 'Portuguese' },
      { value: 'russian', label: 'Russian' },
      { value: 'japanese', label: 'Japanese' },
      { value: 'german', label: 'German' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'date_of_birth',
    title: 'Identity',
    question: 'When is your birthday?',
    type: 'date',
    placeholder: 'Select your birthday'
  }
];

const DemographicsFlow = ({ isOpen, onClose, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Date state
  const [dateValue, setDateValue] = useState('');

  const currentQ = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Restore date value when revisiting the step
  React.useEffect(() => {
    if (isOpen && currentQ.type === 'date' && answers[currentQ.id]) {
      setDateValue(answers[currentQ.id]);
    }
  }, [currentStep, currentQ, answers, isOpen]);

  if (!isOpen) return null;

  const handleAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setSearchQuery('');
      setShowDropdown(false);
      setDateValue('');
    } else {
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSearchQuery('');
      setShowDropdown(false);
    } else {
      if (onBack) onBack();
      else onClose();
    }
  };

  const filteredOptions = currentQ.type === 'search' 
    ? currentQ.options.filter(o => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const today = new Date().toISOString().split('T')[0];

  const handleDateConfirm = () => {
    if (!dateValue) return;
    const selected = new Date(dateValue);
    if (selected > new Date()) return; // reject future dates
    handleAnswer(currentQ.id, dateValue);
  };

  const isDateInFuture = dateValue ? new Date(dateValue) > new Date() : false;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-md md:max-w-lg p-6 md:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={handleBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors z-10 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        <div className="mt-8 mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-1">DinnersMatch</h2>
          <p className="text-xs text-[#FFAA55] uppercase tracking-wide">
            {currentQ.title}
          </p>
        </div>

        {/* Removed progress bar based on screenshots, or keep if preferred. Screenshots don't clearly show one but QuizFlow has one. */}
        {/* <div className="mb-8">
          <div className="w-full bg-[#2F3A51] rounded-full h-1">
            <div
              className="bg-[#FFAA55] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div> */}

        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] text-center mb-6">
            {currentQ.question}
          </h3>

          {currentQ.type === 'choice' && (
            <div className="space-y-3">
              {currentQ.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className="w-full text-center font-semibold text-base md:text-lg p-3 md:p-4 rounded-lg border border-[#2F3A51] bg-[#111121] text-[#E0E0E0] hover:border-[#FFAA55] hover:text-[#F5F5F5] transition-all"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {currentQ.type === 'search' && (
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder={currentQ.placeholder}
                className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55]"
              />
              
              {showDropdown && (
                <div className="w-full mt-2 bg-[#111121] border border-[#2F3A51] rounded-lg max-h-60 overflow-y-auto shadow-lg">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQ.id, option.value)}
                        className="w-full text-left px-4 py-3 text-[#E0E0E0] hover:bg-[#2F3A51] hover:text-[#F5F5F5] transition-colors border-b border-[#2F3A51] last:border-0"
                      >
                        {option.label}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-[#E0E0E0]">No results found</div>
                  )}
                </div>
              )}
            </div>
          )}

          {currentQ.type === 'date' && (
            <div className="space-y-4">
              <DatePicker
                date={dateValue ? new Date(dateValue) : undefined}
                onSelect={(date) => setDateValue(date ? format(date, "yyyy-MM-dd") : "")}
                disabled={{ after: new Date() }}
                placeholder={currentQ.placeholder}
                className={`w-full justify-start text-left font-normal bg-[#111121] hover:bg-[#1A1A2E] text-[#F5F5F5] ${
                  isDateInFuture ? 'border-red-500' : 'border-[#2F3A51]'
                }`}
                popoverClassName="bg-[#111121] border-[#2F3A51]"
                isDark={true}
              />
              {isDateInFuture && (
                <p className="text-sm text-red-400">Please select a date that is not in the future.</p>
              )}
              <button
                onClick={handleDateConfirm}
                disabled={!dateValue || isDateInFuture}
                className={`w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors ${
                  dateValue && !isDateInFuture
                    ? 'bg-[#FFAA55] text-white hover:bg-[#FF9955]'
                    : 'bg-[#2F3A51] text-[#757575] cursor-not-allowed'
                }`}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemographicsFlow;
