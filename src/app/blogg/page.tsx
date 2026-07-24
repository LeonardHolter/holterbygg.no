import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blogg – råd om bygg, renovering og loftsutbygging",
  description:
    "Fagartikler og råd fra Holter Bygg om loftsutbygging, renovering, tilbygg og bad i Oslo og Viken.",
  alternates: { canonical: "/blogg" },
};

export default function BloggPage() {
  const allPosts = getAllPosts();
  const [featured, ...rest] = allPosts;

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
          <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-rust">
            BLOGG
          </span>
          <h1 className="mt-2.5 max-w-3xl text-[clamp(30px,4vw,46px)] font-extrabold font-heading text-ink">
            Råd om bygg, renovering og loftsutbygging
          </h1>
          <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-taupe">
            Fagartikler og praktiske råd fra en sentralt godkjent
            totalentreprenør i Oslo og Viken.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blogg/${featured.slug}`}
              className="group mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div>
                <div className="mb-3 flex items-center gap-3 text-[13px] text-stone">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span>·</span>
                  <span>{featured.readingMinutes} min lesing</span>
                </div>
                <h2 className="text-[clamp(24px,2.6vw,32px)] font-extrabold font-heading leading-tight text-ink group-hover:text-rust">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[17px] leading-relaxed text-taupe">
                  {featured.excerpt}
                </p>
                <span className="mt-4 inline-block font-heading text-[15px] font-bold text-navy group-hover:text-rust">
                  Les artikkelen →
                </span>
              </div>
            </Link>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blogg/${post.slug}`} className="group">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-[13px] text-stone">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingMinutes} min</span>
                  </div>
                  <h2 className="mt-2 text-[20px] font-bold font-heading leading-snug text-ink group-hover:text-rust">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-taupe">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
