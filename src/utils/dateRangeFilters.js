/**
 * Parse yyyy-MM-dd as a local calendar date (avoids UTC parseISO shifts).
 * @param {string|undefined|null} ymd
 * @returns {Date|undefined}
 */
export function parseLocalDateYmd(ymd) {
  if (ymd == null || typeof ymd !== "string" || ymd.trim() === "") {
    return undefined;
  }
  const parts = ymd.trim().split("-").map((p) => parseInt(p, 10));
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
    return undefined;
  }
  const [y, m, d] = parts;
  return new Date(y, m - 1, d);
}

/**
 * Compare yyyy-MM-dd strings (lexicographic works for ISO dates).
 * @returns {number} negative if a < b, 0 if equal, positive if a > b
 */
export function compareYmd(a, b) {
  if (!a && !b) return 0;
  if (!a) return -1;
  if (!b) return 1;
  return a.localeCompare(b);
}

/** react-day-picker: disable days strictly before minYmd (minYmd remains selectable). */
export function disabledBeforeYmd(minYmd) {
  const d = parseLocalDateYmd(minYmd);
  return d ? { before: d } : undefined;
}

/** react-day-picker: disable days strictly after maxYmd (maxYmd remains selectable). */
export function disabledAfterYmd(maxYmd) {
  const d = parseLocalDateYmd(maxYmd);
  return d ? { after: d } : undefined;
}
