"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

function CheckoutResultContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Peach Payments V2: params can come from redirectPostData (query string) or top-level response
    const resultCode = searchParams.get("result.code");
    const resultDescription = searchParams.get("result.description");
    const checkoutId = searchParams.get("checkoutId");
    const resourcePath = searchParams.get("resourcePath");
    // Top-level fields from gateway response (e.g. status, transactionStatus, checkoutStatus)
    const topLevelStatus = searchParams.get("status");
    const transactionStatus = searchParams.get("transactionStatus");
    const checkoutStatus = searchParams.get("checkoutStatus");

    // Console: all params for verification
    const params = {
      "result.code": resultCode,
      "result.description": resultDescription,
      checkoutId,
      resourcePath,
      status: topLevelStatus,
      transactionStatus,
      checkoutStatus,
    };
    console.log("[CheckoutResult] search params:", params);

    if (resultDescription) setDescription(resultDescription);

    // No params at all
    if (
      !resultCode &&
      !resourcePath &&
      !checkoutId &&
      !topLevelStatus &&
      !transactionStatus &&
      !checkoutStatus
    ) {
      console.log("[CheckoutResult] no relevant params → status: unknown");
      setStatus("unknown");
      return;
    }

    // 1) Prefer result.code for detailed outcome
    if (resultCode) {
      const isSuccess =
        /^000\.(000|100\.1|600\.000)/.test(resultCode) ||
        resultCode === "000.000.000";
      const isPending = /^000\.200/.test(resultCode);
      const derived = isSuccess ? "success" : isPending ? "pending" : "failed";
      console.log("[CheckoutResult] from result.code:", resultCode, "→", derived);
      if (isSuccess) setStatus("success");
      else if (isPending) setStatus("pending");
      else setStatus("failed");
      return;
    }

    // 2) Use top-level status/transactionStatus/checkoutStatus (e.g. "Success", "successful")
    const isSuccessFromTop =
      topLevelStatus?.toLowerCase() === "success" ||
      transactionStatus?.toLowerCase() === "success" ||
      checkoutStatus?.toLowerCase() === "successful";
    if (isSuccessFromTop) {
      console.log("[CheckoutResult] from top-level status → success");
      setStatus("success");
      return;
    }

    // 3) If we have checkoutId/resourcePath but no result yet, treat as pending
    console.log("[CheckoutResult] checkoutId/resourcePath only → pending");
    setStatus("pending");
  }, [searchParams]);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#FFAA55] border-t-transparent mb-6" />
        <p className="text-[#E0E0E0]">Confirming your payment...</p>
      </main>
    );
  }

  if (status === "success") {
    return (
      <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
            Payment successful
          </h1>
          <p className="text-[#A0A0A0] mb-8">
            Your subscription is now active. You can start booking dinners.
          </p>
          <Link
            href="/available-dinners"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#FFAA55] text-gray-900 font-medium hover:bg-[#FFBB66] transition-colors"
          >
            Browse dinners
          </Link>
        </div>
      </main>
    );
  }

  if (status === "pending") {
    return (
      <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-yellow-400"
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
          <h1 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
            Payment pending
          </h1>
          <p className="text-[#A0A0A0] mb-8">
            We&apos;re waiting for confirmation from your bank. You&apos;ll
            receive an email once complete.
          </p>
          <Link
            href="/available-dinners"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#FFAA55] text-gray-900 font-medium hover:bg-[#FFBB66] transition-colors"
          >
            Continue anyway
          </Link>
        </div>
      </main>
    );
  }

  if (status === "failed") {
    return (
      <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-red-400"
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
          </div>
          <h1 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
            Payment failed
          </h1>
          <p className="text-[#A0A0A0] mb-8">
            {description ||
              "We couldn't process your payment. Please try again or use a different card."}
          </p>
          <Link
            href="/subscription"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#FFAA55] text-gray-900 font-medium hover:bg-[#FFBB66] transition-colors"
          >
            Try again
          </Link>
        </div>
      </main>
    );
  }

  // unknown / fallback
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
      <p className="text-[#A0A0A0] mb-6">Payment complete.</p>
      <Link
        href="/available-dinners"
        className="text-[#FFAA55] hover:text-[#FFBB66] transition-colors"
      >
        Continue to dinners
      </Link>
    </main>
  );
}

function CheckoutResultFallback() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#FFAA55] border-t-transparent mb-6" />
      <p className="text-[#E0E0E0]">Loading...</p>
    </main>
  );
}

export default function CheckoutResultPage() {
  return (
    <Suspense fallback={<CheckoutResultFallback />}>
      <CheckoutResultContent />
    </Suspense>
  );
}
