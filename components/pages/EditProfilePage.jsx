"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { editProfileSchema } from "@/constants/validationSchemas";
import { DatePicker } from "@/components/ui/date-picker";
import { api, API_ENDPOINTS } from "@/utils/api";
import CitySelectionModal from "../modals/CitySelectionModal";
import AreaSelectionModal from "../modals/AreaSelectionModal";

// Same questions/options as DemographicsFlow for consistent Identity data
const IDENTITY_QUESTIONS = [
  {
    id: "gender",
    question: "How do you define yourself?",
    type: "choice",
    options: [
      { value: "woman", label: "Women" },
      { value: "man", label: "Men" },
      { value: "non_binary", label: "Non-Binary" },
    ],
  },
  {
    id: "relationship_status",
    question: "What's your relationship status?",
    type: "choice",
    options: [
      { value: "single", label: "Flying Solo" },
      { value: "married", label: "Locked in for Life (Married)" },
      { value: "complicated", label: "It's a rollercoaster (Complicated)" },
      { value: "taken", label: "Taken" },
      { value: "prefer_not_to_say", label: "Prefer not to say" },
    ],
  },
  {
    id: "industry",
    question: "What industry do you work in?",
    type: "choice",
    options: [
      { value: "not_working", label: "Not Working" },
      { value: "studying", label: "Studying" },
      { value: "healthcare", label: "Healthcare" },
      { value: "technology", label: "Technology" },
      { value: "retail", label: "Retail" },
      { value: "food", label: "Food" },
      { value: "services", label: "Services" },
      { value: "arts", label: "Arts" },
      { value: "others", label: "Others" },
    ],
  },
  {
    id: "nationality",
    question: "What is your nationality?",
    type: "search",
    placeholder: "Search your nationality",
    options: [
      { value: "american", label: "American" },
      { value: "british", label: "British" },
      { value: "canadian", label: "Canadian" },
      { value: "australian", label: "Australian" },
      { value: "indian", label: "Indian" },
      { value: "chinese", label: "Chinese" },
      { value: "japanese", label: "Japanese" },
      { value: "german", label: "German" },
      { value: "french", label: "French" },
      { value: "italian", label: "Italian" },
      { value: "spanish", label: "Spanish" },
      { value: "brazilian", label: "Brazilian" },
      { value: "mexican", label: "Mexican" },
      { value: "russian", label: "Russian" },
      { value: "south_african", label: "South African" },
      { value: "other", label: "Other" },
    ],
  },

  {
    id: "date_of_birth",
    question: "When is your birthday?",
    type: "date",
    placeholder: "Select your birthday",
  },
];

// Map API response values (e.g. "Male", "British") to our option values (e.g. "man", "british")
function apiValueToOptionValue(questionId, apiValue, options) {
  if (!apiValue) return null;
  const str = String(apiValue).trim();
  const normalized = str.toLowerCase().replace(/\s+/g, "_");
  const option = options?.find(
    (o) =>
      o.value === normalized ||
      o.value === str ||
      o.label.toLowerCase() === str.toLowerCase()
  );
  if (option) return option.value;
  // API may return "Male"/"Female" for gender
  if (questionId === "gender") {
    if (/^male|men$/i.test(str)) return "man";
    if (/^female|women$/i.test(str)) return "woman";
    if (/non.binary/i.test(str)) return "non_binary";
  }
  // Fallback: try value that matches normalized (e.g. "complicated" from "Complicated")
  const byNormalized = options?.find((o) => o.value === normalized);
  return byNormalized ? byNormalized.value : null;
}

const EditProfilePage = ({
  onSave,
  onBack,
  initialData = {},
  profileApiResponse = null,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      languages: ["English"],
      menuPreferences: [],
      priceRange: "",
      gender: "",
      relationship_status: "",
      industry: "",
      nationality: "",
      language: "",
      date_of_birth: "",
    },
  });

  const [nationalitySearch, setNationalitySearch] = useState("");
  const [nationalityDropdown, setNationalityDropdown] = useState(false);
  const [languageSearch, setLanguageSearch] = useState("");
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [areaModalOpen, setAreaModalOpen] = useState(false);

  const watchedLanguages = watch("languages");
  const watchedMenuPreferences = watch("menuPreferences");
  const watchedPriceRange = watch("priceRange");
  const watchedGender = watch("gender");
  const watchedRelationshipStatus = watch("relationship_status");
  const watchedIndustry = watch("industry");
  const watchedNationality = watch("nationality");
  const watchedLanguage = watch("language");
  const watchedDateOfBirth = watch("date_of_birth");

  const profile =
    profileApiResponse?.data?.profile ??
    profileApiResponse?.data ??
    initialData;

  useEffect(() => {
    if (initialData) {
      setValue(
        "fullName",
        initialData.full_name ||
          `${initialData.first_name || ""} ${initialData.last_name || ""}`.trim() ||
          "",
      );
      setValue("email", initialData.email || "");
      setValue(
        "phoneNumber",
        initialData.phone_number || initialData.phoneNumber || "",
      );
      setValue("languages", initialData.languages || ["English"]);
      setValue("menuPreferences", initialData.menuPreferences || []);
      setValue("priceRange", initialData.priceRange || "");
    }
  }, [initialData, setValue]);

  useEffect(() => {
    api
      .get(API_ENDPOINTS.GET_CITY_AREA)
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        setCities(raw);
      })
      .catch(() => setCities([]));
  }, []);

  useEffect(() => {
    if (!profile?.city_id || !cities.length) return;
    const city = cities.find((c) => c.id === profile.city_id);
    if (!city) return;
    setSelectedCity(city);
    if (profile.area_id) {
      const areaInCity = city.area?.find((a) => a.id === profile.area_id);
      if (areaInCity) {
        setSelectedPlace(areaInCity);
        return;
      }
      for (const c of cities) {
        const area = c.area?.find((a) => a.id === profile.area_id);
        if (area) {
          setSelectedPlace(area);
          break;
        }
      }
    }
  }, [profile?.city_id, profile?.area_id, cities]);

  useEffect(() => {
    if (!profile) return;

    const genderQ = IDENTITY_QUESTIONS.find((q) => q.id === "gender");
    const genderVal = apiValueToOptionValue("gender", profile.gender, genderQ?.options);
    if (genderVal) setValue("gender", genderVal);

    const relQ = IDENTITY_QUESTIONS.find((q) => q.id === "relationship_status");
    const relVal = apiValueToOptionValue("relationship_status", profile.relationship_status, relQ?.options);
    if (relVal) setValue("relationship_status", relVal);

    const indQ = IDENTITY_QUESTIONS.find((q) => q.id === "industry");
    const indVal = apiValueToOptionValue("industry", profile.industry, indQ?.options);
    if (indVal) setValue("industry", indVal);

    if (profile.nationality) {
      const natQ = IDENTITY_QUESTIONS.find((q) => q.id === "nationality");
      const natVal = apiValueToOptionValue("nationality", profile.nationality, natQ?.options);
      if (natVal) {
        setValue("nationality", natVal);
        const natOption = natQ?.options?.find((o) => o.value === natVal);
        if (natOption) setNationalitySearch(natOption.label);
      }
    }

    if (profile.language) {
      const langQ = IDENTITY_QUESTIONS.find((q) => q.id === "language");
      const langVal = apiValueToOptionValue("language", profile.language, langQ?.options);
      if (langVal) {
        setValue("language", langVal);
        const langOption = langQ?.options?.find((o) => o.value === langVal);
        if (langOption) setLanguageSearch(langOption.label);
      }
    }

    if (profile.date_of_birth) setValue("date_of_birth", profile.date_of_birth);
  }, [profile, setValue]);

  const languages = ["English", "Afrikaans", "Xhosa"];
  const menuOptions = [
    "I eat everything",
    "Vegetarian",
    "Meat",
    "Fish",
    "Vegan",
    "Halaal",
  ];
  const priceOptions = [
    { id: "budget", label: "$ - Budget Friendly" },
    { id: "moderate", label: "$$ - Moderate" },
    { id: "premium", label: "$$$ - Premium" },
  ];

  const toggleLanguage = (lang) => {
    const current = watchedLanguages || [];
    const updated = current.includes(lang)
      ? current.filter((l) => l !== lang)
      : [...current, lang];
    setValue("languages", updated, { shouldValidate: true });
  };

  const toggleMenuPreference = (pref) => {
    const current = watchedMenuPreferences || [];
    const updated = current.includes(pref)
      ? current.filter((p) => p !== pref)
      : [...current, pref];
    setValue("menuPreferences", updated);
  };

  const onSubmit = (data) => {
    if (onSave) {
      const nameParts = data.fullName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const budgetLabel = priceOptions.find((o) => o.id === data.priceRange)?.label ?? data.priceRange;

      onSave({
        first_name: firstName,
        last_name: lastName,
        phone_number: data.phoneNumber,
        languages: data.languages,
        menu_preferences: data.menuPreferences,
        budget: budgetLabel,
        gender: data.gender || undefined,
        relationship_status: data.relationship_status || undefined,
        industry: data.industry || undefined,
        nationality: data.nationality || undefined,
        language: data.language || undefined,
        date_of_birth: data.date_of_birth || undefined,
        city_id: selectedCity?.id || undefined,
        area_id: selectedPlace?.id || undefined,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080714] text-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="text-[#F5F5F5] hover:text-[#FFAA55] transition-colors flex items-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <h1 className="text-2xl font-bold text-[#FFAA55]">Edit Profile</h1>
        </div>

        <div className="space-y-6">
          {/* BASIC INFO Section */}
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">
              BASIC INFO
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors ${errors.fullName ? "border-red-500" : "border-[#2F3A51]"}`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  readOnly
                  className="w-full px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#757575] focus:outline-none cursor-not-allowed"
                  placeholder="john.doe@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-[#424242] focus:outline-none focus:border-[#FFAA55] transition-colors ${errors.phoneNumber ? "border-red-500" : "border-[#2F3A51]"}`}
                  placeholder="+1 (XXX) XXX-XXXX"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Location (City & Area) */}
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">
              Location
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">City</label>
                <div className="flex items-center gap-3">
                  <span className="flex-1 px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5]">
                    {selectedCity?.name ?? "—"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCityModalOpen(true)}
                    className="hidden px-4 py-3 rounded-lg border border-[#FFAA55] text-[#FFAA55] font-semibold hover:bg-[#FFAA55] hover:text-[#212121] transition-colors"
                  >
                    Change
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#757575] font-semibold mb-2">Area</label>
                <div className="flex items-center gap-3">
                  <span className="flex-1 px-4 py-3 bg-[#111121] border border-[#2F3A51] rounded-lg text-[#F5F5F5]">
                    {selectedPlace?.name ?? "—"}
                  </span>
                  <button
                    type="button"
                    onClick={() => selectedCity && setAreaModalOpen(true)}
                    disabled={!selectedCity}
                    className="hidden px-4 py-3 rounded-lg border border-[#FFAA55] text-[#FFAA55] font-semibold hover:bg-[#FFAA55] hover:text-[#212121] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Section – only show selected/current data from profile */}
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">
              Identity
            </h2>
            <div className="space-y-6">
              {IDENTITY_QUESTIONS.map((q) => {
                const watched =
                  q.id === "gender"
                    ? watchedGender
                    : q.id === "relationship_status"
                      ? watchedRelationshipStatus
                      : q.id === "industry"
                        ? watchedIndustry
                        : q.id === "nationality"
                          ? watchedNationality
                          : q.id === "date_of_birth"
                            ? watchedDateOfBirth
                            : null;
                let displayLabel = "—";
                if (q.type === "choice" && q.options?.length && watched) {
                  const opt = q.options.find((o) => o.value === watched);
                  displayLabel = opt ? opt.label : String(watched);
                } else if (q.type === "search" && q.id === "nationality") {
                  displayLabel = nationalitySearch || "—";
                } else if (q.type === "date" && watched) {
                  try {
                    displayLabel = format(new Date(watched), "PPP");
                  } catch {
                    displayLabel = String(watched);
                  }
                } else if (watched) {
                  displayLabel = String(watched);
                }
                return (
                  <div key={q.id}>
                    <h3 className="text-sm text-[#757575] font-semibold mb-1.5">
                      {q.question}
                    </h3>
                    <p className="text-base text-[#F5F5F5] font-medium px-4 py-3 bg-[#0d0d18] border border-[#2F3A51] rounded-lg">
                      {displayLabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DINNER PREFERENCES Section */}
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">
              DINNER PREFERENCES
            </h2>

            {/* Languages */}
            <div className="mb-8">
              <label className="block text-sm text-[#757575] font-semibold mb-4">
                Languages
              </label>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => toggleLanguage(lang)}
                    type="button"
                    className={`px-6 py-2.5 rounded-lg border transition-all text-sm font-bold ${
                      watchedLanguages?.includes(lang)
                        ? "bg-[#FFAA55] border-[#FFAA55] text-[#212121]"
                        : "bg-[#111121] border-[#2F3A51] text-[#F5F5F5] hover:border-[#FFAA55]"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              {errors.languages && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.languages.message}
                </p>
              )}
            </div>

            {/* Menu Preferences */}
            <div className="mb-8">
              <label className="block text-sm text-[#757575] font-semibold mb-4">
                Menu Preferences
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {menuOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleMenuPreference(option)}
                    type="button"
                    className={`w-full px-4 py-3 rounded-lg border text-left transition-all text-sm font-semibold ${
                      watchedMenuPreferences?.includes(option)
                        ? "bg-[#FFAA55] border-[#FFAA55] text-[#212121]"
                        : "bg-[#111121] border-[#2F3A51] text-[#F5F5F5] hover:border-[#FFAA55]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm text-[#757575] font-semibold mb-4">
                Price Range
              </label>
              <div className="space-y-3 max-w-xs">
                {priceOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() =>
                      setValue("priceRange", option.id, {
                        shouldValidate: true,
                      })
                    }
                    type="button"
                    className={`w-full px-4 py-3 rounded-lg border text-left transition-all text-sm font-semibold ${
                      watchedPriceRange === option.id
                        ? "bg-[#FFAA55] border-[#FFAA55] text-[#212121]"
                        : "bg-[#111121] border-[#2F3A51] text-[#F5F5F5] hover:border-[#FFAA55]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {errors.priceRange && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.priceRange.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-10">
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-[#FFAA55] text-[#212121] py-4 rounded-lg font-bold text-base uppercase tracking-wide hover:bg-[#FF9955] transition-colors shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>

      <CitySelectionModal
        isOpen={cityModalOpen}
        onClose={() => setCityModalOpen(false)}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setSelectedPlace(null);
          setCityModalOpen(false);
        }}
      />
      <AreaSelectionModal
        isOpen={areaModalOpen}
        onClose={() => setAreaModalOpen(false)}
        selectedCity={selectedCity}
        onSelectArea={(area) => {
          setSelectedPlace(area);
          setAreaModalOpen(false);
        }}
      />
    </div>
  );
};

export default EditProfilePage;
