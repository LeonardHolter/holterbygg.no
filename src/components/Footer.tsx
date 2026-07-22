import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-[#8d9088]">
          © 2026 Holter Bygg. Alle rettigheter reservert.
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#8d9088]">
          <Link href="/personvern" className="hover:text-cream">
            Personvern
          </Link>
          <span>Totalentreprenør · Oslo og Viken</span>
        </div>
      </div>
    </footer>
  );
}
