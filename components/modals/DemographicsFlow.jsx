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
      { value: 'American', label: 'American' },
      { value: 'British', label: 'British' },
      { value: 'Canadian', label: 'Canadian' },
      { value: 'Australian', label: 'Australian' },
      { value: 'Indian', label: 'Indian' },
      { value: 'Chinese', label: 'Chinese' },
      { value: 'Japanese', label: 'Japanese' },
      { value: 'German', label: 'German' },
      { value: 'French', label: 'French' },
      { value: 'Italian', label: 'Italian' },
      { value: 'Spanish', label: 'Spanish' },
      { value: 'Brazilian', label: 'Brazilian' },
      { value: 'Mexican', label: 'Mexican' },
      { value: 'Russian', label: 'Russian' },
      { value: 'South African', label: 'South African' },
      { value: 'Other', label: 'Other' }
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
    <div className="fixed inset-0 z-50 bg-[#0F1123] md:bg-black/80 md:flex md:items-center md:justify-center">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='h-screen overflow-y-auto scroll-smooth flex flex-col md:block p-3 md:p-0'>
          <div className='text-center pt-12 pb-4 md:mb-10 md:mt-6 md:pt-0 md:pb-0 relative'>
            <button onClick={handleBack} className="absolute top-2 left-0 md:left-4 text-gray-400 hover:text-white z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-5 h-5"><path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="text-sm">Back</span>
            </button>
            <h1 className="text-2xl md:text-4xl font-bold mb-1">
              <span className="text-white">Dinner</span><span className="text-[#FFAA55]">Match</span>
            </h1>
            <div className='text-[#FFAA55] font-medium tracking-widest uppercase text-xs md:text-md'>
              IDENTITY
            </div>
          </div>
          <div className='animate-fadeIn'>
            <div className='text-center'>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mx-auto max-w-2xl">
                {currentQ.question}
              </h2>

              {currentQ.type === 'choice' && (
                <div className="flex flex-col space-y-4 max-w-md mx-auto">
                  {currentQ.options.map((option) => {
                    const isSelected = answers[currentQ.id] === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQ.id, option.value)}
                        className={`p-5 border-2 rounded-xl text-xl font-medium transition-all duration-300 ${isSelected
                          ? 'border-white'
                          : 'border-[#2F3A51] hover:border-[#FFAA55]'
                          }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQ.type === 'search' && (
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder={currentQ.placeholder}
                    className="w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer focus-within:ring-2 focus-within:ring-[#FFAA55] focus-within:border-[#FFAA55] transition-all duration-200"
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
                <div className="space-y-4 max-w-md mx-auto">
                  <DatePicker
                    date={dateValue ? new Date(dateValue) : undefined}
                    onSelect={(date) => setDateValue(date ? format(date, "yyyy-MM-dd") : "")}
                    disabled={{ after: new Date() }}
                    placeholder={currentQ.placeholder}
                    className={`w-full justify-start text-left font-normal bg-[#111121] hover:bg-[#1A1A2E] text-[#F5F5F5] ${isDateInFuture ? 'border-red-500' : 'border-[#2F3A51]'
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
                    className={`w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors ${dateValue && !isDateInFuture
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
      </div>
    </div>
  );
};

export default DemographicsFlow;
