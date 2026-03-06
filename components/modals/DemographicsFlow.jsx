"use client";

import React, { useState } from 'react';
import { DatePicker } from '@/components/ui/date-picker';
import { format } from "date-fns";

const STEPS = [
  {
    id: 'gender',
    title: 'Identity',
    question: 'How do you define yourself?',
    type: 'choice',
    options: [
      { value: 'woman', label: 'Woman' },
      { value: 'man', label: 'Man' },
      { value: 'non_binary', label: 'Non-Binary' }
    ]
  },
  {
    id: 'relationship_status',
    title: 'Identity',
    question: "What's your relationship status?",
    type: 'choice',
    options: [
      { value: 'single', label: 'Flying Solo' },
      { value: 'married', label: 'Locked in for Life (Married)' },
      { value: 'complicated', label: "It's a rollercoaster (Complicated)" },
      { value: 'taken', label: 'Taken' },
      { value: 'prefer_not_to_say', label: 'Prefer not to say' }
    ]
  },
  {
    id: 'industry',
    title: 'Identity',
    question: 'What industry do you work in?',
    type: 'choice',
    options: [
      { value: 'not_working', label: 'Not Working' },
      { value: 'studying', label: 'Studying' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'technology', label: 'Technology' },
      { value: 'retail', label: 'Retail' },
      { value: 'food', label: 'Food' },
      { value: 'services', label: 'Services' },
      { value: 'arts', label: 'Arts' },
      { value: 'others', label: 'Others' }
    ]
  },
  {
    id: 'nationality',
    title: 'Identity',
    question: 'What is your nationality?',
    type: 'search',
    placeholder: 'Search your nationality',
    options: [
      { value: 'South African', label: 'South African' },
      { value: 'Afghan', label: 'Afghan' },
      { value: 'Albanian', label: 'Albanian' },
      { value: 'Algerian', label: 'Algerian' },
      { value: 'American', label: 'American' },
      { value: 'Andorran', label: 'Andorran' },
      { value: 'Angolan', label: 'Angolan' },
      { value: 'Antiguan', label: 'Antiguan' },
      { value: 'Argentine', label: 'Argentine' },
      { value: 'Armenian', label: 'Armenian' },
      { value: 'Australian', label: 'Australian' },
      { value: 'Austrian', label: 'Austrian' },
      { value: 'Azerbaijani', label: 'Azerbaijani' },
      { value: 'Bahamian', label: 'Bahamian' },
      { value: 'Bahraini', label: 'Bahraini' },
      { value: 'Bangladeshi', label: 'Bangladeshi' },
      { value: 'Barbadian', label: 'Barbadian' },
      { value: 'Belarusian', label: 'Belarusian' },
      { value: 'Belgian', label: 'Belgian' },
      { value: 'Belizean', label: 'Belizean' },
      { value: 'Beninese', label: 'Beninese' },
      { value: 'Bhutanese', label: 'Bhutanese' },
      { value: 'Bolivian', label: 'Bolivian' },
      { value: 'Bosnian', label: 'Bosnian' },
      { value: 'Botswanan', label: 'Botswanan' },
      { value: 'Brazilian', label: 'Brazilian' },
      { value: 'British', label: 'British' },
      { value: 'Bruneian', label: 'Bruneian' },
      { value: 'Bulgarian', label: 'Bulgarian' },
      { value: 'Burkinabe', label: 'Burkinabe' },
      { value: 'Burundian', label: 'Burundian' },
      { value: 'Cabo Verdean', label: 'Cabo Verdean' },
      { value: 'Cambodian', label: 'Cambodian' },
      { value: 'Cameroonian', label: 'Cameroonian' },
      { value: 'Canadian', label: 'Canadian' },
      { value: 'Central African', label: 'Central African' },
      { value: 'Chadian', label: 'Chadian' },
      { value: 'Chilean', label: 'Chilean' },
      { value: 'Chinese', label: 'Chinese' },
      { value: 'Colombian', label: 'Colombian' },
      { value: 'Comorian', label: 'Comorian' },
      { value: 'Congolese', label: 'Congolese' },
      { value: 'Costa Rican', label: 'Costa Rican' },
      { value: 'Croatian', label: 'Croatian' },
      { value: 'Cuban', label: 'Cuban' },
      { value: 'Cypriot', label: 'Cypriot' },
      { value: 'Czech', label: 'Czech' },
      { value: 'Danish', label: 'Danish' },
      { value: 'Djiboutian', label: 'Djiboutian' },
      { value: 'Dominican', label: 'Dominican' },
      { value: 'Dutch', label: 'Dutch' },
      { value: 'Ecuadorian', label: 'Ecuadorian' },
      { value: 'Egyptian', label: 'Egyptian' },
      { value: 'Emirati', label: 'Emirati' },
      { value: 'Equatorial Guinean', label: 'Equatorial Guinean' },
      { value: 'Eritrean', label: 'Eritrean' },
      { value: 'Estonian', label: 'Estonian' },
      { value: 'Eswatini', label: 'Eswatini' },
      { value: 'Ethiopian', label: 'Ethiopian' },
      { value: 'Fijian', label: 'Fijian' },
      { value: 'Finnish', label: 'Finnish' },
      { value: 'French', label: 'French' },
      { value: 'Gabonese', label: 'Gabonese' },
      { value: 'Gambian', label: 'Gambian' },
      { value: 'Georgian', label: 'Georgian' },
      { value: 'German', label: 'German' },
      { value: 'Ghanaian', label: 'Ghanaian' },
      { value: 'Greek', label: 'Greek' },
      { value: 'Grenadian', label: 'Grenadian' },
      { value: 'Guatemalan', label: 'Guatemalan' },
      { value: 'Guinean', label: 'Guinean' },
      { value: 'Guinea-Bissauan', label: 'Guinea-Bissauan' },
      { value: 'Guyanese', label: 'Guyanese' },
      { value: 'Haitian', label: 'Haitian' },
      { value: 'Honduran', label: 'Honduran' },
      { value: 'Hungarian', label: 'Hungarian' },
      { value: 'Icelandic', label: 'Icelandic' },
      { value: 'Indian', label: 'Indian' },
      { value: 'Indonesian', label: 'Indonesian' },
      { value: 'Iranian', label: 'Iranian' },
      { value: 'Iraqi', label: 'Iraqi' },
      { value: 'Irish', label: 'Irish' },
      { value: 'Israeli', label: 'Israeli' },
      { value: 'Italian', label: 'Italian' },
      { value: 'Ivorian', label: 'Ivorian' },
      { value: 'Jamaican', label: 'Jamaican' },
      { value: 'Japanese', label: 'Japanese' },
      { value: 'Jordanian', label: 'Jordanian' },
      { value: 'Kazakhstani', label: 'Kazakhstani' },
      { value: 'Kenyan', label: 'Kenyan' },
      { value: 'Kiribatian', label: 'Kiribatian' },
      { value: 'Korean (North)', label: 'Korean (North)' },
      { value: 'Korean (South)', label: 'Korean (South)' },
      { value: 'Kuwaiti', label: 'Kuwaiti' },
      { value: 'Kyrgyz', label: 'Kyrgyz' },
      { value: 'Laotian', label: 'Laotian' },
      { value: 'Latvian', label: 'Latvian' },
      { value: 'Lebanese', label: 'Lebanese' },
      { value: 'Lesothan', label: 'Lesothan' },
      { value: 'Liberian', label: 'Liberian' },
      { value: 'Libyan', label: 'Libyan' },
      { value: 'Liechtensteiner', label: 'Liechtensteiner' },
      { value: 'Lithuanian', label: 'Lithuanian' },
      { value: 'Luxembourgish', label: 'Luxembourgish' },
      { value: 'Macedonian', label: 'Macedonian' },
      { value: 'Malagasy', label: 'Malagasy' },
      { value: 'Malawian', label: 'Malawian' },
      { value: 'Malaysian', label: 'Malaysian' },
      { value: 'Maldivian', label: 'Maldivian' },
      { value: 'Malian', label: 'Malian' },
      { value: 'Maltese', label: 'Maltese' },
      { value: 'Marshallese', label: 'Marshallese' },
      { value: 'Mauritanian', label: 'Mauritanian' },
      { value: 'Mauritian', label: 'Mauritian' },
      { value: 'Mexican', label: 'Mexican' },
      { value: 'Micronesian', label: 'Micronesian' },
      { value: 'Moldovan', label: 'Moldovan' },
      { value: 'Monegasque', label: 'Monegasque' },
      { value: 'Mongolian', label: 'Mongolian' },
      { value: 'Montenegrin', label: 'Montenegrin' },
      { value: 'Moroccan', label: 'Moroccan' },
      { value: 'Mozambican', label: 'Mozambican' },
      { value: 'Namibian', label: 'Namibian' },
      { value: 'Nauruan', label: 'Nauruan' },
      { value: 'Nepalese', label: 'Nepalese' },
      { value: 'New Zealander', label: 'New Zealander' },
      { value: 'Nicaraguan', label: 'Nicaraguan' },
      { value: 'Nigerian', label: 'Nigerian' },
      { value: 'Nigerien', label: 'Nigerien' },
      { value: 'Norwegian', label: 'Norwegian' },
      { value: 'Omani', label: 'Omani' },
      { value: 'Pakistani', label: 'Pakistani' },
      { value: 'Palauan', label: 'Palauan' },
      { value: 'Panamanian', label: 'Panamanian' },
      { value: 'Papua New Guinean', label: 'Papua New Guinean' },
      { value: 'Paraguayan', label: 'Paraguayan' },
      { value: 'Peruvian', label: 'Peruvian' },
      { value: 'Filipino', label: 'Filipino' },
      { value: 'Polish', label: 'Polish' },
      { value: 'Portuguese', label: 'Portuguese' },
      { value: 'Qatari', label: 'Qatari' },
      { value: 'Romanian', label: 'Romanian' },
      { value: 'Russian', label: 'Russian' },
      { value: 'Rwandan', label: 'Rwandan' },
      { value: 'Saint Lucian', label: 'Saint Lucian' },
      { value: 'Salvadoran', label: 'Salvadoran' },
      { value: 'Samoan', label: 'Samoan' },
      { value: 'San Marinese', label: 'San Marinese' },
      { value: 'Sao Tomean', label: 'Sao Tomean' },
      { value: 'Saudi Arabian', label: 'Saudi Arabian' },
      { value: 'Senegalese', label: 'Senegalese' },
      { value: 'Serbian', label: 'Serbian' },
      { value: 'Seychellois', label: 'Seychellois' },
      { value: 'Sierra Leonean', label: 'Sierra Leonean' },
      { value: 'Singaporean', label: 'Singaporean' },
      { value: 'Slovak', label: 'Slovak' },
      { value: 'Slovenian', label: 'Slovenian' },
      { value: 'Solomon Islander', label: 'Solomon Islander' },
      { value: 'Somali', label: 'Somali' },
      { value: 'Spanish', label: 'Spanish' },
      { value: 'Sri Lankan', label: 'Sri Lankan' },
      { value: 'Sudanese', label: 'Sudanese' },
      { value: 'Surinamese', label: 'Surinamese' },
      { value: 'Swedish', label: 'Swedish' },
      { value: 'Swiss', label: 'Swiss' },
      { value: 'Syrian', label: 'Syrian' },
      { value: 'Taiwanese', label: 'Taiwanese' },
      { value: 'Tajik', label: 'Tajik' },
      { value: 'Tanzanian', label: 'Tanzanian' },
      { value: 'Thai', label: 'Thai' },
      { value: 'Timorese', label: 'Timorese' },
      { value: 'Togolese', label: 'Togolese' },
      { value: 'Tongan', label: 'Tongan' },
      { value: 'Trinidadian', label: 'Trinidadian' },
      { value: 'Tunisian', label: 'Tunisian' },
      { value: 'Turkish', label: 'Turkish' },
      { value: 'Turkmen', label: 'Turkmen' },
      { value: 'Tuvaluan', label: 'Tuvaluan' },
      { value: 'Ugandan', label: 'Ugandan' },
      { value: 'Ukrainian', label: 'Ukrainian' },
      { value: 'Uruguayan', label: 'Uruguayan' },
      { value: 'Uzbek', label: 'Uzbek' },
      { value: 'Vanuatuan', label: 'Vanuatuan' },
      { value: 'Venezuelan', label: 'Venezuelan' },
      { value: 'Vietnamese', label: 'Vietnamese' },
      { value: 'Yemeni', label: 'Yemeni' },
      { value: 'Zambian', label: 'Zambian' },
      { value: 'Zimbabwean', label: 'Zimbabwean' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    id: 'language',
    title: 'Identity',
    question: 'What is your primary language?',
    type: 'search',
    placeholder: 'Search your language',
    options: [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'mandarin', label: 'Mandarin Chinese' },
      { value: 'hindi', label: 'Hindi' },
      { value: 'french', label: 'French' },
      { value: 'arabic', label: 'Arabic' },
      { value: 'bengali', label: 'Bengali' },
      { value: 'portuguese', label: 'Portuguese' },
      { value: 'russian', label: 'Russian' },
      { value: 'japanese', label: 'Japanese' },
      { value: 'german', label: 'German' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'date_of_birth',
    title: 'Identity',
    question: 'When is your birthday?',
    type: 'date',
    placeholder: 'Select your birthday'
  }
];

const CustomSelect = ({ label, options, value, onChange, isOpen, onToggle }) => {
  return (
    <div className="flex-1 space-y-1 relative">
      <label className="text-gray-400 text-[10px] md:text-xs font-medium block uppercase tracking-wider">{label}</label>
      <button
        onClick={onToggle}
        className={`w-full bg-[#1A1D35] border rounded-xl py-2.5 text-base md:text-lg transition-all duration-300 ${isOpen ? 'border-[#FFAA55] ring-2 ring-[#FFAA55]/20' : 'border-gray-700 hover:border-gray-500'
          }`}
      >
        {value}
      </button>

      {isOpen && (
        <div className="absolute z-100 w-full mt-2 bg-[#1A1D35] border border-[#2F3A51] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden animate-fadeIn backdrop-blur-xl">
          <div className="max-h-52 overflow-y-auto scrollbar-hide py-1">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt);
                  onToggle();
                }}
                className={`w-full py-2.5 px-4 text-left text-sm transition-colors hover:bg-[#FFAA55] hover:text-[#111] ${value === opt ? 'bg-[#FFAA55]/10 text-[#FFAA55] font-bold' : 'text-gray-300'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DatePartSelector = ({ dateValue, onDateChange, isDateInFuture, handleDateConfirm }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => (currentYear - i).toString());

  const d = dateValue ? new Date(dateValue) : new Date(2000, 0, 1);
  const currentMonth = (d.getMonth() + 1).toString().padStart(2, '0');
  const currentDay = d.getDate().toString().padStart(2, '0');
  const currentYearVal = d.getFullYear().toString();

  const handleUpdate = (type, val) => {
    const newDate = new Date(d);
    if (type === 'month') newDate.setMonth(parseInt(val) - 1);
    if (type === 'day') newDate.setDate(parseInt(val));
    if (type === 'year') newDate.setFullYear(parseInt(val));
    onDateChange(format(newDate, "yyyy-MM-dd"));
  };

  return (
    <div className="space-y-8 max-w-md mx-auto">
      {/* Selected Date Display */}
      <div className="w-full bg-[#111121] border-2 border-[#FFAA55] rounded-2xl py-3.5 px-4 text-center shadow-[0_0_15px_rgba(255,170,85,0.1)]">
        <span className="text-xl font-bold tracking-[0.2em] text-[#F5F5F5]">
          {dateValue ? format(new Date(dateValue), "dd/MM/yyyy") : "01/01/2000"}
        </span>
      </div>

      {/* 3-Field Custom Select Group */}
      <div className="bg-[#111121]/50 border border-[#2F3A51] rounded-2xl p-5 md:p-6 backdrop-blur-sm">
        <div className="flex gap-3 md:gap-4">
          <CustomSelect
            label="Month"
            options={months}
            value={currentMonth}
            isOpen={activeDropdown === 'month'}
            onToggle={() => setActiveDropdown(activeDropdown === 'month' ? null : 'month')}
            onChange={(val) => handleUpdate('month', val)}
          />
          <CustomSelect
            label="Day"
            options={days}
            value={currentDay}
            isOpen={activeDropdown === 'day'}
            onToggle={() => setActiveDropdown(activeDropdown === 'day' ? null : 'day')}
            onChange={(val) => handleUpdate('day', val)}
          />
          <CustomSelect
            label="Year"
            options={years}
            value={currentYearVal}
            isOpen={activeDropdown === 'year'}
            onToggle={() => setActiveDropdown(activeDropdown === 'year' ? null : 'year')}
            onChange={(val) => handleUpdate('year', val)}
          />
        </div>
      </div>

      {isDateInFuture && (
        <p className="text-sm text-red-400 text-center animate-shake">Please select a valid date.</p>
      )}

      <button
        onClick={handleDateConfirm}
        disabled={!dateValue || isDateInFuture}
        className={`w-full py-4 rounded-xl font-bold text-base uppercase tracking-widest transition-all duration-300 ${dateValue && !isDateInFuture
          ? 'bg-[#FFAA55] text-white hover:bg-[#FF9955] shadow-lg hover:shadow-[0_0_20px_rgba(255,170,85,0.3)]'
          : 'bg-[#2F3A51] text-[#757575] cursor-not-allowed'
          }`}
      >
        Confirm
      </button>
    </div>
  );
};

const DemographicsFlow = ({ isOpen, onClose, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Date state
  const [dateValue, setDateValue] = useState('');

  const currentQ = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Restore date value when revisiting the step
  React.useEffect(() => {
    if (isOpen && currentQ.type === 'date' && answers[currentQ.id]) {
      setDateValue(answers[currentQ.id]);
    }
  }, [currentStep, currentQ, answers, isOpen]);

  // Restore search value when revisiting the step
  React.useEffect(() => {
    if (isOpen && currentQ.type === 'search' && answers[currentQ.id]) {
      const option = currentQ.options?.find(o => o.value === answers[currentQ.id]);
      if (option) {
        setSearchQuery(option.label);
      }
    }
  }, [currentStep, currentQ, answers, isOpen]);

  if (!isOpen) return null;

  const handleAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
        setSearchQuery('');
        setShowDropdown(false);
        setDateValue('');
      } else {
        onComplete(newAnswers);
      }
    }, 350);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSearchQuery('');
      setShowDropdown(false);
    } else {
      if (onBack) onBack();
      else onClose();
    }
  };

  const filteredOptions = currentQ.type === 'search'
    ? currentQ.options.filter(o => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const today = new Date().toISOString().split('T')[0];

  const handleDateConfirm = () => {
    if (!dateValue) return;
    const selected = new Date(dateValue);
    if (selected > new Date()) return; // reject future dates
    handleAnswer(currentQ.id, dateValue);
  };

  const isDateInFuture = dateValue ? new Date(dateValue) > new Date() : false;

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1123] overflow-y-auto md:bg-black/80 md:overflow-hidden md:flex md:items-center md:justify-center">
      <div className="min-h-full md:h-full w-full text-white flex flex-col p-4 pb-10 md:min-h-0 md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='flex flex-col md:block p-3 md:p-0'>
          <div className='text-center pt-12 pb-4 md:mb-10 md:mt-6 md:pt-0 md:pb-0 relative'>
            <button onClick={handleBack} className="absolute top-2 left-0 md:left-4 text-gray-400 hover:text-white z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-5 h-5"><path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="text-sm">Back</span>
            </button>
            <h1 className="text-2xl md:text-4xl font-bold mb-1">
              <span className="text-white">Dinner</span><span className="text-[#FFAA55]">Match</span>
            </h1>
            <div className='text-[#FFAA55] font-medium tracking-widest uppercase text-xs md:text-md'>
              IDENTITY
            </div>
          </div>
          <div className='animate-fadeIn'>
            <div className='text-center'>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mx-auto max-w-2xl">
                {currentQ.question}
              </h2>

              {currentQ.type === 'choice' && (
                <div className="flex flex-col space-y-4 max-w-md mx-auto">
                  {currentQ.options.map((option) => {
                    const isSelected = answers[currentQ.id] === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQ.id, option.value)}
                        className={`p-5 border-2 rounded-xl text-xl font-medium transition-all duration-300 ease-out ${isSelected
                          ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111] shadow-[0_8px_24px_rgba(255,170,85,0.25)] -translate-y-1'
                          : 'bg-transparent text-white border-white hover:border-white/30'
                          }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQ.type === 'search' && (
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder={currentQ.placeholder}
                    className="w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer focus-within:ring-2 focus-within:ring-[#FFAA55] focus-within:border-[#FFAA55] transition-all duration-200"
                  />

                  {showDropdown && (
                    <div className="w-full mt-2 bg-[#111121] border border-[#2F3A51] rounded-lg max-h-60 overflow-y-auto shadow-lg">
                      {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => {
                          const isSelected = answers[currentQ.id] === option.value;
                          return (
                            <button
                              key={option.value}
                              onClick={() => handleAnswer(currentQ.id, option.value)}
                              className={`w-full text-left px-4 py-3 transition-all duration-300 ease-out border-b border-[#2F3A51] last:border-0 ${isSelected
                                ? 'bg-[#FFAA55] text-[#111] font-semibold'
                                : 'text-[#E0E0E0] hover:bg-[#2F3A51] hover:text-[#F5F5F5]'
                                }`}
                            >
                              {option.label}
                            </button>
                          );
                        })
                      ) : (
                        <div className="px-4 py-3 text-[#E0E0E0]">No results found</div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {currentQ.type === 'date' && (
                <DatePartSelector
                  dateValue={dateValue}
                  onDateChange={(newDate) => setDateValue(newDate)}
                  isDateInFuture={isDateInFuture}
                  handleDateConfirm={handleDateConfirm}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsFlow;
