"use client";

import React from "react";

const PaymentHistoryPage = ({
  transactions = [],
  loading = false,
  error = null,
  onBack,
}) => {
  const list = Array.isArray(transactions)
    ? transactions
    : transactions && typeof transactions === "object"
    ? [transactions]
    : [];

  return (
    <div className="min-h-screen bg-[#080714] p-4 md:p-8">
      <div className="max-w-154 mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-center relative">
          {onBack && (
            <button
              onClick={onBack}
              className="absolute left-0 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors flex items-center"
            >
              <svg
                className="w-6 h-6"
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
            </button>
          )}
          <h1 className="text-[32px] font-bold text-[#FFAA55]">
            Payment History
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]" />
          </div>
        ) : error ? (
          <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#FFAA55] text-[#212121] px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#FF9955] transition-colors"
            >
              Try again
            </button>
          </div>
        ) : list.length === 0 ? (
          <div
            className="bg-[#111121] border border-[#2F3A51] rounded-xl p-12 text-center max-w-md mx-auto"
            style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#2F3A51]/50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#FFAA55]/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-[#F5F5F5] font-semibold text-lg mb-2">
              No transactions yet
            </h2>
            <p className="text-[#757575] text-sm leading-relaxed mb-6">
              Your payment history will appear here once you make a purchase.
            </p>
            {onBack && (
              <button
                onClick={onBack}
                className="bg-[#FFAA55] text-[#212121] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#FF9955] transition-colors"
              >
                Back to Account
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {list.map((tx, index) => {
              const id = tx.id ?? `tx-${index}`;
              const plan = tx.plan ?? {};
              const planName = plan.name ?? "";
              const planDescription = plan.description ?? "";
              const planType = plan.plan_type ?? "";
              const amount = tx.amount != null ? String(tx.amount) : "";
              const currency = tx.currency ?? "ZAR";
              const paymentType = tx.payment_type ?? "";
              const status = tx.status ?? "";
              const createdAt = tx.created_at ?? "";
              const displayAmount =
                currency === "ZAR" && amount
                  ? `R ${Number(amount).toFixed(2)}`
                  : amount
                  ? `${currency} ${Number(amount).toFixed(2)}`
                  : "—";
              const displayDate = createdAt
                ? new Date(createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                : "—";

              return (
                <div
                  key={id}
                  className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 flex flex-col gap-4"
                  style={{ boxShadow: "0 0 16px rgba(0, 0, 0, 0.12)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {planName && (
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-1">
                          {planName}
                        </h2>
                      )}
                      {planType && (
                        <p className="text-[#FFAA55] text-sm font-semibold mb-2">
                          {planType}
                        </p>
                      )}
                      {planDescription && (
                        <p className="text-[#757575] text-sm leading-relaxed">
                          {planDescription}
                        </p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[#FFAA55] font-bold text-xl">
                        {displayAmount}
                      </p>
                      {status && (
                        <span
                          className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold capitalize ${
                            status === "succeeded"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-[#2F3A51] text-[#757575]"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2 border-t border-[#2F3A51] text-sm">
                    <span className="text-[#757575]">
                      Date: <span className="text-[#E0E0E0]">{displayDate}</span>
                    </span>
                    {paymentType && (
                      <span className="text-[#757575]">
                        Payment:{" "}
                        <span className="text-[#E0E0E0]">{paymentType}</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
