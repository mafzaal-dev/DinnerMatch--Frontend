import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/hooks/useQuiz";
import { toast } from "react-hot-toast";
import { debounce, isValidSearchQuery } from "@/utils/searchHelper";
import { CustomDropdown } from "@/components/common";
import { TablePagination } from "@/components/ui/Pagination";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Helper function to format display text
const formatDisplayText = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Helper function to format answer type for display
const formatAnswerType = (type) => {
  if (!type) return "";

  // Check if it starts with "scale"
  if (type.toLowerCase().startsWith("scale")) {
    return "Range";
  }

  // Capitalize first letter for other types
  return type.charAt(0).toUpperCase() + type.slice(1);
};

const SortableRow = ({
  question,
  handleViewQuestion,
  handleEditQuestion,
  handleDeleteClick,
  handleToggleActive,
}) => {
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
    position: "relative",
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={`transition-colors ${isDragging ? "bg-gray-50 opacity-80 shadow-md" : "bg-white"}`}
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
        {formatDisplayText(question.text)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
        {formatDisplayText(question.section)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
        {formatAnswerType(question.answer_type)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            question.is_active
              ? "bg-[#D1FAE5] text-[#065F46]"
              : "bg-[#F3F4F6] text-[#6B7280]"
          }`}
        >
          {question.is_active ? "Active" : "Inactive"}
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
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
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
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleActive(question);
            }}
            className={`p-1.5 rounded transition-colors ${
              question.is_active
                ? "hover:bg-[#FEE2E2] text-[#DC2626]"
                : "hover:bg-[#D1FAE5] text-[#065F46]"
            }`}
            title={question.is_active ? "Deactivate" : "Activate"}
          >
            {question.is_active ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
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
  const {
    getQuestions,
    updateQuestionOrder,
    updateQuestion,
    deleteQuestion,
    loading,
  } = useQuiz();
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recent");
  const [filterSection, setFilterSection] = useState("");
  const [filterType, setFilterType] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async (query = "") => {
    try {
      const data = await getQuestions(query);
      // Sort by sort_order if available
      const sortedData = [...data].sort(
        (a, b) => (a.sort_order || 0) - (b.sort_order || 0),
      );
      setQuestions(sortedData);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      toast.error("Failed to load questions");
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      setCurrentPage(0); // Reset to first page on new search
      fetchQuestions(query);
    }, 500),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const wasValidSearch = searchQuery.length >= 3;
    const isValidSearch = value.length >= 3;

    setSearchQuery(value);

    if (isValidSearch) {
      debouncedSearch(value);
    } else if (wasValidSearch && !isValidSearch) {
      debouncedSearch("");
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
      toast.success("Order updated");
    } catch (error) {
      console.error("Failed to update order:", error);
      toast.error("Failed to save new order");
      fetchQuestions(); // Revert on error
    }
  };

  const filteredQuestions = questions.filter((q) => {
    const matchesSection = !filterSection || q.section === filterSection;
    const matchesType = !filterType || q.answer_type === filterType;
    return matchesSection && matchesType;
  });

  // Disable DnD when searching or filtering
  const isDndEnabled = searchQuery === "" && !filterSection && !filterType;

  // Pagination
  const paginatedQuestions = filteredQuestions.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize,
  );

  const handleCreateQuestion = () => {
    router.push("/admin/quiz/create");
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
      toast.success("Question deleted successfully");
      setShowDeleteConfirm(false);
      setQuestionToDelete(null);
      fetchQuestions();
    } catch (error) {
      toast.error("Failed to delete question");
    }
  };

  const handleToggleActive = async (question) => {
    try {
      await updateQuestion(question.id, {
        ...question,
        is_active: !question.is_active,
      });
      toast.success(
        `Question ${question.is_active ? "deactivated" : "activated"}`,
      );
      fetchQuestions();
    } catch (error) {
      toast.error("Failed to update question status");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 border-b border-[#E5E7EB] flex-shrink-0">
        <h1 className="text-xl font-bold text-[#111827]">
          User Data Management
        </h1>
        <p className="text-sm text-[#6B7280] mt-0.5">
          Manage customers data and bookings
        </p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        {/* Questions Section */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-5 border-b border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-[#111827]">
                Quizzes
              </h2>
              <p className="text-sm text-[#6B7280] mt-0.5">
                Only one quiz will be active at a time.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Sort By */}
              <CustomDropdown
                value={filterSection}
                onChange={(e) => setFilterSection(e.target.value)}
                options={[
                  { value: "", label: "Sort by" },
                  { value: "basic", label: "Section: Basic" },
                  { value: "personality", label: "Section: Personality" },
                  { value: "preferences", label: "Section: Preferences" },
                ]}
                placeholder="Sort by"
                className=""
              />

              {/* Create Button */}
              <button
                onClick={handleCreateQuestion}
                className="px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-medium hover:bg-[#EA580C] whitespace-nowrap"
              >
                Create Quiz
              </button>
            </div>
          </div>

          {/* Filters (Optional: keeping existing filters below or hiding them if the user wants strictly the image layout. 
              The image doesn't show the filters row, but functionality might be needed. 
              I will keep them but maybe compact or hide them if they clash. 
              The image shows directly the table headers below the top bar.
              I will hide the old "Search and Actions" row since I moved the search and create button.
              I'll keep filters if they are critical, or move them. 
              The prompt says "this should the layout of search input and create button".
              I'll assume the old search/create row is replaced by this new header layout.
              I'll keep the filters but maybe in a cleaner way or just leave them out if they weren't in the design.
              The design shows "Sort by", so maybe that replaces the filters?
              For now I will comment out the old "Search and Actions" row to match the visual fidelity of the image, 
              but I'll keep the logic available if I need to restore it. 
              Wait, if I remove filters, user can't filter by section/type. 
              The image has a "Sort by" dropdown. Maybe that's where filters go? 
              I'll just remove the old search bar row entirely as it's redundant.
          */}

          {/* <div className="px-6 py-4 border-b border-[#E5E7EB]"> ... </div> */}
          {/* Re-adding filters in a subtle way or just hiding for now to match the "layout" request perfectly. */}
          {/* I will add a small filter bar below if needed, but for now I will remove the old big block. */}

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
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#F3F4F6]">
                  {loading ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-8 text-center text-sm text-gray-500"
                      >
                        Loading questions...
                      </td>
                    </tr>
                  ) : paginatedQuestions.length === 0 ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-8 text-center text-sm text-gray-500"
                      >
                        No questions found.
                      </td>
                    </tr>
                  ) : (
                    <SortableContext
                      items={paginatedQuestions.map((q) => q.id)}
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
          {!loading && (
            <TablePagination
              currentPage={currentPage}
              total={filteredQuestions.length}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && questionToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">
              Delete Question
            </h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete "{questionToDelete.code}"? This
              action cannot be undone.
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
