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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl">
          <div className="text-center text-[#F5F5F5]">Loading questions...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={handleBack}
          className="absolute top-10 left-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        <div className="mb-6">
          <h2 className="text-[32px] font-bold text-[#F5F5F5] mb-1 text-center">DinnerMatch</h2>
          <p className="text-base text-[#FFAA55] uppercase tracking-wide text-center">
            {currentQ.section === 'basic' ? 'Identity' : 'Personality'}
          </p>
        </div>

        <div className="mb-8">
          <div className="w-full bg-[#2F3A51] rounded-full h-1">
            <div
              className="bg-[#FFAA55] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-4xl font-bold text-[#F5F5F5] text-center mb-8">
            {currentQ.text}
          </h3>

          {currentQ.answer_type === 'choice' && (
            <div className="space-y-4">
              {currentQ.options.map((option) => {
                const isSelected = currentAnswer?.value === option.value;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full text-center font-semibold text-xl p-4 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-[#111121] border-[#eeeeee] text-[#F5F5F5]'
                        : 'bg-[#111121] border-[#2f3a51] text-[#E0E0E0] hover:border-[#FFAA55]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}

          {currentQ.answer_type === 'boolean' && (
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('true')}
                className={`flex-1 py-4 rounded-lg border transition-all font-semibold text-xl ${
                  currentAnswer?.value === 'true'
                    ? 'bg-[#FFAA55] border-[#FFAA55] text-white'
                    : 'bg-[#111121] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55] hover:text-[#F5F5F5]'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer('false')}
                className={`flex-1 py-4 rounded-lg border transition-all font-semibold text-xl ${
                  currentAnswer?.value === 'false'
                    ? 'bg-[#FFAA55] border-[#FFAA55] text-white'
                    : 'bg-[#111121] border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55] hover:text-[#F5F5F5]'
                }`}
              >
                No
              </button>
            </div>
          )}

          {(currentQ.answer_type === 'scale' || currentQ.answer_type === 'scale_1_10') && (
            <div>
              <div className="flex justify-between mb-6 text-sm text-[#E0E0E0]">
                <span className='text-[#FFAA55]'>
                  {currentQ.options.find(o => o.value === String(currentQ.min_value || 1))?.label || 'Very Low'}
                </span>
                <span className='text-[#FFAA55]'>
                  {currentQ.options.find(o => o.value === String(currentQ.max_value || 10))?.label || 'Very High'}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: (currentQ.max_value || 10) - (currentQ.min_value || 1) + 1 }, (_, i) => i + (currentQ.min_value || 1)).map((value) => {
                  const isSelected = currentAnswer?.value === String(value);
                  return (
                    <button
                      key={value}
                      onClick={() => handleAnswer(value)}
                      className={`py-4 px-5 rounded-lg border transition-all font-semibold text-xl ${
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

          {currentQ.answer_type === 'text' && (
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your answer..."
                className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] pr-12"
              />

              {searchQuery && (
                <button
                  onClick={() => handleAnswer(searchQuery)}
                  className="w-full mt-4 bg-[#FFAA55] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>

        {/* <div className="mt-6 mb-4">
          <button
            onClick={handleSkip}
            className="w-full py-3 rounded-lg border border-[#2F3A51] text-[#E0E0E0] hover:border-[#FFAA55] hover:text-[#F5F5F5] transition-all text-sm uppercase tracking-wide"
          >
            Skip Question
          </button>
        </div> */}

        <div>
          <p className="text-center text-[#E0E0E0] text-sm">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizFlow;
