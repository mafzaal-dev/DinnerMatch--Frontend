"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const RATING_EMOJIS = ['😞', '🙁', '😐', '😊', '😄'];

const getInitials = (firstName, lastName) => {
  const first = firstName ? firstName.charAt(0).toUpperCase() : '';
  const last = lastName ? lastName.charAt(0).toUpperCase() : '';
  return `${first}${last}`;
};

const stringToColor = (string) => {
  if (!string) return '#FFAA55';
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
};

const AVATAR_COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899'];
const getAvatarColor = (index) => AVATAR_COLORS[index % AVATAR_COLORS.length];

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
  onSubmitFeedback,
}) => {
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [rescheduleModalOpen, setRescheduleModalOpen] = useState(false);
  const [selectedRescheduleDinner, setSelectedRescheduleDinner] = useState(null);
  const [isJoiningDinner, setIsJoiningDinner] = useState(false);
  
  // Feedback state
  const [memberRatings, setMemberRatings] = useState({});
  const [restaurantRating, setRestaurantRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

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

  const hasDetails =
    dinner?.id &&
    (dinner.status === "Published" ||
      (dinner.status !== "Draft" && dinner.status !== "Pending"));

  const hasJoinedDinner = !!dinner?.id;

  const subscriptionList = useMemo(() => {
    if (subscriptionData == null) return [];
    return Array.isArray(subscriptionData)
      ? subscriptionData
      : [subscriptionData];
  }, [subscriptionData]);

  /** API returned nothing useful (null, empty, or missing list) */
  const subscriptionDataMissing = subscriptionList.length === 0;

  /** Prefer active/trialing; otherwise first row (e.g. expired) for display dates only */
  const subscriptionRecord = useMemo(() => {
    const active = subscriptionList.find((s) => {
      const st = String(s?.status ?? "").toLowerCase();
      return st === "active" || st === "trialing";
    });
    if (active) return active;
    if (subscriptionList.length > 0) return subscriptionList[0];
    return null;
  }, [subscriptionList]);

  const hasPlanAttached = !!(
    subscriptionRecord?.plan?.id ||
    subscriptionRecord?.plan?.name ||
    subscriptionRecord?.plan_id
  );

  const isSubscribed = useMemo(() => {
    if (!subscriptionRecord || !hasPlanAttached) return false;
    const st = String(subscriptionRecord.status ?? "").toLowerCase();
    if (st === "active" || st === "trialing") return true;
    if (
      [
        "cancelled",
        "canceled",
        "expired",
        "inactive",
        "past_due",
        "unpaid",
      ].includes(st)
    ) {
      return false;
    }
    return true;
  }, [subscriptionRecord, hasPlanAttached]);

  /** Joined a dinner but no valid subscription (missing, expired, cancelled, etc.) */
  const needsPaymentAttention = hasJoinedDinner && !isSubscribed;

  /** Same main dashboard as subscribed users: pass + next dinner + access */
  const showMemberDashboard = isSubscribed || hasJoinedDinner;

  const subscriptionDisplay = useMemo(() => {
    const record = subscriptionRecord;
    const memberSince =
      record?.start_date || record?.created_at
        ? new Date(record.start_date || record.created_at).toLocaleDateString(
            "en-GB",
            { day: "numeric", month: "short", year: "numeric" },
          )
        : null;
    const renewal =
      record?.end_date &&
      !Number.isNaN(new Date(record.end_date).getTime())
        ? new Date(record.end_date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : null;

    const payAttention = hasJoinedDinner && !isSubscribed;

    return {
      memberSince,
      renewalDate: renewal,
      type: payAttention
        ? subscriptionDataMissing
          ? "Subscription expired"
          : "Payment incomplete"
        : subscriptionRecord?.plan?.name || "Member",
      status: isSubscribed
        ? "Active"
        : payAttention
          ? "Action needed"
          : "Inactive",
      renewsLine: renewal
        ? `Renews: ${renewal}`
        : payAttention
          ? subscriptionDataMissing
            ? "Renew to keep your dinner spot and full member benefits."
            : "Renew or finish checkout to restore access"
          : "Renews: —",
      accessRenewalLine: renewal
        ? `Renewal on ${renewal}.`
        : payAttention
          ? subscriptionDataMissing
            ? "We couldn’t find an active subscription. Renew anytime—it only takes a moment."
            : "Complete payment to keep full access to your dinners."
          : "Renewal on —.",
    };
  }, [
    subscriptionRecord,
    isSubscribed,
    hasJoinedDinner,
    subscriptionDataMissing,
  ]);

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

  const confirmReschedule = async () => {
    if (!selectedRescheduleDinner?.id || !onReschedule) return;
    setIsJoiningDinner(true);
    try {
      await onReschedule(selectedRescheduleDinner.id);
      setRescheduleModalOpen(false);
      setSelectedRescheduleDinner(null);
    } catch {
      // Error feedback handled by parent (e.g. toast)
    } finally {
      setIsJoiningDinner(false);
    }
  };

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

  const isTableTalkUnlocked = useMemo(() => {
    if (!dinnerDateObj || isNaN(dinnerDateObj.getTime())) return false;
    return Date.now() >= dinnerDateObj.getTime();
  }, [dinnerDateObj]);

  const isDinnerPassed = useMemo(() => {
    if (!dinnerDateObj || isNaN(dinnerDateObj.getTime())) return false;
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dinnerStart = new Date(dinnerDateObj.getFullYear(), dinnerDateObj.getMonth(), dinnerDateObj.getDate());
    
    return todayStart.getTime() > dinnerStart.getTime();
  }, [dinnerDateObj]);

  const unlockTime = dinnerDateObj && !isNaN(dinnerDateObj.getTime())
    ? dinnerDateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : "7:00 PM";

  const handleMemberRating = (userId, rating) => {
    setMemberRatings(prev => ({
      ...prev,
      [userId]: rating
    }));
  };

  const submitFeedback = () => {
    if (onSubmitFeedback) {
      onSubmitFeedback({
        memberRatings,
        restaurantRating,
        groupId: dinner.group?.id,
        restaurantId: dinner.restaurantId || dinner.group?.restaurant?.id
      });
      setFeedbackSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div
        className="max-w-154 mx-auto"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between ">
          <h1 className="text-[32px] text-center font-bold text-[#F5F5F5]">
            DinnerMatch
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

        {needsPaymentAttention && (
          <div className="bg-[#CA8A04] rounded-lg px-3 py-3 flex gap-3 items-start">
            <svg
              className="w-6 h-6 text-[#D9D9D9] shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[#F5F5F5] font-semibold text-sm">
                {subscriptionDataMissing
                  ? "Subscription expired"
                  : "Payment incomplete"}
              </span>
              <span className="text-[#F5F5F5] font-normal text-sm leading-snug">
                {subscriptionDataMissing
                  ? "We’re not seeing an active plan on your account—your membership may have ended, or we couldn’t load your billing details. Use Manage subscription below to renew and keep your dinner reservation and member access."
                  : "Please finish checkout or update your payment so you don’t lose access to your dinners."}
              </span>
            </div>
          </div>
        )}

        {/* DinnerMatch Pass — subscribed, or joined with lapsed / missing subscription */}
        {showMemberDashboard && (
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
                  {subscriptionDisplay.memberSince && (
                    <p className="text-[#E3BF3B] text-xs uppercase tracking-wide">
                      MEMBER SINCE {subscriptionDisplay.memberSince}
                    </p>
                  )}
                  <h2 className="text-[#E3BF3B] text-2xl font-bold">
                    DinnerMatch Pass
                  </h2>
                  <p className="text-[#F5F5F5] font-semibold text-lg">
                    {subscriptionDisplay.type}
                  </p>
                </div>
                <div
                  className={`flex items-center gap-2 p-3 rounded-full ${
                    needsPaymentAttention ? "bg-[#3D2A1A]" : "bg-[#162B2A]"
                  }`}
                >
                  <div
                    className={`size-2 rounded-full shrink-0 ${
                      needsPaymentAttention ? "bg-[#F59E0B]" : "bg-[#41B36E]"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      needsPaymentAttention
                        ? "text-[#FBBF24]"
                        : "text-[#41B359]"
                    }`}
                  >
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
                    Access to all dinners this month
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
                    {subscriptionDisplay.renewsLine}
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

        {/* Empty State for Not Joined */}
        {!hasJoinedDinner && !isSubscribed && (
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-8 text-center flex flex-col gap-4">
            {!isSubscribed && (
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
            {!isSubscribed && (
              <button
                onClick={onManageSubscription}
                className="w-full bg-[#FFAA55] text-[#212121] font-bold py-3 rounded-lg hover:bg-[#FF9955] transition-colors"
              >
                Purchase Your Plan
              </button>
            )}
          </div>
        )}

        {/* Your Next Dinner — any joined dinner (including lapsed subscription) */}
        {hasJoinedDinner && (
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
                {hasDetails &&
                  dinner.restaurant !== "To be announced" &&
                  onCopyAddress && (
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
                  {hasDetails &&
                    (() => {
                      const g = dinner.group || {};
                      const snap = g.demographics_snapshot || {};
                      const nationalityCount = snap.nationality_pct
                        ? Object.keys(snap.nationality_pct).length
                        : 0;
                      const parts = [];
                      if (g.area_label) parts.push(g.area_label);
                      if (g.budget_label) parts.push(g.budget_label);
                      if (nationalityCount > 0) {
                        parts.push(
                          `${nationalityCount} nationalit${nationalityCount === 1 ? "y" : "ies"}`,
                        );
                      }
                      if (!parts.length) return null;
                      return (
                        <p className="text-[#77777B] text-sm mt-1">
                          {parts.join(" • ")}
                        </p>
                      );
                    })()}
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
                        .map(([key, value]) => {
                          const formatted = key.replace(/_/g, " ");
                          return `${formatted.charAt(0).toUpperCase() + formatted.slice(1)} ${value}%`;
                        })
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
                        .map(([key, value]) => {
                          const formatted = key.replace(/_/g, " ");
                          return `${formatted.charAt(0).toUpperCase() + formatted.slice(1)} ${value}%`;
                        })
                        .join(" - ")}
                    </p>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-[#1B1C1F]"></div>

                {isDinnerPassed ? (
                  <div className="space-y-8">
                    {/* Rate Group */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        {dinner.group?.members?.length > 0 && (
                          <h3 className="text-[#F5F5F5] text-sm font-bold uppercase tracking-wide">
                            RATE YOUR GROUP
                          </h3>
                        )}
                      </div>

                      <div className="space-y-3">
                        {dinner.group?.members?.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center justify-between"
                          >
                            <span className="text-[#F5F5F5] text-sm font-normal">
                              {member.first_name}{" "}
                              {member.last_name
                                ? `${member.last_name.charAt(0)}.`
                                : ""}
                            </span>
                            <div className="flex gap-1">
                              {RATING_EMOJIS.map((emoji, index) => (
                                <button
                                  key={index}
                                  onClick={() =>
                                    handleMemberRating(member.id, index + 1)
                                  }
                                  className={`w-8 h-8 rounded-md flex items-center justify-center text-lg transition-all ${
                                    memberRatings[member.id] === index + 1
                                      ? "bg-[#FFAA55] text-black"
                                      : "bg-[#1A1A1E] text-[#757575] hover:bg-[#2A2A2E]"
                                  }`}
                                >
                                  <span
                                    className={
                                      memberRatings[member.id] === index + 1
                                        ? ""
                                        : "opacity-50 grayscale"
                                    }
                                  >
                                    {emoji}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rate Restaurant */}
                    <div>
                      <h3 className="text-[#F5F5F5] text-sm font-bold mb-4 uppercase tracking-wide">
                        RATE THE RESTAURANT
                      </h3>
                      <div className="flex gap-4">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => setRestaurantRating(rating)}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill={
                                rating <= restaurantRating
                                  ? "#E3BF3B"
                                  : "#2A2A2E"
                              }
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={submitFeedback}
                      disabled={feedbackSubmitted}
                      className="w-full bg-[#E3BF3B] text-[#212121] py-4 rounded-lg font-bold text-base hover:bg-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {feedbackSubmitted
                        ? "Feedback Submitted"
                        : "Submit Feedback"}
                    </button>
                  </div>
                ) : (
                  <>
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
                          <span className="text-sm font-medium">
                            I'll be There
                          </span>
                        </button>
                        <button
                          onClick={() => handleRSVP("I'll be Late")}
                          className={`flex-1 rounded-lg py-4 px-2 text-sm font-semibold  flex items-center justify-center transition-colors ${
                            rsvpStatus === "I'll be Late"
                              ? "bg-[#FFAA55] border-[#FFAA55] text-white"
                              : "bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            I'll be Late
                          </span>
                        </button>
                        <button
                          onClick={() => handleRSVP("Can't Make It")}
                          className={`flex-1 rounded-lg py-4 px-2 text-sm font-semibold  flex items-center justify-center transition-colors ${
                            rsvpStatus === "Can't Make It"
                              ? "bg-[#FFAA55] border-[#FFAA55] text-white"
                              : "bg-[#111121] border border-[#2F3A51] text-white hover:bg-[#1A1F2E]"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            Can't Make It
                          </span>
                        </button>
                      </div>
                    ) : (
                      <div className="bg-[#1A1A1E] border border-[#2F3A51] rounded-lg p-4 text-center">
                        <p className="text-[#77777B] text-sm">
                          RSVP will open on the day of the dinner.
                        </p>
                      </div>
                    )}
                  </>
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
                      {isTableTalkUnlocked
                        ? "TableTalk is now unlocked"
                        : `TableTalk Unlocks at ${unlockTime}`}
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

        {/* Your Access — same card for active subscribers and joined users fixing payment */}
        {showMemberDashboard && (
          <div
            className="bg-[#0F0F14] border border-[#191A1D] rounded-lg p-6"
            style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
          >
            <h2 className="text-[#F5F5F5] text-lg font-semibold mb-6">
              Your Access
            </h2>
            <div className="">
              <p className="text-[#F5F5F5] text-base font-semibold">
                Access to all dinners this month.
              </p>
              <p className="text-[#77777B] text-base">
                {subscriptionDisplay.accessRenewalLine}
              </p>
            </div>
          </div>
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
                  <button
                    onClick={() => handleRescheduleClick(item)} // Re-use same handler/modal or different text
                    className="bg-[#FFAA55] text-[#212121] px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#FF9955] transition-colors whitespace-nowrap"
                  >
                    Join This Dinner
                  </button>
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
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111121] rounded-xl w-full max-w-md p-6 border border-[#2F3A51] shadow-2xl relative">
            {isJoiningDinner && (
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl bg-[#111121]/90"
                aria-live="polite"
                aria-busy="true"
              >
                <div
                  className="h-10 w-10 animate-spin rounded-full border-2 border-[#2F3A51] border-t-[#FFAA55]"
                  role="status"
                  aria-label="Switching dinner"
                />
                <p className="text-sm font-medium text-[#E0E0E0]">
                  Switching your dinner…
                </p>
              </div>
            )}
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
              Join Dinner
            </h3>
            <p className="text-[#E0E0E0] mb-6">
              {hasJoinedDinner
                ? `Are you sure you want to join the dinner on ${selectedRescheduleDinner.date}? If you proceed, you will be removed from your current dinner and added to this one.`
                : `Are you sure you want to join the dinner on ${selectedRescheduleDinner.date}?`}
            </p>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                disabled={isJoiningDinner}
                onClick={() => {
                  setRescheduleModalOpen(false);
                  setSelectedRescheduleDinner(null);
                }}
                className="px-4 py-2 rounded-lg text-[#E0E0E0] hover:bg-[#1A1A1E] transition-colors disabled:pointer-events-none disabled:opacity-40"
              >
                Close
              </button>
              <button
                type="button"
                disabled={isJoiningDinner}
                onClick={confirmReschedule}
                className="inline-flex items-center justify-center gap-2 min-w-[7rem] px-4 py-2 bg-[#FFAA55] text-[#212121] font-bold rounded-lg hover:bg-[#FF9955] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isJoiningDinner ? (
                  <>
                    <span
                      className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-[#212121]/30 border-t-[#212121]"
                      aria-hidden
                    />
                    <span>Joining</span>
                  </>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DinnerDetailsPage;
