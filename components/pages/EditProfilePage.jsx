"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "@/constants/validationSchemas";

const EditProfilePage = ({
  onSave,
  onBack,
  initialData = {},
  profileApiResponse = null,
}) => {
  const {
    register,
    handleSubmit,
    control,
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
    },
  });

  // Watch values for custom UI components (buttons)
  const watchedLanguages = watch("languages");
  const watchedMenuPreferences = watch("menuPreferences");
  const watchedPriceRange = watch("priceRange");

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
      // Split full name back into first and last for API if needed
      const nameParts = data.fullName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      onSave({
        first_name: firstName,
        last_name: lastName,
        phone_number: data.phoneNumber,
        languages: data.languages,
        menu_preferences: data.menuPreferences,
        price_range: data.priceRange,
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

          {/* Profile Data Section (from API) */}
          {profileApiResponse?.success && profileApiResponse?.data && (
            <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 md:p-8 shadow-lg">
              <h2 className="text-lg font-bold italic uppercase mb-6 tracking-wide text-[#F5F5F5]">
                Profile Data
              </h2>
              {profileApiResponse.message && (
                <p className="text-sm text-[#757575] mb-4">
                  {profileApiResponse.message}
                </p>
              )}
              {(() => {
                const profile =
                  profileApiResponse.data?.profile ?? profileApiResponse.data;
                const fields = [
                  { key: "id", label: "Profile ID", value: profile?.id },
                  { key: "user", label: "User ID", value: profile?.user },
                  {
                    key: "date_of_birth",
                    label: "Date of Birth",
                    value: profile?.date_of_birth,
                  },
                  { key: "gender", label: "Gender", value: profile?.gender },
                  {
                    key: "relationship_status",
                    label: "Relationship Status",
                    value: profile?.relationship_status,
                  },
                  {
                    key: "industry",
                    label: "Industry",
                    value: profile?.industry,
                  },
                  {
                    key: "nationality",
                    label: "Nationality",
                    value: profile?.nationality,
                  },
                  {
                    key: "city_id",
                    label: "City ID",
                    value: profile?.city_id ?? "—",
                  },
                  {
                    key: "area_id",
                    label: "Area ID",
                    value: profile?.area_id ?? "—",
                  },
                ];
                return (
                  <div className="space-y-4">
                    {fields.map(({ key, label, value }) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-[#2F3A51] last:border-0"
                      >
                        <span className="text-sm text-[#757575] font-semibold min-w-[140px]">
                          {label}
                        </span>
                        <span className="text-[#F5F5F5] font-mono text-sm break-all">
                          {value ?? "—"}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })()}
              <details className="mt-6">
                <summary className="text-sm text-[#757575] cursor-pointer hover:text-[#FFAA55]">
                  View raw JSON
                </summary>
                <pre className="mt-3 bg-[#080814] border border-[#2F3A51] rounded-lg p-4 overflow-x-auto text-xs text-[#E0E0E0] font-mono whitespace-pre-wrap break-words">
                  {JSON.stringify(profileApiResponse, null, 2)}
                </pre>
              </details>
            </div>
          )}

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
    </div>
  );
};

export default EditProfilePage;
