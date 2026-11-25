"use client";

import { useState } from "react";
import { toolkit } from "@/lib/data";

const filters = ["All", ...toolkit.map((group) => group.group)];

export default function Toolkit() {
  const [active, setActive] = useState("All");
  const groups = active === "All" ? toolkit : toolkit.filter((group) => group.group === active);

  return (
    <section id="toolkit" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="label">04 / Toolkit</p>
            <h2 className="display mt-4 text-[clamp(2.7rem,5.4vw,4.3rem)] tracking-[-0.025em]">
              Tools are <span className="display-italic">a means.</span>
            </h2>
          </div>
          <p className="max-w-[23rem] text-pretty text-[13.5px] leading-relaxed text-muted md:pb-2">
            I choose technology around product constraints, team realities and long-term operability, not trend
            cycles.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-1.5" data-reveal>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] transition-colors ${
                active === filter
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal>
          {groups.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-line bg-paper-2/30 p-5 transition-colors hover:border-line-strong"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="label text-ink">{group.group}</h3>
                <span className="font-mono text-[8px] tracking-[0.12em] text-muted/70">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-paper px-2.5 py-1 text-[11px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
