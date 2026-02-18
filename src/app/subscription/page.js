"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import PricingSection from "@/components/pricing/PricingSection";

function SubscriptionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from"); // "signup" | "dinner-details" | null

  const handleSelectPlan = (plan) => {
    if (from === "signup") {
      if (typeof window !== "undefined") {
        localStorage.setItem("show_book_dinner", "true");
      }
      router.push("/edit-profile");
    } else {
      router.back();
    }
  };

  const handleBack = () => {
    if (from === "dinner-details") {
      router.back();
    }
  };

  return (
    <main className="min-h-screen bg-gray-950">
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <div className="flex items-center gap-4">
          {from === "dinner-details" ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </Link>
          )}
        </div>
      </div>
      <PricingSection onSelectPlan={handleSelectPlan} />
    </main>
  );
}

export default function SubscriptionPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#FFAA55] border-t-transparent" />
        </main>
      }
    >
      <SubscriptionContent />
    </Suspense>
  );
}
