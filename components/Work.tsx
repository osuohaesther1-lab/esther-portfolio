import { projects } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import ProjectVisual from "./ProjectVisual";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="label">01 / Selected Work</p>
            <h2 className="display mt-4 text-[clamp(2.8rem,6.2vw,5rem)] tracking-[-0.025em]">Built to ship.</h2>
          </div>
          <p className="max-w-[22rem] text-pretty text-[14px] leading-relaxed text-muted md:pb-2">
            Production work shaped by real constraints: multi-tenant backends, offline-first mobile, and interfaces
            designed before a line of code was written.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const flip = index % 2 === 1;
  const live = project.status === "Live";

  return (
    <article
      className="grid items-center gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 md:py-16 lg:grid-cols-12 lg:gap-14"
      data-reveal
    >
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.16em] text-accent">{project.index}</span>
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] ${
              live ? "border-forest/25 bg-forest/[0.06] text-forest" : "border-line bg-paper-2 text-muted"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-forest" : "bg-accent"}`} />
            {project.status}
          </span>
          <span className="ml-auto font-mono text-[10px] tracking-[0.12em] text-muted/70">{project.year}</span>
        </div>

        <h3 className="display mt-5 text-[clamp(2.4rem,4.6vw,3.6rem)] leading-none tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{project.subtitle}</p>

        <p className="mt-5 max-w-[34rem] text-pretty text-[14.5px] leading-[1.7] text-ink-2">{project.summary}</p>

        <ul className="mt-5 space-y-2.5">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3 text-[13px] leading-[1.65] text-muted">
              <span className="mt-[0.55em] h-px w-3 shrink-0 bg-line-strong" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[12px] font-medium text-ink"
            >
              <span className="link-underline">{link.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 arrow-slide" />
            </a>
          ))}
          {project.links.length === 0 && (
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/70">
              Private build · in progress
            </span>
          )}
        </div>
      </div>

      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <div className="hover-lift aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-paper-2">
          <ProjectVisual kind={project.visual} />
        </div>
      </div>
    </article>
  );
}
