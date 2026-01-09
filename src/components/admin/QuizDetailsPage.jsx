import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import { toast } from 'react-hot-toast';

const QuizDetailsPage = ({ quizId }) => {
  const router = useRouter();
  const { getQuestion, deleteQuestion, getOptions, createOption, deleteOption, loading } = useQuiz();
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState({ label: '', value: '' });

  useEffect(() => {
    if (quizId) {
      loadData();
    }
  }, [quizId]);

  const loadData = async () => {
    try {
      const qData = await getQuestion(quizId);
      setQuestion(qData);
      
      // If question type supports options, fetch them
      if (qData && (qData.answer_type === 'select' || qData.answer_type === 'boolean')) {
          const oData = await getOptions(quizId);
          setOptions(oData || []);
      }
    } catch (error) {
      console.error('Failed to load details:', error);
      toast.error('Failed to load details');
    }
  };

  const handleEditQuestion = () => {
    router.push(`/admin/quiz/edit/${quizId}`);
  };

  const handleDeleteQuestion = async () => {
    if (confirm('Are you sure you want to delete this question?')) {
      try {
        await deleteQuestion(quizId);
        toast.success('Question deleted');
        router.push('/admin/quiz');
      } catch (error) {
        toast.error('Failed to delete question');
      }
    }
  };

  const handleAddOption = async (e) => {
    e.preventDefault();
    try {
        await createOption(quizId, newOption);
        toast.success('Option added');
        setNewOption({ label: '', value: '' });
        loadData(); // Refresh options
    } catch (error) {
        toast.error('Failed to add option');
    }
  };

  const handleDeleteOption = async (optionId) => {
      if(confirm('Delete this option?')) {
          try {
              await deleteOption(optionId);
              toast.success('Option deleted');
              loadData();
          } catch(error) {
              toast.error('Failed to delete option');
          }
      }
  }

  const handleBack = () => {
    router.push('/admin/quiz');
  };

  if (loading && !question) return <div className="p-8 text-center">Loading...</div>;
  if (!question) return <div className="p-8 text-center">Question not found</div>;

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">Quiz Management</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Question Details</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
            <div>
                <h2 className="text-lg font-semibold text-[#111827]">{question.code}</h2>
                <p className="text-sm text-gray-500">{question.section}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleEditQuestion}
                className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors"
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
                    <p className="text-gray-600 capitalize">{question.answer_type}</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">Sort Order</h3>
                    <p className="text-gray-600">{question.sort_order}</p>
                </div>
                {question.answer_type === 'scale' && (
                    <>
                        <div>
                            <h3 className="text-sm font-semibold text-[#111827] mb-1">Min Value</h3>
                            <p className="text-gray-600">{question.min_value}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[#111827] mb-1">Max Value</h3>
                            <p className="text-gray-600">{question.max_value}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Options Management */}
            {(question.answer_type === 'select' || question.answer_type === 'boolean') && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-[#111827] mb-4">Options</h3>
                    
                    {/* Add Option Form */}
                    <form onSubmit={handleAddOption} className="flex gap-2 mb-6">
                        <input 
                            type="text" 
                            placeholder="Label (e.g. Yes)" 
                            value={newOption.label}
                            onChange={e => setNewOption({...newOption, label: e.target.value})}
                            className="flex-1 px-4 py-2 border rounded-lg text-sm"
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Value (e.g. true)" 
                            value={newOption.value}
                            onChange={e => setNewOption({...newOption, value: e.target.value})}
                            className="flex-1 px-4 py-2 border rounded-lg text-sm"
                            required
                        />
                        <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700">
                            Add Option
                        </button>
                    </form>

                    {/* Options List */}
                    <div className="space-y-2">
                        {options.length === 0 ? (
                            <p className="text-gray-500 italic text-sm">No options added yet.</p>
                        ) : (
                            options.map(opt => (
                                <div key={opt.id} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                    <div>
                                        <span className="font-medium text-gray-800">{opt.label}</span>
                                        <span className="text-gray-500 text-sm ml-2">({opt.value})</span>
                                    </div>
                                    <button 
                                        onClick={() => handleDeleteOption(opt.id)}
                                        className="text-red-500 hover:text-red-700 p-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsPage;

