import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Slik behandler Holter Bygg personopplysninger som samles inn via nettsiden og kontaktskjemaet.",
  alternates: { canonical: "/personvern" },
};

export default function PersonvernPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <Header />
      <main>
        {/* Title */}
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-10">
          <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-rust">
            PERSONVERN
          </span>
          <h1 className="mt-2.5 text-[clamp(30px,4vw,46px)] font-extrabold font-heading text-ink">
            Personvernerklæring
          </h1>
          <p className="mt-3 text-[15px] text-stone">
            Sist oppdatert 22. juli 2026
          </p>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div className="flex flex-col gap-10">
            <Block title="1. Behandlingsansvarlig">
              <p>
                Holter Bygg er behandlingsansvarlig for personopplysningene som
                samles inn gjennom denne nettsiden. Har du spørsmål om hvordan
                vi behandler personopplysninger, kan du kontakte oss:
              </p>
              <ul>
                <li>
                  E-post:{" "}
                  <a
                    href="mailto:edward.holter@tchas.no"
                    className="text-navy underline underline-offset-2 hover:text-rust"
                  >
                    edward.holter@tchas.no
                  </a>
                </li>
                <li>
                  Telefon:{" "}
                  <a
                    href="tel:+4798252357"
                    className="text-navy underline underline-offset-2 hover:text-rust"
                  >
                    982 52 357
                  </a>
                </li>
                <li>Område: Oslo og Viken</li>
              </ul>
            </Block>

            <Block title="2. Hvilke opplysninger vi samler inn">
              <p>
                Vi samler inn opplysninger du selv oppgir, og enkelte
                opplysninger som samles inn automatisk.
              </p>
              <p className="font-semibold text-ink">
                Opplysninger du oppgir via kontaktskjemaet:
              </p>
              <ul>
                <li>Navn</li>
                <li>E-postadresse</li>
                <li>Informasjon du skriver om prosjektet ditt</li>
              </ul>
              <p className="font-semibold text-ink">
                Opplysninger som samles inn automatisk:
              </p>
              <ul>
                <li>
                  Informasjonskapsler og lignende teknologi for måling av
                  annonsering (se punkt 4).
                </li>
              </ul>
              <p>
                Vi ber deg om ikke å sende sensitive personopplysninger via
                kontaktskjemaet.
              </p>
            </Block>

            <Block title="3. Formål og rettslig grunnlag">
              <p>
                <span className="font-semibold text-ink">
                  Kontakt og oppfølging:
                </span>{" "}
                Vi bruker opplysningene fra kontaktskjemaet til å svare på
                henvendelsen din, gi tilbud og følge opp et eventuelt oppdrag.
                Rettslig grunnlag er vår berettigede interesse i å besvare
                henvendelser (personvernforordningen art. 6 nr. 1 bokstav f),
                og der det er aktuelt, for å inngå eller oppfylle en avtale
                (art. 6 nr. 1 bokstav b).
              </p>
              <p>
                <span className="font-semibold text-ink">
                  Markedsføring og måling:
                </span>{" "}
                Vi bruker verktøy for å måle effekten av annonsering. Der dette
                baseres på informasjonskapsler som ikke er strengt nødvendige,
                er grunnlaget samtykke (art. 6 nr. 1 bokstav a).
              </p>
            </Block>

            <Block title="4. Informasjonskapsler (cookies) og analyse">
              <p>
                Nettsiden bruker Google Ads (gtag) for å måle konverteringer –
                for eksempel når noen sender inn kontaktskjemaet etter å ha
                klikket på en annonse. Disse verktøyene kan sette
                informasjonskapsler i nettleseren din.
              </p>
              <p>
                Du kan når som helst slette eller blokkere informasjonskapsler i
                nettleserinnstillingene dine. Vær oppmerksom på at enkelte
                funksjoner da kan fungere dårligere.
              </p>
            </Block>

            <Block title="5. Databehandlere – hvem vi deler opplysninger med">
              <p>
                For å levere tjenestene våre bruker vi enkelte leverandører som
                behandler personopplysninger på våre vegne:
              </p>
              <ul>
                <li>
                  <span className="font-semibold text-ink">Resend</span> –
                  levering av e-post fra kontaktskjemaet.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Google (Google Ads)
                  </span>{" "}
                  – måling av annonsering og konverteringer.
                </li>
                <li>
                  <span className="font-semibold text-ink">Vercel</span> – drift
                  og hosting av nettsiden.
                </li>
              </ul>
              <p>
                Vi selger ikke personopplysninger. Enkelte av leverandørene kan
                behandle opplysninger utenfor EU/EØS. I slike tilfeller sikrer vi
                overføringen med lovlige overføringsgrunnlag, som EUs
                standardavtaler (SCC).
              </p>
            </Block>

            <Block title="6. Lagringstid">
              <p>
                Vi lagrer personopplysninger så lenge det er nødvendig for
                formålet de ble samlet inn for. Henvendelser via kontaktskjemaet
                oppbevares så lenge det er nødvendig for å følge opp dialogen
                eller et oppdrag, og slettes når de ikke lenger er nødvendige.
              </p>
            </Block>

            <Block title="7. Dine rettigheter">
              <p>Du har rett til å:</p>
              <ul>
                <li>få innsyn i hvilke personopplysninger vi har om deg</li>
                <li>få rettet uriktige opplysninger</li>
                <li>få slettet opplysninger</li>
                <li>be om begrensning av behandlingen</li>
                <li>protestere mot behandlingen</li>
                <li>få utlevert opplysningene dine (dataportabilitet)</li>
                <li>trekke tilbake et samtykke du har gitt</li>
              </ul>
              <p>
                For å bruke rettighetene dine kan du kontakte oss på{" "}
                <a
                  href="mailto:edward.holter@tchas.no"
                  className="text-navy underline underline-offset-2 hover:text-rust"
                >
                  edward.holter@tchas.no
                </a>
                . Mener du at vi behandler personopplysninger i strid med
                regelverket, kan du klage til Datatilsynet (
                <a
                  href="https://www.datatilsynet.no"
                  className="text-navy underline underline-offset-2 hover:text-rust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  datatilsynet.no
                </a>
                ).
              </p>
            </Block>

            <Block title="8. Sikkerhet">
              <p>
                Vi gjennomfører tekniske og organisatoriske tiltak for å beskytte
                personopplysningene mot uautorisert tilgang, tap og misbruk.
              </p>
            </Block>

            <Block title="9. Endringer i personvernerklæringen">
              <p>
                Vi kan oppdatere denne personvernerklæringen ved endringer i
                tjenestene eller regelverket. Gjeldende versjon er alltid
                tilgjengelig på denne siden, med dato for siste oppdatering.
              </p>
            </Block>

            <Block title="10. Kontakt">
              <p>
                Har du spørsmål om personvern eller ønsker å bruke rettighetene
                dine?
              </p>
              <ul>
                <li>
                  E-post:{" "}
                  <a
                    href="mailto:edward.holter@tchas.no"
                    className="text-navy underline underline-offset-2 hover:text-rust"
                  >
                    edward.holter@tchas.no
                  </a>
                </li>
                <li>
                  Telefon:{" "}
                  <a
                    href="tel:+4798252357"
                    className="text-navy underline underline-offset-2 hover:text-rust"
                  >
                    982 52 357
                  </a>
                </li>
              </ul>
            </Block>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-[22px] font-bold font-heading text-ink">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[16px] leading-relaxed text-taupe [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
