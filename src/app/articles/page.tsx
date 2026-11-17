import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { formatArticleDate, getArticles } from "@/lib/articles";

const title = "Articles";
const description =
  "Ideas and practical perspectives from Dweche Africa on software engineering, AI, and building technology for African businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles | Dweche Africa",
    description,
    url: "/articles",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dweche Africa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Dweche Africa",
    description,
    images: ["/og-image.png"],
  },
};

export default function ArticlesPage() {
  const articles = getArticles();
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[70vh]">
        <section aria-labelledby="articles-heading" className="relative overflow-hidden border-b border-surface-200 bg-surface-50 pt-36 pb-16 sm:pt-44 sm:pb-24">
          <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative max-w-site mx-auto px-6 lg:px-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              The Dweche perspective
            </p>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
              <h1 id="articles-heading" className="text-6xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-heading)] tracking-tight leading-[1.05]">
                Ideas worth<br /><span className="text-blue-600">sharing.</span>
              </h1>
              <div className="max-w-lg lg:pb-2">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-surface-900">Articles</h2>
                <p className="text-lg sm:text-xl leading-relaxed text-surface-600">
                  Perspectives on software, AI, and the technology shaping African businesses. Written to inform, inspire, and help you build what comes next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="latest-articles" className="max-w-site mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 border-b border-surface-200 pb-6">
            <h2 id="latest-articles" className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] tracking-tight">Latest articles</h2>
            <span className="text-sm text-surface-500">From the team at Dweche Africa</span>
          </div>
          {articles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <article key={article.slug} className="flex flex-col rounded-2xl border border-surface-200 bg-white p-6 sm:p-8 transition-shadow hover:shadow-primary-sm">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">{article.tags[0] || "Insights"}</p>
                  <h3 className="text-3xl font-[family-name:var(--font-heading)] leading-tight tracking-tight">
                    <Link href={`/articles/${article.slug}`} className="hover:text-blue-600">{article.title}</Link>
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-surface-600">{article.description}</p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-surface-500">
                    <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                    <span aria-hidden="true">·</span><span>{article.readingMinutes} min read</span>
                  </div>
                  <p className="mt-2 text-sm text-surface-600">By {article.author}</p>
                  <Link href={`/articles/${article.slug}`} className="mt-6 self-start text-sm font-semibold text-blue-600 hover:underline" aria-label={`Read ${article.title}`}>
                    Read article <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
          <div className="rounded-2xl border border-surface-200 bg-surface-50 px-6 py-16 text-center sm:px-12 sm:py-20">
            <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="mx-auto mb-6 h-12 w-12 text-blue-600">
              <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M17 16h14M17 23h14M17 30h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)]">Our first articles are on the way.</h3>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-surface-600">
              Check back soon for insights, lessons, and practical ideas from our work in software and AI.
            </p>
            <Link href="/#work" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              Explore our work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
