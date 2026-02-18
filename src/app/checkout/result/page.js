"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutResultPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const resourcePath = searchParams.get("resourcePath");
    const id = searchParams.get("id");
    const resultCode = searchParams.get("resultCode");
    const resultDescription = searchParams.get("resultDescription");

    if (resultCode) {
      const successCodes = ["000.000.000", "000.100.1xx", "000.3xx.x", "000.600.000"];
      const isSuccess =
        successCodes.some((code) => resultCode.startsWith(code.split(".")[0])) ||
        resultCode.startsWith("000");
      setStatus(isSuccess ? "success" : "failed");
      return;
    }

    if (resourcePath || id) {
      setStatus("success");
      return;
    }

    setStatus("unknown");
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
            We couldn&apos;t process your payment. Please try again or use a
            different card.
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
