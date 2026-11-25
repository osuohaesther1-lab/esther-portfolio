import { timeline } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4" data-reveal>
            <p className="label">03 / Experience</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,4.8vw,3.9rem)] tracking-[-0.025em]">
              A track record of shipping.
            </h2>
            <p className="mt-4 max-w-[19rem] text-[13px] leading-relaxed text-muted">
              Independent products, team contributions, and client design work, each taken from an idea to something
              people can use.
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-paper-2/40 p-5">
              <p className="label text-[8.5px]">Education</p>
              <p className="mt-3 text-[14px] font-medium tracking-[-0.01em] text-ink">B.Sc. Computer Science</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
                Nnamdi Azikiwe University
                <br />
                Awka, Nigeria
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">Class of 2026</span>
                <span className="label text-[8px]">Computer Science</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {timeline.map((item) => (
                <div
                  key={item.role}
                  className="grid gap-3 border-b border-line py-6 sm:grid-cols-[104px_1fr] sm:gap-8"
                  data-reveal
                >
                  <div className="flex items-start gap-2 sm:block">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent sm:mb-2 sm:mt-0 sm:block" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">{item.period}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink">{item.role}</h3>
                      <span className="text-[11.5px] text-muted">{item.org}</span>
                    </div>
                    <p className="mt-2 max-w-[34rem] text-[13px] leading-[1.7] text-muted">{item.text}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-ink-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
