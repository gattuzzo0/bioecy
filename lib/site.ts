const phoneDigits = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "").replace(
  /\D/g,
  "",
);
const localDigits =
  phoneDigits.startsWith("52") && phoneDigits.length === 12
    ? phoneDigits.slice(2)
    : phoneDigits;
const phoneDisplay =
  localDigits.length === 10
    ? `${localDigits.slice(0, 3)} ${localDigits.slice(3, 6)} ${localDigits.slice(6)}`
    : localDigits;
const whatsappText = encodeURIComponent(
  "Hola Bioecy, me gustaría agendar una valoración",
);

export const site = {
  name: "Bioecy",
  phoneDisplay,
  phoneHref: phoneDigits ? `tel:+${phoneDigits}` : "/#contacto",
  whatsappHref: phoneDigits
    ? `https://wa.me/${phoneDigits}?text=${whatsappText}`
    : "/#contacto",
  address: "Av. 18 de Marzo #210, Col. Jardín, San Luis Potosí, S.L.P.",
  hours: [
    { days: "Lunes a viernes", time: "8:00 – 20:00" },
    { days: "Sábado", time: "9:00 – 14:00" },
  ],
  instagramHref: "https://www.instagram.com/bioecynutricionfuncional/",
  facebookHref: "https://www.facebook.com/Bioecynutricionfuncional",
};

export const navLinks = [
  { href: "/#tecnologias", label: "Tecnologías" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#nutricion", label: "Nutrición" },
  { href: "/#dermatofuncional", label: "Dermatofuncional" },
  { href: "/#suelo-pelvico", label: "Suelo pélvico" },
  { href: "/#clinica", label: "La clínica" },
  { href: "/#contacto", label: "Contacto" },
];
