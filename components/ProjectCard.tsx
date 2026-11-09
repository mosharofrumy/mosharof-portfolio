import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/lib/projects";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className={`project-visual ${project.visual}`}
        aria-label={`View ${project.name} project`}
      >
        <div className="visual-top">
          <span>BUILD 0{index + 1} / PRODUCT CASE STUDY</span>
          <ArrowUpRight size={20} />
        </div>
        <div className="visual-mark">
          {project.visual === "bazar"
            ? "BD"
            : project.visual === "fit"
              ? "FIT"
              : "SC"}
        </div>
        <div className="visual-caption">
          <Layers3 size={15} />
          <span>{project.category}</span>
        </div>
      </Link>
      <div className="project-info">
        <div>
          <p className="eyebrow">BUILT TO SOLVE A REAL NEED</p>
          <h3>{project.name}</h3>
        </div>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Explore the build <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
