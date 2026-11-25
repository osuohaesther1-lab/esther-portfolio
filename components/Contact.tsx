import { site, socials } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import CopyEmail from "./CopyEmail";

const socialMeta: Record<string, string> = {
  GitHub: "@osuohaesther1-lab",
  LinkedIn: "in/esther-osuoha",
  Email: site.email,
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 select-none font-display text-[38vw] leading-none text-paper/[0.03]"
      >
        EO
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pb-8 pt-20 md:px-8 md:pt-28">
        <p className="label text-paper/40">05 / Contact</p>

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="display max-w-[46rem] text-[clamp(2.9rem,6.6vw,5.6rem)] leading-[0.96] tracking-[-0.03em]">
              Let&apos;s build something people{" "}
              <span className="display-italic text-accent-soft">actually</span> use.
            </h2>
            <p className="mt-7 max-w-[30rem] text-pretty text-[14px] leading-[1.75] text-paper/55">
              Have a product to build, a role to fill, or a design problem worth solving? I&apos;d like to hear about
              it.
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-2">
            <p className="label mb-4 text-paper/35">Elsewhere</p>
            <ul className="border-t border-paper/15">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={social.label === "Email" ? undefined : "noreferrer"}
                    className="group flex items-center justify-between gap-4 border-b border-paper/15 py-3.5"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-[13px] font-medium">{social.label}</span>
                      <span className="truncate font-mono text-[9.5px] tracking-[0.06em] text-paper/40">
                        {socialMeta[social.label]}
                      </span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-paper/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${site.email}`}
            className="display link-underline break-all text-[clamp(1.35rem,3.4vw,2.35rem)] tracking-[-0.02em]"
          >
            {site.email}
          </a>
          <CopyEmail />
        </div>

        <footer className="mt-16 flex flex-col gap-5 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="display grid h-8 w-8 place-items-center rounded-[6px] border border-paper/25 text-[12px]">
              EO
            </span>
            <div>
              <p className="text-[11.5px] text-paper/70">© {new Date().getFullYear()} Esther Osuoha</p>
              <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-paper/35">
                Designed &amp; built end to end
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-paper/35">
              Lagos, Nigeria · WAT
            </span>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/55 transition-colors hover:text-paper"
            >
              Back to top
              <ArrowUpRight className="h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
