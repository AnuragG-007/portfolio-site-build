import { Card } from "@/components/ui/card";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    field: "CSE : AI/ML Specialization",
    institution: "Indian Institute of Information Technology",
    duration: "2023 – 2027",
    highlights: [
      "Artificial Intelligence & Machine Learning",
      "Backend Systems & Databases",
      "Computer Vision & NLP",
      "Data Structures & Algorithms",
    ],
    color: "cyan",
  },
  {
    degree: "Higher Secondary Education (12th)",
    field: "Science (PCM)",
    institution: "Dayanand Junior College, Latur",
    duration: "2021 – 2023",
    highlights: [
      "Physics, Chemistry, Mathematics",
      "Strong foundation in problem-solving",
      "Analytical and logical reasoning",
    ],
    color: "purple",
  },
  {
    degree: "Secondary Education (10th)",
    field: "General Studies",
    institution: "Greenland High School, Dharashiv",
    duration: "2020 – 2021",
    highlights: [
      "Mathematics and Science fundamentals",
      "Logical reasoning and analytical thinking",
    ],
    color: "purple",
  },
];


export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-cyan-400" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent" />
          </div>
        </div>

        {/* Education cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu, idx) => (
            <Card
              key={idx}
              className="relative p-6 bg-[#0a0f1e]/40 border-2 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-[#0a0f1e]/60"
              style={{
                borderColor: `rgba(6, 182, 212, 0.3)`,
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-400/40" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-400/40" />

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-4">
                {/* Degree */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 uppercase tracking-wider font-mono">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">
                    {edu.field}
                  </p>
                </div>

                {/* Institution & duration */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-gray-400 font-mono">
                  <span>{edu.institution}</span>
                  <span className="text-cyan-400">{edu.duration}</span>
                </div>

                {/* Focus areas */}
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {edu.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
