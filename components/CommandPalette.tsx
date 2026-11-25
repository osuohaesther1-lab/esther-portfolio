"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { navLinks, site } from "@/lib/data";
import {
  ArrowRight,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SearchIcon,
} from "./Icons";

type Item = {
  id: string;
  label: string;
  hint: string;
  group: "Sections" | "Elsewhere" | "Actions";
  icon: React.ReactNode;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  };

  const items = useMemo<Item[]>(() => {
    const jump = (id: string) => () => {
      close();
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
      });
    };

    return [
      ...navLinks.map((link) => ({
        id: `section-${link.id}`,
        label: link.label,
        hint: `Jump to ${link.label.toLowerCase()}`,
        group: "Sections" as const,
        icon: <ArrowRight className="h-3.5 w-3.5" />,
        run: jump(link.id),
      })),
      {
        id: "github",
        label: "GitHub",
        hint: "osuohaesther1-lab",
        group: "Elsewhere",
        icon: <GithubIcon className="h-3.5 w-3.5" />,
        run: () => {
          close();
          window.open(site.github, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        hint: "Esther Osuoha",
        group: "Elsewhere",
        icon: <LinkedinIcon className="h-3.5 w-3.5" />,
        run: () => {
          close();
          window.open(site.linkedin, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "email",
        label: "Send an email",
        hint: site.email,
        group: "Actions",
        icon: <MailIcon className="h-3.5 w-3.5" />,
        run: () => {
          close();
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        id: "copy-email",
        label: "Copy email address",
        hint: "Clipboard",
        group: "Actions",
        icon: <CopyIcon className="h-3.5 w-3.5" />,
        run: async () => {
          try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            /* ignore */
          }
        },
      },
      {
        id: "cv",
        label: "Download CV",
        hint: "PDF",
        group: "Actions",
        icon: <DownloadIcon className="h-3.5 w-3.5" />,
        run: () => {
          close();
          window.open(site.cv, "_blank", "noopener,noreferrer");
        },
      },
    ];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setSelected(0);
    const t = window.setTimeout(() => inputRef.current?.focus(), 40);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${selected}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selected, open]);

  if (!open) return null;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected((s) => (filtered.length ? (s + 1) % filtered.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected((s) => (filtered.length ? (s - 1 + filtered.length) % filtered.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      filtered[selected]?.run();
    }
  };

  const groups: Item["group"][] = ["Sections", "Elsewhere", "Actions"];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh] sm:pt-[14vh]">
      <button
        type="button"
        aria-label="Close command menu"
        onClick={close}
        className="absolute inset-0 cursor-default bg-ink/35 backdrop-blur-[3px]"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_30px_80px_-20px_rgba(22,21,15,0.45)]"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <SearchIcon className="h-4 w-4 shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Jump to a section, link or action…"
            className="h-14 w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-muted/70 focus-visible:outline-none"
            aria-label="Search"
          />
          <kbd className="shrink-0 rounded border border-line bg-paper-2 px-1.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted">
            esc
          </kbd>
        </div>

        <div ref={listRef} className="thin-scroll max-h-[54vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted">No matches for “{query}”.</p>
          )}

          {groups.map((group) => {
            const groupItems = filtered.filter((item) => item.group === group);
            if (!groupItems.length) return null;
            return (
              <div key={group} className="mb-1 last:mb-0">
                <p className="label px-3 pb-1 pt-3 text-[9px]">{group}</p>
                {groupItems.map((item) => {
                  const index = filtered.indexOf(item);
                  const isActive = index === selected;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-index={index}
                      onMouseEnter={() => setSelected(index)}
                      onClick={item.run}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        isActive ? "bg-ink text-paper" : "text-ink-2 hover:bg-paper-2"
                      }`}
                    >
                      <span className={`grid h-7 w-7 place-items-center rounded-md border ${isActive ? "border-paper/25" : "border-line"}`}>
                        {item.id === "copy-email" && copied ? <CheckIcon className="h-3.5 w-3.5" /> : item.icon}
                      </span>
                      <span className="flex-1">
                        <span className="block text-[13.5px] font-medium">
                          {item.id === "copy-email" && copied ? "Copied!" : item.label}
                        </span>
                        <span className={`block text-[11px] ${isActive ? "text-paper/60" : "text-muted"}`}>{item.hint}</span>
                      </span>
                      <span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${isActive ? "text-paper/50" : "text-muted/60"}`}>
                        {item.group === "Sections" ? "Go" : "Open"}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-line bg-paper-2/60 px-4 py-2.5">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Esther Osuoha</span>
        </div>
      </div>
    </div>
  );
}
