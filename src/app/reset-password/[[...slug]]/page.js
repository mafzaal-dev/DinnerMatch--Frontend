"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import ResetPasswordPage from "../../../../components/pages/ResetPasswordPage";
import { api, API_ENDPOINTS } from "@/utils/api";

function parseUidAndToken(slug) {
  if (!slug || slug.length === 0) return null;
  const decoded = slug.map((segment) => {
    try {
      return decodeURIComponent(segment);
    } catch {
      return segment;
    }
  });
  if (decoded.length >= 2) {
    return { uidb64: decoded[0], token: decoded.slice(1).join('/') };
  }
  const combined = decoded[0].replace(/%2F/gi, '/');
  const slashIdx = combined.indexOf('/');
  if (slashIdx > 0) {
    return {
      uidb64: combined.slice(0, slashIdx),
      token: combined.slice(slashIdx + 1),
    };
  }
  return null;
}

function normalizeSlugParam(slug) {
  if (slug == null) return undefined;
  return Array.isArray(slug) ? slug : [slug];
}

export default function ResetPasswordRoute() {
  const router = useRouter();
  const routeParams = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const slug = normalizeSlugParam(routeParams?.slug);

  const parsed = useMemo(() => parseUidAndToken(slug), [slug]);

  const invalidLink = !parsed;

  useEffect(() => {
    setServerError("");
  }, [parsed?.uidb64, parsed?.token]);

  const handleSubmit = async (data) => {
    if (!parsed) return;
    setIsSubmitting(true);
    setServerError("");
    try {
      const endpoint = API_ENDPOINTS.RESET_PASSWORD(parsed.uidb64, parsed.token);
      const res = await api.post(endpoint, {
        new_password: data.new_password,
        confirm_password: data.confirm_password,
      });
      const msg =
        (res && typeof res.message === "string" && res.message) ||
        "Your password has been updated. You can sign in now.";
      toast.success(msg);
      router.push("/login");
    } catch (err) {
      const raw =
        err.data?.detail ||
        err.data?.message ||
        err.message ||
        "Could not reset password. The link may have expired.";
      const message =
        typeof raw === "string" ? raw : "Could not reset password. Please try again.";
      setServerError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goLogin = () => router.push("/login");

  return (
    <ResetPasswordPage
      invalidLink={invalidLink}
      onSubmit={handleSubmit}
      onSignIn={goLogin}
      isSubmitting={isSubmitting}
      serverError={serverError}
    />
  );
}
