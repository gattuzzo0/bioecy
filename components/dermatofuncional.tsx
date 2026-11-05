import { Check } from "lucide-react";

import { PortraitCarousel } from "@/components/clinica-carousel";
import { Reveal } from "@/components/reveal";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const photos = [
  {
    src: "/images/dermatofuncional/IMG_9155.JPEG",
    alt: "Cabina de dermatofuncional con camilla azul, cortinas blancas y pantalla",
    caption: "Cabina",
  },
  {
    src: "/images/dermatofuncional/IMG_9152.JPEG",
    alt: "Camilla azul de tratamiento junto al equipo de dermatofuncional",
    caption: "Camilla",
  },
  {
    src: "/images/dermatofuncional/IMG_9154.JPEG",
    alt: "Equipo de dermatofuncional con pantalla y mangueras sobre un carrito",
    caption: "Equipo",
  },
  {
    src: "/images/dermatofuncional/IMG_9181.JPEG",
    alt: "Aplicadores del equipo de dermatofuncional con pantalla y cables",
    caption: "Aplicadores",
  },
  {
    src: "/images/dermatofuncional/IMG_9182.JPEG",
    alt: "Carrito con equipos de electroterapia y dermatofuncional",
    caption: "Equipos",
  },
];

const items = [
  "Reducción de talla en cintura",
  "Reducción de talla en piernas",
  "Flacidez en cintura y piernas",
  "Sin cirugía ni tiempo de baja",
];

export function Dermatofuncional() {
  return (
    <section id="dermatofuncional" className="bg-surface py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Reveal className="order-2 mx-auto w-full max-w-[20rem] lg:order-none lg:col-start-1 lg:row-start-1">
          <PortraitCarousel photos={photos} label="Fotos de dermatofuncional" />
        </Reveal>
        <div className="contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-6">
          <div className="order-1 flex flex-col gap-4 lg:order-none">
            <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
              Dermatofuncional
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Reducción de talla y flacidez
            </h2>
          </div>
          <div className="order-3 flex flex-col gap-6 lg:order-none">
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Terapia de reducción de talla y flacidez en cintura y piernas,
            sin cirugía.
          </p>
          <ul className="flex flex-col gap-2">
            {items.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 size-4 text-brand-green"
                  strokeWidth={3}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold">{line}</span>
              </li>
            ))}
          </ul>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "mt-2 h-12 w-fit rounded-full px-7 text-base font-semibold",
            )}
          >
            Agendar tratamiento
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
