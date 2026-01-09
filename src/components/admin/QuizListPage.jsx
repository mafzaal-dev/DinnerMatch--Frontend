import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import { toast } from 'react-hot-toast';

const QuizListPage = () => {
  const router = useRouter();
  const { getQuestions, loading } = useQuiz();
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Recent');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      toast.error('Failed to load questions');
    }
  };

  const filteredQuestions = questions.filter(q => 
    q.text?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.code?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateQuestion = () => {
    router.push('/admin/quiz/create');
  };

  const handleEditQuestion = (id) => {
    router.push(`/admin/quiz/edit/${id}`);
  };
  
  const handleViewQuestion = (id) => {
      // For now, view goes to edit or details. Let's send to details/edit page.
      // If we want a read-only view, we can create one, but admin usually wants to edit.
      // The current structure has /admin/quiz/[id] which maps to QuizDetailsPage.
      // I'll assume QuizDetailsPage will handle single question details + options management.
      router.push(`/admin/quiz/${id}`);
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">Quiz Management</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Manage quiz questions and options</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Questions Section */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-5 border-b border-[#E5E7EB]">
            <h2 className="text-base font-semibold text-[#111827]">Questions</h2>
            <p className="text-sm text-[#6B7280] mt-0.5">Manage all questions in the system.</p>
          </div>

          {/* Search and Actions */}
          <div className="px-6 py-4 border-b border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex-1 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search by text or code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCreateQuestion}
                className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors whitespace-nowrap"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Question Text
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F3F4F6]">
                {loading ? (
                    <tr>
                        <td colSpan="6" className="px-6 py-8 text-center text-sm text-gray-500">Loading questions...</td>
                    </tr>
                ) : filteredQuestions.length === 0 ? (
                    <tr>
                        <td colSpan="6" className="px-6 py-8 text-center text-sm text-gray-500">No questions found.</td>
                    </tr>
                ) : (
                    filteredQuestions.map((question) => (
                  <tr key={question.id} className="hover:bg-[#F9FAFB] transition-colors cursor-pointer" onClick={() => handleViewQuestion(question.id)}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111827] font-medium">
                      {question.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7280] max-w-md truncate">
                      {question.text}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      {question.section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      {question.answer_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          question.is_active
                            ? 'bg-[#D1FAE5] text-[#065F46]'
                            : 'bg-[#F3F4F6] text-[#6B7280]'
                        }`}
                      >
                        {question.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditQuestion(question.id);
                        }}
                        className="p-1 hover:bg-[#F3F4F6] rounded transition-colors"
                      >
                        <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;

