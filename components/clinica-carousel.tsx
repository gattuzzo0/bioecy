"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const clinicPhotos: Slide[] = [
  {
    src: "/images/clinica/IMG_9142.JPEG",
    alt: "Recepción de Bioecy con escritorio de vidrio, sillones grises y la pantalla de la clínica",
    caption: "Recepción",
  },
  {
    src: "/images/clinica/IMG_9145.JPEG",
    alt: "Recepción con sillones grises, escritorio blanco y vitrina de madera",
    caption: "Sala de espera",
  },
  {
    src: "/images/clinica/IMG_9134.JPEG",
    alt: "Sala de rehabilitación con camilla, pelota de ejercicio y estante de equipos",
    caption: "Rehabilitación",
  },
  {
    src: "/images/clinica/IMG_9139.JPEG",
    alt: "Silla de terapia EMS junto a la ventana del consultorio",
    caption: "Silla EMS",
  },
  {
    src: "/images/clinica/IMG_9135.JPEG",
    alt: "Cabina con camilla de madera, gabinete de electroterapia y ventana",
    caption: "Cabina",
  },
  {
    src: "/images/clinica/IMG_9152.JPEG",
    alt: "Camilla azul de tratamiento con equipo de terapia y silla",
    caption: "Tratamiento",
  },
  {
    src: "/images/clinica/IMG_9155.JPEG",
    alt: "Cabina con camilla azul, cortinas blancas y pantalla en la pared",
    caption: "Cabina privada",
  },
  {
    src: "/images/clinica/IMG_9131.JPEG",
    alt: "Consultorio con camilla azul y estante de equipos frente a un muro de madera",
    caption: "Consultorio",
  },
  {
    src: "/images/clinica/IMG_9132.JPEG",
    alt: "Área de terapia con camilla, silla y carrito de equipos",
    caption: "Área de terapia",
  },
  {
    src: "/images/clinica/IMG_9140.JPEG",
    alt: "Camilla de tratamiento negra con almohada azul",
    caption: "Camilla",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const dwellMs = 2000;
const fadeSeconds = 0.9;

const slide = {
  enter: { opacity: 0, zIndex: 2 },
  center: {
    opacity: 1,
    zIndex: 2,
    transition: { duration: fadeSeconds, ease, zIndex: { duration: 0 } },
  },
  exit: {
    opacity: 0,
    zIndex: 1,
    transition: {
      opacity: { duration: 0.01, delay: fadeSeconds },
      zIndex: { duration: 0 },
    },
  },
};

export function ClinicaCarousel() {
  return <PortraitCarousel photos={clinicPhotos} label="Fotos de la clínica" />;
}

export function PortraitCarousel({
  photos,
  label,
}: {
  photos: readonly Slide[];
  label: string;
}) {
  const reduce = useReducedMotion();
  const dragX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);

  const show = useCallback((next: number) => {
    const count = photos.length;
    const normalized = ((next % count) + count) % count;
    setIndex((current) => (normalized === current ? current : normalized));
  }, [photos]);

  useEffect(() => {
    const onChange = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  useEffect(() => {
    if (reduce || paused || hidden) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, dwellMs);
    return () => window.clearInterval(id);
  }, [reduce, paused, hidden, index, photos.length]);

  const photo = photos[index];

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    dragX.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (dragX.current == null) return;
    const delta = event.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(delta) < 48) return;
    show(index + (delta < 0 ? 1 : -1));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      show(index - 1);
    }
  }

  return (
    <div
      className="relative aspect-[9/16] w-full touch-pan-y overflow-hidden rounded-3xl bg-muted"
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        setPaused(false);
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        dragX.current = null;
      }}
      onKeyDown={onKeyDown}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={photo.src}
          className="absolute inset-0"
          variants={reduce ? undefined : slide}
          initial={reduce ? false : "enter"}
          animate={reduce ? { opacity: 1 } : "center"}
          exit={reduce ? { opacity: 0 } : "exit"}
          transition={reduce ? { duration: 0 } : undefined}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="320px"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

      <button
        type="button"
        aria-label="Foto anterior"
                onClick={() => show(index - 1)}
        className="absolute top-[42%] left-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-background focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ChevronLeft className="size-5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Foto siguiente"
        onClick={() => show(index + 1)}
        className="absolute top-[42%] right-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-background focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>

      <div className="absolute inset-x-3 bottom-3 z-10 flex justify-center">
        <div
          className="flex max-w-full items-center gap-1 rounded-full bg-background/90 px-2.5 py-2"
          role="tablist"
          aria-label="Elegir foto"
        >
          {photos.map((item, photoIndex) => {
            const active = photoIndex === index;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={item.caption}
                onClick={() => show(photoIndex)}
                className="grid size-4 place-items-center"
              >
                <span
                  className={cn(
                    "h-1.5 rounded-full transition-[width,background-color] duration-500",
                    active
                      ? "w-4 bg-primary"
                      : "w-1.5 bg-foreground/30 hover:bg-foreground/55",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {photo.caption}. Foto {index + 1} de {photos.length}.
      </p>
    </div>
  );
}
