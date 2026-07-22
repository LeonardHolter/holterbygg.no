import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[640px]">
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
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-28 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-32">
        <div className="animate-fade-up flex flex-col items-start gap-6">
          <span className="font-heading text-[13px] font-semibold tracking-[0.12em] text-[#e0d9c8]">
            TOTALENTREPRENØR · OSLO OG VIKEN
          </span>
          <h1 className="max-w-2xl text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.05] text-white font-heading text-balance">
            Solid håndverk fra grunnmur til tak
          </h1>
          <p className="max-w-xl text-[18px] leading-relaxed text-[#e6e1d6]">
            Holter Bygg er din totalentreprenør for nybygg, tilbygg, renovering
            og bad. Vi tar hånd om hele prosjektet – til avtalt tid og pris.
          </p>
          <div className="mt-1 flex flex-wrap gap-4">
            <a
              href="#tjenester"
              className="border-[1.5px] border-[#e6e1d6] px-7 py-4 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              SE TJENESTER
            </a>
            <a
              href="#prosjekter"
              className="px-2 py-4 font-heading text-[15px] font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Se prosjekter →
            </a>
          </div>
        </div>
        <div className="animate-fade-up w-full shadow-2xl lg:max-w-md lg:justify-self-end">
          <ContactForm
            compact
            title="Få gratis befaring"
            description="Fortell oss kort om prosjektet ditt, så tar vi kontakt for en uforpliktende befaring."
          />
        </div>
      </div>
    </section>
  );
}
