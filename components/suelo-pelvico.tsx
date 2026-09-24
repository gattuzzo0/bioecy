import { Lock } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const benefits = [
  {
    title: "Incontinencia urinaria",
    body: "Fortalece el suelo pélvico tras el parto, la menopausia o una cirugía de próstata.",
  },
  {
    title: "Disfunción eréctil",
    body: "Mejora la circulación y el tono muscular de la zona pélvica de forma no invasiva.",
  },
  {
    title: "Sin desvestirse",
    body: "El paciente permanece sentado y vestido durante la sesión, en un espacio privado.",
  },
];

export function SueloPelvico() {
  return (
    <section
      id="suelo-pelvico"
      className="bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/suelo-pelvico-3.png"
            alt="Paciente vestida en la silla de suelo pélvico, viendo una pantalla en un consultorio privado"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 40vw, 90vw"
          />
          <p className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 px-5 py-3 font-heading font-bold text-foreground md:inset-x-auto md:bottom-6 md:left-6">
            Espacio <span className="text-primary">privado</span> para suelo
            pélvico
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="inline-flex items-center gap-2 font-heading text-sm font-bold tracking-widest text-brand-green uppercase">
            <Lock className="size-4" aria-hidden="true" />
            Tratamiento discreto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Silla de terapia para suelo pélvico
          </h2>
          <p className="text-lg leading-relaxed text-pretty text-primary-foreground/85">
            Tecnología de estimulación que trabaja miles de contracciones
            musculares por sesión. Una solución cómoda, confidencial y sin dolor
            para mujeres y hombres.
          </p>
          <dl className="flex flex-col gap-5 border-t border-primary-foreground/20 pt-6">
            {benefits.map((item) => (
              <div key={item.title}>
                <dt className="font-heading text-lg font-bold">{item.title}</dt>
                <dd className="text-primary-foreground/80">{item.body}</dd>
              </div>
            ))}
          </dl>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "mt-2 h-12 w-fit rounded-full bg-brand-green px-7 text-base font-semibold text-brand-green-foreground hover:bg-brand-green/90",
            )}
          >
            Solicitar información confidencial
          </a>
        </div>
      </div>
    </section>
  );
}
