import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-card-image"
        style={{ backgroundImage: `url("${project.image}")` }}
        aria-label={`View ${project.title} project`}
      >
        <span className="project-card-arrow">↗</span>
      </Link>

      <div className="project-card-content">
        <p className="project-card-category">{project.category}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-card-location">{project.location}</p>
        <p className="project-card-description">{project.description}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="project-card-link"
        >
          Explore Project <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
