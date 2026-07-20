const items = [
  "Sentral godkjenning",
  "BVN-sertifisert våtrom",
  "Fagbrev-håndverkere",
  "Gratis, uforpliktende befaring",
];

export default function TrustStrip() {
  return (
    <section className="bg-navy px-6 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-7">
        {items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2.5 font-heading text-sm font-semibold text-cream"
          >
            <span className="h-2 w-2 shrink-0 bg-rust" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
