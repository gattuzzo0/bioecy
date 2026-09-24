import { site } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-brand-green text-brand-green-foreground hover:bg-brand-green/90"
    >
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.76.46 3.48 1.34 5L2 22l5.27-1.38a9.86 9.86 0 0 0 4.77 1.21h.01c5.46 0 9.89-4.43 9.89-9.89C22 6.43 17.5 2 12.04 2m0 18.07h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.23 8.22m4.52-6.16c-.25-.12-1.47-.72-1.7-.81s-.39-.12-.56.13-.64.8-.79.97-.29.2-.54.07a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41s.04-.31-.02-.43c-.07-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.65.31s-.86.84-.86 2.04.88 2.37 1 2.53c.12.17 1.75 2.67 4.24 3.74 1.49.64 2.07.7 2.81.59.43-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28"
        />
      </svg>
    </a>
  );
}
