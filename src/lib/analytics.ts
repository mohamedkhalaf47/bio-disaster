import { ANALYTICS_CONFIG } from '@/config/data';

/**
 * Injects the Google Analytics (gtag.js) script and initializes it,
 * but only if a measurementId has been configured. Call once on app mount.
 */
export function initAnalytics(): void {
  const { measurementId } = ANALYTICS_CONFIG;
  if (!measurementId) return;

  // Avoid double-injecting on hot reload / re-mount
  if (document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(inlineScript);
}
