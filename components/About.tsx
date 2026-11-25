import { capabilities, site } from "@/lib/data";
import { ArrowUpRight, DownloadIcon, MapPinIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-line bg-paper-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/esther.jpg"
                  alt="Esther Osuoha outside the Department of Computer Science at Nnamdi Azikiwe University"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-paper/20 bg-ink/65 px-3.5 py-2.5 text-paper backdrop-blur-md">
                <div className="min-w-0">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/50">Nnamdi Azikiwe University</p>
                  <p className="mt-0.5 truncate text-[11.5px]">Department of Computer Science</p>
                </div>
                <span className="shrink-0 rounded-full border border-paper/20 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-paper/70">
                  &apos;26
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="label flex items-center gap-1.5 text-[9px]">
                <MapPinIcon className="h-3 w-3" />
                {site.location}
              </span>
              <span className="label text-[9px]">B.Sc. Computer Science</span>
            </div>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <p className="label">02 / About</p>
            <h2 className="display mt-4 text-[clamp(2.7rem,5.4vw,4.3rem)] tracking-[-0.025em]">
              Designer&apos;s eye.
              <br />
              <span className="display-italic">Engineer&apos;s hands.</span>
            </h2>

            <div className="mt-6 max-w-[38rem] space-y-4 text-pretty text-[14.5px] leading-[1.78] text-ink-2">
              <p>
                I&apos;m a full stack software engineer who designs, builds and deploys complete web applications:
                frontend, backend, databases and authentication. I work primarily in Python and JavaScript, with formal
                training in Rust, and I bring UI/UX and brand identity into the same process.
              </p>
              <p>
                That range is the point: I can shape the brand, plan the flows, design the interface in Figma, then
                build and ship it. I&apos;ve independently delivered live products and contributed inside small
                engineering teams.
              </p>
              <p className="text-muted">
                I&apos;m most at home in the unglamorous middle of a product: the schema decisions, the empty states,
                the auth edge cases. The parts that decide whether something actually feels solid.
              </p>
            </div>

            <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div key={capability.title} className="border-t border-line pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[9px] tracking-[0.12em] text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="text-[13px] font-medium tracking-[-0.01em] text-ink">{capability.title}</h3>
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-[1.65] text-muted">{capability.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={site.cv}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[12.5px] font-medium text-ink transition-colors hover:bg-paper-2"
              >
                <DownloadIcon className="h-3.5 w-3.5" />
                Download CV
              </a>
              <a href="#contact" className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink-2 hover:text-ink">
                <span className="link-underline">Work with me</span>
                <ArrowUpRight className="h-3.5 w-3.5 arrow-slide" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
