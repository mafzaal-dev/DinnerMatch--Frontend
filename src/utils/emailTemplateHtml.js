/**
 * Escape text for safe insertion into HTML (placeholders like {{Name}} stay intact).
 */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Turn plain-text email body into a simple HTML version for multipart / HTML storage.
 * Double newlines become paragraphs; single newlines become <br />.
 */
export function plainTextToEmailHtml(plain) {
  if (plain == null || String(plain).trim() === "") {
    return '<div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif;font-size:16px;line-height:1.5;color:#111827;"></div>';
  }
  const escaped = escapeHtml(String(plain));
  const blocks = escaped.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const inner =
    blocks.length > 0
      ? blocks
          .map(
            (p) =>
              `<p style="margin:0 0 1em 0;">${p.replace(/\n/g, "<br />")}</p>`,
          )
          .join("")
      : `<p style="margin:0 0 1em 0;">${escaped.replace(/\n/g, "<br />")}</p>`;

  return `<div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:16px;line-height:1.5;color:#111827;">${inner}</div>`;
}
