import type { ProjectVisualKind } from "@/lib/data";
import { LeafIcon, RecycleIcon, SparkIcon } from "./Icons";

export default function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  if (kind === "loamy") return <LoamyVisual />;
  if (kind === "stockflow") return <StockFlowVisual />;
  return <WasteVisual />;
}

function LoamyVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0d261d] p-5 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2f7a4f]/40 blur-3xl"
      />

      <div className="relative flex h-full items-center justify-center">
        <div className="w-[206px] rounded-[30px] border border-white/15 bg-[#08150f] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] sm:w-[224px]">
          <div className="rounded-[24px] bg-[#0c2118] p-3">
            <div className="flex items-center justify-between px-1 font-mono text-[7px] text-white/45">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="h-1 w-3 rounded-sm border border-white/40" />
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between px-1">
              <div>
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#a3e635]">Loamy</p>
                <p className="mt-0.5 text-[11px] font-medium text-white">Good morning</p>
              </div>
              <span className="grid h-6 w-6 place-items-center rounded-full border border-white/10 text-[#a3e635]">
                <LeafIcon className="h-3 w-3" />
              </span>
            </div>

            <div className="mt-3 rounded-xl bg-[#123528] p-3">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[6.5px] uppercase tracking-[0.18em] text-[#a3e635]">Diagnosis</p>
                <span className="rounded-full bg-[#a3e635]/15 px-1.5 py-0.5 font-mono text-[6px] text-[#a3e635]">AI</span>
              </div>
              <p className="mt-1.5 text-[12px] font-medium text-white">Leaf rust detected</p>
              <p className="text-[7.5px] text-white/50">92% confidence · cassava</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-[#a3e635]" />
              </div>
            </div>

            <div className="mt-2 rounded-xl border border-white/10 p-2.5">
              <p className="font-mono text-[6.5px] uppercase tracking-[0.18em] text-white/40">Advisory</p>
              <p className="mt-1 text-[8.5px] leading-relaxed text-white/75">
                Apply fungicide within 48 hours. Avoid overhead irrigation.
              </p>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/10 p-2">
                <p className="font-mono text-[6px] uppercase tracking-wider text-white/40">Market</p>
                <p className="mt-0.5 text-[9px] text-white/80">Sell direct</p>
              </div>
              <div className="rounded-lg border border-white/10 p-2">
                <p className="font-mono text-[6px] uppercase tracking-wider text-white/40">Weather</p>
                <p className="mt-0.5 text-[9px] text-white/80">28° · dry</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-around border-t border-white/10 pt-2.5 font-mono text-[6px] uppercase tracking-wider text-white/35">
              <span className="text-[#a3e635]">Home</span>
              <span>Scan</span>
              <span>Market</span>
              <span>Me</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/70">Works offline</span>
      </div>
      <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
        <SparkIcon className="h-2.5 w-2.5 text-[#a3e635]" />
        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/70">TFLite</span>
      </div>
    </div>
  );
}

function StockFlowVisual() {
  const bars = [38, 58, 46, 72, 54, 88, 64];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#e7dfcc] p-5 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22,21,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,21,15,0.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-[#fbf8f0] shadow-[0_24px_50px_-24px_rgba(22,21,15,0.45)]">
        <div className="flex items-center gap-2 border-b border-ink/10 bg-[#f3eee1] px-3 py-2">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
          </span>
          <span className="mx-auto rounded-md border border-ink/10 bg-white/60 px-3 py-0.5 font-mono text-[6.5px] text-ink/45">
            stockflow.app / dashboard
          </span>
        </div>

        <div className="p-3.5 sm:p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[6.5px] uppercase tracking-[0.18em] text-ink/40">Inventory value</p>
              <p className="mt-1 font-display text-[26px] leading-none tracking-tight text-ink sm:text-[30px]">₦4.28M</p>
            </div>
            <span className="rounded-full border border-[#1d5243]/20 bg-[#1d5243]/10 px-2 py-0.5 font-mono text-[6.5px] uppercase tracking-wider text-[#1d5243]">
              +12.4%
            </span>
          </div>

          <div className="mt-4 flex h-[74px] items-end gap-1.5 sm:h-[86px]">
            {bars.map((height, index) => (
              <div
                key={index}
                className={`flex-1 rounded-sm ${index === bars.length - 2 ? "bg-accent" : "bg-ink/15"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between font-mono text-[5.5px] uppercase tracking-wider text-ink/35">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          <div className="mt-3 space-y-1.5 border-t border-ink/10 pt-2.5">
            {[
              ["Rice · 50kg", "124 units", "In stock", false],
              ["Cooking oil · 5L", "8 units", "Low stock", true],
            ].map(([name, units, status, low]) => (
              <div key={name as string} className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-md bg-ink/[0.06]" />
                <span className="flex-1 text-[7.5px] text-ink/70">{name}</span>
                <span className="font-mono text-[6.5px] text-ink/40">{units}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[5.5px] uppercase tracking-wider ${
                    low ? "bg-accent/10 text-accent" : "bg-[#1d5243]/10 text-[#1d5243]"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-ink/10 bg-[#fbf8f0] px-2.5 py-1.5 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1d5243]" />
        <span className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-ink/55">Tenant isolated</span>
      </div>
      <div className="absolute left-4 top-4 hidden items-center gap-1.5 rounded-full border border-ink/10 bg-[#fbf8f0] px-2.5 py-1.5 shadow-sm sm:flex">
        <span className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-ink/55">Live on Render</span>
      </div>
    </div>
  );
}

function WasteVisual() {
  const nodes = [
    { label: "Household", value: "4.2 kg", tone: "bg-[#d8f3c8] text-[#173a2c]" },
    { label: "Collector", value: "12.4 kg", tone: "bg-[#f4d9a8] text-[#3a2a0c]" },
    { label: "Recycler", value: "₦3,720", tone: "bg-[#bfe3ff] text-[#0c2b3a]" },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0e2a25] p-5 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div aria-hidden="true" className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#2f7a4f]/35 blur-3xl" />

      <div className="relative flex h-full flex-col justify-center">
        <div className="mb-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/20 px-2.5 py-1">
            <RecycleIcon className="h-2.5 w-2.5 text-[#a3e635]" />
            <span className="font-mono text-[6.5px] uppercase tracking-[0.16em] text-white/70">Collection live</span>
          </span>
          <span className="font-mono text-[6.5px] uppercase tracking-[0.16em] text-white/35">Lagos</span>
        </div>

        <div className="flex items-center gap-2">
          {nodes.map((node, index) => (
            <div key={node.label} className="flex flex-1 items-center gap-2">
              <div className={`flex-1 rounded-xl p-2.5 sm:p-3 ${node.tone}`}>
                <p className="font-mono text-[5.5px] uppercase tracking-[0.16em] opacity-60">{node.label}</p>
                <p className="mt-1 text-[13px] font-semibold leading-none sm:text-[15px]">{node.value}</p>
              </div>
              {index < nodes.length - 1 && (
                <span className="shrink-0 font-mono text-[10px] text-[#a3e635]" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-[#a3e635]">Payout queued</p>
              <p className="mt-1 text-[12px] text-white">₦3,720 · Flutterwave</p>
            </div>
            <span className="rounded-full bg-[#a3e635] px-2 py-1 font-mono text-[5.5px] font-semibold uppercase tracking-wider text-[#0e2a25]">
              Verified
            </span>
          </div>
          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-[#a3e635]" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[5.5px] uppercase tracking-[0.14em] text-white/35">
          <span>OTP auth</span>
          <span>Row-level security</span>
          <span>Realtime</span>
        </div>
      </div>
    </div>
  );
}
