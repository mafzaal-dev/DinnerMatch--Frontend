"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuizListPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Recent');

  const quizzes = [
    {
      id: '2564665',
      title: 'Quizzes title place here',
      questions: 12,
      status: 'Active',
      createdOn: 'Nov 23, 2025',
    },
    {
      id: '2564665',
      title: 'Quizzes title place here',
      questions: 12,
      status: 'In-Active',
      createdOn: 'Nov 23, 2025',
    },
    {
      id: '2564665',
      title: 'Quizzes title place here',
      questions: 12,
      status: 'In-Active',
      createdOn: 'Nov 23, 2025',
    },
    {
      id: '2564665',
      title: 'Quizzes title place here',
      questions: 12,
      status: 'In-Active',
      createdOn: 'Nov 23, 2025',
    },
  ];

  const handleCreateQuiz = () => {
    router.push('/admin/quiz/create');
  };

  const handleViewQuiz = (quizId) => {
    router.push(`/admin/quiz/${quizId}`);
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
        {/* Quizzes Section */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-5 border-b border-[#E5E7EB]">
            <h2 className="text-base font-semibold text-[#111827]">Quizzes</h2>
            <p className="text-sm text-[#6B7280] mt-0.5">Only one quiz will be active at a time.</p>
          </div>

          {/* Search and Actions */}
          <div className="px-6 py-4 border-b border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex-1 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors appearance-none cursor-pointer pr-10"
                >
                  <option>Sort by</option>
                  <option>Recent</option>
                  <option>Oldest</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button
                onClick={handleCreateQuiz}
                className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors whitespace-nowrap"
              >
                Create Quiz
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Questions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Created on
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F3F4F6]">
                {quizzes.map((quiz, index) => (
                  <tr key={index} className="hover:bg-[#F9FAFB] transition-colors cursor-pointer" onClick={() => handleViewQuiz(quiz.id)}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111827] font-medium">
                      {quiz.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      {quiz.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      {quiz.questions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          quiz.status === 'Active'
                            ? 'bg-[#D1FAE5] text-[#065F46]'
                            : 'bg-[#F3F4F6] text-[#6B7280]'
                        }`}
                      >
                        {quiz.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      {quiz.createdOn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle menu action
                        }}
                        className="p-1 hover:bg-[#F3F4F6] rounded transition-colors"
                      >
                        <svg className="w-5 h-5 text-[#6B7280]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;

