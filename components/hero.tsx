"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl w-full">
        <div className="relative">
          {/* Corner brackets - HUD style */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-purple-500/30" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-purple-500/30" />

          {/* Accent lines with pulse */}
          <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30 animate-flicker" />
          <div
            className="absolute -right-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 animate-flicker"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="space-y-8 py-8">
            {/* System status indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/70 uppercase tracking-widest mb-4">
              <Terminal className="w-3 h-3" />
              <span>System_Online // AI_Engineer_Profile</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>

            <div className="space-y-4">
              {/* Name with glitch effect */}
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-balance glitch-text"
                data-text="ANURAG GAIKWAD"
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent tracking-tight">
                  ANURAG GAIKWAD
                </span>
              </h1>

              {/* Title with animated underline */}
              <div className="relative inline-block">
                <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-medium uppercase tracking-wider">
                  AI & ML Engineer | Backend Engineer
                </p>
                <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2 animate-pulse" />
              </div>

              {/* Specializations */}
              <div className="flex flex-wrap gap-3 pt-2 font-mono text-sm">
                {[
                  "NLP",
                  "COMPUTER_VISION",
                  "DEEP_LEARNING",
                  "POSTGRESQL",
                  "DATABASE_DESIGN",
                  "BACKEND_APIS",
                ].map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 uppercase tracking-widest"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Description with HUD panel style */}
            <div className="relative max-w-3xl bg-[#0a0f1e]/30 border-l-2 border-cyan-500/50 pl-6 py-4">
              <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400" />
              <p className="text-lg md:text-xl text-gray-300 text-pretty leading-relaxed font-mono">
                Building intelligent systems across NLP, Computer Vision, and
                Deep Learning — from model training to production-ready CRUD and
                inference backends built with FastAPI.
              </p>
            </div>

            {/* Action buttons with HUD styling */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 shadow-lg shadow-cyan-500/30 group relative overflow-hidden uppercase tracking-wider"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 group bg-transparent uppercase tracking-wider font-mono"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
