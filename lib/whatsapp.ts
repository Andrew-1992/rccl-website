// Central place to manage the WhatsApp number so it's easy for non-technical
// staff to update in one location.
export const WHATSAPP_NUMBER = "211920000000"; // [X] replace with RCCL's live WhatsApp Business number

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
