import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LinkedInShare from "@/components/LinkedInShare";
import { formatArticleDate, getArticle, getArticles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return getArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = `/articles/${slug}`;
  const images = [{ url: `${url}/opengraph-image`, width: 1200, height: 630, alt: article.title }];
  return {
    title: article.title, description: article.description,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article", title: article.title, description: article.description,
      url, publishedTime: article.date, authors: [article.author], tags: article.tags, images,
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = `https://dweche.africa/articles/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: article.title, description: article.description,
    datePublished: article.date, mainEntityOfPage: url,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Dweche Africa", url: "https://dweche.africa", logo: { "@type": "ImageObject", url: "https://dweche.africa/logo.png" } },
    image: `${url}/opengraph-image`,
  };
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 sm:pt-40 pb-20 sm:pb-28">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link href="/articles" className="text-sm font-medium text-blue-600 hover:underline">&larr; All articles</Link>
          <header className="mt-10 border-b border-surface-200 pb-10">
            <ul aria-label="Topics" className="mb-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => <li key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tag}</li>)}
            </ul>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] tracking-tight leading-[1.12] text-balance">{article.title}</h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-surface-600">{article.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-surface-600">
              <span>By {article.author}</span><span aria-hidden="true">·</span>
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time><span aria-hidden="true">·</span>
              <span>{article.readingMinutes} min read</span>
            </div>
          </header>
          <div className="article-body mt-10">
            <ReactMarkdown skipHtml>{article.content}</ReactMarkdown>
          </div>
          <footer className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-surface-200 pt-8">
            <Link href="/articles" className="text-sm font-medium text-blue-600 hover:underline">&larr; More from Dweche Africa</Link>
            <LinkedInShare title={article.title} description={article.description} url={url} previewImage={`/articles/${slug}/opengraph-image`} linkedinPost={article.linkedinPost} />
          </footer>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </main>
      <Footer />
    </>
  );
}
