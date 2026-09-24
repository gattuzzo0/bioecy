import { Clinica } from "@/components/clinica";
import { Contacto } from "@/components/contacto";
import { Especialidades } from "@/components/especialidades";
import { Hero } from "@/components/hero";
import { Dermatofuncional } from "@/components/dermatofuncional";
import { LogoIntro } from "@/components/logo-intro";
import { Nutricion } from "@/components/nutricion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ServiceMarquee } from "@/components/service-marquee";
import { SueloPelvico } from "@/components/suelo-pelvico";
import { Tecnologias } from "@/components/tecnologias";
import { Ubicacion } from "@/components/ubicacion";

export default function Home() {
  return (
    <LogoIntro>
      <SiteHeader />
      <main>
        <Hero />
        <ServiceMarquee />
        <Tecnologias />
        <Especialidades />
        <Nutricion />
        <Dermatofuncional />
        <SueloPelvico />
        <Clinica />
        <Contacto />
        <Ubicacion />
      </main>
      <SiteFooter />
    </LogoIntro>
  );
}
