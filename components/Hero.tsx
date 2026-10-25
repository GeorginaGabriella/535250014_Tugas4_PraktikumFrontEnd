import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" role="img" aria-label="Renewable energy landscape" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="hero-eyebrow">
          ENERGY FOR A BETTER TOMORROW
        </span>

        <h1>
          Powering Today.
          <br />
          <span>Shaping Tomorrow.</span>
        </h1>

        <p>
          We believe progress begins with responsible energy,
          bold ideas, and a commitment to a better future.
        </p>

        <div className="hero-actions">
          <Link href="/about" className="primary-button">
            Discover Our Story <span>↗</span>
          </Link>
          <Link href="/projects" className="hero-secondary">
            Explore Our Projects
          </Link>
        </div>

        <div className="hero-note">
          <span className="hero-note-line" />
          <span>Innovation. Responsibility. Progress.</span>
        </div>
      </div>
    </section>
  );
}
