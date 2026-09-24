"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { useLogoIntro } from "@/components/logo-intro";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { landed, slotRef } = useLogoIntro();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
        <Link href="/#inicio" aria-label="Bioecy, ir al inicio">
          {landed ? (
            <BrandLogo className="h-12" />
          ) : (
            <span
              ref={slotRef}
              className="block h-12 w-[6.5rem]"
              aria-hidden
            />
          )}
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-5 text-sm font-semibold text-foreground/80 lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "hidden h-10 rounded-full px-5 font-semibold lg:inline-flex",
          )}
        >
          Agendar cita
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
          <span className="sr-only">
            {open ? "Cerrar menú" : "Abrir menú"}
          </span>
        </button>
      </div>

      <nav
        id="menu-movil"
        aria-label="Móvil"
        className={cn("border-t bg-background lg:hidden", !open && "hidden")}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 font-semibold hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "mt-2 h-11 w-full rounded-full font-semibold",
            )}
            onClick={() => setOpen(false)}
          >
            Agendar cita
          </a>
        </div>
      </nav>
    </header>
  );
}
