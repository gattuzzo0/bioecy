import Image from "next/image";

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
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[21/9]">
          <Image
            src="/images/clinica-2.png"
            alt="Cabina de fisioterapia con una camilla y equipos de electroterapia, láser e infrarrojo"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 72rem, 90vw"
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-3 md:inset-x-auto md:bottom-6 md:left-6">
            <p className="rounded-2xl bg-background/95 px-5 py-3 font-heading font-bold">
              <span className="text-primary">Electroterapia</span>, láser e
              infrarrojo
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
              Cómo trabajamos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Tu recuperación, paso a paso
            </h2>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              Instalaciones amplias y accesibles, pensadas para niños,
              deportistas y adultos mayores por igual.
            </p>
          </div>

          <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-brand-green pt-5">
                <p className="font-heading text-sm font-bold text-primary">
                  Paso {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
