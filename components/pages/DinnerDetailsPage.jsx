"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const DinnerDetailsPage = ({
  dinner = {
    city: "",
    isoDate: "",
    date: "",
    time: "",
    restaurant: "",
    address: "",
    current_user_attendance: null,
    group: {
      languages: [],
      nationalities: {},
      occupations: {},
      attendance_stats: {
        total: 0,
        there: 0,
        late: 0,
        cant_make_it: 0,
        attended: 0,
        no_response: 0
      }
    },
  },
  subscriptionData,
  onManageSubscription,
  onContactSupport,
  onMyAccount,
  onRSVP,
  onCopyAddress,
  upcomingDates = [],
  onReschedule,
}) => {
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [rescheduleModalOpen, setRescheduleModalOpen] = useState(false);
  const [selectedRescheduleDinner, setSelectedRescheduleDinner] = useState(null);

  useEffect(() => {
    if (dinner?.current_user_attendance === 'there') {
      setRsvpStatus("I'll be There");
    } else if (dinner?.current_user_attendance === 'late') {
      setRsvpStatus("I'll be Late");
    } else if (dinner?.current_user_attendance === 'cant_make_it') {
      setRsvpStatus("Can't Make It");
    } else {
      setRsvpStatus(null);
    }
  }, [dinner?.current_user_attendance]);

  const hasActiveSubscription = subscriptionData && subscriptionData.length > 0;
  const activeSubscription = hasActiveSubscription ? subscriptionData[0] : null;
  const isAnnualPass = activeSubscription?.plan?.name
    ?.toLowerCase()
    .includes("annual");
  const isMonthlyPass = activeSubscription?.plan?.name
    ?.toLowerCase()
    .includes("monthly");

  const memberSinceDate = activeSubscription
    ? new Date(activeSubscription.start_date || activeSubscription.created_at)
        .toLocaleDateString("en-US", { month: "short", year: "numeric" })
        .toUpperCase()
    : "NOV 2025";

  const renewalDate = activeSubscription
    ? new Date(activeSubscription.end_date)
        .toLocaleDateString("en-US", { month: "short", year: "numeric" })
        .toUpperCase()
    : "NOV 2025";

  const subscriptionDisplay = {
    memberSince: memberSinceDate,
    type: activeSubscription?.plan?.name || "Monthly Member",
    status: activeSubscription?.plan?.is_active ? "Active" : "Inactive",
    unlimitedDinners: true,
    renewalDate: renewalDate,
  };

  const handleRSVP = (status) => {
    setRsvpStatus(status);
    if (onRSVP) {
      onRSVP(status);
    }
  };

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(dinner.address);
      // Optional: Add toast notification if toast is available in this component context
      // toast.success("Address copied to clipboard");
    }
    if (onCopyAddress) {
      onCopyAddress(dinner.address);
    }
  };

  const handleRescheduleClick = (dinnerItem) => {
    setSelectedRescheduleDinner(dinnerItem);
    setRescheduleModalOpen(true);
  };

  const confirmReschedule = () => {
    if (selectedRescheduleDinner && onReschedule) {
      onReschedule(selectedRescheduleDinner.id);
    }
    setRescheduleModalOpen(false);
    setSelectedRescheduleDinner(null);
  };

  // Determine if we should show details based on status
  // Also check if dinner actually has data (id)
  const hasDetails =
    dinner?.id &&
    (dinner.status === "Published" ||
    (dinner.status !== "Draft" && dinner.status !== "Pending"));

  const hasJoinedDinner = !!dinner?.id;

  const getDynamicDates = () => {
    if (!dinner?.isoDate && !dinner?.date) {
      return {
        groupReveal: "Monday, December 8, 7:00 PM",
        restaurantReveal: "Tuesday, December 9, 10:00 AM",
        dinnerExperience: "Tuesday, December 9, 7:00 PM"
      };
    }

    let dinnerDate;
    if (dinner.isoDate) {
      dinnerDate = new Date(dinner.isoDate);
    } else {
      const dateStr = `${dinner.date} ${dinner.time}`;
      dinnerDate = new Date(dateStr);
    }

    if (isNaN(dinnerDate.getTime())) {
      return {
        groupReveal: "Monday, December 8, 7:00 PM",
        restaurantReveal: "Tuesday, December 9, 10:00 AM",
        dinnerExperience: "Tuesday, December 9, 7:00 PM"
      };
    }
    
    const groupDate = new Date(dinnerDate);
    groupDate.setDate(dinnerDate.getDate() - 1);
    groupDate.setHours(19, 0, 0, 0);

    const restaurantDate = new Date(dinnerDate);
    restaurantDate.setHours(10, 0, 0, 0);

    const experienceDate = dinnerDate;

    const options = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit' 
    };
    
    return {
      groupReveal: groupDate.toLocaleString('en-US', options),
      restaurantReveal: restaurantDate.toLocaleString('en-US', options),
      dinnerExperience: experienceDate.toLocaleString('en-US', options)
    };
  };

  const { groupReveal, restaurantReveal, dinnerExperience } = getDynamicDates();

  const getDinnerDateObj = () => {
    if (dinner?.isoDate) return new Date(dinner.isoDate);
    if (dinner?.date && dinner?.time) return new Date(`${dinner.date} ${dinner.time}`);
    return null;
  };

  const dinnerDateObj = useMemo(() => getDinnerDateObj(), [dinner]);

  const isDinnerToday = useMemo(() => {
    if (!dinnerDateObj || isNaN(dinnerDateObj.getTime())) return false;
    const now = new Date();
    // Normalize to start of day for comparison
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dinnerStart = new Date(dinnerDateObj.getFullYear(), dinnerDateObj.getMonth(), dinnerDateObj.getDate());
    
    return todayStart.getTime() === dinnerStart.getTime();
  }, [dinnerDateObj]);

  const unlockTime = dinnerDateObj && !isNaN(dinnerDateObj.getTime())
    ? dinnerDateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : "7:00 PM";

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div
        className="max-w-154 mx-auto"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between ">
          <h1 className="text-[32px] text-center font-bold text-[#F5F5F5]">
            DinnersMatch
          </h1>
          {onMyAccount && (
            <Link
              href="/account"
              className="text-[#F5F5F5]  hover:text-[#FFAA55] transition-colors text-sm"
            >
              My Account
            </Link>
          )}
        </div>

        {/* DinnersMatch Pass Section - Show only if Annual Pass */}
        {isAnnualPass && (
          <div
            className="relative rounded-lg p-6 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(26, 26, 45, 1) 0%, rgba(15, 20, 25, 1) 100%)",
              boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* Top golden gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244, 208, 63, 0) 2%, rgba(244, 208, 63, 1) 50%, rgba(244, 208, 63, 0) 98%)",
              }}
            ></div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <p className="text-[#E3BF3B] text-xs uppercase tracking-wide">
                    MEMBER SINCE {subscriptionDisplay.memberSince}
                  </p>
                  <h2 className="text-[#E3BF3B] text-2xl font-bold">
                    DinnersMatch Pass
                  </h2>
                  <p className="text-[#F5F5F5] font-semibold text-lg">
                    {subscriptionDisplay.type}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#162B2A] p-3 rounded-full">
                  <div className="size-2 bg-[#41B36E]  rounded-full"></div>
                  <span className="text-[#41B359] text-sm font-semibold">
                    {subscriptionDisplay.status}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#E3BF3B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#F5F5F5] text-base">
                    Unlimited dinners this month
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#E3BF3B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#F5F5F5] text-base">
                    Renews: {subscriptionDisplay.renewalDate}
                  </span>
                </div>
              </div>

              {onManageSubscription && (
                <button
                  onClick={onManageSubscription}
                  className="w-full bg-[#272727] border border-[#5B504C] rounded-lg py-4 px-2
                 flex items-center justify-center gap-2 hover:bg-[#2F2F2F] transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-[#E3BF3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span className="text-[#E3BF3B] text-sm font-medium">
                    Manage Subscription
                  </span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Dinner Details Card */}
        {/* Only show if user has joined a dinner */}
        {hasJoinedDinner && (!hasActiveSubscription || isMonthlyPass) && (
          <div
            className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col gap-6"
            style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
          >            

            {/* Header */}
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-[#F5F5F5]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4V20M16 4V20M4 10H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 4V20M7 4V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-[#F5F5F5] text-lg font-bold">Your Dinner</h2>
            </div>

            {/* Location Section */}
            <div className="border-b border-[#2F3A51] pb-6 flex justify-between items-start">
              <div className="flex flex-col gap-3">
                <p className="text-[#E0E0E0] text-sm">Location</p>
                <p className="text-[#F5F5F5] text-lg font-semibold">
                  {dinner.city}
                </p>
              </div>
            </div>

            {/* Date Section */}
            <div className="flex flex-col gap-3">
              <p className="text-[#E0E0E0] text-sm">Date</p>
              <p className="text-[#F5F5F5] text-lg font-semibold">
                {dinner.date}, {dinner.time}
              </p>
            </div>

            {!hasDetails && (
              <p className="text-[#77777B] text-sm text-center bg-[#1A1A1E] p-2 rounded">
                Details pending or to be announced.
              </p>
            )}
            <button className="w-full bg-[#FFAA55] text-[#212121] font-bold py-3 rounded-lg hover:bg-[#FF9955] transition-colors">
                Manage Subscription
            </button>
          </div>
        )}

        {/* Empty State for Not Joined */}
        {!hasJoinedDinner && !isAnnualPass && (
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-8 text-center flex flex-col gap-4">
            {!hasActiveSubscription && (
              <div className="bg-[#CA8A04] rounded-lg h-10 flex items-center px-3 gap-2">
                <svg
                  className="w-6 h-6 text-[#D9D9D9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-[#F5F5F5] font-normal text-sm">
                  Payment incomplete - please finish checkout
                </span>
              </div>
            )}
            <h3 className="mt-5 text-[#F5F5F5] text-xl font-bold">
              You haven't joined a dinner yet
            </h3>
            <p className="mb-5 text-[#BDBDBD]">
              Select an upcoming dinner below to join the fun!
            </p>
            {!hasActiveSubscription && (
              <button 
                onClick={onManageSubscription}
                className="w-full bg-[#FFAA55] text-[#212121] font-bold py-3 rounded-lg hover:bg-[#FF9955] transition-colors"
              >
                Purchase Your Plan
              </button>
            )}
          </div>
        )}

        {/* Your Next Dinner Section - Only show for Annual Pass */}
        {isAnnualPass && hasJoinedDinner && (
          <div
            className="bg-[#0F0F14] border border-[#191A1D] rounded-lg p-6"
            style={{
              boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h2 className="text-[#F5F5F5] text-lg font-semibold">
              Your Next Dinner
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {/* City */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#E3BF3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div
                  className="flex-1"
                  style={{ display: "flex", flexDirection: "column", gap: "" }}
                >
                  <p className="text-[#77777B] text-sm uppercase">CITY</p>
                  <p className="text-[#F5F5F5] text-lg font-semibold">
                    {dinner.city}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#E3BF3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div
                  className="flex-1"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p className="text-[#77777B] text-sm uppercase">DATE</p>
                  <p className="text-[#F5F5F5] text-lg font-semibold">
                    {dinner.date}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#E3BF3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div
                  className="flex-1"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p className="text-[#77777B] text-sm uppercase">TIME</p>
                  <p className="text-[#F5F5F5] text-lg font-semibold">
                    {dinner.time}
                  </p>
                </div>
              </div>

              {/* Restaurant */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#E3BF3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div
                  className="flex-1"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p className="text-[#77777B] text-sm uppercase">RESTAURANT</p>
                  <p
                    className={`text-lg font-semibold ${!hasDetails ? "text-[#77777B] italic" : "text-[#F5F5F5]"}`}
                  >
                    {hasDetails ? dinner.restaurant : "To be announced"}
                  </p>
                  {hasDetails && (
                    <p className="text-[#BDBDBD] text-sm">{dinner.address}</p>
                  )}
                </div>
                {hasDetails && dinner.restaurant !== "To be announced" && onCopyAddress && (
                  <button
                    onClick={handleCopyAddress}
                    className="bg-[#2A2829] border border-[#5B504C] rounded-lg px-2 py-2 flex items-center gap-1 hover:bg-[#333] transition-colors flex-shrink-0 h-10"
                  >
                    <svg
                      className="w-6 h-6 text-[#E3BF3B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-[#E3BF3B] text-xs whitespace-nowrap">
                      Copy Address
                    </span>
                  </button>
                )}
              </div>

              {/* Group */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A2829] rounded flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#E3BF3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div
                  className="flex-1"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p className="text-[#77777B] text-sm uppercase">Group</p>
                  <p
                    className={`text-lg font-semibold ${!hasDetails ? "text-[#77777B] italic" : "text-[#F5F5F5]"}`}
                  >
                    {dinner.group
                      ? "A little sneak peak of your group:"
                      : "Coming soon"}
                  </p>
                </div>
              </div>
            </div>

            {hasDetails && (
              <>
                {/* Divider */}
                <div className="border-t border-[#1B1C1F]"></div>

                {/* Group Details */}
                {dinner.group.languages?.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="text-[#77777B] text-sm uppercase">
                      LANGUAGES
                    </p>
                    <p className="text-[#F5F5F5] text-base">
                      {dinner.group.languages.join(", ")}
                    </p>
                  </div>
                )}

                {Object.keys(dinner.group.nationalities || {}).length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="text-[#77777B] text-sm uppercase">
                      NATIONALITIES
                    </p>
                    <p className="text-[#F5F5F5] text-base">
                      {Object.entries(dinner.group.nationalities)
                        .map(([key, value]) => `${key} ${value}%`)
                        .join(" - ")}
                    </p>
                  </div>
                )}

                {Object.keys(dinner.group.occupations || {}).length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="text-[#77777B] text-sm uppercase">
                      OCCUPATIONS
                    </p>
                    <p className="text-[#F5F5F5] text-base">
                      {Object.entries(dinner.group.occupations)
                        .map(([key, value]) => `${key} ${value}%`)
                        .join(" - ")}
                    </p>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-[#1B1C1F]"></div>

                {/* RSVP Section */}
                <h3 className="text-[#F5F5F5] text-lg font-bold">
                  RSPV FOR TONIGHT
                </h3>

                {isDinnerToday ? (
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleRSVP("I'll be There")}
                      className={`flex-1 rounded-lg py-4 px-2 flex items-center text-sm font-semibold justify-center transition-colors ${
                        rsvpStatus === "I'll be There"
                          ? "bg-[#FFAA55] border-[#FFAA55] text-white"
                          : "bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]"
                      }`}
                    >
                      <span className="text-sm font-medium">I'll be There</span>
                    </button>
                    <button
                      onClick={() => handleRSVP("I'll be Late")}
                      className={`flex-1 rounded-lg py-4 px-2 text-sm font-semibold  flex items-center justify-center transition-colors ${
                        rsvpStatus === "I'll be Late"
                          ? "bg-[#FFAA55] border-[#FFAA55] text-white"
                          : "bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]"
                      }`}
                    >
                      <span className="text-sm font-medium">I'll be Late</span>
                    </button>
                    <button
                      onClick={() => handleRSVP("Can't Make It")}
                      className={`flex-1 rounded-lg py-4 px-2 text-sm font-semibold  flex items-center justify-center transition-colors ${
                        rsvpStatus === "Can't Make It"
                          ? "bg-[#FFAA55] border-[#FFAA55] text-white"
                          : "bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]"
                      }`}
                    >
                      <span className="text-sm font-medium">Can't Make It</span>
                    </button>
                  </div>
                ) : (
                  <div className="bg-[#1A1A1E] border border-[#2F3A51] rounded-lg p-4 text-center">
                    <p className="text-[#77777B] text-sm">
                      RSVP will open on the day of the dinner.
                    </p>
                  </div>
                )}

                {/* Group Status */}
                {isDinnerToday ? (
                  <div
                    className="bg-[#080810] rounded-lg p-6"
                    style={{
                      boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <p className="text-[#757575] text-sm uppercase">
                      GROUP STATUS (ANONYMOUS)
                    </p>
                    <p className="text-[#E3BF3B] text-sm">
                      You:{" "}
                      <span className="text-white">
                        {rsvpStatus || "Not Responded"}
                      </span>
                    </p>
                    <p className="text-[#757575] text-sm">
                      {dinner.group?.attendance_stats
                        ? `${(dinner.group.attendance_stats.there || 0) + (dinner.group.attendance_stats.attended || 0)} attending, ${dinner.group.attendance_stats.late || 0} late, ${dinner.group.attendance_stats.no_response || 0} not responded`
                        : "Loading stats..."}
                    </p>
                  </div>
                ) : null}

                {/* TableTalk Unlock - reuse isDinnerToday logic if intent is 24h, but logic said "within 24h" previously. 
                    If TableTalk should unlock strictly "on the day", use isDinnerToday. 
                    If keeping "within 24h", we need to restore showTableTalk logic or derive it from isDinnerToday if acceptable.
                    Assuming TableTalk is also day-of feature based on "Unlocks at 7:00 PM" context typically implies same day.
                    Let's restore showTableTalk logic separately to be safe or use isDinnerToday if that covers it.
                    I will restore showTableTalk as a separate memo for clarity if needed, or just use isDinnerToday if that's the "day of" requirement.
                    Re-adding showTableTalk based on previous logic for now to avoid breaking that specific feature if it differs.
                */}
                {isDinnerToday && (
                  <div
                    className="bg-[#1A1711] border border-[#534A3E] rounded-lg p-4"
                    style={{
                      boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p className="text-[#FFAA55] text-sm font-semibold">
                      TableTalk Unlocks at {unlockTime}
                    </p>
                  </div>
                )}
              </>
            )}

            {!hasDetails && (
              <div className="mt-4">
                <p className="text-[#77777B] text-sm text-center">
                  Your full dinner details will be emailed to you.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Your Access Section - Only show for Annual Pass */}
        {isAnnualPass && (
          <div
            className="bg-[#0F0F14] border border-[#191A1D] rounded-lg p-6"
            style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
          >
            <h2 className="text-[#F5F5F5] text-lg font-semibold mb-6">
              Your Access
            </h2>
            <div className="">
              <p className="text-[#F5F5F5] text-base font-semibold">
                Unlimited dinners this month.
              </p>
              <p className="text-[#77777B] text-base">
                Renewal on {subscriptionDisplay.renewalDate}.
              </p>
            </div>
          </div>
        )}

        {/* Monthly Pass or No Subscription Specific Sections */}
        {hasJoinedDinner && (isMonthlyPass || !hasActiveSubscription) && (
          <>
            {/* Your Group */}
            <div
              className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col gap-6"
              style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="bg-[#FFAA55] text-[#212121] font-bold px-3 h-10 rounded inline-flex items-center gap-2 w-fit">
                <svg
                  className="w-6 h-6 text-[#212121]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Your Group
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#E0E0E0] text-sm">
                  Find out more about your group on
                </p>
                <p className="text-[#F5F5F5] font-bold text-lg">
                  {groupReveal}
                </p>
              </div>
            </div>

            {/* Your Restaurant */}
            <div
              className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col gap-6"
              style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="bg-[#FFAA55] text-[#212121] font-bold px-3 h-10 rounded inline-flex items-center gap-2 w-fit">
                <svg
                  className="w-6 h-6 text-[#212121]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Your Restaurant
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#E0E0E0] text-sm">
                  Get your dinner location on
                </p>
                <p className="text-[#F5F5F5] font-bold text-lg">
                  {restaurantReveal}
                </p>
              </div>
            </div>

            {/* Your Dinner Experience */}
            <div
              className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col gap-6"
              style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="bg-[#FFAA55] text-[#212121] font-bold px-3 h-10 rounded inline-flex items-center gap-2 w-fit">
                <svg
                  className="w-6 h-6 text-[#212121]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Your Dinner Experience
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#E0E0E0] text-sm">
                  Unlock the experience of your dinner
                </p>
                <p className="text-[#F5F5F5] font-bold text-lg">
                  {dinnerExperience}
                </p>
              </div>
            </div>
          </>
        )}

        {upcomingDates && upcomingDates.length > 0 && (
          <div>
            <h2 className="text-[#F5F5F5] text-lg font-bold mb-4">
              Dinner Dates
            </h2>
            <div className="space-y-4">
              {upcomingDates.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    item.status === "Selected"
                      ? "bg-[#1A1711] border border-[#534A3E]"
                      : "bg-[#0C0C11] border border-[#141418]"
                  }`}
                  style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
                >
                  <div>
                    <p className="text-[#F5F5F5] text-lg font-semibold mb-1">
                      {item.date}
                    </p>
                    <p className="text-[#77777B] text-sm">{item.city}</p>
                  </div>

                  {/* Reschedule / Join Button */}
                  {hasJoinedDinner ? (
                    <button
                      onClick={() => handleRescheduleClick(item)}
                      className="bg-[#2A2829] text-[#FFAA55] border border-[#5B504C] px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#333] transition-colors whitespace-nowrap"
                    >
                      Reschedule
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRescheduleClick(item)} // Re-use same handler/modal or different text
                      className="bg-[#FFAA55] text-[#212121] px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#FF9955] transition-colors whitespace-nowrap"
                    >
                      Join This Dinner
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {onContactSupport && (
            <button
              onClick={onContactSupport}
              className="w-full bg-[#121212] border border-[#242428] rounded-lg p-6 flex items-center justify-center gap-2 hover:bg-[#1A1A1E] transition-colors"
              style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
            >
              <svg
                className="w-6 h-6 text-[#F5F5F5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white text-sm font-semibold">
                Contact Support
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Reschedule Confirmation Modal */}
      {rescheduleModalOpen && selectedRescheduleDinner && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111121] rounded-xl w-full max-w-md p-6 border border-[#2F3A51] shadow-2xl relative">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
              {hasJoinedDinner ? "Reschedule Dinner" : "Join Dinner"}
            </h3>
            <p className="text-[#E0E0E0] mb-6">
              {hasJoinedDinner
                ? `Are you sure you want to reschedule your dinner to ${selectedRescheduleDinner.date}? If you proceed, you will be removed from your current dinner and added to this one.`
                : `Are you sure you want to join the dinner on ${selectedRescheduleDinner.date}?`}
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setRescheduleModalOpen(false);
                  setSelectedRescheduleDinner(null);
                }}
                className="px-4 py-2 rounded-lg text-[#E0E0E0] hover:bg-[#1A1A1E] transition-colors"
              >
                Close
              </button>
              <button
                onClick={confirmReschedule}
                className="px-4 py-2 bg-[#FFAA55] text-[#212121] font-bold rounded-lg hover:bg-[#FF9955] transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DinnerDetailsPage;
