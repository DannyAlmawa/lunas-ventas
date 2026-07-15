type FloatingWhatsAppButtonProps = {
  href: string;
};

export function FloatingWhatsAppButton({ href }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp sobre LUNA"
      className="fixed bottom-20 right-4 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-champagne/45 bg-cacao text-white-warm shadow-glow transition duration-300 hover:scale-105 hover:bg-deep-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cacao sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6 sm:h-[26px] sm:w-[26px]"
        fill="currentColor"
      >
        <path d="M16.03 4.1A11.82 11.82 0 0 0 5.82 21.9L4.3 27.53l5.77-1.5A11.82 11.82 0 1 0 16.03 4.1Zm0 21.62a9.77 9.77 0 0 1-4.97-1.36l-.36-.21-3.42.89.91-3.34-.23-.37a9.74 9.74 0 1 1 8.07 4.39Zm5.36-7.32c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.95 1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46a8.85 8.85 0 0 1-1.63-2.02c-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.35Z" />
      </svg>
    </a>
  );
}
