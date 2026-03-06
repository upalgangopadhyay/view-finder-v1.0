const GA_MEASUREMENT_ID =
  process.env.REACT_APP_GA_MEASUREMENT_ID || "G-K4G524NLCL";

let analyticsInitialized = false;

function ensureGtagScript() {
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (analyticsInitialized || typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!window.gtag || !window.gtag.name) {
    ensureGtagScript();
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }

  analyticsInitialized = true;
}

export function trackPageView(path) {
  if (!analyticsInitialized || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
  });
}

export function trackEvent(eventName, params = {}) {
  if (!analyticsInitialized || !window.gtag) return;

  window.gtag("event", eventName, params);
}
