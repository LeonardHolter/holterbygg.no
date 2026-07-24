import Image from "next/image";

const stats = [
  { value: "30+", label: "års erfaring" },
  { value: "100%", label: "fornøyde kunder" },
  { value: "Gratis", label: "befaring" },
];

export default function About() {
  return (
    <section
      id="om"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16"
    >
      <div className="relative aspect-4/5 w-full">
        <Image
          src="/images/about.jpg"
          alt="Holter Bygg-teamet på befaring"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-rust">
          OM HOLTER BYGG
        </span>
        <h2 className="text-[clamp(26px,3vw,36px)] font-extrabold font-heading text-ink">
          Håndverk du kan stole på
        </h2>
        <p className="text-[17px] leading-relaxed text-taupe">
          Holter Bygg er en totalentreprenør med lang erfaring fra prosjekter
          i Oslo og Viken. Vi er sentralt godkjent og BVN-sertifisert for
          våtrom, og har et solid fagmiljø av snekkere, murere og tømrere med
          fagbrev.
        </p>
        <p className="text-[17px] leading-relaxed text-taupe">
          Enten det er nybygg, tilbygg, totalrenovering eller et nytt bad – vi
          tar ansvar for hele prosessen, leverer til avtalt tid og pris, og
          gir deg tydelig dokumentasjon underveis.
        </p>
        <div className="mt-3 flex gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-[32px] font-extrabold text-navy">
                {stat.value}
              </div>
              <div className="text-sm text-stone">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
