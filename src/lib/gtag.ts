export const GTAG_ID = "AW-18332686169";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackFormSubmit() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", {
    event_category: "contact",
    event_label: "kontaktskjema",
  });
}
