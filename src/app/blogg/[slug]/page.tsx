import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/format";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.holterbygg.no";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blogg/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blogg/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = marked.parse(post.content, { async: false });
  const url = `${siteUrl}/blogg/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        image: `${siteUrl}${post.image}`,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: "nb-NO",
        keywords: post.keywords.join(", "),
        author: { "@type": "Organization", name: "Holter Bygg", url: siteUrl },
        publisher: {
          "@type": "Organization",
          name: "Holter Bygg",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hjem", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogg",
            item: `${siteUrl}/blogg`,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <article>
          <div className="mx-auto max-w-3xl px-6 pt-10">
            {/* Breadcrumbs */}
            <nav aria-label="Brødsmulesti" className="text-[13px] text-stone">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-rust">
                    Hjem
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blogg" className="hover:text-rust">
                    Blogg
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-taupe">Artikkel</li>
              </ol>
            </nav>

            <div className="mt-6 flex items-center gap-3 text-[13px] text-stone">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingMinutes} min lesing</span>
            </div>
            <h1 className="mt-3 text-[clamp(28px,3.6vw,44px)] font-extrabold font-heading leading-[1.1] text-ink text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-taupe">
              {post.excerpt}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl px-6">
            <div className="relative aspect-16/9 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div
            className="prose prose-lg mx-auto mt-10 max-w-3xl px-6 prose-headings:font-heading prose-headings:font-extrabold prose-headings:text-ink prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[26px] prose-h3:text-[19px] prose-p:text-taupe prose-p:leading-relaxed prose-li:text-taupe prose-li:marker:text-rust prose-strong:text-ink prose-a:font-semibold prose-a:text-navy prose-a:no-underline hover:prose-a:text-rust hover:prose-a:underline prose-ol:text-taupe"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        {/* CTA */}
        <section className="mt-16 bg-navy px-6 py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-5">
            <span className="font-heading text-[13px] font-bold tracking-[0.1em] text-[#e0a97a]">
              GRATIS BEFARING
            </span>
            <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold font-heading text-white">
              Vurderer du et byggeprosjekt?
            </h2>
            <p className="max-w-xl text-[17px] leading-relaxed text-[#c9d0d9]">
              Holter Bygg er en sentralt godkjent totalentreprenør i Oslo og
              Viken. Fortell oss om prosjektet ditt, så tar vi en uforpliktende
              befaring – helt gratis.
            </p>
            <Link
              href="/#kontakt"
              className="mt-1 bg-rust px-7 py-4 font-heading text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-rust-hover"
            >
              BESTILL GRATIS BEFARING
            </Link>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-12">
          <Link
            href="/blogg"
            className="font-heading text-[15px] font-bold text-navy hover:text-rust"
          >
            ← Tilbake til bloggen
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
