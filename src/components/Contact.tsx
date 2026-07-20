import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-navy px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-5">
          <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-[#e0a97a]">
            TA KONTAKT
          </span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold font-heading text-white">
            Klar for et gratis prosjektbefaring?
          </h2>
          <p className="max-w-md text-[17px] leading-relaxed text-[#c9d0d9]">
            Fortell oss om prosjektet ditt, så tar vi kontakt for en
            uforpliktende befaring – helt gratis.
          </p>
          <div className="mt-4 flex flex-col gap-3.5 font-heading text-base font-semibold">
            <a href="mailto:edward.holter@tchas.no" className="text-white hover:text-rust">
              edward.holter@tchas.no
            </a>
            <a href="tel:+4798252357" className="text-white hover:text-rust">
              982 52 357
            </a>
            <span className="font-normal text-[15px] text-[#c9d0d9]">
              Oslo og omegn (Viken)
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
