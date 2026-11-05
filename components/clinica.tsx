import { ClinicaCarousel } from "@/components/clinica-carousel";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Valoración",
    body: "Evaluamos tu postura, movilidad, fuerza y tu historial para entender el origen del problema.",
  },
  {
    title: "Plan personalizado",
    body: "Definimos objetivos, número de sesiones y la combinación de terapias y especialistas que necesitas.",
  },
  {
    title: "Tratamiento y seguimiento",
    body: "Medimos tu progreso en cada etapa y te damos ejercicios para continuar en casa.",
  },
];

export function Clinica() {
  return (
    <section id="clinica" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Reveal className="order-2 mx-auto w-full max-w-[20rem] lg:order-none lg:col-start-1 lg:row-start-1">
          <ClinicaCarousel />
        </Reveal>

        <div className="contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-10">
          <div className="order-1 flex flex-col gap-4 lg:order-none">
            <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
              Cómo trabajamos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Tu recuperación, paso a paso
            </h2>
          </div>

          <div className="order-3 flex flex-col gap-10 lg:order-none">
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              Instalaciones amplias y accesibles, pensadas para niños,
              deportistas y adultos mayores por igual.
            </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="border-t-2 border-brand-green pt-5">
                  <p className="font-heading text-sm font-bold text-primary">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
