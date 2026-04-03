"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import PricingSection from "@/components/pricing/PricingSection";
import { api, API_ENDPOINTS } from "@/utils/api";
import Link from "next/link";

function ManageSubscriptionContent() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);
  const [activeSubscription, setActiveSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoadingPlanId, setCheckoutLoadingPlanId] = useState(null);
  const [cancelInProgress, setCancelInProgress] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [plansRes, subRes] = await Promise.all([
        api.get(API_ENDPOINTS.GET_ALL_PLANS).catch(e => ({ plans: [] })),
        api.get(API_ENDPOINTS.USER_SUBSCRIPTIONS).catch(e => ({ subscription: [] })),
      ]);

      const list = plansRes?.data?.plans ?? plansRes?.plans ?? [];
      setPlans(list);

      const subList = subRes?.data?.subscription ?? subRes?.subscription ?? [];
      const active = Array.isArray(subList) ? subList.find((s) => s.status === "active") : null;
      setActiveSubscription(active);

    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError("Failed to load subscription details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPlan = async (selection) => {
    let plan = selection?.plan;
    if (!plan?.id && selection?.title && plans?.length) {
      const match = plans.find(
        (p) =>
          p.name &&
          selection.title &&
          (p.name.toLowerCase().includes(selection.title.toLowerCase()) ||
            selection.title.toLowerCase().includes(p.name.toLowerCase()))
      );
      if (match) plan = match;
    }

    if (!plan?.id) {
      // Fallback for non-dynamic plans if any
      if (selection?.title) {
        console.warn("Selected plan not found in fetched plans", selection);
      }
      return;
    }

    setCheckoutLoadingPlanId(plan.id);
    setError(null);
    try {
      const checkoutRes = await api.post(API_ENDPOINTS.PAYMENTS_CHECKOUT, {
        plan_id: plan.id,
        currency: "ZAR",
        payment_type: "DB",
      });

      if (checkoutRes?.success && checkoutRes?.data) {
        const { redirectUrl, checkoutId, entityId } = checkoutRes.data;
        if (redirectUrl) {
          window.location.href = redirectUrl;
          return;
        }
        if (checkoutId && entityId) {
          const params = new URLSearchParams({ entityId });
          window.location.href = `/checkout/${encodeURIComponent(checkoutId)}?${params}`;
          return;
        }
        if (checkoutId) {
          window.location.href = `/checkout/${encodeURIComponent(checkoutId)}`;
          return;
        }
      }
      throw new Error(checkoutRes?.message || "Checkout could not be created");
    } catch (err) {
      console.error("Checkout failed", err);
      setError(err.message || "Payment initialization failed");
    } finally {
      setCheckoutLoadingPlanId(null);
    }
  };

  const handleCancelSubscriptionClick = () => {
    setShowCancelModal(true);
  };

  const confirmCancellation = async () => {
    setCancelInProgress(true);
    setError(null);
    try {
      await api.post(API_ENDPOINTS.CANCEL_SUBSCRIPTION);
      setShowCancelModal(false);
      setSuccessMessage("Subscription cancelled successfully.");
      setActiveSubscription(null);
      fetchData();
    } catch (err) {
      console.error("Cancellation failed:", err);
      setError(err?.message || "Failed to cancel subscription.");
    } finally {
      setCancelInProgress(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080714] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080714] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header row: back | title | spacer — no overlap on mobile */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/account")}
            className="shrink-0 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors flex items-center gap-1"
          >
            <svg
              className="w-5 h-5"
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
            <span className="text-sm font-medium">Back</span>
          </button>
          {/* <h1 className="flex-1 text-center text-2xl md:text-[32px] font-bold text-[#FFAA55] leading-tight">
            Manage Subscription
          </h1> */}
          {/* Mirror spacer so title stays perfectly centered */}
          <div className="shrink-0 w-14" />
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-900/30 border border-red-500/50 text-red-300 text-center">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-4 rounded-lg bg-green-900/30 border border-green-500/50 text-green-300 text-center">
            {successMessage}
          </div>
        )}

        {activeSubscription ? (
          <div className="bg-[#111121] border border-[#2F3A51] rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#2F3A51] pb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#F5F5F5]">
                    {activeSubscription.plan?.name || "Active Subscription"}
                  </h2>
                  <p className="text-[#757575] mt-1">
                    Status:{" "}
                    <span className="text-green-500 font-semibold capitalize">
                      {activeSubscription.status}
                    </span>
                  </p>
                </div>
                <div className="bg-[#FFAA55] text-[#080714] px-4 py-1 rounded-full text-sm font-bold">
                  Current Plan
                </div>
              </div>

              <div className="space-y-4">
                {activeSubscription.start_date && (
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Start Date</span>
                    <span className="text-[#F5F5F5]">
                      {new Date(
                        activeSubscription.start_date,
                      ).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {activeSubscription.end_date && (
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">End Date</span>
                    <span className="text-[#F5F5F5]">
                      {new Date(
                        activeSubscription.end_date,
                      ).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {activeSubscription.plan?.price && (
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Price</span>
                    <span className="text-[#F5F5F5]">
                      ZAR {activeSubscription.plan.price}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[#2F3A51]">
                <button
                  type="button"
                  onClick={handleCancelSubscriptionClick}
                  disabled={cancelInProgress}
                  className="w-full py-3 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {cancelInProgress ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current shrink-0" />
                      Cancelling...
                    </>
                  ) : (
                    "Cancel Subscription"
                  )}
                </button>
                <p className="text-[#757575] text-sm mt-4 text-center">
                  Cancelling will stop future payments. You will retain access
                  until the end of your current billing period.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <PricingSection
            plans={plans}
            onSelectPlan={handleSelectPlan}
            activePlanId={null}
            loadingPlanId={checkoutLoadingPlanId}
          />
        )}
      </div>

      {/* Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111121] rounded-xl w-full max-w-md p-6 border border-[#2F3A51] shadow-2xl relative">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
              Cancel Subscription?
            </h3>
            <p className="text-[#E0E0E0] mb-6">
              Are you sure you want to cancel your subscription? This action
              cannot be undone.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => !cancelInProgress && setShowCancelModal(false)}
                disabled={cancelInProgress}
                className="px-4 py-2 rounded-lg text-[#E0E0E0] hover:bg-[#1A1A1E] transition-colors disabled:opacity-50"
              >
                No, Keep It
              </button>
              <button
                type="button"
                onClick={confirmCancellation}
                disabled={cancelInProgress}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 font-bold rounded-lg transition-colors disabled:opacity-60 flex items-center gap-2"
              >
                {cancelInProgress && (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" aria-hidden />
                )}
                {cancelInProgress ? "Cancelling…" : "Yes, Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ManageSubscriptionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#080714] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]" />
        </div>
      }
    >
      <ManageSubscriptionContent />
    </Suspense>
  );
}
