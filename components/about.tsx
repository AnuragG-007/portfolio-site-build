export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About</span>
          </h2>
          {/* HUD-style underline */}
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-cyan-400" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />
          <div className="absolute -left-5 top-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute -left-5 bottom-0 w-3 h-3 border-b-2 border-l-2 border-pink-400" />

          <div className="pl-8 space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl">
            {/* Each paragraph in HUD panel */}
            <div className="relative bg-[#0a0f1e]/20 border border-cyan-500/10 p-6 group hover:border-cyan-500/30 transition-all">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-purple-500/30 group-hover:border-purple-500/50 transition-colors" />
              <p className="font-mono text-base">
                I specialize in building end-to-end AI systems that solve real-world problems. My work spans Natural Language Processing, Computer Vision, and Deep Learning, with a strong focus on practical applications, scalable backends, and production-ready implementations.
              </p>
            </div>

            <div className="relative bg-[#0a0f1e]/20 border border-purple-500/10 p-6 group hover:border-purple-500/30 transition-all">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-purple-500/30 group-hover:border-purple-500/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-pink-500/30 group-hover:border-pink-500/50 transition-colors" />
              <p className="font-mono text-base">
                From training custom models to deploying scalable FastAPI backends, I handle the complete ML lifecycle. I focus on transforming complex algorithms into reliable, performant systems that deliver measurable real-world impact.
              </p>
            </div>

            <div className="relative bg-[#0a0f1e]/20 border border-pink-500/10 p-6 group hover:border-pink-500/30 transition-all">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-pink-500/30 group-hover:border-pink-500/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors" />
              <p className="font-mono text-base">
                My approach emphasizes clean backend architecture, well-designed CRUD APIs, and a practical understanding of building and deploying scalable FastAPI-based AI systems backed by reliable databases such as PostgreSQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
