import { Check } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const items = [
  "Evaluación nutricional",
  "Composición corporal",
  "Alimentación antiinflamatoria",
  "Hábitos y seguimiento",
];

export function Nutricion() {
  return (
    <section id="nutricion" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/nutricion.png"
            alt="Consulta con nutrióloga en la clínica Bioecy"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width:1024px) 40vw, 90vw"
          />
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-6">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Nutrición
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Consulta con nutrióloga
          </h2>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Evaluación y planes de alimentación que potencian tu recuperación,
            tu energía y tu composición corporal.
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
            Agendar consulta
          </a>
        </Reveal>
      </div>
    </section>
  );
}
