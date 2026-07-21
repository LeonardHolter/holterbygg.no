import { services } from "@/lib/data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.holterbygg.no";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${siteUrl}/#business`,
        name: "Holter Bygg",
        url: siteUrl,
        image: `${siteUrl}/logo.png`,
        logo: `${siteUrl}/logo.png`,
        telephone: "+4798252357",
        email: "edward.holter@tchas.no",
        description:
          "Holter Bygg er totalentreprenør i Oslo og Viken for nybygg, tilbygg, totalrenovering og bad. Sentral godkjenning og BVN-sertifisert våtrom.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Oslo",
          addressCountry: "NO",
        },
        areaServed: [
          { "@type": "City", name: "Oslo" },
          { "@type": "AdministrativeArea", name: "Viken" },
          { "@type": "City", name: "Bærum" },
          { "@type": "City", name: "Asker" },
          { "@type": "City", name: "Drammen" },
        ],
        knowsLanguage: ["no"],
        slogan: "Solid håndverk fra grunnmur til tak",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Byggetjenester",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              areaServed: "Oslo og Viken",
              provider: { "@id": `${siteUrl}/#business` },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Holter Bygg",
        inLanguage: "nb-NO",
        publisher: { "@id": `${siteUrl}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
