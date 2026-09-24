import { Activity, Sun, Waves, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

const cards: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Zap,
    title: "Electroterapia",
    body: "Corrientes TENS y de estimulación muscular mediante electrodos para aliviar el dolor y reactivar la musculatura.",
  },
  {
    icon: Activity,
    title: "Láser terapéutico",
    body: "Estimula la regeneración de tejidos, reduce la inflamación y acelera la cicatrización de lesiones.",
  },
  {
    icon: Sun,
    title: "Infrarrojo",
    body: "Calor profundo que relaja la musculatura, mejora la circulación y prepara el cuerpo para el ejercicio.",
  },
  {
    icon: Waves,
    title: "Ondas de choque",
    body: "Pulsos acústicos para tendinopatías, fascitis plantar, calcificaciones y dolor crónico.",
  },
];

const photos = [
  {
    src: "/images/tech-laser.png",
    alt: "Aplicación de láser terapéutico en una rodilla",
  },
  {
    src: "/images/tech-shockwave.png",
    alt: "Terapia de ondas de choque en el tendón de Aquiles",
  },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal className="flex flex-col gap-4">
            <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
              Tecnología
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Rehabilitación con equipos de fisioterapia avanzada
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Cada sesión combina la mano experta del fisioterapeuta con el agente
            físico más adecuado para tu lesión. Así reducimos el dolor desde las
            primeras sesiones y recuperas movilidad de forma segura.
          </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.08}>
                <article
                  className="lift flex h-full flex-col gap-4 rounded-3xl bg-surface p-7"
                >
                  <span className="float-y inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </article>
                </Reveal>
              );
            })}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:min-h-48"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width:1024px) 28vw, 90vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
