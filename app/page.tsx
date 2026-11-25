import About from "@/components/About";
import CommandPalette from "@/components/CommandPalette";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MoreWork from "@/components/MoreWork";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import Toolkit from "@/components/Toolkit";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <RevealObserver />
      <Nav />
      <CommandPalette />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <MoreWork />
        <About />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
    </>
  );
}
