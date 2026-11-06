"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const vitamins = [
  {
    name: "Women Balance 40+",
    line: "Para mujeres a partir de los 40.",
    src: "/images/vitaminas/women-balance40.png",
    alt: "Frasco de suplemento Bioecy Women Balance 40+",
  },
  {
    name: "Flex",
    line: "Para acompañar tu movimiento.",
    src: "/images/vitaminas/flex.jpg",
    alt: "Frasco de suplemento Bioecy Flex",
  },
  {
    name: "Omega 3",
    line: "Ácidos grasos omega 3.",
    src: "/images/vitaminas/omega-3.jpg",
    alt: "Frasco de suplemento Bioecy Omega 3",
  },
] as const;

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

function VitaminCarousel() {
  const reduce = useReducedMotion();
  const dragX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);

  const show = useCallback((next: number) => {
    const count = vitamins.length;
    const normalized = ((next % count) + count) % count;
    setIndex((current) => (normalized === current ? current : normalized));
  }, []);

  useEffect(() => {
    const onChange = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  useEffect(() => {
    if (reduce || paused || hidden) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % vitamins.length);
    }, dwellMs);
    return () => window.clearInterval(id);
  }, [reduce, paused, hidden, index]);

  const vitamin = vitamins[index];

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
      className="relative aspect-[59/128] w-full touch-pan-y overflow-hidden rounded-3xl bg-card shadow-sm"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Suplementos que ofrecemos"
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
          key={vitamin.src}
          className="absolute inset-0"
          variants={reduce ? undefined : slide}
          initial={reduce ? false : "enter"}
          animate={reduce ? { opacity: 1 } : "center"}
          exit={reduce ? { opacity: 0 } : "exit"}
          transition={reduce ? { duration: 0 } : undefined}
        >
          <Image
            src={vitamin.src}
            alt={vitamin.alt}
            fill
            className="object-contain"
            sizes="320px"
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label="Suplemento anterior"
        onClick={() => show(index - 1)}
        className="absolute top-1/2 left-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-background focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ChevronLeft className="size-5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Suplemento siguiente"
        onClick={() => show(index + 1)}
        className="absolute top-1/2 right-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-background focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>

      <div className="absolute inset-x-3 bottom-3 z-10 flex justify-center">
        <div
          className="flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-2"
          role="tablist"
          aria-label="Elegir suplemento"
        >
          {vitamins.map((item, vitaminIndex) => {
            const active = vitaminIndex === index;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={item.name}
                onClick={() => show(vitaminIndex)}
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
        {vitamin.name}. Suplemento {index + 1} de {vitamins.length}.
      </p>
    </div>
  );
}

export function Vitaminas() {
  return (
    <section id="suplementos" className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Reveal className="order-2 mx-auto w-full max-w-[20rem] lg:order-none lg:col-start-1 lg:row-start-1">
          <VitaminCarousel />
        </Reveal>
        <div className="contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-6">
          <div className="order-1 flex flex-col gap-4 lg:order-none">
            <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
              Suplementos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Women Balance 40+, Flex y Omega 3
            </h2>
          </div>
          <div className="order-3 flex flex-col gap-6 lg:order-none">
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              Complementos que ofrecemos junto con tu consulta de nutrición.
              Te orientamos para elegir el que va con tu plan.
            </p>
            <ul className="flex flex-col gap-2">
              {vitamins.map((item) => (
                <li key={item.name} className="text-sm font-semibold">
                  {item.name}
                  <span className="mt-0.5 block font-normal text-muted-foreground">
                    {item.line}
                  </span>
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
              Preguntar por suplementos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
