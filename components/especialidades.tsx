import { Check } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";

const specialties = [
  {
    src: "/images/hero-young.png",
    alt: "Fisioterapeuta aplicando electrodos a un deportista joven",
    title: "Fisioterapia y rehabilitación",
    body: "Nuestro eje principal. Tratamos lesiones musculares, articulares y neurológicas con un plan personalizado.",
    items: [
      "Lesiones deportivas",
      "Post operatorio y fracturas",
      "Dolor de espalda y cuello",
      "Rehabilitación pediátrica y geriátrica",
    ],
  },
  {
    src: "/images/nutricion.png",
    alt: "Consulta de nutrición funcional en la clínica",
    title: "Nutrición funcional",
    body: "Evaluación y planes de alimentación que potencian tu recuperación, tu energía y tu composición corporal.",
    items: [
      "Evaluación de composición corporal",
      "Control de peso",
      "Nutrición deportiva",
      "Alimentación antiinflamatoria",
    ],
  },
  {
    src: "/images/psicologia.png",
    alt: "Sesión de psicología en un consultorio luminoso",
    title: "Psicología",
    body: "El dolor y las lesiones también afectan la mente. Te acompañamos en el proceso emocional de tu recuperación.",
    items: [
      "Manejo del dolor crónico",
      "Ansiedad y estrés",
      "Acompañamiento en rehabilitación",
      "Terapia infantil y familiar",
    ],
  },
];

export function Especialidades() {
  return (
    <section id="especialidades" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Especialidades
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Un solo lugar para cuidar cuerpo, alimentación y mente
          </h2>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Nuestros especialistas trabajan en equipo para que tu tratamiento
            sea completo y coherente.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="h-full">
            <article
              className="lift flex h-full flex-col overflow-hidden rounded-3xl bg-card"
            >
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width:768px) 30vw, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <ul className="mt-auto flex flex-col gap-2 pt-2">
                  {item.items.map((line) => (
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
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
