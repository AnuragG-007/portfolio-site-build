"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05080f]/70 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="relative text-xl font-bold tracking-wider group">
            {/* HUD brackets around logo */}
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
              {"["}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all">
              AG
            </span>
            <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
              {"]"}
            </span>
          </button>

          <div className="flex items-center gap-8">
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-sm text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest group font-mono"
              >
                {/* System-style underline */}
                <span className="relative">
                  {section}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  <span className="absolute -bottom-1.5 -left-1 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute -bottom-1.5 -right-1 w-1 h-1 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
