import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const photos = [
  {
    src: "/images/hero-child.png",
    alt: "Niña de 8 años practicando equilibrio junto a una fisioterapeuta",
    age: "8 años",
    note: "Equilibrio y coordinación",
    delay: "150ms",
    className: "aspect-[4/5]",
    priority: true,
  },
  {
    src: "/images/hero-young.png",
    alt: "Deportista joven con electrodos en el hombro durante una sesión de electroterapia",
    age: "24 años",
    note: "Lesión deportiva",
    delay: "270ms",
    className: "aspect-[4/5]",
    priority: true,
  },
  {
    src: "/images/hero-senior-2.png",
    alt: "Mujer de 71 años en rehabilitación de rodilla con una fisioterapeuta",
    age: "71 años",
    note: "Recuperación de rodilla",
    delay: "390ms",
    className: "col-span-2 aspect-[16/9]",
    priority: false,
  },
] as const;

export function Hero() {
  return (
    <section id="inicio" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-14 pb-20 md:pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="rise-in flex flex-col justify-center gap-6 lg:col-span-5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="size-2 rounded-full bg-brand-green" aria-hidden="true" />
            Fisioterapia y rehabilitación física
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            Vuelve a moverte <span className="text-primary">sin dolor</span>, a
            cualquier edad.
          </h1>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            En Bioecy combinamos rehabilitación con tecnología de
            electroterapia, láser, infrarrojo y ondas de choque, junto con
            nutrición y psicología, para acompañar tu recuperación de forma
            integral.
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
              Agenda tu valoración
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="/#especialidades"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full bg-background px-7 text-base font-semibold",
              )}
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul
            aria-label="Pacientes de todas las edades"
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {photos.map((photo) => (
              <li
                key={photo.src}
                className={cn(
                  "rise-in relative overflow-hidden rounded-3xl",
                  photo.className,
                )}
                style={{ animationDelay: photo.delay }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={photo.priority}
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 90vw"
                />
                <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-background/95 py-1.5 pr-4 pl-1.5 shadow-sm">
                  <span className="rounded-full bg-primary px-2.5 py-1 font-heading text-xs font-bold text-primary-foreground">
                    {photo.age}
                  </span>
                  <span className="text-xs font-semibold">{photo.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
