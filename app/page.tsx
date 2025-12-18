import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education";
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-[#05080f]">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-40" />

        {/* Scanlines effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,#0ff_0px,transparent_1px,transparent_2px)] animate-scan" />

        {/* Animated grid with HUD feel */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,#06b6d4_1px,transparent_1px),linear-gradient(180deg,#06b6d4_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-drift" />

        {/* Corner accent glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-glow-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* HUD frame lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
