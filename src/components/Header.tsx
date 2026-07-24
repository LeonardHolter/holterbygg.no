import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#tjenester", label: "TJENESTER" },
  { href: "/#om", label: "OM OSS" },
  { href: "/#prosjekter", label: "PROSJEKTER" },
  { href: "/blogg", label: "BLOGG" },
  { href: "/#kontakt", label: "KONTAKT" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-line bg-cream px-5 py-3.5 sm:px-8 lg:px-16">
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/logo.png"
          alt="Holter Bygg"
          width={691}
          height={559}
          className="h-[52px] w-auto object-contain"
          priority
        />
      </Link>
      <nav className="hidden items-center gap-8 font-heading text-[15px] font-semibold tracking-wide md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-rust">
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/#kontakt"
        className="whitespace-nowrap bg-navy px-5 py-3 font-heading text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-navy-hover"
      >
        FÅ TILBUD
      </Link>
    </header>
  );
}
