import type { Metadata } from "next";
import NewsCard from "../../components/NewsCard";
import { news } from "../../data/news";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Explore conceptual articles about energy innovation and sustainability from Terra Energy.",
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">NEWS & INSIGHTS</p>
          <h1>
            Ideas that move us.
            <span>Stories that inspire progress.</span>
          </h1>
          <p>
            Explore perspectives on renewable energy, innovation, and
            building a more sustainable future.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="section-label">THE LATEST</p>
              <h2 className="section-title">Stories and perspectives.</h2>
            </div>

            <p className="projects-count">
              {news.length} Featured Articles
            </p>
          </div>

          <div className="news-grid">
            {news.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}