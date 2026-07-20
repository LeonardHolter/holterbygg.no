import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
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
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://holterbygg-no-git-main-leonards-projects-5c24ce26.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Holter Bygg – Totalentreprenør i Oslo og Viken",
  description:
    "Holter Bygg er din totalentreprenør for nybygg, tilbygg, renovering og bad i Oslo og Viken. Solid håndverk fra grunnmur til tak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
