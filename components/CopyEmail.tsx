"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { CheckIcon, CopyIcon } from "./Icons";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-paper/25 px-4 py-2.5 text-[11.5px] font-medium text-paper transition-colors hover:border-paper/50 hover:bg-paper/5"
      aria-live="polite"
    >
      {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
