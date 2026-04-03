export function isDinnerPublished(dinner) {
  if (!dinner) return false;
  if (dinner.is_published === true) return true;
  const s = String(dinner.dinner_status ?? "").toLowerCase().trim();
  return s === "published" || s === "upcoming";
}
