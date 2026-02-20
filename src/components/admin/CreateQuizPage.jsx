import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useQuiz } from "@/hooks/useQuiz";
import { toast } from "react-hot-toast";
import { CustomDropdown } from "@/components/common";
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

const SortableOption = ({
  id,
  index,
  option,
  handleOptionChange,
  handleDeleteOption,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-4 mb-4"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab text-gray-400 hover:text-gray-600 mt-6"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-bold text-[#374151] mb-2">
          Option {index + 1}
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter Option"
            value={option?.label || ""}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            maxLength={150}
            className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
          />
          <button
            type="button"
            onClick={() => handleDeleteOption(index)}
            className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 mt-1"
            title="Delete Option"
          >
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </div>
  );
};

const CreateQuizPage = ({ quizId = null, isEdit = false }) => {
  const router = useRouter();
  const {
    createQuestion,
    updateQuestion,
    getQuestion,
    deleteQuestion,
    loading,
  } = useQuiz();
  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [formData, setFormData] = useState({
    code: "",
    text: "",
    section: "basic",
    answer_type: "choice", // Default to choice (was select)
    min_value: null,
    max_value: null,
    sort_order: 1,
    is_active: true,
  });

  // Options state
  // Initialize with unique IDs for dnd-kit
  const [options, setOptions] = useState(
    Array(4)
      .fill(null)
      .map((_, i) => ({
        id: `temp-${Date.now()}-${i}`,
        label: "",
        value: "",
        sort_order: i + 1,
      })),
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    if (isEdit && quizId) {
      fetchQuestion();
    }
  }, [isEdit, quizId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchQuestion = async () => {
    try {
      setInitialLoading(true);
      const data = await getQuestion(quizId);
      console.log("Fetched question data:", data);
      if (data) {
        setFormData({
          code: data.code || "",
          text: data.text || "",
          section: data.section || "basic",
          answer_type: data.answer_type || "text",
          min_value: data.min_value || null,
          max_value: data.max_value || null,
          sort_order: data.sort_order || 1,
          is_active: data.is_active ?? true,
        });

        // Fetch options if type supports it
        if (
          (data.answer_type === "choice" || data.answer_type === "boolean") &&
          data.options
        ) {
          const formattedOptions = data.options.map((opt) => ({
            ...opt,
            // Ensure we have a string ID for DndKit if the API id is missing (unlikely)
            id: opt.id || `temp-${Date.now()}-${Math.random()}`,
          }));
          // Sort by sort_order
          formattedOptions.sort(
            (a, b) => (a.sort_order || 0) - (b.sort_order || 0),
          );

          setOptions(formattedOptions);
        }
      }
    } catch (error) {
      console.error("Failed to fetch question:", error);
      toast.error("Failed to load question details");
    } finally {
      setInitialLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Option Changes
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], label: value, value: value };
    setOptions(newOptions);
  };

  const handleAddNewOption = () => {
    const newOption = {
      id: `temp-${Date.now()}`,
      label: "",
      value: "",
      sort_order: options.length + 1,
    };
    setOptions([...options, newOption]);
  };

  const handleDeleteOptionItem = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setOptions((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.code.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!formData.text.trim()) {
      toast.error("Question is required");
      return;
    }

    // Scale validation
    if (formData.answer_type === "scale") {
      if (!formData.min_value || parseInt(formData.min_value) <= 0) {
        toast.error("Min value must be greater than 0");
        return;
      }
      if (
        !formData.max_value ||
        parseInt(formData.max_value) > 15 ||
        parseInt(formData.max_value) <= 0
      ) {
        toast.error("Max value must be between 1 and 15");
        return;
      }
      if (parseInt(formData.min_value) >= parseInt(formData.max_value)) {
        toast.error("Min value must be less than Max value");
        return;
      }
    }

    try {
      let formattedOptions = [];

      if (formData.answer_type === "choice") {
        formattedOptions = options
          .map((opt, index) => {
            const optionPayload = {
              value: opt.value || opt.label, // Use label if value is empty
              label: opt.label,
              sort_order: index + 1,
            };
            if (opt.id && !String(opt.id).startsWith("temp-")) {
              optionPayload.id = opt.id;
            }
            return optionPayload;
          })
          .filter((opt) => opt.label); //
      }

      const payload = {
        ...formData,
        min_value: formData.min_value ? parseInt(formData.min_value) : null,
        max_value: formData.max_value ? parseInt(formData.max_value) : null,
        sort_order: parseInt(formData.sort_order),
        ...(formData.answer_type === "choice" && { options: formattedOptions }),
      };

      if (isEdit && quizId) {
        await updateQuestion(quizId, payload);
        toast.success("Question updated successfully");
      } else {
        await createQuestion(payload);
        toast.success("Question created successfully");
      }

      router.push("/admin/quiz");
    } catch (error) {
      console.error("Operation failed:", error);
      toast.error(error.message || "Operation failed");
    }
  };

  const handleCancel = () => {
    router.push("/admin/quiz");
  };

  const handleRemoveQuestionClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDeleteQuestion = async () => {
    try {
      if (quizId) {
        await deleteQuestion(quizId);
        toast.success("Question deleted successfully");
      }
      setShowDeleteConfirm(false);
      router.push("/admin/quiz");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete question");
    }
  };

  const handleAddAnother = () => {
    // Reset form to create another
    setFormData({
      code: "",
      text: "",
      section: "basic",
      answer_type: "choice", // Default
      min_value: null,
      max_value: null,
      sort_order: 1,
      is_active: true,
    });
    setOptions(
      Array(4)
        .fill(null)
        .map((_, i) => ({
          id: `temp-${Date.now()}-${i}`,
          label: "",
          value: "",
          sort_order: i + 1,
        })),
    );
    if (isEdit) {
      router.push("/admin/quiz/create");
    }
    toast.success("Ready to add another question");
  };

  if (initialLoading) {
    return (
      <div className="flex-1 bg-[#F9FAFB] min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading question...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 border-b border-[#E5E7EB] flex-shrink-0">
        <div className="flex items-center gap-3 mb-1">
          <button
            type="button"
            onClick={() => router.push("/admin/quiz")}
            className="p-1.5 -ml-1.5 rounded-lg text-[#6B7280] bg-[#F3F4F6] hover:text-[#111827] transition-colors"
            aria-label="Back to quiz list"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-[#111827]">Quiz</h1>
        </div>
        <p className="text-sm text-[#6B7280] mt-0.5">
          Please provide all of the information below to add a question.
        </p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">
              {isEdit ? "Edit Question" : "Create Question"}
            </h2>
            <p className="text-sm text-[#6B7280]">
              Please provide all of the information below.
            </p>
          </div>

          <div className="space-y-6">
            {/* Title / Code */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Enter Question Title"
                maxLength={150}
                className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                required
              />
              <p className="mt-1 text-xs text-[#6B7280]">
                {formData.code.length}/150 characters
              </p>
            </div>

            {/* Section and Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Section <span className="text-red-500">*</span>
                </label>
                <CustomDropdown
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  options={[
                    { value: "basic", label: "Basic" },
                    { value: "personality", label: "Personality" },
                    { value: "preferences", label: "Preferences" },
                  ]}
                  placeholder="Select section"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Answer Type <span className="text-red-500">*</span>
                </label>
                <CustomDropdown
                  name="answer_type"
                  value={formData.answer_type}
                  onChange={handleChange}
                  options={[
                    { value: "text", label: "Text" },
                    { value: "scale", label: "Scale" },
                    { value: "boolean", label: "Yes/No" },
                    { value: "choice", label: "Select (Multiple Choice)" },
                  ]}
                  placeholder="Select answer type"
                  required
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Question <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  placeholder="Enter Question Text"
                  maxLength={150}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  required
                />
                <p className="mt-1 text-xs text-[#6B7280]">
                  {formData.text.length}/150 characters
                </p>
              </div>

              {formData.answer_type === "choice" && (
                <div className="w-full md:w-48">
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    No. of Options
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={options.length}
                    onChange={(e) => {
                      const newCount = parseInt(e.target.value) || 1;
                      if (newCount > options.length) {
                        // Add more options
                        const toAdd = newCount - options.length;
                        const newOptions = [...options];
                        for (let i = 0; i < toAdd; i++) {
                          newOptions.push({
                            id: `temp-${Date.now()}-${i}`,
                            label: "",
                            value: "",
                            sort_order: newOptions.length + 1,
                          });
                        }
                        setOptions(newOptions);
                      } else if (newCount < options.length) {
                        // Remove options from the end
                        setOptions(options.slice(0, newCount));
                      }
                    }}
                    className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  />
                </div>
              )}
            </div>

            {/* Upload Icon (UI Only) */}
            {/* <div className="mb-6">
                    <div className="w-32 h-32 border border-dashed border-[#E5E7EB] rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#F97316] transition-colors bg-white group">
                        <div className="w-8 h-8 mb-2 text-gray-800 border-2 border-gray-800 rounded-full flex items-center justify-center group-hover:border-[#F97316] group-hover:text-[#F97316] transition-colors">
                            <span className="font-serif italic font-bold">i</span>
                        </div>
                        <span className="text-xs text-gray-500 group-hover:text-[#F97316] transition-colors">Upload Icon</span>
                    </div>
                </div> */}

            {formData.answer_type === "choice" && (
              <div className="space-y-2">
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={options.map((o) => o.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {options.map((option, idx) => (
                      <SortableOption
                        key={option.id}
                        id={option.id}
                        index={idx}
                        option={option}
                        handleOptionChange={handleOptionChange}
                        handleDeleteOption={handleDeleteOptionItem}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              </div>
            )}

            {/* Scale Inputs */}
            {formData.answer_type === "scale" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg mt-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Min Value <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="min_value"
                    value={formData.min_value || ""}
                    onChange={(e) => {
                      const value =
                        e.target.value === "" ? "" : parseInt(e.target.value);
                      if (value === "" || value > 0) {
                        setFormData((prev) => ({ ...prev, min_value: value }));
                      }
                    }}
                    min="1"
                    required
                    className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  />
                  <p className="mt-1 text-xs text-[#6B7280]">
                    Must be greater than 0
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Max Value <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="max_value"
                    value={formData.max_value || ""}
                    onChange={(e) => {
                      const value =
                        e.target.value === "" ? "" : parseInt(e.target.value);
                      if (value === "" || (value > 0 && value <= 15)) {
                        setFormData((prev) => ({ ...prev, max_value: value }));
                      }
                    }}
                    min="1"
                    max="15"
                    required
                    className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                  />
                  <p className="mt-1 text-xs text-[#6B7280]">Must be ≤ 15</p>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center mt-6">
              {formData.answer_type === "choice" && (
                <button
                  type="button"
                  onClick={handleAddNewOption}
                  className="flex items-center gap-2 text-[#F97316] hover:text-[#EA580C] transition-colors font-semibold"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="text-sm">Add Another Option</span>
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB] mt-8">
            <div>
              {isEdit && (
                <button
                  type="button"
                  onClick={handleRemoveQuestionClick}
                  className="px-5 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                  disabled={loading}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Question
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
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
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isEdit ? "Update Question" : "Create Question"}
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Question</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete &quot;{formData.code || "this question"}&quot;? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteQuestion}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition-colors disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateQuizPage;
