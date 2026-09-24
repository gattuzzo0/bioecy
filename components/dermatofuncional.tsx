import { Check } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const items = [
  "Radiofrecuencia facial y corporal",
  "Firmeza y flacidez",
  "Estimulación de colágeno",
  "Sin cirugía ni tiempo de baja",
];

export function Dermatofuncional() {
  return (
    <section id="dermatofuncional" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
          <Image
            src="/images/belleza-radiofrecuencia.png"
            alt="Aplicación de radiofrecuencia en el óvalo facial para recuperar firmeza"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 40vw, 90vw"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Dermatofuncional
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Firmeza de la piel sin cirugía
          </h2>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Recupera la firmeza de tu piel sin cirugías dolorosas. La flacidez
            aparece cuando las células dejan de producir colágeno y los tejidos
            pierden soporte.
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
    </section>
  );
}
