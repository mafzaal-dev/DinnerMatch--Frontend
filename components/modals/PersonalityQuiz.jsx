"use client";

import React, { useState, useEffect } from 'react';

const PersonalityQuiz = ({ isOpen, onClose, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResult(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      type: 'choice',
      question: 'Would you rather discuss big ideas or everyday life?',
      options: [
        { id: 'big-ideas', label: 'Big Ideas', icon: '🧠' },
        { id: 'everyday-life', label: 'Everyday Life', icon: '📅' },
      ],
    },
    {
      id: 2,
      type: 'choice',
      question: 'Would you rather explore new experiences or familiar places?',
      options: [
        { id: 'new-experiences', label: 'New Experiences', icon: '☀️' },
        { id: 'familiar-places', label: 'Familiar Places', icon: '🏠' },
      ],
    },
    {
      id: 3,
      type: 'scale',
      question: 'I am an introverted person.',
      scaleLabels: {
        left: 'Strongly Disagree',
        right: 'Strongly Agree',
      },
      min: 1,
      max: 10,
    },
  ];

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (answerId) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerId;
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - show compatibility score
      setShowResult(true);
    }
  };

  const handleScaleAnswer = (value) => {
    handleAnswer(value);
  };

  const handleResultContinue = () => {
    setShowResult(false);
    // Trigger identity quiz instead of completing
    if (onComplete) {
      onComplete(answers);
    }
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  // Show compatibility score screen
  if (showResult) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Brand */}
            <h2 className="text-2xl font-bold text-[#F5F5F5] mb-8">DinnersMatch</h2>

            {/* Score */}
            <div className="mb-6">
              <div className="text-7xl font-bold text-[#FFAA55] mb-4">90%</div>
              <p className="text-[#E0E0E0] text-sm">
                The percentage of members you're compatible with
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleResultContinue}
              className="w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Back Button */}
        {onBack && currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              const newAnswers = [...answers];
              newAnswers.pop();
              setAnswers(newAnswers);
            }}
            className="absolute top-10 left-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        )}

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-1 text-center">DinnersMatch</h2>
          <p className="text-sm text-[#FFAA55] uppercase tracking-wide text-center">Personality</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-[#2F3A51] rounded-full h-1">
            <div
              className="bg-[#FFAA55] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-medium text-[#F5F5F5] text-center mb-8">
            {currentQ.question} 
          </h3>

          {/* Choice Type Questions */}
          {currentQ.type === 'choice' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQ.options.map((option) => {
                const isSelected = currentAnswer === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`border rounded-xl p-8 transition-all text-center group ${
                      isSelected
                        ? 'bg-[#FFAA55] border-[#FFAA55]'
                        : 'bg-[#080814] border-white hover:border-[#FFAA55]'
                    }`}
                  >
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <p className={`font-medium text-lg text-[#F5F5F5]`}>
                      {option.label}
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Scale Type Questions */}
          {currentQ.type === 'scale' && (
            <div>
              <div className="flex justify-between mb-6 text-sm text-[#E0E0E0]">
                <span className='text-[#FFAA55]'>{currentQ.scaleLabels.left}</span>
                <span className='text-[#FFAA55]'>{currentQ.scaleLabels.right}</span>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => {
                  const isSelected = currentAnswer === value;
                  return (
                    <button
                      key={value}
                      onClick={() => handleScaleAnswer(value)}
                      className={`py-5 rounded-lg border transition-all font-medium ${
                        isSelected
                          ? 'bg-[#FFAA55] border-[#FFAA55] text-white'
                          : 'bg-[#080814] border-white text-[#E0E0E0] hover:border-[#FFAA55]'
                      }`}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Question Counter */}
        <p className="text-center text-[#E0E0E0] text-sm">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default PersonalityQuiz;
