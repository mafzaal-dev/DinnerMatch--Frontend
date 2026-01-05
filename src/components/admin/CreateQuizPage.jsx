"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateQuizPage = ({ quizId = null, isEdit = false }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '',
      numOptions: 4,
      icon: null,
      options: [
        { id: 1, language: '' },
        { id: 2, language: '' },
        { id: 3, language: '' },
        { id: 4, language: '' },
      ],
    },
  ]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: '',
      numOptions: 4,
      icon: null,
      options: [
        { id: 1, language: '' },
        { id: 2, language: '' },
        { id: 3, language: '' },
        { id: 4, language: '' },
      ],
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (questionId) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  const handleNumOptionsChange = (questionId, numOptions) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [];
          for (let i = 1; i <= numOptions; i++) {
            newOptions.push(q.options[i - 1] || { id: i, language: '' });
          }
          return { ...q, numOptions, options: newOptions };
        }
        return q;
      })
    );
  };

  const handleCreateQuiz = () => {
    console.log('Creating quiz:', { title, questions });
    // Handle quiz creation logic here
    router.push('/admin/quiz');
  };

  const handleCancel = () => {
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
          {/* Create Quiz Header */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">{isEdit ? 'Edit Quiz' : 'Create Quiz'}</h2>
            <p className="text-sm text-[#6B7280]">Please provide all of the information below to {isEdit ? 'update' : 'create'} your quiz.</p>
          </div>

          {/* Title Input */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-[#374151] mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write here"
              className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
            />
          </div>

          {/* Questions Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#111827] mb-4">Questions</h3>

            {questions.map((question, qIndex) => (
              <div key={question.id} className="mb-8 pb-6 border-b border-[#E5E7EB] last:border-b-0">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-sm font-semibold text-[#111827]">Question {qIndex + 1}</h4>
                </div>

                {/* Question Text */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#374151] mb-2">Question</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={question.question}
                      onChange={(e) =>
                        setQuestions(
                          questions.map((q) =>
                            q.id === question.id ? { ...q, question: e.target.value } : q
                          )
                        )
                      }
                      placeholder="Write here"
                      className="flex-1 px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                    />
                    <div className="relative">
                      <select
                        value={question.numOptions}
                        onChange={(e) => handleNumOptionsChange(question.id, parseInt(e.target.value))}
                        className="px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10 min-w-[140px]"
                      >
                        <option value={2}>2 Options</option>
                        <option value={3}>3 Options</option>
                        <option value={4}>4 Options</option>
                        <option value={5}>5 Options</option>
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] pointer-events-none">No. of Options</span>
                    </div>
                  </div>
                </div>

                {/* Upload Icon */}
                <div className="mb-4">
                  <div className="flex items-center justify-center w-full border-2 border-dashed border-[#D1D5DB] rounded-lg p-8 hover:border-[#F97316] transition-colors cursor-pointer">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#6B7280]">Upload Icon</p>
                    </div>
                  </div>
                </div>

                {/* Options */}
                {question.options.map((option, oIndex) => (
                  <div key={option.id} className="mb-3">
                    <label className="block text-sm font-medium text-[#374151] mb-2">
                      Option {oIndex + 1}
                    </label>
                    <select
                      value={option.language}
                      onChange={(e) =>
                        setQuestions(
                          questions.map((q) => {
                            if (q.id === question.id) {
                              return {
                                ...q,
                                options: q.options.map((opt) =>
                                  opt.id === option.id ? { ...opt, language: e.target.value } : opt
                                ),
                              };
                            }
                            return q;
                          })
                        )
                      }
                      className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#9CA3AF] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select Language</option>
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                    </select>
                  </div>
                ))}

                {/* Remove Question Button */}
                {questions.length > 1 && (
                  <button
                    onClick={() => handleRemoveQuestion(question.id)}
                    className="flex items-center gap-2 text-sm text-[#EF4444] hover:text-[#DC2626] transition-colors mt-4"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove Question
                  </button>
                )}
              </div>
            ))}

            {/* Add Another Question */}
            <button
              onClick={handleAddQuestion}
              className="flex items-center gap-2 text-sm text-[#F97316] hover:text-[#EA580C] transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Another Question
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#E5E7EB]">
            <button
              onClick={handleCancel}
              className="px-5 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateQuiz}
              className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors"
            >
              {isEdit ? 'Update Quiz' : 'Create Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizPage;

