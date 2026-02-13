import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import { toast } from 'react-hot-toast';
import { formatDisplayValue, capitalizeWords } from '@/utils/searchHelper';

const QuizDetailsPage = ({ quizId }) => {
  const router = useRouter();
  const { getQuestion, deleteQuestion, loading } = useQuiz();
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (quizId) {
      loadData();
    }
  }, [quizId]);

  const loadData = async () => {
    try {
      const qData = await getQuestion(quizId);
      setQuestion(qData);
      
      // If question type supports options, use them from the question object
      if (qData && (qData.answer_type === 'choice' || qData.answer_type === 'boolean')) {
          setOptions(qData.options || []);
      }
    } catch (error) {
      console.error('Failed to load details:', error);
      toast.error('Failed to load details');
    }
  };

  const handleEditQuestion = () => {
    router.push(`/admin/quiz/edit/${quizId}`);
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteQuestion = async () => {
    setShowDeleteConfirm(true);
  };
  
  const confirmDelete = async () => {
    try {
      await deleteQuestion(quizId);
      toast.success('Question deleted');
      router.push('/admin/quiz');
    } catch (error) {
      toast.error('Failed to delete question');
    }
  };

  const handleBack = () => {
    router.push('/admin/quiz');
  };

  if (loading && !question) return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="text-center">Loading...</div>
    </div>
  );
  
  if (!question) return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="text-center">Question not found</div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 border-b border-[#E5E7EB] flex-shrink-0">
        <h1 className="text-xl font-semibold text-[#111827]">Quiz</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Question Details</p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB] gap-3">
            <div>
                <h2 className="text-lg font-semibold text-[#111827]">{question.code}</h2>
                <p className="text-sm text-gray-500">{question.section}</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleEditQuestion}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors"
              >
                Edit Question
              </button>
              <button
                onClick={handleDeleteQuestion}
                className="p-2.5 border border-[#E5E7EB] text-[#EF4444] rounded-lg hover:bg-[#FEF2F2] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
                <h3 className="text-sm font-semibold text-[#111827] mb-2">Question Text</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">{question.text}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">Type</h3>
                    <p className="text-gray-600 capitalize">{capitalizeWords(question.answer_type)}</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">Sort Order</h3>
                    <p className="text-gray-600">{formatDisplayValue(question.sort_order)}</p>
                </div>
                {question.answer_type === 'scale' && (
                    <>
                        <div>
                            <h3 className="text-sm font-semibold text-[#111827] mb-1">Min Value</h3>
                            <p className="text-gray-600">{formatDisplayValue(question.min_value)}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#111827] mb-1">Max Value</h3>
                            <p className="text-gray-600">{formatDisplayValue(question.max_value)}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Options Display */}
            {(question.answer_type === 'choice' || question.answer_type === 'boolean') && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-[#111827] mb-4">Options</h3>
                    
                    {/* Options List */}
                    <div className="space-y-2">
                    {options.length === 0 ? (
                        <p className="text-gray-500 italic text-sm">No options added yet.</p>
                    ) : (
                        options.map(opt => (
                            <div key={opt.id || opt.value} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <div>
                                    <span className="font-medium text-gray-800">{formatDisplayValue(opt.label)}</span>
                                    <span className="text-gray-500 text-sm ml-2">({formatDisplayValue(opt.value)})</span>
                                </div>
                                <div className="text-gray-400 text-xs">
                                    Order: {formatDisplayValue(opt.sort_order)}
                                </div>
                            </div>
                        ))
                    )}
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Question</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete this question? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizDetailsPage;
