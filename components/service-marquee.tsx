const items = [
  "Electroterapia",
  "Láser terapéutico",
  "Infrarrojo",
  "Ondas de choque",
  "Nutrición",
  "Suelo pélvico",
  "Dermatofuncional",
];

export function ServiceMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="sticky top-18 z-40 overflow-hidden border-y border-border/70 bg-primary text-primary-foreground">
      <ul className="marquee-track flex w-max items-center gap-10 py-4">
        {loop.map((label, index) => (
          <li
            key={`${label}-${index}`}
            className="flex shrink-0 items-center gap-10 font-heading text-sm font-bold tracking-wide whitespace-nowrap"
          >
            <span>{label}</span>
            <span className="size-2 rounded-full bg-brand-green" aria-hidden />
          </li>
        ))}
      </ul>
    </div>
  );
}
