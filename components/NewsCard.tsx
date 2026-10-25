import Link from "next/link";
import type { NewsArticle } from "../data/news";

type NewsCardProps = {
  article: NewsArticle;
};

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <Link
        href={`/news/${article.slug}`}
        className="news-card-image"
        style={{ backgroundImage: `url("${article.image}")` }}
        aria-label={`Read ${article.title}`}
      >
        <span className="news-card-arrow">↗</span>
      </Link>

      <div className="news-card-content">
        <div className="news-card-meta">
          <span>{article.category}</span>
          <time>{article.date}</time>
        </div>

        <h3>
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>

        <p>{article.excerpt}</p>

        <Link
          href={`/news/${article.slug}`}
          className="project-card-link"
        >
          Read Article <span>↗</span>
        </Link>
      </div>
    </article>
  );
}