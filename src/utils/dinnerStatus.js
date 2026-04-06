export function isDinnerPublished(dinner) {
  if (!dinner) return false;
  if (dinner.is_published === true) return true;
  const s = String(dinner.dinner_status ?? "").toLowerCase().trim();
  return s === "published" || s === "upcoming";
}

/** API uses lowercase; admin UI uses "Open" | "Close". Legacy "upcoming" maps to Close. */
export function formatDinnerTypeForDisplay(value) {
  const k = String(value ?? "").toLowerCase().trim();
  if (k === "open") return "Open";
  if (k === "close" || k === "closed" || k === "upcoming") return "Close";
  if (!value) return "Open";
  return (
    String(value).charAt(0).toUpperCase() + String(value).slice(1).toLowerCase()
  );
}

/** Values sent to create/update dinner endpoints (lowercase). */
export function formatDinnerTypeForApi(formValue) {
  const k = String(formValue ?? "").toLowerCase().trim();
  if (k === "close" || k === "closed") return "close";
  return "open";
}

export function isDinnerTypeOpen(dinnerOrType) {
  const v =
    typeof dinnerOrType === "string"
      ? dinnerOrType
      : dinnerOrType?.dinner_type;
  return String(v ?? "").toLowerCase().trim() === "open";
}
