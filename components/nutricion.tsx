import { Check } from "lucide-react";

import { PortraitCarousel } from "@/components/clinica-carousel";
import { Reveal } from "@/components/reveal";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const photos = [
  {
    src: "/images/nutricion/IMG_9142.JPEG",
    alt: "Consultorio de nutrición con escritorio de vidrio, sillones y la pantalla de Bioecy",
    caption: "Consulta",
  },
  {
    src: "/images/nutricion/IMG_9143.JPEG",
    alt: "Área de evaluación corporal con el equipo InBody al fondo del consultorio",
    caption: "Evaluación",
  },
  {
    src: "/images/nutricion/IMG_9147.JPEG",
    alt: "Báscula InBody frente al muro de mármol y un espejo con luz",
    caption: "InBody",
  },
  {
    src: "/images/nutricion/IMG_9146.JPEG",
    alt: "Equipo InBody de composición corporal sobre una alfombra",
    caption: "Composición corporal",
  },
];

const items = [
  "Evaluación nutricional",
  "Composición corporal",
  "Alimentación antiinflamatoria",
  "Hábitos y seguimiento",
];

export function Nutricion() {
  return (
    <section id="nutricion" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Reveal className="order-2 mx-auto w-full max-w-[20rem] lg:order-none lg:col-start-1 lg:row-start-1">
          <PortraitCarousel photos={photos} label="Fotos de nutrición" />
        </Reveal>
        <div className="contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-6">
          <div className="order-1 flex flex-col gap-4 lg:order-none">
            <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
              Nutrición
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Consulta con nutrióloga
            </h2>
          </div>
          <div className="order-3 flex flex-col gap-6 lg:order-none">
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
          </div>
        </div>
      </div>
    </section>
  );
}
