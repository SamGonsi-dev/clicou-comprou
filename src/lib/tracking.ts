// Helper para rastreamento de eventos e manipulação do link de destino

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function getWhatsAppLink(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://chat.whatsapp.com/C1J4J24SM6R0oLauK5k0d4';
}

export function trackLeadClick(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_click',
    conversion_type: 'whatsapp_group',
    page_location: window.location.href,
    timestamp: new Date().toISOString(),
  });

  if (process.env.NODE_ENV === 'development') {
    // Log informativo em desenvolvimento
    console.info('[Analytics] Evento disparado: lead_click');
  }
}

