import Link from "next/link";
import Hero from "../components/Hero";

const highlights = [
  {
    number: "01",
    title: "Forward Thinking",
    description:
      "Exploring smarter approaches to the energy challenges of tomorrow.",
  },
  {
    number: "02",
    title: "Responsible Progress",
    description:
      "Putting long-term impact and responsible decisions at the heart of our work.",
  },
  {
    number: "03",
    title: "Built on Collaboration",
    description:
      "Bringing people and ideas together to create meaningful progress.",
  },
];

const projects = [
  {
    slug: "solar-farm-project",
    category: "Renewable Energy",
    title: "Solar Horizons",
    location: "Indonesia",
    image: "/images/solar-project.jpg",
  },
  {
    slug: "wind-energy-innovation",
    category: "Clean Technology",
    title: "Wind Forward",
    location: "Southeast Asia",
    image: "/images/wind-project.jpg",
  },
];

const news = [
  {
    slug: "the-future-of-clean-energy",
    date: "25 October 2026",
    category: "Energy Insights",
    title: "Rethinking the Future of Clean Energy",
    description:
      "A closer look at the ideas and innovations shaping a changing energy landscape.",
  },
  {
    slug: "building-a-sustainable-tomorrow",
    date: "20 October 2026",
    category: "Sustainability",
    title: "Building a More Sustainable Tomorrow",
    description:
      "Why responsible decisions today matter for the generations that follow.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section intro-section">
        <div className="container intro-grid">
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Progress means more when it moves us all forward.
            </h2>
          </div>

          <div className="intro-copy">
            <p className="section-description">
              Terra Energy is a fictional energy company built around
              a simple belief: the future should be powered by thoughtful
              innovation, responsible choices, and collaboration.
            </p>
            <Link href="/about" className="text-link">
              Get to Know Us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <span className="section-label">What Guides Us</span>
          <h2 className="section-title">Our principles in action.</h2>

          <div className="values-grid">
            {highlights.map((item) => (
              <article className="value-card" key={item.number}>
                <span className="value-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="section-title">Ideas moving into action.</h2>
            </div>
            <Link href="/projects" className="text-link">
              All Projects ↗
            </Link>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                className="project-card"
                key={project.slug}
              >
                <div
                  className="project-image"
                  style={{ backgroundImage: `url("${project.image}")` }}
                  role="img"
                  aria-label={project.title}
                />
                <div className="project-card-content">
                  <span className="card-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <div className="project-card-bottom">
                    <span>{project.location}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-label">From Our Journal</span>
              <h2 className="section-title">Perspectives on progress.</h2>
            </div>
            <Link href="/news" className="text-link">
              All News ↗
            </Link>
          </div>

          <div className="news-grid">
            {news.map((article) => (
              <article className="news-card" key={article.slug}>
                <div className="news-meta">
                  <span>{article.category}</span>
                  <time>{article.date}</time>
                </div>
                <h3>
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p>{article.description}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-link"
                >
                  Read Article ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <span className="section-label">The Road Ahead</span>
            <h2>Better energy starts with better questions.</h2>
            <p>
              Explore our story and the ideas behind Terra Energy.
            </p>
          </div>
          <Link href="/about" className="primary-button">
            Discover Terra Energy ↗
          </Link>
        </div>
      </section>
    </>
  );
}