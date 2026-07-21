export const GTAG_ID = "AW-18332686169";
export const CONTACT_CONVERSION_LABEL = "AW-18332686169/baJCCJv6ytMcENmu2qVE";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackFormSubmit() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: CONTACT_CONVERSION_LABEL });
}
