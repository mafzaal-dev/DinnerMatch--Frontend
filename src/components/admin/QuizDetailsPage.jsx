"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const QuizDetailsPage = ({ quizId }) => {
  const router = useRouter();

  // Sample quiz data
  const quiz = {
    id: '2564665',
    title: 'Sample Quiz Title',
    questions: [
      {
        id: 1,
        question: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
        icon: '🍰',
        options: [
          { id: 1, text: 'Option details write here', checked: false },
          { id: 2, text: 'Option details write here', checked: false },
          { id: 3, text: 'Option details write here', checked: false },
          { id: 4, text: 'Option details write here', checked: false },
        ],
      },
      {
        id: 2,
        question: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
        icon: '📅',
        iconText: '17',
        options: [
          { id: 1, text: 'Option details write here', checked: false },
          { id: 2, text: 'Option details write here', checked: false },
          { id: 3, text: 'Option details write here', checked: false },
          { id: 4, text: 'Option details write here', checked: false },
        ],
      },
    ],
  };

  const handleEditQuiz = () => {
    router.push(`/admin/quiz/edit/${quizId}`);
  };

  const handleDeleteQuiz = () => {
    if (confirm('Are you sure you want to delete this quiz?')) {
      // Handle delete logic
      router.push('/admin/quiz');
    }
  };

  const handleBack = () => {
    router.push('/admin/quiz');
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">User Data Management</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Manage customers data and bookings</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl">
          {/* Quiz Details Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827]">Quiz Details</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleEditQuiz}
                className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors"
              >
                Edit Quiz
              </button>
              <button
                onClick={handleDeleteQuiz}
                className="p-2.5 border border-[#E5E7EB] text-[#EF4444] rounded-lg hover:bg-[#FEF2F2] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {quiz.questions.map((question, qIndex) => (
              <div key={question.id} className="pb-6 border-b border-[#E5E7EB] last:border-b-0">
                {/* Question Header */}
                <h3 className="text-sm font-semibold text-[#111827] mb-3">Question {qIndex + 1}</h3>

                {/* Question Text */}
                <p className="text-sm text-[#374151] mb-3 leading-relaxed">{question.question}</p>

                {/* Icon */}
                <div className="mb-4">
                  {question.iconText ? (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FEE2E2] rounded-lg relative">
                      <span className="text-2xl">{question.icon}</span>
                      <span className="absolute bottom-0 right-0 text-xs font-semibold text-[#EF4444] bg-white px-1 rounded">
                        {question.iconText}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FEE2E2] rounded-lg">
                      <span className="text-2xl">{question.icon}</span>
                    </div>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-2.5">
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-3 p-3 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-center w-5 h-5 border-2 border-[#D1D5DB] rounded flex-shrink-0">
                        {option.checked && (
                          <svg className="w-3 h-3 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-[#6B7280]">{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsPage;

