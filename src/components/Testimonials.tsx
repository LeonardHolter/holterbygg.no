import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-rust">
          KUNDENE VÅRE SIER
        </span>
        <h2 className="mt-2.5 text-[clamp(28px,3.5vw,42px)] font-extrabold font-heading text-ink">
          Fornøyde kunder i Oslo og Viken
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col gap-4">
            <div className="text-2xl tracking-[3px] text-rust">★★★★★</div>
            <p className="italic leading-relaxed text-taupe">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="font-heading text-[15px] font-bold text-ink">
              {t.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
