import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Contacto() {
  return (
    <section id="contacto" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Contacto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Da el primer paso hacia tu recuperación
          </h2>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Escríbenos y agenda una valoración. Te orientamos sobre el
            tratamiento ideal para ti o para tu familiar.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "h-12 rounded-full px-7 text-base font-semibold",
              )}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full bg-background px-7 text-base font-semibold",
              )}
            >
              <Phone className="size-5" aria-hidden="true" />
              Llamar
            </a>
          </div>
        </div>

        <address className="flex flex-col gap-6 rounded-3xl bg-card p-8 not-italic">
          <div className="flex gap-4">
            <MapPin className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <p className="font-heading font-bold">Dirección</p>
              <p className="text-muted-foreground">{site.address}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <p className="font-heading font-bold">Teléfono</p>
              <a
                href={site.phoneHref}
                className="text-muted-foreground hover:text-primary"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="font-heading font-bold">Horario</p>
              <ul className="flex flex-col gap-1 text-muted-foreground">
                {site.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4">
                    <span>{row.days}</span>
                    <span className="font-semibold text-foreground">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </address>
      </div>
    </section>
  );
}
