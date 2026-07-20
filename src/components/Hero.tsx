import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative grid min-h-[640px] grid-cols-1">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Byggeplass for nytt hus under oppføring"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(20,26,34,0.55)] to-[rgba(20,26,34,0.72)]" />
      </div>
      <div className="animate-fade-up relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 pb-24 pt-36">
        <span className="font-heading text-[13px] font-semibold tracking-[0.12em] text-[#e0d9c8]">
          TOTALENTREPRENØR · OSLO OG VIKEN
        </span>
        <h1 className="max-w-3xl text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.05] text-white font-heading text-balance">
          Solid håndverk fra grunnmur til tak
        </h1>
        <p className="max-w-xl text-[19px] leading-relaxed text-[#e6e1d6]">
          Holter Bygg er din totalentreprenør for nybygg, tilbygg, renovering
          og bad. Vi tar hånd om hele prosjektet – til avtalt tid og pris.
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="bg-rust px-7 py-4 font-heading text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-rust-hover"
          >
            BESTILL GRATIS BEFARING
          </a>
          <a
            href="#tjenester"
            className="border-[1.5px] border-[#e6e1d6] px-7 py-4 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            SE TJENESTER
          </a>
        </div>
      </div>
    </section>
  );
}
