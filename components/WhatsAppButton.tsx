import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello RCCL, I'd like to ask about a project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RCCL on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-2 rounded-full bg-[#111110] text-white pl-3 pr-4 py-3 shadow-[0_4px_18px_rgba(0,0,0,0.28)] hover:bg-signal transition-colors duration-200 group"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.38c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
