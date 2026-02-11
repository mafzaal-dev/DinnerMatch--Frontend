import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import { toast } from 'react-hot-toast';
import { debounce, isValidSearchQuery } from '@/utils/searchHelper';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableRow = ({ question, handleViewQuestion, handleEditQuestion, handleDeleteClick, handleToggleActive }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: question.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    position: 'relative',
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={`transition-colors ${isDragging ? 'bg-gray-50 opacity-80 shadow-md' : 'bg-white'}`}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
        <div 
            {...attributes} 
            {...listeners}
            className="cursor-grab hover:text-gray-900 p-2 -ml-2 rounded hover:bg-gray-100 w-fit"
            onClick={(e) => e.stopPropagation()}
        >
           <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
             <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
           </svg>
        </div>
      </td>
      <td 
        className="px-6 py-4 whitespace-nowrap text-sm text-[#111827] font-medium cursor-pointer hover:text-[#F97316] transition-colors"
        onClick={() => handleViewQuestion(question.id)}
      >
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
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEditQuestion(question.id);
            }}
            className="p-1.5 hover:bg-[#FEF3C7] text-[#92400E] rounded transition-colors"
            title="Edit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteClick(question);
            }}
            className="p-1.5 hover:bg-[#FEE2E2] text-[#DC2626] rounded transition-colors"
            title="Delete"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleActive(question);
            }}
            className={`p-1.5 rounded transition-colors ${
              question.is_active 
                ? 'hover:bg-[#FEE2E2] text-[#DC2626]' 
                : 'hover:bg-[#D1FAE5] text-[#065F46]'
            }`}
            title={question.is_active ? 'Deactivate' : 'Activate'}
          >
            {question.is_active ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

const QuizListPage = () => {
  const router = useRouter();
  const { getQuestions, updateQuestionOrder, updateQuestion, deleteQuestion, loading } = useQuiz();
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Recent');
  const [filterSection, setFilterSection] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      // Sort by sort_order if available
      const sortedData = [...data].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
      setQuestions(sortedData);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      toast.error('Failed to load questions');
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (isValidSearchQuery(query) || query.length === 0) {
        setCurrentPage(0); // Reset to first page on new search
      }
    }, 500),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setQuestions((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        
        // Optimistically update
        // We also need to update sort_order in backend
        updateOrder(newItems);
        
        return newItems;
      });
    }
  };

  const updateOrder = async (items) => {
      try {
          // Update sort_order for changed items
          // We iterate and update only those whose index doesn't match their sort_order (adjusted for 1-based index)
          const updates = items.map((item, index) => {
              const newOrder = index + 1;
              if (item.sort_order !== newOrder) {
                  // We update the local item's sort_order to match new reality so next drag comparison is correct
                  item.sort_order = newOrder; 
                  return updateQuestionOrder(item.id, newOrder);
              }
              return Promise.resolve();
          });

          await Promise.all(updates);
          toast.success('Order updated');
      } catch (error) {
          console.error('Failed to update order:', error);
          toast.error('Failed to save new order');
          fetchQuestions(); // Revert on error
      }
  };

  const filteredQuestions = questions
    .filter(q => {
      // Only apply search if query is valid (3+ chars) or empty
      const matchesSearch = !searchQuery || searchQuery.length < 3 || 
                          q.text?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          q.code?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSection = !filterSection || q.section === filterSection;
      const matchesType = !filterType || q.answer_type === filterType;
      return matchesSearch && matchesSection && matchesType;
    });
  
  // Disable DnD when searching or filtering
  const isDndEnabled = searchQuery === '' && !filterSection && !filterType;
  
  // Pagination
  const paginatedQuestions = filteredQuestions.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  
  const totalPages = Math.ceil(filteredQuestions.length / pageSize);

  const handleCreateQuestion = () => {
    router.push('/admin/quiz/create');
  };

  const handleEditQuestion = (id) => {
    router.push(`/admin/quiz/edit/${id}`);
  };
  
  const handleViewQuestion = (id) => {
    router.push(`/admin/quiz/${id}`);
  };
  
  const handleDeleteClick = (question) => {
    setQuestionToDelete(question);
    setShowDeleteConfirm(true);
  };
  
  const confirmDelete = async () => {
    if (!questionToDelete) return;
    
    try {
      await deleteQuestion(questionToDelete.id);
      toast.success('Question deleted successfully');
      setShowDeleteConfirm(false);
      setQuestionToDelete(null);
      fetchQuestions();
    } catch (error) {
      toast.error('Failed to delete question');
    }
  };
  
  const handleToggleActive = async (question) => {
    try {
      await updateQuestion(question.id, {
        ...question,
        is_active: !question.is_active
      });
      toast.success(`Question ${question.is_active ? 'deactivated' : 'activated'}`);
      fetchQuestions();
    } catch (error) {
      toast.error('Failed to update question status');
    }
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
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div className="flex-1 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search by Question or Title (min 3 characters)"
                value={searchQuery}
                onChange={handleSearchChange}
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
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="w-full sm:w-48">
                <select
                  value={filterSection}
                  onChange={(e) => {
                    setFilterSection(e.target.value);
                    setCurrentPage(0);
                  }}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
                >
                  <option value="">All Sections</option>
                  <option value="basic">Basic</option>
                  <option value="personality">Personality</option>
                  <option value="preferences">Preferences</option>
                </select>
              </div>
              <div className="w-full sm:w-48">
                <select
                  value={filterType}
                  onChange={(e) => {
                    setFilterType(e.target.value);
                    setCurrentPage(0);
                  }}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
                >
                  <option value="">All Types</option>
                  <option value="text">Text</option>
                  <option value="scale">Scale</option>
                  <option value="boolean">Yes/No</option>
                  <option value="choice">Select (Multiple Choice)</option>
                </select>
              </div>
              {(filterSection || filterType) && (
                <button
                  onClick={() => {
                    setFilterSection('');
                    setFilterType('');
                    setCurrentPage(0);
                  }}
                  className="px-4 py-2.5 text-sm text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <DndContext 
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide w-10">
                    {/* Handle Column */}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide">
                    Question
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
                        <td colSpan="7" className="px-6 py-8 text-center text-sm text-gray-500">Loading questions...</td>
                    </tr>
                ) : paginatedQuestions.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="px-6 py-8 text-center text-sm text-gray-500">No questions found.</td>
                    </tr>
                ) : (
                    <SortableContext 
                        items={paginatedQuestions.map(q => q.id)}
                        strategy={verticalListSortingStrategy}
                        disabled={!isDndEnabled}
                    >
                    {paginatedQuestions.map((question) => (
                      <SortableRow 
                        key={question.id} 
                        question={question} 
                        handleViewQuestion={handleViewQuestion}
                        handleEditQuestion={handleEditQuestion}
                        handleDeleteClick={handleDeleteClick}
                        handleToggleActive={handleToggleActive}
                      />
                    ))}
                    </SortableContext>
                )}
              </tbody>
            </table>
            </DndContext>
          </div>

          {/* Pagination */}
          {!loading && filteredQuestions.length > 0 && (
            <div className="px-6 py-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-sm text-[#6B7280]">
                Showing {currentPage * pageSize + 1} to {Math.min((currentPage + 1) * pageSize, filteredQuestions.length)} of {filteredQuestions.length} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-sm text-[#6B7280]">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage >= totalPages - 1}
                  className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && questionToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Question</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete "{questionToDelete.code}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setQuestionToDelete(null);
                }}
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

export default QuizListPage;
