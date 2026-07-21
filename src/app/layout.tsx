import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { GTAG_ID } from "@/lib/gtag";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.holterbygg.no";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Holter Bygg – Totalentreprenør i Oslo og Viken",
    template: "%s | Holter Bygg",
  },
  description:
    "Holter Bygg er totalentreprenør i Oslo og Viken for nybygg, tilbygg, totalrenovering og bad. Sentral godkjenning og BVN-sertifisert våtrom – bestill gratis, uforpliktende befaring.",
  keywords: [
    "totalentreprenør Oslo",
    "totalentreprenør Viken",
    "byggefirma Oslo",
    "entreprenør Oslo",
    "nybygg Oslo",
    "tilbygg Oslo",
    "påbygg Oslo",
    "totalrenovering Oslo",
    "oppussing Oslo",
    "baderomsrenovering Oslo",
    "bad og våtrom",
    "snekker Oslo",
    "murer Oslo",
    "taktekking Oslo",
    "Holter Bygg",
    "byggefirma Bærum",
    "entreprenør Asker",
    "entreprenør Drammen",
  ],
  applicationName: "Holter Bygg",
  authors: [{ name: "Holter Bygg" }],
  creator: "Holter Bygg",
  publisher: "Holter Bygg",
  category: "construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: siteUrl,
    siteName: "Holter Bygg",
    title: "Holter Bygg – Totalentreprenør i Oslo og Viken",
    description:
      "Solid håndverk fra grunnmur til tak. Nybygg, tilbygg, renovering og bad i Oslo og Viken – til avtalt tid og pris.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holter Bygg – Totalentreprenør i Oslo og Viken",
    description:
      "Solid håndverk fra grunnmur til tak. Nybygg, tilbygg, renovering og bad i Oslo og Viken.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${archivo.variable} ${sourceSans.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
