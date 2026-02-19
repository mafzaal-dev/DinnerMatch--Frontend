"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { toast } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { restaurantSchema } from "@/constants/validationSchemas";
import { useRestaurant } from "@/hooks/useRestaurant";
import { CustomDropdown } from "@/components/common";

const CreateEditRestaurantPage = ({ restaurantId = null, isEdit = false }) => {
  const router = useRouter();
  const {
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    loading,
  } = useRestaurant();
  const [initialLoading, setInitialLoading] = useState(isEdit);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(restaurantSchema),
    defaultValues: {
      name: "",
      city: "",
      location: "",
      number: "",
      price: "",
      budget: "",
      is_meat: false,
      is_vegetarian: false,
      is_vegan: false,
      is_fish: false,
      is_halal: false,
      is_others: false,
    },
  });

  const watchedCity = watch("city");
  const watchedIsMeat = watch("is_meat");
  const watchedIsVegetarian = watch("is_vegetarian");
  const watchedIsVegan = watch("is_vegan");
  const watchedIsFish = watch("is_fish");
  const watchedIsHalal = watch("is_halal");
  const watchedIsOthers = watch("is_others");

  // TODO: Fetch cities and locations from backend API
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (isEdit && restaurantId) {
      fetchRestaurant();
    }
  }, [isEdit, restaurantId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchRestaurant = async () => {
    try {
      setInitialLoading(true);
      const restaurant = await getRestaurant(restaurantId);

      if (restaurant) {
        setValue("name", restaurant.name || "");
        setValue("city", restaurant.city || "");
        setValue("location", restaurant.location || "");
        setValue("number", restaurant.number || "");
        setValue("price", restaurant.price || "");
        setValue("budget", restaurant.budget || "");
        setValue("is_meat", restaurant.is_meat || false);
        setValue("is_vegetarian", restaurant.is_vegetarian || false);
        setValue("is_vegan", restaurant.is_vegan || false);
        setValue("is_fish", restaurant.is_fish || false);
        setValue("is_halal", restaurant.is_halal || false);
        setValue("is_others", restaurant.is_others || false);
      } else {
        toast.error("Restaurant not found");
        router.push("/admin/restaurants");
      }
    } catch (error) {
      console.error("Failed to fetch restaurant:", error);
      toast.error("Failed to load restaurant details");
      router.push("/admin/restaurants");
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        city: data.city,
        location: data.location,
        number: data.number,
        price: parseFloat(data.price).toFixed(2),
        budget: data.budget,
        is_meat: data.is_meat,
        is_vegetarian: data.is_vegetarian,
        is_vegan: data.is_vegan,
        is_fish: data.is_fish,
        is_halal: data.is_halal,
        is_others: data.is_others,
      };

      if (isEdit && restaurantId) {
        await updateRestaurant(restaurantId, payload);
        toast.success("Restaurant updated successfully");
      } else {
        await createRestaurant(payload);
        toast.success("Restaurant created successfully");
      }

      router.push("/admin/restaurants");
    } catch (error) {
      console.error("Operation failed:", error);
      toast.error(error.message || "Operation failed");
    }
  };

  const handleCancel = () => {
    router.push("/admin/restaurants");
  };

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this restaurant? This action cannot be undone.",
      )
    ) {
      return;
    }

    try {
      await deleteRestaurant(restaurantId);
      toast.success("Restaurant deleted successfully");
      router.push("/admin/restaurants");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete restaurant");
    }
  };

  if (initialLoading) {
    return (
      <div className="flex-1 bg-[#F9FAFB] min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading restaurant...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-5 border-b border-[#E5E7EB] shrink-0">
        <div className="flex items-center gap-3 mb-1">
          <button
            type="button"
            onClick={() => router.push("/admin/restaurants")}
            className="p-1.5 -ml-1.5 rounded-lg text-[#6B7280] bg-[#F3F4F6] hover:text-[#111827] transition-colors"
            aria-label="Back to restaurants"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-[#111827]">
            {isEdit ? "Edit Restaurant" : "Create Restaurant"}
          </h1>
        </div>
        <p className="text-sm text-[#6B7280] mt-0.5">
          Please provide all of the information below to{" "}
          {isEdit ? "update" : "create"} the restaurant.
        </p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-1">
              {isEdit ? "Edit Restaurant Details" : "Restaurant Details"}
            </h2>
            <p className="text-sm text-[#6B7280]">
              Please provide all of the information below.
            </p>
          </div>

          <div className="space-y-6">
            {/* Restaurant Name */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter restaurant name"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none ${errors.name ? "border-red-500" : "border-[#D1D5DB]"}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* City and Location - Backend Driven */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <CustomDropdown
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={[
                        { value: "", label: "Select city" },
                        { value: "Cape Town", label: "Cape Town" },
                        { value: "Johannesburg", label: "Johannesburg" },
                        { value: "Durban", label: "Durban" },
                        { value: "Pretoria", label: "Pretoria" },
                      ]}
                      placeholder="Select city"
                      required
                      className={errors.city ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.city.message}
                  </p>
                )}
                <p className="mt-1 text-xs text-[#6B7280]">
                  Note: Cities will be fetched from backend API
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <CustomDropdown
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={[
                        { value: "", label: "Select location" },
                        ...(watchedCity
                          ? [
                              { value: "City Centre", label: "City Centre" },
                              { value: "Waterfront", label: "Waterfront" },
                              { value: "Suburbs", label: "Suburbs" },
                            ]
                          : []),
                      ]}
                      placeholder="Select location"
                      required
                      disabled={!watchedCity}
                      className={errors.location ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.location.message}
                  </p>
                )}
                <p className="mt-1 text-xs text-[#6B7280]">
                  Note: Locations will be fetched from backend API based on
                  selected city
                </p>
              </div>
            </div>

            {/* Contact Number and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  {...register("number")}
                  placeholder="Enter contact number"
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none ${errors.number ? "border-red-500" : "border-[#D1D5DB]"}`}
                />
                {errors.number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Price (per person) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#6B7280]">
                    R
                  </span>
                  <input
                    type="number"
                    {...register("price")}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className={`w-full pl-8 pr-4 py-2.5 border rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none ${errors.price ? "border-red-500" : "border-[#D1D5DB]"}`}
                  />
                </div>
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Budget <span className="text-red-500">*</span>
              </label>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <CustomDropdown
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    options={[
                      { value: "", label: "Select budget range" },
                      { value: "R0-R250", label: "R0 - R250" },
                      { value: "R250-R500", label: "R250 - R500" },
                      { value: "R500-R750", label: "R500 - R750" },
                      { value: "R750-R1000", label: "R750 - R1000" },
                      { value: "R1000+", label: "R1000+" },
                    ]}
                    placeholder="Select budget range"
                    required
                    className={errors.budget ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.budget && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.budget.message}
                </p>
              )}
            </div>

            {/* Food Options */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-3">
                Food Options
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedIsMeat}
                    onChange={(e) => setValue("is_meat", e.target.checked)}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Meat</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedIsVegetarian}
                    onChange={(e) =>
                      setValue("is_vegetarian", e.target.checked)
                    }
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Vegetarian</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedIsVegan}
                    onChange={(e) => setValue("is_vegan", e.target.checked)}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Vegan</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedIsFish}
                    onChange={(e) => setValue("is_fish", e.target.checked)}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Fish</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedIsHalal}
                    onChange={(e) => setValue("is_halal", e.target.checked)}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Halal</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watchedIsOthers}
                    onChange={(e) => setValue("is_others", e.target.checked)}
                    className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                  />
                  <span className="text-sm text-[#374151]">Others</span>
                </label>
              </div>
              <p className="mt-2 text-xs text-[#6B7280]">
                Select all food options that apply to this restaurant
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB] mt-8">
            {/* Delete Button (only show in edit mode) */}
            <div>
              {isEdit && (
                <button
                  onClick={handleDelete}
                  className="px-5 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                  disabled={loading}
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
                  Delete Restaurant
                </button>
              )}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCancel}
                className="px-5 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit(onSubmit)}
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
                {isEdit ? "Update Restaurant" : "Create Restaurant"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditRestaurantPage;
