import Image from "next/image";
import Link from "next/link";

import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-bioecy.png"
              alt="Bioecy, evaluación y nutrición funcional"
              width={500}
              height={230}
              className="h-16 w-auto"
            />
            <p className="max-w-xs text-sm text-muted-foreground">
              Fisioterapia, rehabilitación, nutrición y dermatofuncional para todas
              las edades.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-3">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full bg-surface text-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram de Bioecy"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full bg-surface text-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook de Bioecy"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <Link href="/aviso-de-privacidad" className="hover:text-primary">
            Aviso de privacidad
          </Link>
          <p>© {year} Bioecy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2m0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2M17.2 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 8.5V6.8c0-.7.5-1 1.1-1h1.4V3h-2.3C12.2 3 11 4.5 11 6.6v1.9H9v3h2V21h3.5v-9.5h2.3l.4-3z"
      />
    </svg>
  );
}
