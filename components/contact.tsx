import { Mail, Github, Linkedin } from "lucide-react"

const contacts = [
  {
    name: "Email",
    value: "anugaikwad157@gmail.com",
    href: "mailto:anugaikwad157@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/AnuragG-007",
    href: "https://github.com/AnuragG-007",
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/anuraggaikwad-tech",
    href: "https://www.linkedin.com/in/anuraggaikwad-tech",
    icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-cyan-400" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent" />
          </div>
        </div>

        <div className="max-w-2xl space-y-6">
          <div className="relative bg-[#0a0f1e]/30 border-l-2 border-cyan-500/50 pl-6 py-4 mb-8">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400" />
            <p className="text-gray-300 text-lg leading-relaxed font-mono">
              Open to internships, full-time roles, and collaborative opportunities across AI, backend systems, and software engineering. Let’s connect.
            </p>
          </div>

          <div className="space-y-4">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-5 bg-[#0a0f1e]/40 border-2 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0a0f1e]/60 transition-all duration-300 overflow-hidden"
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400/80 transition-colors" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400/40 group-hover:border-purple-400/80 transition-colors" />

                {/* Icon container with HUD style */}
                <div className="relative p-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-400/50" />
                  <contact.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors relative z-10" />
                </div>

                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest font-mono">{contact.name}</div>
                  <div className="text-gray-300 group-hover:text-cyan-300 transition-colors font-mono">
                    {contact.value}
                  </div>
                </div>

                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(6,182,212,0.02)_2px,rgba(6,182,212,0.02)_4px)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
