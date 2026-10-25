import type { Metadata } from "next";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Terra Energy's conceptual renewable energy projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">OUR PROJECTS</p>
          <h1>
            Ideas today.
            <span>Energy for tomorrow.</span>
          </h1>
          <p>
            Explore our conceptual projects and discover how renewable
            energy can inspire a more sustainable future.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="section-label">OUR PORTFOLIO</p>
              <h2 className="section-title">Explore our projects.</h2>
            </div>

            <p className="projects-count">
              {projects.length} Featured Projects
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
