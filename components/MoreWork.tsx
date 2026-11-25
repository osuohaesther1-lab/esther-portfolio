import { moreProjects, teamWork } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function MoreWork() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col gap-2 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <h3 className="display text-[clamp(2rem,4vw,2.8rem)] tracking-[-0.02em]">More work.</h3>
          <p className="label">Tools · Automation · Brand</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {moreProjects.map((project) => (
            <article
              key={project.title}
              className="hover-lift flex flex-col rounded-2xl border border-line bg-paper-2/40 p-5"
              data-reveal
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.14em] text-accent">{project.index}</span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted/70">{project.kicker}</span>
              </div>
              <h4 className="display mt-4 text-[1.65rem] leading-tight tracking-[-0.02em]">{project.title}</h4>
              <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.65] text-muted">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-paper px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-ink-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink"
                >
                  <span className="link-underline">{project.linkLabel ?? "View"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 arrow-slide" />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-line p-6 md:p-7" data-reveal>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="label">Collaborative work</p>
            <p className="text-[12px] text-muted">Software Developer · small engineering teams</p>
          </div>
          <div className="mt-5 grid gap-x-8 gap-y-6 md:grid-cols-3">
            {teamWork.map((item) => (
              <div key={item.name}>
                <p className="text-[13.5px] font-medium text-ink">{item.name}</p>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
