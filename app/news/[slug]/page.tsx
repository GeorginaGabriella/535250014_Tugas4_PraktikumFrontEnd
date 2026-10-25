
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "../../../data/news";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="news-detail-hero">
        <div
          className="news-detail-image"
          role="img"
          aria-label={article.title}
          style={{ backgroundImage: `url("${article.image}")` }}
        />
        <div className="news-detail-overlay" />

        <div className="container news-detail-content">
          <Link href="/news" className="back-link">
            ← Back to News
          </Link>

          <p className="section-label">{article.category}</p>

          <h1>{article.title}</h1>

          <p className="news-detail-date">{article.date}</p>

          <p className="news-detail-excerpt">{article.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <article className="container news-article">
          <p className="section-label">THE STORY</p>

          {article.content.map((paragraph, index) => (
            <p key={index} className="news-article-paragraph">
              {paragraph}
            </p>
          ))}

          <div className="news-article-footer">
            <span>Terra Energy Editorial</span>
            <Link href="/news">Explore More Stories ↗</Link>
          </div>
        </article>
      </section>

      <section className="section news-detail-cta">
        <div className="container">
          <p className="section-label">KEEP EXPLORING</p>
          <h2 className="section-title">
            Discover more ideas for a better tomorrow.
          </h2>
          <Link href="/projects" className="primary-button">
            Explore Our Projects <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
