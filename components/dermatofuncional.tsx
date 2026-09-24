import { Check } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const items = [
  "Reducción de talla en cintura",
  "Reducción de talla en piernas",
  "Flacidez en cintura y piernas",
  "Sin cirugía ni tiempo de baja",
];

export function Dermatofuncional() {
  return (
    <section id="dermatofuncional" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
          <Image
            src="/images/dermatofuncional-cintura.png"
            alt="Aplicación de terapia de reducción de talla en la cintura y la cadera"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width:1024px) 40vw, 90vw"
          />
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-6">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Dermatofuncional
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Reducción de talla y flacidez
          </h2>
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
        </Reveal>
      </div>
    </section>
  );
}
