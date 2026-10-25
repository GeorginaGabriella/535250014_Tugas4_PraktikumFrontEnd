import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Discover Terra Energy's conceptual approach to responsible energy, environmental awareness, and community collaboration.",
};

const priorities = [
  {
    number: "01",
    title: "Renewable Energy",
    description:
      "Explore the potential of solar and wind energy as part of a more responsible energy future.",
  },
  {
    number: "02",
    title: "Environmental Awareness",
    description:
      "Consider environmental impacts when developing ideas and planning for long-term progress.",
  },
  {
    number: "03",
    title: "Community Collaboration",
    description:
      "Encourage collaboration and shared perspectives to support more thoughtful energy solutions.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="sustainability-hero">
        <div className="container sustainability-hero-content">
          <p className="section-label">OUR COMMITMENT</p>
          <h1>
            A better future
            <span> starts with responsible choices.</span>
          </h1>
          <p>
            Sustainability is about looking beyond today and considering
            how our choices may shape the world of tomorrow.
          </p>
          <Link href="/projects" className="primary-button">
            Explore Our Projects <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container sustainability-intro">
          <div>
            <p className="section-label">OUR PERSPECTIVE</p>
            <h2 className="section-title">
              Progress should consider people and the planet.
            </h2>
          </div>

          <div className="sustainability-copy">
            <p>
              At Terra Energy, sustainability is a guiding concept for
              how we imagine the future of energy. It encourages us to
              think carefully about resources, innovation, and the
              communities affected by energy decisions.
            </p>
            <p>
              As a fictional company profile, our approach highlights
              principles that can guide responsible planning rather than
              claiming verified environmental achievements.
            </p>
          </div>
        </div>
      </section>

      <section className="section sustainability-priorities">
        <div className="container">
          <p className="section-label">OUR PRIORITIES</p>
          <h2 className="section-title">
            Three principles for a more thoughtful future.
          </h2>
          <p className="section-description">
            These conceptual priorities shape Terra Energy&apos;s vision
            for responsible progress.
          </p>

          <div className="values-grid">
            {priorities.map((priority) => (
              <article className="value-card" key={priority.number}>
                <span className="value-number">{priority.number}</span>
                <h3>{priority.title}</h3>
                <p>{priority.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sustainability-vision">
        <div className="container sustainability-vision-content">
          <p className="section-label">LOOKING FORWARD</p>
          <h2>
            Small, thoughtful decisions can inspire meaningful progress.
          </h2>
          <p>
            Discover how our conceptual projects explore possibilities
            for a better energy future.
          </p>
          <Link href="/projects" className="primary-button">
            Discover Our Projects <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
