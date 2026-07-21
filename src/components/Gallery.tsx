import Image from "next/image";
import { gallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="prosjekter" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-rust">
            PROSJEKTER
          </span>
          <h2 className="mt-2.5 text-[clamp(28px,3.5vw,42px)] font-extrabold font-heading text-cream">
            Noe av det vi har bygget
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <div key={g.id} className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={g.image}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
