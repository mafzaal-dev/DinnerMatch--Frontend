"use client";

import React, { useState } from 'react';

const IdentityQuiz = ({ isOpen, onClose, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      type: 'single-select',
      question: 'How do you define yourself?',
      options: [
        { id: 'women', label: 'Women' },
        { id: 'men', label: 'Men' },
        { id: 'non-binary', label: 'Non-Binary' },
      ],
    },
    {
      id: 2,
      type: 'single-select',
      question: "What's your relationship status?",
      options: [
        { id: 'flying-solo', label: 'Flying Solo' },
        { id: 'married', label: 'Locked in For Life (Married)' },
        { id: 'complicated', label: "It's a rollercoaster (Complicated)" },
        { id: 'taken', label: 'Taken' },
        { id: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
    {
      id: 3,
      type: 'single-select',
      question: 'What industry do you work in?',
      options: [
        { id: 'not-working', label: 'Not Working' },
        { id: 'studying', label: 'Studying' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'technology', label: 'Technology' },
        { id: 'retail', label: 'Retail' },
        { id: 'food', label: 'Food' },
        { id: 'services', label: 'Services' },
        { id: 'arts', label: 'Arts' },
        { id: 'others', label: 'Others' },
      ],
    },
    {
      id: 4,
      type: 'searchable-select',
      question: 'What is your nationality?',
      subtitle: 'Select your country of origin',
      placeholder: 'Search your nationality',
    },
  ];

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  // Sample countries list (you can expand this)
  const countries = [
    'South African',
    'American',
    'British',
    'Canadian',
    'Australian',
    'German',
    'French',
    'Italian',
    'Spanish',
    'Dutch',
    'Swedish',
    'Norwegian',
    'Danish',
    'Finnish',
    'Polish',
    'Portuguese',
    'Greek',
    'Irish',
    'Swiss',
    'Austrian',
    'Belgian',
    'New Zealander',
    'Japanese',
    'Chinese',
    'Indian',
    'Brazilian',
    'Mexican',
    'Argentinian',
    'Chilean',
    'Other',
  ];

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAnswer = (answerId) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerId;
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSearchQuery('');
      setShowDropdown(false);
    } else {
      // Quiz complete
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const newAnswers = [...answers];
      newAnswers.pop();
      setAnswers(newAnswers);
      setSearchQuery('');
      setShowDropdown(false);
    } else if (onBack) {
      onBack();
    }
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-2xl w-full max-w-2xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-1 text-center">DinnersMatch</h2>
          <p className="text-sm text-[#F97315] uppercase tracking-wide text-center">Identity</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-[#F97315] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            {currentQ.question}
          </h3>
          {currentQ.subtitle && (
            <p className="text-gray-400 text-center mb-6">{currentQ.subtitle}</p>
          )}

          {/* Single Select Questions */}
          {currentQ.type === 'single-select' && (
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {currentQ.options.map((option) => {
                const isSelected = currentAnswer === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'bg-[#0f1419] border-white text-white'
                        : 'bg-[#0f1419] border-gray-700 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Searchable Select Question */}
          {currentQ.type === 'searchable-select' && (
            <div className="relative">
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
                  className="w-full px-4 py-3 bg-[#0f1419] border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F97315] pr-12"
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

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute z-20 w-full mt-2 bg-[#0f1419] border-2 border-gray-700 rounded-lg max-h-60 overflow-y-auto">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          setSearchQuery(country);
                          setShowDropdown(false);
                          handleAnswer(country);
                        }}
                        className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                      >
                        {country}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No results found</div>
                  )}
                </div>
              )}

              {/* Continue Button for Nationality */}
              {currentAnswer && (
                <button
                  onClick={() => {
                    if (currentQuestion < totalQuestions - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                      setSearchQuery('');
                      setShowDropdown(false);
                    } else {
                      onComplete(answers);
                    }
                  }}
                  className="w-full mt-4 bg-[#F97315] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#EA580C] transition-colors"
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>

        {/* Question Counter */}
        <p className="text-center text-gray-400 text-sm">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default IdentityQuiz;

