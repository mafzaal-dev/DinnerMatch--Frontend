"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import { api, API_ENDPOINTS } from "../../utils/api";
import {
  debounce,
  formatDisplayValue,
  isValidSearchQuery,
} from "../../utils/searchHelper";
import { CustomDropdown } from "@/components/common";
import { TablePagination } from "@/components/ui/Pagination";
import EmailModal from "./EmailModal";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

const AdminDashboardPage = () => {
  const { user: currentUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUserType, setSelectedUserType] = useState("All Users");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedUpcomingDinner, setSelectedUpcomingDinner] = useState(
    "Any Upcoming Dinner",
  );
  const [selectedStatus, setSelectedStatus] = useState("All Users");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState("0");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showEmailModal, setShowEmailModal] = useState(false);

  // Row action menu (3-dots): which user's menu is open
  const [openMenuUserId, setOpenMenuUserId] = useState(null);
  const [updatingUserId, setUpdatingUserId] = useState(null);
  const menuRef = useRef(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const fetchUsers = useCallback(
    async (query = "") => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        // Pagination
        params.append("index", currentPage);
        params.append("offset", pageSize);

        // Search (min 3 characters)
        if (isValidSearchQuery(query)) {
          params.append("search", query);
        }

        // Filters – match API: membership, city, has_upcoming_booking, status, start_date, end_date
        if (selectedUserType !== "All Users") {
          params.append("membership", selectedUserType.toLowerCase());
        }
        if (selectedCity !== "All Cities") {
          params.append("city", selectedCity);
        }
        if (selectedUpcomingDinner !== "Any Upcoming Dinner") {
          params.append(
            "has_upcoming_booking",
            selectedUpcomingDinner === "Has Booking" ? "true" : "false",
          );
        }
        if (selectedStatus !== "All Users") {
          params.append("status", selectedStatus.toLowerCase());
        }
        params.append("start_date", startDate || "null");
        params.append("end_date", endDate || "null");

        const endpoint = `${API_ENDPOINTS.USER_LIST}?${params.toString()}`;
        const response = await api.get(endpoint);

        // API shape: { success, message, data: { users, total } }
        const userData = response?.data?.users ?? response?.users ?? [];
        const total = response?.data?.total ?? response?.total ?? 0;

        setUsers(userData);
        setTotalUsers(String(total));
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [
      currentPage,
      pageSize,
      selectedUserType,
      selectedCity,
      selectedUpcomingDinner,
      selectedStatus,
      startDate,
      endDate,
    ],
  );

  // Debounced search function
  const debouncedFetchUsers = useCallback(
    debounce((query) => {
      if (isValidSearchQuery(query) || query.length === 0) {
        setCurrentPage(0); // Reset to first page on new search
        fetchUsers(query);
      }
    }, 500),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Refetch when pagination or any filter changes (fetchUsers updates when those deps change)
  useEffect(() => {
    fetchUsers(searchQuery);
  }, [fetchUsers]);

  // Close row menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuUserId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCurrentUser = (rowUser) =>
    (rowUser?.id && currentUser?.id && rowUser.id === currentUser.id) ||
    (rowUser?.email && currentUser?.email && rowUser.email === currentUser.email);

  const handleUpdateUserStatus = async (userId, isActive) => {
    if (!userId) return;
    setUpdatingUserId(userId);
    try {
      await api.put(API_ENDPOINTS.PROFILE_UPDATE, {
        user_id: userId,
        is_active: isActive,
      });
      toast.success(`User set to ${isActive ? "Active" : "Inactive"}`);
      setOpenMenuUserId(null);
      fetchUsers(searchQuery);
    } catch (err) {
      console.error("Error updating user status:", err);
      toast.error(err?.message || "Failed to update status");
    } finally {
      setUpdatingUserId(null);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const isDeleting = value.length < searchQuery.length;
    const wasValidSearch = searchQuery.length >= 3;
    const isValidSearch = value.length >= 3;

    setSearchQuery(value);

    // Trigger search on type (debounced)
    if (isValidSearch) {
      debouncedFetchUsers(value);
    } else if (wasValidSearch && !isValidSearch) {
      // Reset if we just went below the threshold
      debouncedFetchUsers("");
    }
  };

  const hasActiveFilters =
    selectedUserType !== "All Users" ||
    selectedCity !== "All Cities" ||
    selectedUpcomingDinner !== "Any Upcoming Dinner" ||
    selectedStatus !== "All Users" ||
    startDate !== "" ||
    endDate !== "" ||
    searchQuery !== "";

  const handleResetFilters = () => {
    setSelectedUserType("All Users");
    setSelectedCity("All Cities");
    setSelectedUpcomingDinner("Any Upcoming Dinner");
    setSelectedStatus("All Users");
    setStartDate("");
    setEndDate("");
    setSearchQuery("");
    setCurrentPage(0);
    toast.success("Filters reset");
  };

  const handleExportCSV = async () => {
    try {
      // Use axiosInstance directly from api to handle responseType: 'blob'
      // Or if the utility doesn't expose the instance, we might need to handle it in api.js
      // Let's check api.js again.
      const response = await api.get(API_ENDPOINTS.USER_EXPORT_CSV, {
        responseType: "blob",
      });

      // Create a link to download the blob
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `users-export-${new Date().toISOString().split("T")[0]}.csv`,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error exporting CSV:", err);
      alert("Failed to export CSV. Please try again.");
    }
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="bg-white px-8 py-5 border-b border-[#E5E7EB]">
        <h1 className="text-xl font-semibold text-[#111827]">
          User Data Management
        </h1>
        <p className="text-sm text-[#6B7280] mt-0.5">
          Manage customers data and bookings
        </p>
      </div>

      {/* Main Content */}
      <div className="p-3">
        {/* Stats Cards - Removed as per requirements */}

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-3 mb-5">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Search by name, email or mobile (min 3 characters)"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 px-4 py-2.5 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
            />
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full sm:w-auto px-4 py-2.5 bg-white border border-[#E5E7EB] text-[#6B7280] rounded-lg text-sm font-medium hover:bg-[#FEF2F2] hover:border-[#FCA5A5] hover:text-[#B91C1C] transition-colors flex items-center gap-2 justify-center whitespace-nowrap"
                title="Reset all filters"
              >
                <X className="w-4 h-4" />
                Reset filters
              </button>
            )}
            <button
              onClick={handleExportCSV}
              className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#D1D5DB] text-[#374151] rounded-lg text-sm font-medium hover:bg-[#F9FAFB] transition-colors flex items-center gap-2 justify-center whitespace-nowrap"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export CSV
            </button>
          </div>

          {/* Filter Dropdowns - 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#6B7280]">
                Membership
              </label>
              <CustomDropdown
                value={selectedUserType}
                onChange={(e) => {
                  setSelectedUserType(e.target.value);
                  setCurrentPage(0);
                }}
                options={[
                  { value: "All Users", label: "All Users" },
                  { value: "Subscribed", label: "Subscribed" },
                  { value: "Free", label: "Free" },
                ]}
                placeholder="All Users"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#6B7280]">City</label>
              <CustomDropdown
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setCurrentPage(0);
                }}
                options={[
                  { value: "All Cities", label: "All Cities" },
                  { value: "Cape Town", label: "Cape Town" },
                  { value: "Johannesburg", label: "Johannesburg" },
                ]}
                placeholder="All Cities"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#6B7280]">
                Upcoming dinner
              </label>
              <CustomDropdown
                value={selectedUpcomingDinner}
                onChange={(e) => {
                  setSelectedUpcomingDinner(e.target.value);
                  setCurrentPage(0);
                }}
                options={[
                  { value: "Any Upcoming Dinner", label: "Any Upcoming Dinner" },
                  { value: "Has Booking", label: "Has Booking" },
                  { value: "No Booking", label: "No Booking" },
                ]}
                placeholder="Any Upcoming Dinner"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#6B7280]">Status</label>
              <CustomDropdown
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setCurrentPage(0);
                }}
                options={[
                  { value: "All Users", label: "All Users" },
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
                placeholder="All Users"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#6B7280]">
                Start date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setCurrentPage(0);
                }}
                className="px-3 py-2 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#6B7280]">
                End date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setCurrentPage(0);
                }}
                className="px-3 py-2 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              />
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-[#111827]">
                Users ({totalUsers})
              </h2>
            </div>
            <button
              onClick={() => setShowEmailModal(true)}
              className="px-5 py-2.5 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors flex items-center gap-2 whitespace-nowrap"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email These Users
            </button>
          </div>

          <div className="overflow-x-auto min-h-[400px]">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Mobile
                  </th>
                  {/* <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    City ID
                  </th> */}
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Tickets
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Membership
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Next Dinner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap">
                    Past Dinner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#374151] uppercase tracking-wide whitespace-nowrap"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F3F4F6]">
                {loading ? (
                  <tr>
                    <td
                      colSpan="10"
                      className="px-4 py-8 text-center text-sm text-[#6B7280]"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-[#F97316]"
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
                        Loading users...
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td
                      colSpan="10"
                      className="px-4 py-8 text-center text-sm text-red-500"
                    >
                      {error}
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="10"
                      className="px-4 py-8 text-center text-sm text-[#6B7280]"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id || user.email}
                      className="hover:bg-[#F9FAFB] transition-colors"
                    >
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#111827] font-medium">
                        {formatDisplayValue(
                          user.name ||
                            `${user.first_name || ""} ${user.last_name || ""}`.trim(),
                        )}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(user.email)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(
                          user.mobile ||
                            user.phone_number ||
                            user.profile?.phone_number,
                        )}
                      </td>
                      {/* <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(user.city || user.profile?.city_id)}
                      </td> */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(user.tickets)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(user.membership)}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm">
                        {user.is_active === true ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D1FAE5] text-[#065F46]">
                            Active
                          </span>
                        ) : user.is_active === false ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FEE2E2] text-[#991B1B]">
                            Inactive
                          </span>
                        ) : (
                          <span className="text-[#6B7280]">
                            {formatDisplayValue(user.status) ?? "—"}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(
                          user.nextDinner || user.next_dinner || "Not Booked",
                        )}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280]">
                        {formatDisplayValue(
                          user.pastDinner || user.past_dinner || "Not Booked",
                        )}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap text-sm text-[#6B7280] relative">
                        <div
                          className="relative inline-block"
                          ref={
                            openMenuUserId === (user.id || user.email)
                              ? menuRef
                              : null
                          }
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMenuUserId((prev) =>
                                prev === (user.id || user.email)
                                  ? null
                                  : user.id || user.email,
                              )
                            }
                            disabled={
                              updatingUserId === (user.id || user.email)
                            }
                            className="p-1 hover:bg-[#F3F4F6] rounded transition-colors disabled:opacity-60"
                            aria-label="User actions"
                          >
                            <svg
                              className="w-5 h-5 text-[#6B7280]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                          </button>
                          {openMenuUserId === (user.id || user.email) && (
                            <div className="absolute right-0 top-full mt-1 z-50 min-w-[140px] py-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg">
                              <button
                                type="button"
                                onClick={() =>
                                  handleUpdateUserStatus(
                                    user.id || user.email,
                                    true,
                                  )
                                }
                                disabled={
                                  updatingUserId === (user.id || user.email) ||
                                  user.is_active === true ||
                                  isCurrentUser(user)
                                }
                                title={isCurrentUser(user) ? "You cannot change your own status" : undefined}
                                className="w-full px-3 py-2 text-left text-sm text-[#111827] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                              >
                                {user.is_active === true && (
                                  <span className="text-[#10B981]">✓</span>
                                )}
                                Set Active
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleUpdateUserStatus(
                                    user.id || user.email,
                                    false,
                                  )
                                }
                                disabled={
                                  updatingUserId === (user.id || user.email) ||
                                  user.is_active === false ||
                                  isCurrentUser(user)
                                }
                                title={isCurrentUser(user) ? "You cannot change your own status" : undefined}
                                className="w-full px-3 py-2 text-left text-sm text-[#111827] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                              >
                                {user.is_active === false && (
                                  <span className="text-[#10B981]">✓</span>
                                )}
                                Set Inactive
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && (
            <TablePagination
              currentPage={currentPage}
              total={parseInt(totalUsers) || 0}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
              pageSizeOptions={[
                { value: 10, label: "10 per page" },
                { value: 25, label: "25 per page" },
                { value: 50, label: "50 per page" },
                { value: 100, label: "100 per page" },
              ]}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setCurrentPage(0);
              }}
            />
          )}
        </div>
      </div>

      {showEmailModal && (
        <EmailModal
          onClose={() => setShowEmailModal(false)}
          contextText="All Users"
          recipientCount={parseInt(totalUsers)}
        />
      )}
    </div>
  );
};

export default AdminDashboardPage;
