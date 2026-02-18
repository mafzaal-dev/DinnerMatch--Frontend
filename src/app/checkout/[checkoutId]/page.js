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
          options: {
            theme: {
              brand: { primary: "#FFAA55" },
            },
          },
          events: {
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
    <main className="min-h-screen bg-gray-950">
      <div className="sticky top-0 z-10 flex justify-between items-center px-4 py-4 bg-gray-950/95 backdrop-blur border-b border-gray-800">
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

      <div className="max-w-lg mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
          Complete payment
        </h1>
        <p className="text-[#A0A0A0] mb-8">
          Enter your card details to subscribe.
        </p>

        {status === "error" && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
            <p className="font-medium mb-1">Payment error</p>
            <p>{errorMsg}</p>
            <Link
              href="/subscription"
              className="mt-3 inline-block text-[#FFAA55] hover:text-[#FFBB66]"
            >
              ← Go back and try again
            </Link>
          </div>
        )}

        {status === "loading" && (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#FFAA55] border-t-transparent" />
          </div>
        )}

        <div
          id="peach-payment-form"
          style={{ minHeight: status === "loading" ? 0 : 400 }}
        />
      </div>
    </main>
  );
}
