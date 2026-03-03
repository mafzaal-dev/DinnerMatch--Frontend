"use client";

import React, { useState, useEffect } from 'react';
import { api, API_ENDPOINTS } from '../../src/utils/api';

const QuizFlow = ({ isOpen, onClose, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchQuestions();
    }
  }, [isOpen]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(API_ENDPOINTS.QUIZ_QUESTIONS_LIST);

      if (response.success && response.data) {
        const sortedQuestions = response.data
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(q => ({
            id: q.id,
            text: q.text,
            code: q.code,
            section: q.section,
            answer_type: q.answer_type,
            min_value: q.min_value,
            max_value: q.max_value,
            options: (q.options || []).sort((a, b) => a.sort_order - b.sort_order)
          }));

        setQuestions(sortedQuestions);
      }
    } catch (err) {
      console.error('Error fetching quiz questions:', err);
      setError('Failed to load questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl">
          <div className="text-center text-[#F5F5F5]">Loading questions...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl">
          <div className="text-center text-red-400">{error}</div>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl">
          <div className="text-center text-[#F5F5F5]">No questions available</div>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-[#FFAA55] text-white py-4 rounded-lg font-bold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  const handleAnswer = (answerValue) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      question_id: currentQ.id,
      value: String(answerValue)
    };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSearchQuery('');
    } else {
      onComplete(newAnswers);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSearchQuery('');
    } else {
      const validAnswers = answers.filter(a => a && a.value);
      onComplete(validAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSearchQuery('');
    } else if (onBack) {
      onBack();
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20 h-screen overflow-y-auto scroll-smooth">
        {/* Header row: back | title | close */}
        <div className="flex items-center justify-between mb-4 gap-2">
          {/* Back button */}
          <div className="w-16 flex-shrink-0">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors text-sm z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          </div>

          {/* Title */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-[#F5F5F5] mb-0.5">Dinner<span className='text-[#FFAA55]'>Match</span></h2>
            <p className="text-sm text-[#FFAA55] uppercase tracking-wide">
              {currentQ.section === 'basic' ? 'Identity' : 'Personality'}
            </p>
          </div>

          {/* Close button */}
          <div className="w-16 flex-shrink-0 flex justify-end">
            <button
              onClick={onClose}
              className="text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full bg-[#2F3A51] rounded-full h-1">
            <div
              className="bg-[#FFAA55] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
          <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 leading-tight">
            {currentQ.text}
          </h3>

          {currentQ.answer_type === 'choice' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
              {currentQ.options.map((option) => {
                const isSelected = currentAnswer?.value === option.value;
                // Emoji comes as hex code string (e.g. "1f600"), need to convert to char
                let emojiChar = null;
                if (option.emoji) {
                  try {
                    emojiChar = String.fromCodePoint(parseInt(option.emoji, 16));
                  } catch (e) {
                    console.error("Invalid emoji code:", option.emoji);
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.value)}
                    className="answer-button bg-transparent text-white border-white border-2 rounded-xl p-3 md:p-4 w-full transition-all duration-200"
                  >
                    {emojiChar && (
                      <div className="text-2xl md:text-4xl mb-2 md:mb-4">
                        {emojiChar}
                      </div>
                    )}
                    <div className="font-medium text-base md:text-xl">
                      {option.label}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {currentQ.answer_type === 'boolean' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
              <button
                onClick={() => handleAnswer('true')}
                className="answer-button bg-transparent text-white border-white border-2 rounded-xl p-3 md:p-4 w-full transition-all duration-200"
              >
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">
                  👍
                </div>
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">
                  Yes
                </div>
              </button>
              <button
                onClick={() => handleAnswer('false')}
                className="answer-button bg-transparent text-white border-white border-2 rounded-xl p-3 md:p-4 w-full transition-all duration-200"
              >
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">
                  👎
                </div>
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">
                  No
                </div>
              </button>
            </div>
          )}

          {(currentQ.answer_type === 'scale' || currentQ.answer_type === 'scale_1_10') && (
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex justify-between mb-8 text-sm md:text-base font-medium text-[#E0E0E0]">
                <span className='text-[#FFAA55] uppercase tracking-wide'>
                  {currentQ.options.find(o => o.value === String(currentQ.min_value || 1))?.label || 'Very Low'}
                </span>
                <span className='text-[#FFAA55] uppercase tracking-wide'>
                  {currentQ.options.find(o => o.value === String(currentQ.max_value || 10))?.label || 'Very High'}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-3 md:gap-4">
                {Array.from({ length: (currentQ.max_value || 10) - (currentQ.min_value || 1) + 1 }, (_, i) => i + (currentQ.min_value || 1)).map((value) => {
                  const isSelected = currentAnswer?.value === String(value);
                  return (
                    <button
                      key={value}
                      onClick={() => handleAnswer(value)}
                      className="answer-button bg-transparent text-white border-white border-2 rounded-xl p-2 md:p-4 w-full aspect-square transition-all duration-200"
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentQ.answer_type === 'text' && (
            <div className="w-full max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full px-8 py-6 bg-[#151725] border-2 border-[#2F3A51] rounded-2xl text-xl text-white placeholder-[#4B5563] focus:outline-none focus:border-[#FFAA55] focus:shadow-[0_0_20px_rgba(255,170,85,0.2)] transition-all"
                autoFocus
              />

              {searchQuery && (
                <button
                  onClick={() => handleAnswer(searchQuery)}
                  className="w-full mt-8 bg-[#FFAA55] text-white py-5 rounded-2xl font-bold text-lg uppercase tracking-wide hover:bg-[#FF9955] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,170,85,0.4)]"
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizFlow;


