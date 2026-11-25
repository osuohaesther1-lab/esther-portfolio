import { marquee } from "@/lib/data";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee-track relative overflow-hidden border-y border-line bg-paper-2/40 py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />
      <div className="animate-marquee flex w-max items-center">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-7 px-7 font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            {item}
            <span className="text-[7px] text-accent" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
