"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * CustomDropdown Component
 * A custom dropdown that replaces native <select> elements with a styled UI
 * 
 * @param {Object} props
 * @param {Array} props.options - Array of options: [{ value: string, label: string }]
 * @param {string} props.value - Currently selected value
 * @param {Function} props.onChange - Callback function when value changes: (value) => void
 * @param {string} props.placeholder - Placeholder text when no value is selected
 * @param {boolean} props.disabled - Whether the dropdown is disabled
 * @param {string} props.className - Additional CSS classes for the container
 * @param {string} props.name - Name attribute for form handling
 * @param {boolean} props.required - Whether the field is required
 * @param {string} props.error - Error message to display
 */
const CustomDropdown = ({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  name = '',
  required = false,
  error = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Find the selected option label
  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : '';

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
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
          type: 'select-one',
        },
        currentTarget: {
          name: name,
          value: option.value,
        },
      };
      onChange(syntheticEvent);
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 text-left border rounded-lg text-sm 
          focus:outline-none focus:ring-1 transition-colors
          flex items-center justify-between gap-2
          ${disabled 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200' 
            : 'bg-white text-gray-900 border-[#D1D5DB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-[#F97316] cursor-pointer'
          }
          ${error ? 'border-red-500' : ''}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={name}
      >
        <span className={displayText ? 'text-gray-900' : 'text-gray-400'}>
          {displayText || placeholder}
          {required && !value && <span className="text-red-500 ml-1">*</span>}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''} ${disabled ? 'text-gray-400' : 'text-gray-500'}`}
        />
      </button>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-[#D1D5DB] rounded-lg shadow-lg max-h-60 overflow-hidden">
          {/* Search Input (if there are many options) */}
          {options.length > 5 && (
            <div className="p-2 border-b border-[#E5E7EB]">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 text-sm border border-[#D1D5DB] rounded-md focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Options List */}
          <div className="overflow-y-auto max-h-48" role="listbox">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={`${option.value}-${index}`}
                    type="button"
                    onClick={() => handleSelectOption(option)}
                    className={`
                      w-full px-4 py-2.5 text-left text-sm transition-colors
                      hover:bg-[#FFF7ED] focus:bg-[#FFF7ED] focus:outline-none
                      ${isSelected 
                        ? 'bg-[#FFF7ED] text-[#F97316] font-medium' 
                        : 'text-gray-900'
                      }
                    `}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {isSelected && (
                        <svg 
                          className="w-4 h-4 text-[#F97316]" 
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
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
