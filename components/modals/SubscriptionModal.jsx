  "use client";

  import React, { useEffect, useState } from "react";
  import PricingSection from "@/components/pricing/PricingSection";
  import { api, API_ENDPOINTS } from "@/utils/api";

  const SubscriptionModal = ({ isOpen, onClose, onContinue, onBack }) => {
    const [plans, setPlans] = useState([]);
    const [activePlanId, setActivePlanId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (isOpen) {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = prev;
        };
      }
    }, [isOpen]);

    useEffect(() => {
      if (isOpen) {
        setError(null);
        if (!plans || plans.length === 0) {
          setLoading(true);
        }       
        const fetchPlans = api.get(API_ENDPOINTS.GET_ALL_PLANS);
        const fetchSubscription = api.get(API_ENDPOINTS.USER_SUBSCRIPTIONS).catch(() => null);

        Promise.all([fetchPlans, fetchSubscription])
          .then(([plansRes, subRes]) => {
            const list = plansRes?.data?.plans ?? plansRes?.plans;
            if (Array.isArray(list) && list.length > 0) {
              setPlans(list);
            } else if (Array.isArray(plansRes?.plans)) {
              setPlans(plansRes.plans);
            }

            const subList = subRes?.data?.subscription ?? subRes?.subscription;
            if (Array.isArray(subList)) {
              const active = subList.find((s) => s.status === "active");
              if (active?.plan?.id) {
                setActivePlanId(active.plan.id);
              } else {
                setActivePlanId(null);
              }
            } else {
                setActivePlanId(null);
            }
          })
          .catch((err) => {
            console.error("Failed to fetch plans:", err);
            setError(err?.message || "Failed to load plans");
             if (!plans || plans.length === 0) {
               setPlans([]);
             }
          })
          .finally(() => setLoading(false));
      }
    }, [isOpen]);

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
        if (selection?.title) {
          setError(
            "Unable to start checkout for this plan. Please refresh the page and try again."
          );
          return;
        }
        onContinue?.(selection);
        return;
      }

      setCheckoutLoading(true);
      setError(null);
      try {
        const checkoutRes = await api.post(API_ENDPOINTS.PAYMENTS_CHECKOUT, {
          plan_id: plan.id,
          currency: "ZAR",
          payment_type: "DB",
        });

        if (checkoutRes?.success && checkoutRes?.data) {
          const { redirectUrl, checkoutId, entityId } = checkoutRes.data;
          // Hosted Checkout: backend returns redirectUrl → redirect to Peach's page
          if (redirectUrl) {
            window.location.href = redirectUrl;
            return;
          }
          // V2 Embedded Checkout: pass checkoutId in path + entityId in query
          if (checkoutId && entityId) {
            const params = new URLSearchParams({ entityId });
            window.location.href = `/checkout/${encodeURIComponent(checkoutId)}?${params}`;
            return;
          }
          // Fallback: checkoutId only (legacy)
          if (checkoutId) {
            window.location.href = `/checkout/${encodeURIComponent(checkoutId)}`;
            return;
          }
        }
        throw new Error(checkoutRes?.message || "Checkout could not be created");
      } catch (err) {
        console.error("Checkout failed:", err);
        setError(
          err?.message ||
            err?.data?.message ||
            "Payment failed. Please try again.",
        );
      } finally {
        setCheckoutLoading(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4 overflow-hidden">
        <div className="bg-[#080814] rounded-xl w-full max-w-6xl p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            onClick={() => onClose?.()}
            className="absolute top-10 right-10 z-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              disabled={checkoutLoading}
              className="absolute top-10 left-10 z-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors disabled:opacity-50"
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
              <span>Back</span>
            </button>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]" />
              <p className="text-[#E0E0E0]">Loading plans...</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-900/30 border border-red-500/50 text-red-300 text-sm">
                  {error}
                </div>
              )}
              <div
                className={
                  checkoutLoading ? "pointer-events-none opacity-70" : ""
                }
              >
                <PricingSection plans={plans} onSelectPlan={handleSelectPlan} activePlanId={activePlanId} />
              </div>
              {checkoutLoading && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                  <div className="bg-[#080814] rounded-xl p-8 flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]" />
                    <p className="text-[#F5F5F5]">Redirecting to payment...</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  export default SubscriptionModal;
