const WA_NUMBER = "919999999999";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello ReliAxis, I need CNC/VMC service assistance.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elegant hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M19.11 17.28c-.28-.14-1.66-.82-1.92-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49l-.54-.01c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.19 2.02 3.08 4.89 4.21.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16 3C8.83 3 3 8.83 3 16c0 2.35.63 4.55 1.72 6.44L3 29l6.72-1.76A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3z"/>
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
