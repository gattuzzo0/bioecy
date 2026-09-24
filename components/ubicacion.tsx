"use client";

import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const mapsQuery = encodeURIComponent(site.mapsQuery);
const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapsQuery}&z=16&hl=es&output=embed`;
const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

function directionsHref(origin?: { latitude: number; longitude: number }) {
  const destination = `destination=${mapsQuery}`;
  const from = origin
    ? `origin=${origin.latitude},${origin.longitude}&`
    : "";
  return `https://www.google.com/maps/dir/?api=1&${from}${destination}`;
}

export function Ubicacion() {
  const [status, setStatus] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  function openDirections() {
    if (!navigator.geolocation) {
      window.open(directionsHref(), "_blank", "noopener,noreferrer");
      setStatus("Abre el mapa y elige desde dónde sales.");
      return;
    }

    setPending(true);
    setStatus("Buscando tu ubicación…");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPending(false);
        setStatus(null);
        window.open(
          directionsHref(position.coords),
          "_blank",
          "noopener,noreferrer",
        );
      },
      () => {
        setPending(false);
        setStatus("No pudimos usar tu ubicación. Elige el punto de salida en el mapa.");
        window.open(directionsHref(), "_blank", "noopener,noreferrer");
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60_000 },
    );
  }

  return (
    <section id="ubicacion" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-5">
        <Reveal className="flex flex-col gap-6 lg:col-span-2">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Ubicación
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Visítanos en la clínica
          </h2>
          <p className="flex gap-3 text-lg leading-relaxed text-pretty text-muted-foreground">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <span>{site.address}</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className={cn(
                buttonVariants(),
                "h-12 rounded-full px-7 text-base font-semibold",
              )}
              disabled={pending}
              onClick={openDirections}
            >
              <Navigation className="size-5" aria-hidden="true" />
              Cómo llegar
            </button>
            <a
              href={mapsSearchHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full bg-background px-7 text-base font-semibold",
              )}
            >
              Abrir en el mapa
            </a>
          </div>
          <p className="min-h-5 text-sm text-muted-foreground" aria-live="polite">
            {status}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-3">
          <iframe
            title="Mapa de Bioecy en la colonia Jardín, San Luis Potosí"
            src={mapsEmbedSrc}
            className="h-80 w-full rounded-3xl border border-border md:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
