import Image from "next/image";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="tjenester" className="mx-auto max-w-6xl px-6 pb-10 pt-24">
      <div className="mb-14 max-w-xl">
        <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-rust">
          VÅRE TJENESTER
        </span>
        <h2 className="mt-2.5 text-[clamp(28px,3.5vw,42px)] font-extrabold font-heading text-ink">
          Én entreprenør. Hele prosjektet.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.id} className="flex min-h-[220px] flex-col gap-3 bg-cream p-8">
            <div className="relative aspect-16/10 w-full">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-2 text-[19px] font-bold font-heading text-ink">
              {s.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-stone">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
