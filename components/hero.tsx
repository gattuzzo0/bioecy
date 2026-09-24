"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
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
    className: "aspect-[4/5]",
    priority: true,
    float: 14,
    duration: 3.2,
  },
  {
    src: "/images/hero-young.png",
    alt: "Deportista joven con electrodos en el hombro durante una sesión de electroterapia",
    age: "24 años",
    note: "Lesión deportiva",
    className: "aspect-[4/5]",
    priority: true,
    float: -18,
    duration: 3.8,
  },
  {
    src: "/images/hero-senior-2.png",
    alt: "Mujer de 71 años en rehabilitación de rodilla con una fisioterapeuta",
    age: "71 años",
    note: "Recuperación de rodilla",
    className: "col-span-2 aspect-[16/9]",
    priority: false,
    float: 10,
    duration: 4.2,
  },
] as const;

const title = [
  { word: "Vuelve", accent: false },
  { word: "a", accent: false },
  { word: "moverte", accent: false },
  { word: "sin", accent: true },
  { word: "dolor,", accent: true },
  { word: "a", accent: false },
  { word: "cualquier", accent: false },
  { word: "edad.", accent: false },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="inicio" className="relative overflow-hidden bg-surface">
      <span
        className="float-y pointer-events-none absolute -top-16 -left-16 size-64 rounded-full bg-primary/15 blur-2xl"
        aria-hidden
      />
      <span
        className="float-y-delay pointer-events-none absolute top-10 -right-24 size-80 rounded-full bg-brand-green/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pt-14 pb-20 md:pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-center gap-6 lg:col-span-5">
          <motion.p
            className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-primary shadow-sm"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="pulse-dot size-2 rounded-full bg-brand-green" aria-hidden="true" />
            Evaluación y nutrición funcional
          </motion.p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title.map((part, index) => (
              <motion.span
                key={`${part.word}-${index}`}
                className={cn(
                  "mr-[0.28em] inline-block",
                  part.accent && "text-primary",
                )}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {part.word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-lg leading-relaxed text-pretty text-muted-foreground"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            En Bioecy combinamos rehabilitación con tecnología de
            electroterapia, láser, infrarrojo y ondas de choque BTL, junto con
            nutrición y dermatofuncional, para acompañar tu recuperación de forma
            integral.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
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
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <ul
            aria-label="Pacientes de todas las edades"
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {photos.map((photo, index) => (
              <motion.li
                key={photo.src}
                className={cn("group relative", photo.className)}
                initial={reduce ? false : { opacity: 0, scale: 0.86, y: 36 }}
                animate={
                  reduce
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1, y: [0, photo.float, 0] }
                }
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        opacity: { duration: 0.55, delay: 0.15 * index },
                        scale: {
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                          delay: 0.15 * index,
                        },
                        y: {
                          duration: photo.duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.7 + index * 0.2,
                        },
                      }
                }
              >
                <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={photo.priority}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width:1024px) 40vw, 90vw"
                  />
                </div>
                <span className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full bg-background/95 py-1.5 pr-4 pl-1.5 shadow-sm">
                  <span className="rounded-full bg-primary px-2.5 py-1 font-heading text-xs font-bold text-primary-foreground">
                    {photo.age}
                  </span>
                  <span className="text-xs font-semibold">{photo.note}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
