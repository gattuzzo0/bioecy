import { Clinica } from "@/components/clinica";
import { Contacto } from "@/components/contacto";
import { Especialidades } from "@/components/especialidades";
import { Hero } from "@/components/hero";
import { Dermatofuncional } from "@/components/dermatofuncional";
import { Nutricion } from "@/components/nutricion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SueloPelvico } from "@/components/suelo-pelvico";
import { Tecnologias } from "@/components/tecnologias";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Tecnologias />
        <Especialidades />
        <Nutricion />
        <Dermatofuncional />
        <SueloPelvico />
        <Clinica />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
