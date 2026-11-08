import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { projects } from "@/lib/projects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <main className="detail-page">
      <div className="container">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={16} /> Back to all projects
        </Link>
        <div className={`detail-banner project-visual ${p.visual}`}>
          <span>SELECTED PROJECT / {p.category.toUpperCase()}</span>
          <strong>{p.name}</strong>
          <small>CASE STUDY</small>
        </div>
        <div className="detail-head">
          <div>
            <p className="eyebrow">PROJECT OVERVIEW</p>
            <h1>{p.name}</h1>
            <p>{p.summary}</p>
          </div>
          <div className="detail-actions">
            {p.liveUrl ? (
              <a
                className="btn btn-primary"
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Website <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="link-pending">Live URL to be added</span>
            )}
            {p.repoUrl ? (
              <a
                className="btn btn-outline"
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Client Repository <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="link-pending">Repository URL to be added</span>
            )}
          </div>
        </div>
        <div className="detail-content">
          <article className="detail-main">
            <section>
              <p className="eyebrow">01 / DESCRIPTION</p>
              <h2>About the project</h2>
              <p>{p.description}</p>
            </section>
            <section>
              <p className="eyebrow">02 / KEY FEATURES</p>
              <h2>What it includes</h2>
              <ul className="check-list">
                {p.highlights.map((x) => (
                  <li key={x}>
                    <CheckCircle2 size={18} />
                    {x}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <p className="eyebrow">03 / CHALLENGES</p>
              <h2>Challenges faced</h2>
              <ul className="plain-list">
                {p.challenges.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
            <section>
              <p className="eyebrow">04 / NEXT STEPS</p>
              <h2>Future improvements</h2>
              <ul className="check-list">
                {p.future.map((x) => (
                  <li key={x}>
                    <Lightbulb size={18} />
                    {x}
                  </li>
                ))}
              </ul>
            </section>
          </article>
          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <Wrench size={20} />
              <h3>Technology stack</h3>
              <div className="tag-row">
                {p.stack.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
            <div className="sidebar-card">
              <h3>Project links</h3>
              <p>
                Live and source-code links will be added when the public
                deployments and repositories are ready.
              </p>
              <Link className="text-link" href="/#contact">
                Ask me about this project <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
