"use client";

import { useCallback, useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";
import { ArrowUpRight, CloseIcon, MenuIcon, SearchIcon } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = window.scrollY;
      setScrolled(top > 16);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, Math.max(0, top / height)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScroll) : null;
    observer?.observe(document.body);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openPalette = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-palette"));
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Esther Osuoha, back to top">
          <span className="display grid h-9 w-9 place-items-center rounded-[7px] bg-ink text-[15px] text-paper transition-transform duration-300 group-hover:-rotate-3">
            EO
          </span>
          <span className="leading-none">
            <span className="block text-[12.5px] font-medium tracking-[-0.01em] sm:text-[13px]">{site.name}</span>
            <span className="label mt-1.5 block text-[8px] tracking-[0.16em] sm:text-[8.5px]">Full Stack Engineer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors ${
                active === link.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute inset-x-3.5 -bottom-px h-px bg-accent" aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            className="hidden items-center gap-2 rounded-full border border-line bg-paper/60 px-3 py-2 text-muted transition-colors hover:border-line-strong hover:text-ink sm:flex"
            aria-label="Open command menu"
          >
            <SearchIcon className="h-3.5 w-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Menu</span>
            <kbd className="rounded border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[9px] leading-none text-muted">
              ⌘K
            </kbd>
          </button>

          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-medium text-paper transition-colors hover:bg-ink-2 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5 arrow-slide" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent/80"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      </header>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-paper px-5 pb-10 pt-6 md:top-[4.5rem] lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-line py-5"
              >
                <span className="display text-4xl tracking-[-0.02em]">{link.label}</span>
                <span className="label text-[10px]">{link.index}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <p className="label mb-3">Elsewhere</p>
            <div className="flex flex-wrap gap-3">
              <a href={site.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 text-sm">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 text-sm">
                LinkedIn
              </a>
              <a href={`mailto:${site.email}`} className="rounded-full border border-line px-4 py-2 text-sm">
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
