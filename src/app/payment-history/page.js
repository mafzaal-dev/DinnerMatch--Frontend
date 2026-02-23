"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PaymentHistoryPage from "../../../components/pages/PaymentHistoryPage";
import { api, API_ENDPOINTS } from "@/utils/api";

export default function PaymentHistory() {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get(API_ENDPOINTS.PAYMENT_TRANSACTIONS);
        const raw = response?.transactions;
        let list = Array.isArray(raw)
          ? raw
          : raw && typeof raw === "object"
          ? [raw]
          : [];
        // Treat empty template object (user/amount null, no id/created_at) as no transactions
        const isEmptyTemplate = (t) =>
          t &&
          typeof t === "object" &&
          t.user == null &&
          t.amount == null &&
          !t.id &&
          !t.created_at;
        list = list.filter((t) => !isEmptyTemplate(t));
        if (!cancelled) setTransactions(list);
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || "Failed to load payment history");
          setTransactions([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchTransactions();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleBack = () => {
    router.push("/account");
  };

  return (
    <PaymentHistoryPage
      transactions={transactions}
      loading={loading}
      error={error}
      onBack={handleBack}
    />
  );
}
