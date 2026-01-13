import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import { toast } from 'react-hot-toast';
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

const SortableRow = ({ question, handleViewQuestion, handleEditQuestion }) => {
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
      className={`hover:bg-[#F9FAFB] transition-colors ${isDragging ? 'bg-gray-50 opacity-80 shadow-md' : 'bg-white'}`}
      onClick={() => handleViewQuestion(question.id)}
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
  );
};

const QuizListPage = () => {
  const router = useRouter();
  const { getQuestions, updateQuestionOrder, loading } = useQuiz();
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Recent');

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

  const filteredQuestions = questions.filter(q => 
    q.text?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.code?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Disable DnD when searching
  const isDndEnabled = searchQuery === '';

  const handleCreateQuestion = () => {
    router.push('/admin/quiz/create');
  };

  const handleEditQuestion = (id) => {
    router.push(`/admin/quiz/edit/${id}`);
  };
  
  const handleViewQuestion = (id) => {
      // Assuming view page is same as edit or similar
      // For now, let's go to edit/view page. 
      // The user previously had /admin/quiz/${id}, let's keep that if it exists, or route to edit.
      // Checking file structure... we have QuizDetailsPage at src/components/admin/QuizDetailsPage.jsx
      // But we don't know the route for sure. Previous code used router.push(`/admin/quiz/${id}`).
      // I'll stick to that.
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
                        <td colSpan="7" className="px-6 py-8 text-center text-sm text-gray-500">Loading questions...</td>
                    </tr>
                ) : filteredQuestions.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="px-6 py-8 text-center text-sm text-gray-500">No questions found.</td>
                    </tr>
                ) : (
                    <SortableContext 
                        items={filteredQuestions.map(q => q.id)}
                        strategy={verticalListSortingStrategy}
                        disabled={!isDndEnabled}
                    >
                    {filteredQuestions.map((question) => (
                      <SortableRow 
                        key={question.id} 
                        question={question} 
                        handleViewQuestion={handleViewQuestion}
                        handleEditQuestion={handleEditQuestion}
                      />
                    ))}
                    </SortableContext>
                )}
              </tbody>
            </table>
            </DndContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;
