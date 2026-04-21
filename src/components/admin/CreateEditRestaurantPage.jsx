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
import { api, API_ENDPOINTS } from "@/utils/api";
import { formatSAPhone } from "@/utils/format";

function resolveCityId(cityValue, cityList) {
  if (!cityValue || !cityList?.length) return "";
  const byId = cityList.find((c) => c.id === cityValue);
  if (byId) return byId.id;
  const byName = cityList.find((c) => c.name === cityValue);
  return byName?.id ?? "";
}

function resolveAreaId(areaValue, cityList, cityId) {
  if (!areaValue || !cityId || !cityList?.length) return "";
  const city = cityList.find((c) => c.id === cityId);
  if (!city?.area?.length) return "";
  const byId = city.area.find((a) => a.id === areaValue);
  if (byId) return byId.id;
  const byName = city.area.find((a) => a.name === areaValue);
  return byName?.id ?? "";
}

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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    getValues,
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
      budget_label: "",
      areas: [],
      is_meat: false,
      is_vegetarian: false,
      is_vegan: false,
      is_fish: false,
      is_halal: false,
      is_others: false,
    },
  });

  const [cityAreaList, setCityAreaList] = useState([]);
  const [cityAreaLoading, setCityAreaLoading] = useState(true);

  const loadCityArea = async () => {
    const res = await api.get(API_ENDPOINTS.GET_CITY_AREA);
    const raw = Array.isArray(res?.data)
      ? res.data
      : Array.isArray(res)
        ? res
        : [];
    setCityAreaList(raw);
    return raw;
  };

  useEffect(() => {
    setCityAreaLoading(true);
    loadCityArea()
      .catch(() => setCityAreaList([]))
      .finally(() => setCityAreaLoading(false));
  }, []);

  const watchedCityId = watch("city");
  const selectedCityData = cityAreaList.find(
    (c) => String(c.id) === String(watchedCityId),
  );
  const areaOptions = [
    { value: "", label: "Select location" },
    ...(selectedCityData?.area
      ?.map((a) => ({
        value: a.id != null && a.id !== "" ? String(a.id) : "",
        label: a.name ?? "",
      }))
      .filter((o) => o.value !== "" && o.label !== "") ?? []),
  ];
  const watchedIsMeat = watch("is_meat");
  const watchedIsVegetarian = watch("is_vegetarian");
  const watchedIsVegan = watch("is_vegan");
  const watchedIsFish = watch("is_fish");
  const watchedIsHalal = watch("is_halal");
  const watchedIsOthers = watch("is_others");

  useEffect(() => {
    if (isEdit && restaurantId) {
      fetchRestaurant();
    }
  }, [isEdit, restaurantId]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchRestaurant = async () => {
    try {
      setInitialLoading(true);
      let list = cityAreaList;
      if (!list.length) {
        list = await loadCityArea();
      }

      const restaurant = await getRestaurant(restaurantId);

      if (restaurant) {
        const cityId = resolveCityId(restaurant.city, list);
        const areaId = resolveAreaId(restaurant.location, list, cityId);

        setValue("name", restaurant.name || "");
        setValue("city", cityId ? String(cityId) : "");
        setValue("location", areaId ? String(areaId) : "");
        setValue(
          "number",
          restaurant.number
            ? formatSAPhone(String(restaurant.number))
            : "",
        );
        setValue("price", restaurant.price != null && restaurant.price !== "" ? restaurant.price : "");
        setValue("budget", restaurant.budget != null ? String(restaurant.budget) : "");
        setValue(
          "budget_label",
          restaurant.budget_label != null ? String(restaurant.budget_label) : "",
        );
        // Restaurant.areas can come back either as an array of UUID strings
        // or an array of Area objects (depending on the serializer). Normalise
        // to an array of ids for the multi-select.
        const rawAreas = Array.isArray(restaurant.areas) ? restaurant.areas : [];
        const areaIds = rawAreas
          .map((a) => (typeof a === 'string' ? a : a?.id))
          .filter(Boolean);
        setValue("areas", areaIds);
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
      const cityObj = cityAreaList.find(
        (c) => String(c.id) === String(data.city),
      );
      const areaObj = cityObj?.area?.find(
        (a) => String(a.id) === String(data.location),
      );

      if (!cityObj?.name) {
        toast.error("Please select a valid city");
        return;
      }
      if (!areaObj?.name) {
        toast.error("Please select a valid area / location");
        return;
      }

      const payload = {
        name: data.name,
        city: cityObj.name,
        location: areaObj.name,
        number: data.number,
        price: data.price !== "" && data.price != null && !isNaN(Number(data.price)) ? parseFloat(data.price).toFixed(2) : null,
        budget: data.budget,
        budget_label: data.budget_label || null,
        areas: Array.isArray(data.areas) ? data.areas : [],
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

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteRestaurant(restaurantId);
      toast.success("Restaurant deleted successfully");
      setShowDeleteConfirm(false);
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
                      onChange={(e) => {
                        const v = e?.target?.value;
                        field.onChange(
                          v != null && v !== "" ? String(v) : "",
                        );
                        setValue("location", "", { shouldValidate: false });
                      }}
                      onBlur={field.onBlur}
                      options={[
                        { value: "", label: "Select city" },
                        ...cityAreaList.map((c) => ({
                          value: c.id != null ? String(c.id) : "",
                          label: c.name ?? "",
                        })),
                      ]}
                      placeholder={
                        cityAreaLoading ? "Loading cities…" : "Select city"
                      }
                      required
                      disabled={cityAreaLoading}
                      className={errors.city ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <Controller
                  key={watchedCityId || "no-city"}
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <CustomDropdown
                      value={field.value}
                      onChange={(e) => {
                        const v = e?.target?.value;
                        field.onChange(
                          v != null && v !== "" ? String(v) : "",
                        );
                      }}
                      onBlur={field.onBlur}
                      options={areaOptions}
                      placeholder={
                        !watchedCityId
                          ? "Select a city first"
                          : areaOptions.length <= 1
                            ? "No areas for this city"
                            : "Select location"
                      }
                      required
                      disabled={
                        cityAreaLoading ||
                        !watchedCityId ||
                        areaOptions.length <= 1
                      }
                      className={errors.location ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.location.message}
                  </p>
                )}
                {!watchedCityId ? (
                  <p className="mt-1 text-xs font-medium text-amber-700">
                    Select a city above to load locations for that city.
                  </p>
                ) : areaOptions.length <= 1 ? (
                  <p className="mt-1 text-xs text-[#6B7280]">
                    No areas are configured for this city in the directory yet.
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-[#6B7280]">
                    Area or neighbourhood within the selected city.
                  </p>
                )}
              </div>
            </div>

            {/* Contact Number and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="number"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={field.value}
                      onChange={(e) =>
                        field.onChange(formatSAPhone(e.target.value))
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      maxLength={17}
                      placeholder="e.g. 082 123 4567 or +27 82 123 4567"
                      className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-none ${errors.number ? "border-red-500" : "border-[#D1D5DB]"}`}
                    />
                  )}
                />
                {errors.number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Price (per person)
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
                      { value: "$ - Budget Friendly", label: "$ - Budget Friendly" },
                      { value: "$$ - Moderate", label: "$$ - Moderate" },
                      { value: "$$$ - Premium", label: "$$$ - Premium" },
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

            {/* Budget Label (grouping engine) */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Budget Label
              </label>
              <Controller
                name="budget_label"
                control={control}
                render={({ field }) => (
                  <CustomDropdown
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    options={[
                      { value: "", label: "Not set" },
                      { value: "$", label: "$" },
                      { value: "$$", label: "$$" },
                      { value: "$$$", label: "$$$" },
                    ]}
                    placeholder="Not set"
                  />
                )}
              />
              <p className="mt-1 text-xs text-[#6B7280]">
                Used by the grouping engine to match group spend tiers.
              </p>
            </div>

            {/* Areas (multi-select, grouping engine) */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Areas Served
              </label>
              <Controller
                name="areas"
                control={control}
                render={({ field }) => {
                  const allAreas = (cityAreaList || []).flatMap((c) =>
                    (c.area || []).map((a) => ({
                      id: a.id,
                      name: a.name,
                      city: c.name,
                    })),
                  );
                  const selected = Array.isArray(field.value) ? field.value : [];
                  const toggle = (id) => {
                    if (selected.includes(id)) {
                      field.onChange(selected.filter((x) => x !== id));
                    } else {
                      field.onChange([...selected, id]);
                    }
                  };
                  return (
                    <div
                      className={`border rounded-lg px-3 py-2 max-h-52 overflow-y-auto bg-white ${cityAreaLoading ? "opacity-60" : ""}`}
                    >
                      {cityAreaLoading ? (
                        <p className="text-sm text-[#6B7280]">Loading areas…</p>
                      ) : allAreas.length === 0 ? (
                        <p className="text-sm text-[#6B7280]">No areas available.</p>
                      ) : (
                        <ul className="space-y-1">
                          {allAreas.map((a) => (
                            <li key={a.id}>
                              <label className="flex items-center gap-2 cursor-pointer text-sm text-[#374151] py-1">
                                <input
                                  type="checkbox"
                                  checked={selected.includes(a.id)}
                                  onChange={() => toggle(a.id)}
                                  className="w-4 h-4 text-[#F97316] border-[#D1D5DB] rounded focus:ring-[#F97316]"
                                />
                                <span>
                                  {a.name}
                                  <span className="text-[#9CA3AF] text-xs ml-1">
                                    ({a.city})
                                  </span>
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }}
              />
              <p className="mt-1 text-xs text-[#6B7280]">
                Select every area this restaurant is willing to seat groups from. Used by the grouping engine for restaurant assignment.
              </p>
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
                  type="button"
                  onClick={handleDeleteClick}
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

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] text-center mb-2">Delete Restaurant</h3>
            <p className="text-sm text-[#6B7280] text-center mb-6">
              Are you sure you want to delete &quot;{getValues("name") || "this restaurant"}&quot;? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
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

export default CreateEditRestaurantPage;
