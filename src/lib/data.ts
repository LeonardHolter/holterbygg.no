export type Service = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "svc-nybygg",
    title: "Nybygg",
    desc: "Vi bygger drømmehuset ditt til avtalt tid og pris, uten kompromiss på kvalitet.",
    image: "/images/svc-nybygg.jpg",
  },
  {
    id: "svc-pabygg",
    title: "Påbygg og tilbygg",
    desc: "Utvid boligen med et påbygg eller tilbygg tilpasset resten av huset.",
    image: "/images/svc-pabygg.jpg",
  },
  {
    id: "svc-renovering",
    title: "Totalrenovering og oppussing",
    desc: "Vi henter frem det beste i boligen din, fra planlegging til ferdig resultat.",
    image: "/images/svc-renovering.jpg",
  },
  {
    id: "svc-bad",
    title: "Bad og våtrom",
    desc: "BVN-sertifisert våtromsarbeid med dokumentasjon du kan stole på.",
    image: "/images/svc-bad.jpg",
  },
  {
    id: "svc-tak",
    title: "Tak",
    desc: "Tak tilpasset det norske klimaet, med fokus på tetthet og energibruk.",
    image: "/images/svc-tak.jpg",
  },
  {
    id: "svc-loft",
    title: "Loft",
    desc: "Kreative løsninger som gir mer lys og rom i leiligheter og hus.",
    image: "/images/svc-loft.jpg",
  },
  {
    id: "svc-naering",
    title: "Næringsbygg",
    desc: "Taktekking og innredning av lager, kontorer og næringslokaler.",
    image: "/images/svc-naering.jpg",
  },
  {
    id: "svc-mur",
    title: "Murerarbeid",
    desc: "Solid murerarbeid utført av fagfolk med fagbrev.",
    image: "/images/svc-mur.jpg",
  },
  {
    id: "svc-snekker",
    title: "Snekkerarbeid",
    desc: "Alt fra listverk og innredning til bærekonstruksjoner.",
    image: "/images/svc-snekker.jpg",
  },
];

export type GalleryItem = {
  id: string;
  label: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  { id: "gal-1", label: "Prosjekt: enebolig", image: "/images/svc-pabygg.jpg" },
  { id: "gal-2", label: "Prosjekt: bad", image: "/images/svc-bad.jpg" },
  { id: "gal-3", label: "Prosjekt: loftsutbygging", image: "/images/svc-loft.jpg" },
  { id: "gal-4", label: "Prosjekt: tilbygg", image: "/images/svc-nybygg.jpg" },
  { id: "gal-5", label: "Prosjekt: tak", image: "/images/svc-tak.jpg" },
  { id: "gal-6", label: "Prosjekt: næringsbygg", image: "/images/svc-naering.jpg" },
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
