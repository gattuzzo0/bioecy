import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Bioecy",
  description:
    "Aviso de privacidad de la clínica Bioecy conforme a la LFPDPPP.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-surface py-20 md:py-28">
        <article className="mx-auto flex max-w-3xl flex-col gap-6 px-5">
          <p className="font-heading text-sm font-bold tracking-widest text-primary uppercase">
            Legal
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Aviso de privacidad
          </h1>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            En cumplimiento de la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares (LFPDPPP), Bioecy informa lo
            siguiente.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">
              Responsable
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              El responsable del tratamiento de sus datos personales es Bioecy,
              con domicilio en {site.address}.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">
              Datos que recabamos
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Nombre, número telefónico y el contenido de los mensajes que nos
              envíe por WhatsApp o llamada para agendar o consultar un
              tratamiento.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">
              Finalidades
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Utilizamos estos datos únicamente para responder su solicitud,
              agendar una valoración y dar seguimiento a su atención. No
              realizamos transferencias de datos a terceros.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">
              Derechos ARCO
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Puede ejercer sus derechos de acceso, rectificación, cancelación u
              oposición escribiendo al WhatsApp{" "}
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                {site.phoneDisplay}
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">
              Cookies y analítica
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              En el sitio de producción podemos cargar analítica anónima de
              Vercel para medir visitas. No se usa para elaborar perfiles
              comerciales.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
