/**
 * Prefer field-level messages from `errors` (e.g. { password: ["Too weak"] })
 * over a generic top-level `message` like "Validation error".
 */
export function formatApiValidationError(err) {
  const data = err?.data ?? err?.response?.data;
  if (!data) {
    return err?.message || "Something went wrong. Please try again.";
  }

  const fieldErrors = data.errors ?? data.error;
  if (fieldErrors && typeof fieldErrors === "object" && !Array.isArray(fieldErrors)) {
    const parts = [];
    for (const value of Object.values(fieldErrors)) {
      const list = Array.isArray(value)
        ? value
        : value != null
          ? [value]
          : [];
      for (const m of list) {
        const s = String(m).trim();
        if (s) parts.push(s);
      }
    }
    if (parts.length > 0) {
      return parts.join(" ");
    }
  }

  return (
    (typeof data.detail === "string" && data.detail) ||
    data.message ||
    err.message ||
    "Something went wrong. Please try again."
  );
}
