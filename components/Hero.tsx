import { site } from "@/lib/data";
import { ArrowDown, ArrowUpRight, DownloadIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36 lg:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 0%, black 15%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 0%, black 15%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-accent-soft/60 blur-[100px]"
      />

      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7" data-reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 py-1.5 pl-3 pr-3.5">
                <span className="dot-pulse relative h-1.5 w-1.5 rounded-full bg-forest text-forest" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-2">Available for work</span>
              </span>
              <span className="label flex items-center gap-2">
                <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
                Lagos, NG · WAT
              </span>
            </div>

            <h1 className="display mt-7 text-[clamp(3.1rem,8.6vw,7.1rem)] tracking-[-0.025em] text-balance">
              From first sketch to{" "}
              <span className="display-italic text-accent">shipped</span> product.
            </h1>

            <p className="mt-8 max-w-[34rem] text-pretty text-[16px] leading-[1.75] text-ink-2 md:text-[17px]">
              I&apos;m Esther, a full stack engineer and product designer in Lagos. I take ideas from interface
              design through backend, database and launch, and I care about the parts most people skip.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-paper transition-colors hover:bg-ink-2"
              >
                View selected work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={site.cv}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-5 py-3 text-[13px] font-medium text-ink transition-colors hover:bg-paper-2"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-1.5 px-2 py-3 text-[13px] font-medium text-ink-2 transition-colors hover:text-ink"
              >
                <span className="link-underline">Or say hello</span>
                <ArrowUpRight className="h-3.5 w-3.5 arrow-slide" />
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6">
              {[
                ["Build", "Frontend + backend"],
                ["Design", "UI/UX + brand"],
                ["Deliver", "Idea to launch"],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="label mb-2 text-[9px]">{term}</dt>
                  <dd className="text-[12.5px] leading-snug text-ink-2">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 lg:pl-6" data-reveal>
            <div className="relative mx-auto max-w-[420px]">
              <div className="rounded-2xl border border-line bg-paper-2/70 p-2 shadow-[0_24px_60px_-30px_rgba(22,21,15,0.35)]">
                <div className="overflow-hidden rounded-xl bg-ink p-5 text-paper sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="relative h-11 w-11 overflow-hidden rounded-full border border-paper/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/esther-avatar.jpg" alt="Esther Osuoha" className="h-full w-full object-cover" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium leading-tight">{site.name}</p>
                      <p className="mt-1 truncate font-mono text-[9.5px] uppercase tracking-[0.14em] text-paper/50">
                        Full Stack Engineer
                      </p>
                    </div>
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="dot-pulse h-2 w-2 rounded-full bg-[#8fd6a8] text-[#8fd6a8]" />
                    </span>
                  </div>

                  <div className="my-5 h-px bg-paper/10" />

                  <div className="space-y-3.5 font-mono text-[11.5px] leading-relaxed">
                    {[
                      ["$ status", "open to opportunities"],
                      ["$ currently", "loamy · gain as you waste"],
                      ["$ stack", "python · typescript · react"],
                      ["$ design", "figma · brand · systems"],
                    ].map(([cmd, value]) => (
                      <div key={cmd}>
                        <p className="text-paper/40">{cmd}</p>
                        <p className="mt-0.5 text-paper/90">
                          <span className="mr-1.5 text-accent">→</span>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40">Latest deploy</span>
                    <a
                      href="https://stockflow-inventory-system-os1w.onrender.com"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[11px] text-paper/85 transition-colors hover:text-paper"
                    >
                      StockFlow <span className="text-[#8fd6a8]">live</span>
                      <ArrowUpRight className="h-3 w-3 arrow-slide" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden items-center gap-2.5 rounded-xl border border-line bg-paper px-3.5 py-2.5 shadow-[0_12px_30px_-16px_rgba(22,21,15,0.4)] sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-2">Building Loamy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-line pt-5 md:mt-20">
          <p className="label text-[9.5px]">Scroll to explore</p>
          <a href="#work" className="group flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted hover:text-ink">
            Selected work
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
