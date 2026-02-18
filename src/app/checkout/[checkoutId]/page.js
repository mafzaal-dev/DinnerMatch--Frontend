"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// V2 Embedded Checkout SDK - Sandbox | Production: https://checkout.peachpayments.com/js/checkout.js
const CHECKOUT_SCRIPT_URL =
  "https://sandbox-checkout.peachpayments.com/js/checkout.js";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const checkoutId = params?.checkoutId;
  const [entityId, setEntityId] = useState("");
  const [status, setStatus] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const checkoutRef = useRef(null);

  // Read entityId from query string (passed from SubscriptionModal)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const searchParams = new URLSearchParams(window.location.search);
    const eid = searchParams.get("entityId");
    if (eid) {
      setEntityId(eid);
    } else {
      setErrorMsg("Missing entityId. Please go back and try again.");
      setStatus("error");
    }
  }, []);

  // Load SDK and initiate checkout once we have both IDs
  useEffect(() => {
    if (!checkoutId || !entityId || status === "error") return;

    let script = null;
    let checkout = null;

    // Remove any old script
    const oldScript = document.getElementById("peach-checkout-sdk");
    if (oldScript) oldScript.remove();

    script = document.createElement("script");
    script.id = "peach-checkout-sdk";
    script.src = CHECKOUT_SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      const CheckoutLib = typeof window !== "undefined" && window.Checkout;
      if (!CheckoutLib) {
        setErrorMsg("Payment SDK failed to initialise. Please refresh.");
        setStatus("error");
        return;
      }

      try {
        checkout = CheckoutLib.initiate({
          key: entityId,
          checkoutId,
          customisations: {
            showCancelButton: true,
            showAmountField: true,
            theme: {
              fontFamily: "Roboto, sans-serif",
              brand: {
                primary: "#92400E",
                secondary: "#D97706",
              },
              cards: {
                background: "#ffffff",
                backgroundHover: "#f8fafc",
              },
            },
            card: {
              submitButtonText: "Pay now",
              headingText: {
                default: "Enter your card details to complete payment",
                savedCards: "Select a saved card or enter new details",
              },
            },
          },
          eventHandlers: {
            onCompleted: (event) => {
              if (checkoutRef.current) {
                try {
                  checkoutRef.current.unmount();
                } catch (_) {}
                checkoutRef.current = null;
              }
              router.push(`/checkout/result?checkoutId=${checkoutId}`);
            },
            onCancelled: () => {
              if (checkoutRef.current) {
                try {
                  checkoutRef.current.unmount();
                } catch (_) {}
                checkoutRef.current = null;
              }
              router.push("/subscription");
            },
            onExpired: () => {
              if (checkoutRef.current) {
                try {
                  checkoutRef.current.unmount();
                } catch (_) {}
                checkoutRef.current = null;
              }
              setErrorMsg(
                "This payment session has expired. Please go back and try again."
              );
              setStatus("error");
            },
            onError: () => {
              setErrorMsg("A payment error occurred. Please try again.");
              setStatus("error");
            },
          },
        });

        checkout.render("#peach-payment-form");
        checkoutRef.current = checkout;
        setStatus("ready");
      } catch (err) {
        console.error("Checkout init error:", err);
        setErrorMsg("Failed to start payment. Please refresh and try again.");
        setStatus("error");
      }
    };

    script.onerror = () => {
      setErrorMsg(
        "Could not load payment SDK. Check your network connection."
      );
      setStatus("error");
    };

    document.head.appendChild(script);

    return () => {
      if (checkoutRef.current) {
        try {
          checkoutRef.current.unmount();
        } catch (_) {}
        checkoutRef.current = null;
      }
      if (script && script.parentNode) {
        script.remove();
      }
    };
  }, [checkoutId, entityId, router]);

  if (!checkoutId) {
    return (
      <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
        <p className="text-red-400 mb-4">Invalid checkout session.</p>
        <Link
          href="/subscription"
          className="text-[#FFAA55] hover:text-[#FFBB66] transition-colors"
        >
          ← Back to plans
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="sticky top-0 z-10 flex justify-between items-center px-4 sm:px-6 py-4 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800/80">
        <Link
          href="/subscription"
          className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
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
          <span>Back to plans</span>
        </Link>
      </div>

      <div className="max-w-xl mx-auto px-4 py-8 sm:py-12">
        <div className="rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-6 sm:px-8 pt-8 pb-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                Complete payment
              </h1>
              <p className="text-gray-600 text-base">
                Choose a payment method and enter your details to subscribe.
              </p>
            </div>

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                <p className="font-medium mb-1">Payment error</p>
                <p>{errorMsg}</p>
                <Link
                  href="/subscription"
                  className="mt-3 inline-block text-amber-600 hover:text-amber-700 font-medium"
                >
                  ← Go back and try again
                </Link>
              </div>
            )}

            {status === "loading" && (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-amber-500 border-t-transparent" />
              </div>
            )}

            <div
              className="rounded-xl overflow-hidden bg-gray-50 border border-gray-200 p-4 sm:p-5"
              style={{ minHeight: status === "loading" ? 0 : 420 }}
            >
              <div id="peach-payment-form" />
            </div>

            <p className="text-center mt-6 text-gray-500 text-sm flex items-center justify-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Secured by Peach Payments
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
