/**
 * Empuja eventos al dataLayer de Google Tag Manager.
 * En GTM se mapean a conversiones de Google Ads, GA4 y Meta Pixel.
 *
 * Eventos estándar usados en el sitio:
 *  - whatsapp_click   { programa?, ubicacion }
 *  - generate_lead    { programa, origen }   ← conversión principal
 *  - quiz_complete    { programa_recomendado }
 *  - beca_click       { ubicacion }
 */
export function track(event: string, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === "undefined") return;
  // @ts-expect-error dataLayer es inyectado por GTM
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error dataLayer es inyectado por GTM
  window.dataLayer.push({ event, ...params });
}
