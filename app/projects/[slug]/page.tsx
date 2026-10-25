import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="project-detail-hero">
        <div
          className="project-detail-image"
          role="img"
          aria-label={project.title}
          style={{ backgroundImage: `url("${project.image}")` }}
        />
        <div className="project-detail-overlay" />

        <div className="container project-detail-content">
          <Link href="/projects" className="back-link">
            ← Back to Projects
          </Link>
          <p className="section-label">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container project-detail-grid">
          <div>
            <p className="section-label">PROJECT OVERVIEW</p>
            <h2 className="section-title">
              Exploring a better energy future.
            </h2>
            <p className="project-detail-description">
              This conceptual project explores the potential of renewable
              energy and the role innovation can play in supporting a
              more responsible energy landscape.
            </p>
            <p className="project-detail-description">
              Through thoughtful planning and collaboration, the project
              represents Terra Energy&apos;s commitment to exploring ideas
              that may contribute to a more sustainable tomorrow.
            </p>
          </div>

          <aside className="project-facts">
            <div>
              <span>Technology</span>
              <strong>{project.category}</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{project.location}</strong>
            </div>
            <div>
              <span>Project Year</span>
              <strong>{project.year}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Concept Project</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="section project-detail-cta">
        <div className="container">
          <p className="section-label">DISCOVER MORE</p>
          <h2 className="section-title">
            Every idea can inspire progress.
          </h2>
          <Link href="/projects" className="primary-button">
            View All Projects <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
