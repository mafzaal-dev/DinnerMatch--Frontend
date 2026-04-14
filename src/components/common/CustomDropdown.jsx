"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

const DROPDOWN_Z_INDEX = 9999;
const GAP = 4;

/**
 * CustomDropdown Component
 * A custom dropdown that replaces native <select> elements with a styled UI.
 * When placement="top" or inside constrained containers, the menu is rendered in a portal so it is not clipped.
 *
 * @param {Object} props
 * @param {Array} props.options - Array of options: [{ value: string, label: string }]
 * @param {string} props.value - Currently selected value
 * @param {Function} props.onChange - Callback when value changes: (eventLike) => void with target.value
 * @param {Function} [props.onBlur] - Optional blur handler (e.g. react-hook-form field.onBlur)
 * @param {string} props.placeholder - Placeholder text when no value is selected
 * @param {boolean} props.disabled - Whether the dropdown is disabled
 * @param {string} props.className - Additional CSS classes for the container
 * @param {string} props.name - Name attribute for form handling
 * @param {boolean} props.required - Whether the field is required
 * @param {string} props.error - Error message to display
 * @param {'top'|'bottom'|'auto'} props.placement - Open menu above ('top'), below ('bottom'), or choose automatically ('auto') based on viewport space.
 * @param {'default'|'dark'} props.variant - "dark" matches DinnerMatch profile / dark surfaces (#111121, #FFAA55 accents).
 */
const CustomDropdown = ({
  options = [],
  value = "",
  onChange,
  onBlur,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  name = "",
  required = false,
  error = "",
  placement = "bottom",
  variant = "default",
}) => {
  const isDark = variant === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuPosition, setMenuPosition] = useState(null);
  const [autoOpenUpward, setAutoOpenUpward] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const inputRef = useRef(null);

  const openUpward =
    placement === "auto" ? autoOpenUpward : placement === "top";

  // Find the selected option label (loose match so string/number/UUID ids from APIs align)
  const selectedOption = options.find((opt) => {
    if (opt.value === value) return true;
    if (value === "" || value == null) return opt.value === "" || opt.value == null;
    return String(opt.value) === String(value);
  });
  const displayText = selectedOption ? selectedOption.label : "";

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // When opening, measure trigger and set position for portaled menu; with placement="auto", choose up/down by viewport space
  useEffect(() => {
    if (!isOpen || disabled || !dropdownRef.current) {
      setMenuPosition(null);
      return;
    }
    const el = dropdownRef.current;
    const rect = el.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const minSpaceForMenu = 260;

    const shouldOpenUpward =
      placement === "auto"
        ? spaceBelow < minSpaceForMenu || spaceAbove > spaceBelow
        : placement === "top";

    if (placement === "auto") {
      setAutoOpenUpward(shouldOpenUpward);
    }

    setMenuPosition({
      left: rect.left,
      top: shouldOpenUpward ? undefined : rect.bottom + GAP,
      bottom: shouldOpenUpward
        ? window.innerHeight - rect.top + GAP
        : undefined,
      width: rect.width,
    });
  }, [isOpen, disabled, placement]);

  // Close dropdown when clicking outside (trigger or portaled menu)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const inTrigger = dropdownRef.current?.contains(event.target);
      const inMenu = menuRef.current?.contains(event.target);
      if (!inTrigger && !inMenu) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSearchTerm("");
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
    }
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus the input when opening
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleSelectOption = (option) => {
    if (onChange) {
      // Create a synthetic event-like object for compatibility
      const syntheticEvent = {
        target: {
          name: name,
          value: option.value,
          type: "select-one",
        },
        currentTarget: {
          name: name,
          value: option.value,
        },
      };
      onChange(syntheticEvent);
    }
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`
          w-full text-left border rounded-lg text-sm whitespace-nowrap
          focus:outline-none focus:ring-1 transition-colors
          flex items-center justify-between gap-2
          ${isDark ? "px-4 py-3" : "px-4 py-2.5"}
          ${
            disabled
              ? isDark
                ? "bg-[#0c0c14] text-[#757575] cursor-not-allowed border-[#2F3A51]"
                : "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
              : isDark
                ? "bg-[#111121] text-[#F5F5F5] border-[#2F3A51] hover:border-[#FFAA55] focus:border-[#FFAA55] focus:ring-[#FFAA55] cursor-pointer"
                : "bg-white text-gray-900 border-[#D1D5DB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-[#F97316] cursor-pointer"
          }
          ${error ? "border-red-500" : ""}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={name}
      >
        <span
          className={
            displayText
              ? isDark
                ? "text-[#F5F5F5]"
                : "text-gray-900"
              : isDark
                ? "text-[#757575]"
                : "text-gray-400"
          }
        >
          {displayText || placeholder}
          {required && !value && <span className="text-red-500 ml-1">*</span>}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform ${
            disabled
              ? "text-gray-400"
              : isDark
                ? "text-[#A0A0A0]"
                : "text-gray-500"
          } ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Error Message */}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      {/* Dropdown Menu - rendered in portal with fixed position so it is never clipped by modal overflow */}
      {isOpen &&
        !disabled &&
        menuPosition &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={menuRef}
            className={`fixed flex flex-col overflow-hidden rounded-lg shadow-lg max-h-[min(24rem,calc(100dvh-1.5rem))] ${
              isDark
                ? "bg-[#111121] border border-[#2F3A51] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                : "bg-white border border-[#D1D5DB]"
            }`}
            style={{
              zIndex: DROPDOWN_Z_INDEX,
              left: menuPosition.left,
              width: menuPosition.width,
              ...(menuPosition.top != null
                ? { top: menuPosition.top }
                : { bottom: menuPosition.bottom }),
            }}
          >
            {/* Search Input (if there are many options) */}
            {options.length > 5 && (
              <div
                className={`shrink-0 p-2 border-b ${
                  isDark ? "border-[#2F3A51]" : "border-[#E5E7EB]"
                }`}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className={`w-full px-3 py-2 text-sm rounded-md focus:ring-1 outline-none ${
                    isDark
                      ? "bg-[#0c0c14] border border-[#2F3A51] text-[#F5F5F5] placeholder-[#757575] focus:border-[#FFAA55] focus:ring-[#FFAA55]"
                      : "border border-[#D1D5DB] focus:border-[#F97316] focus:ring-[#F97316]"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            {/* Options list: min-h-0 + flex-1 so this region actually scrolls inside the capped portal */}
            <div
              className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch] touch-pan-y"
              role="listbox"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const isSelected =
                    option.value === value ||
                    (value != null &&
                      option.value != null &&
                      String(option.value) === String(value));
                  return (
                    <button
                      key={`${option.value}-${index}`}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className={`
                        w-full px-4 py-2.5 text-left text-sm transition-colors focus:outline-none
                        ${
                          isDark
                            ? `hover:bg-[#1A1D35] focus:bg-[#1A1D35] ${
                                isSelected
                                  ? "bg-[#FFAA55]/15 text-[#FFAA55] font-medium"
                                  : "text-[#F5F5F5]"
                              }`
                            : `hover:bg-[#FFF7ED] focus:bg-[#FFF7ED] ${
                                isSelected
                                  ? "bg-[#FFF7ED] text-[#F97316] font-medium"
                                  : "text-gray-900"
                              }`
                        }
                      `}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {isSelected && (
                          <svg
                            className={`w-4 h-4 ${isDark ? "text-[#FFAA55]" : "text-[#F97316]"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div
                  className={`px-4 py-3 text-sm text-center ${
                    isDark ? "text-[#757575]" : "text-gray-500"
                  }`}
                >
                  No options found
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default CustomDropdown;
