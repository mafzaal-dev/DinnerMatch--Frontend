import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import { toast } from 'react-hot-toast';

const CreateQuizPage = ({ quizId = null, isEdit = false }) => {
  const router = useRouter();
  const { createQuestion, updateQuestion, getQuestion, getOptions, createOption, updateOption, deleteOption, loading } = useQuiz();
  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [formData, setFormData] = useState({
    code: '',
    text: '',
    section: 'basic',
    answer_type: 'choice', // Default to choice (was select)
    min_value: null,
    max_value: null,
    sort_order: 1,
    is_active: true
  });
  
  // Options state
  const [options, setOptions] = useState(Array(4).fill({ label: '', value: '' }));
  const [initialOptions, setInitialOptions] = useState([]); // Track original options for deletion
  const [numberOfOptions, setNumberOfOptions] = useState(4);

  useEffect(() => {
    if (isEdit && quizId) {
      fetchQuestion();
    }
  }, [isEdit, quizId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchQuestion = async () => {
    try {
      setInitialLoading(true);
      const data = await getQuestion(quizId);
      console.log('Fetched question data:', data);
      if (data) {
        setFormData({
            code: data.code || '',
            text: data.text || '',
            section: data.section || 'basic',
            answer_type: data.answer_type || 'text',
            min_value: data.min_value || null,
            max_value: data.max_value || null,
            sort_order: data.sort_order || 1,
            is_active: data.is_active ?? true
        });

        // Fetch options if type supports it
        if (data.answer_type === 'choice' || data.answer_type === 'boolean') {
            const optionsData = await getOptions(quizId);
            if (optionsData) {
                setOptions(optionsData);
                setInitialOptions(optionsData); // Store original options
                setNumberOfOptions(Math.max(optionsData.length, 4));
            }
        }
      }
    } catch (error) {
      console.error('Failed to fetch question:', error);
      toast.error('Failed to load question details');
    } finally {
      setInitialLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle Option Changes
  const handleOptionChange = (index, value) => {
      const newOptions = [...options];
      if (!newOptions[index]) {
          newOptions[index] = { label: '', value: '', sort_order: index + 1 };
      }
      newOptions[index] = { ...newOptions[index], label: value, value: value, sort_order: index + 1 };
      setOptions(newOptions);
  };

  const handleNumberOfOptionsChange = (e) => {
      setNumberOfOptions(parseInt(e.target.value));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        min_value: formData.min_value ? parseInt(formData.min_value) : null,
        max_value: formData.max_value ? parseInt(formData.max_value) : null,
        sort_order: parseInt(formData.sort_order)
      };

      let currentQuizId = quizId;

      if (isEdit && quizId) {
        await updateQuestion(quizId, payload);
        toast.success('Question updated successfully');
      } else {
        const newQuestion = await createQuestion(payload);
        currentQuizId = newQuestion.id;
        toast.success('Question created successfully');
      }

      // Handle Options Saving
      if ((formData.answer_type === 'choice' || formData.answer_type === 'boolean') && currentQuizId) {
          // 1. Identify valid options from current state
          const validOptions = options.slice(0, numberOfOptions).filter(opt => opt && opt.label);
          const validOptionIds = validOptions.map(opt => opt.id).filter(id => id);

          // 2. Delete options that were present initially but are not in validOptions anymore
          const optionsToDelete = initialOptions.filter(initOpt => !validOptionIds.includes(initOpt.id));
          for (const optToDelete of optionsToDelete) {
              await deleteOption(optToDelete.id);
          }
          
          // 3. Create or Update valid options
          for (let i = 0; i < validOptions.length; i++) {
              const opt = validOptions[i];
              if (opt.id) {
                  await updateOption(opt.id, { label: opt.label, value: opt.value || opt.label, sort_order: i + 1 });
              } else {
                  await createOption(currentQuizId, { label: opt.label, value: opt.value || opt.label, sort_order: i + 1 });
              }
          }
      }
      
      router.push('/admin/quiz');
    } catch (error) {
      console.error('Operation failed:', error);
      toast.error(error.message || 'Operation failed');
    }
  };

  const handleCancel = () => {
    router.push('/admin/quiz');
  };

  const handleRemoveQuestion = async () => {
    if (!confirm('Are you sure you want to delete this question? This action cannot be undone.')) {
        return;
    }

    try {
        if (quizId) {
            await deleteQuestion(quizId);
            toast.success('Question deleted successfully');
            router.push('/admin/quiz');
        } else {
             // If it's a new question that hasn't been saved, just go back
             router.push('/admin/quiz');
        }
    } catch (error) {
        console.error('Delete failed:', error);
        toast.error('Failed to delete question');
    }
  };

  const handleAddAnother = () => {
      // Reset form to create another
      setFormData({
        code: '',
        text: '',
        section: 'basic',
        answer_type: 'choice', // Default
        min_value: null,
        max_value: null,
        sort_order: 1,
        is_active: true
      });
      setOptions(Array(4).fill({ label: '', value: '' }));
      setNumberOfOptions(4);
      setInitialOptions([]); // Clear initial options for new question
      if (isEdit) {
          router.push('/admin/quiz/create');
      }
      toast.success('Ready to add another question');
  };

  if (initialLoading) {
      return (
          <div className="flex-1 bg-[#F9FAFB] min-h-screen flex items-center justify-center">
              <div className="text-gray-500">Loading question...</div>
          </div>
      );
  }

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">Create Quiz</h1>
        <p className="text-sm text-[#6B7280] mt-0.5">Please provide all of the information below to create your quiz.</p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">{isEdit ? 'Edit Question' : 'Create Question'}</h2>
            <p className="text-sm text-[#6B7280]">Please provide all of the information below.</p>
          </div>

          <div className="space-y-6">
            {/* Title / Code */}
            <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">Title</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Write here"
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  required
                />
            </div>

            {/* Questions Header (Visual only as per design) */}
            <div className="pt-4">
                <h3 className="text-lg font-bold text-[#111827]">Questions</h3>
            </div>

            {/* Question 1 Block */}
            <div className="border border-[#E5E7EB] rounded-lg p-6 bg-white">
                <h4 className="text-base font-semibold text-[#6B21A8] mb-4">Question 1</h4>
                
                {/* Section and Type Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">Section</label>
                        <select
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none bg-white"
                        >
                        <option value="basic">Basic</option>
                        <option value="personality">Personality</option>
                        <option value="preferences">Preferences</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">Answer Type</label>
                        <select
                        name="answer_type"
                        value={formData.answer_type}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none bg-white"
                        >
                        <option value="text">Text</option>
                        <option value="scale">Scale</option>
                        <option value="boolean">Yes/No</option>
                        <option value="choice">Select (Multiple Choice)</option>
                        </select>
                    </div>
                </div>

                {/* Question Text */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-[#374151] mb-2">Question</label>
                      <input
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Write here"
                        className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                        required
                      />
                    </div>

                    {/* No. of Options */}
                    {(formData.answer_type === 'choice' || formData.answer_type === 'boolean') && (
                        <div className="w-full md:w-48">
                            <label className="block text-sm font-medium text-[#374151] mb-2">No. of Options</label>
                            <select
                                value={numberOfOptions}
                                onChange={handleNumberOfOptionsChange}
                                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none bg-white"
                            >
                                {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {/* Upload Icon (UI Only) */}
                <div className="mb-6">
                    <div className="w-32 h-32 border border-dashed border-[#E5E7EB] rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#F97316] transition-colors bg-white group">
                        <div className="w-8 h-8 mb-2 text-gray-800 border-2 border-gray-800 rounded-full flex items-center justify-center group-hover:border-[#F97316] group-hover:text-[#F97316] transition-colors">
                            <span className="font-serif italic font-bold">i</span>
                        </div>
                        <span className="text-xs text-gray-500 group-hover:text-[#F97316] transition-colors">Upload Icon</span>
                    </div>
                </div>

                {/* Options Inputs */}
                {(formData.answer_type === 'choice' || formData.answer_type === 'boolean') && (
                    <div className="space-y-4">
                        {Array.from({ length: numberOfOptions }).map((_, idx) => (
                            <div key={idx}>
                                <label className="block text-sm font-bold text-[#374151] mb-2">Option {idx + 1}</label>
                                <input
                                    type="text"
                                    placeholder="Select Language" 
                                    value={options[idx]?.label || ''}
                                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                                    className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Scale Inputs */}
                {formData.answer_type === 'scale' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg mt-4">
                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-2">Min Value</label>
                            <input
                            type="number"
                            name="min_value"
                            value={formData.min_value || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-2">Max Value</label>
                            <input
                            type="number"
                            name="max_value"
                            value={formData.max_value || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                            />
                        </div>
                    </div>
                )}

                {/* Remove Question */}
                <button 
                    type="button"
                    onClick={handleRemoveQuestion}
                    className="flex items-center gap-2 text-[#EF4444] mt-8 hover:text-red-700 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <span className="text-sm font-medium">Remove Question</span>
                </button>
            </div>

            {/* Add Another Question */}
            <button 
                type="button"
                onClick={handleAddAnother}
                className="flex items-center gap-2 text-[#111827] font-medium hover:text-[#F97316] transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                <span>Add Another Question</span>
            </button>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#E5E7EB] mt-8">
            <button
              onClick={handleCancel}
              className="px-5 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] transition-colors disabled:opacity-50 flex items-center gap-2"
              disabled={loading}
            >
              {loading && (
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {isEdit ? 'Update Quiz' : 'Create Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizPage;

