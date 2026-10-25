import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore new ideas and technologies to support a more forward-looking energy industry.",
  },
  {
    number: "02",
    title: "Responsibility",
    description:
      "We consider the long-term impact of our decisions on communities, resources, and the environment.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We believe meaningful progress comes from working together and sharing different perspectives.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">ABOUT TERRA ENERGY</p>
          <h1>
            Progress starts with
            <span> a better perspective.</span>
          </h1>
          <p>
            We are a fictional energy company built around a simple idea:
            a better energy future begins with responsible choices today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <div>
            <p className="section-label">OUR STORY</p>
            <h2 className="section-title">
              Energy is more than what powers us.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              At Terra Energy, we imagine an energy landscape where
              innovation and responsibility move forward together.
              Our approach focuses on exploring possibilities, developing
              ideas, and creating value for future generations.
            </p>
            <p>
              From renewable energy projects to community collaboration,
              we believe progress should be thoughtful, inclusive, and
              designed with the future in mind.
            </p>
            <Link href="/projects" className="primary-button">
              Explore Our Projects <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <p className="section-label">WHAT GUIDES US</p>
          <h2 className="section-title">The values behind our vision.</h2>
          <p className="section-description">
            These principles shape how we think, collaborate, and approach
            the future of energy.
          </p>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span className="value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta">
          <div>
            <p className="section-label">LOOKING AHEAD</p>
            <h2 className="section-title">
              The future is something we build together.
            </h2>
          </div>
          <Link href="/sustainability" className="primary-button">
            Our Sustainability Approach <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}