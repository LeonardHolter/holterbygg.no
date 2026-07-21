export type Service = {
  id: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "svc-nybygg",
    title: "Nybygg",
    desc: "Vi bygger drømmehuset ditt til avtalt tid og pris, uten kompromiss på kvalitet.",
    image: "/images/svc-nybygg.jpg",
    alt: "Nybygg av enebolig under oppføring i Oslo-området",
  },
  {
    id: "svc-pabygg",
    title: "Påbygg og tilbygg",
    desc: "Utvid boligen med et påbygg eller tilbygg tilpasset resten av huset.",
    image: "/images/svc-pabygg.jpg",
    alt: "Moderne enebolig med tilbygg bygget av Holter Bygg",
  },
  {
    id: "svc-renovering",
    title: "Totalrenovering og oppussing",
    desc: "Vi henter frem det beste i boligen din, fra planlegging til ferdig resultat.",
    image: "/images/svc-renovering.jpg",
    alt: "Bolig under totalrenovering med avstivet bæring",
  },
  {
    id: "svc-bad",
    title: "Bad og våtrom",
    desc: "BVN-sertifisert våtromsarbeid med dokumentasjon du kan stole på.",
    image: "/images/svc-bad.jpg",
    alt: "Nyoppusset bad og våtrom med moderne innredning",
  },
  {
    id: "svc-tak",
    title: "Tak",
    desc: "Tak tilpasset det norske klimaet, med fokus på tetthet og energibruk.",
    image: "/images/svc-tak.jpg",
    alt: "Taktekker legger nytt tak på bolig",
  },
  {
    id: "svc-loft",
    title: "Loft",
    desc: "Kreative løsninger som gir mer lys og rom i leiligheter og hus.",
    image: "/images/svc-loft.jpg",
    alt: "Loftsutbygging med skråtak og lysinnslipp",
  },
  {
    id: "svc-naering",
    title: "Næringsbygg",
    desc: "Taktekking og innredning av lager, kontorer og næringslokaler.",
    image: "/images/svc-naering.jpg",
    alt: "Moderne næringsbygg i glass og stål",
  },
  {
    id: "svc-mur",
    title: "Murerarbeid",
    desc: "Solid murerarbeid utført av fagfolk med fagbrev.",
    image: "/images/svc-mur.jpg",
    alt: "Murer legger blokkstein på byggeplass",
  },
  {
    id: "svc-snekker",
    title: "Snekkerarbeid",
    desc: "Alt fra listverk og innredning til bærekonstruksjoner.",
    image: "/images/svc-snekker.jpg",
    alt: "Snekker sager trelast med gjærsag",
  },
];

export type GalleryItem = {
  id: string;
  alt: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "gal-1",
    alt: "Ferdigstilt enebolig bygget av Holter Bygg i Oslo og Viken",
    image: "/images/svc-pabygg.jpg",
  },
  {
    id: "gal-2",
    alt: "Renovert bad og våtrom utført av Holter Bygg",
    image: "/images/svc-bad.jpg",
  },
  {
    id: "gal-3",
    alt: "Loftsutbygging utført av Holter Bygg",
    image: "/images/svc-loft.jpg",
  },
  {
    id: "gal-4",
    alt: "Nybygg og tilbygg fra Holter Bygg",
    image: "/images/svc-nybygg.jpg",
  },
  {
    id: "gal-5",
    alt: "Nytt tak lagt av Holter Bygg",
    image: "/images/svc-tak.jpg",
  },
  {
    id: "gal-6",
    alt: "Næringsbygg-prosjekt utført av Holter Bygg",
    image: "/images/svc-naering.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Holter Bygg leverte totalrenoveringen av eneboligen vår til avtalt tid og pris. Ryddig, faglig dyktige og enkle å kommunisere med.",
    name: "Marte og Jonas, Bærum",
  },
  {
    quote:
      "Vi brukte Holter Bygg til å bygge om badet vårt. Nøyaktig arbeid og god dialog gjennom hele prosessen. Anbefales!",
    name: "Kristian, Drammen",
  },
  {
    quote:
      "Profesjonelt team fra start til slutt. De tok ansvar for hele tilbygget og resultatet ble akkurat slik vi ønsket.",
    name: "Ingrid, Asker",
  },
];
