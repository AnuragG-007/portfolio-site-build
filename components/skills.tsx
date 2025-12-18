import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Model Training",
      "Transfer Learning",
      "Model Optimization",
    ],
    color: "cyan",
  },
  {
    title: "Natural Language Processing",
    skills: [
      "Transformers",
      "BERT",
      "GPT",
      "Text Summarization",
      "Tokenization",
      "Sequence Modeling",
    ],
    color: "purple",
  },
  {
    title: "Computer Vision",
    skills: [
      "Object Detection",
      "Image Segmentation",
      "OCR",
      "CNN Architectures",
      "Feature Extraction",
    ],
    color: "purple",
  },
  {
    title: "Backend Engineering",
    skills: [
      "FastAPI",
      "Python",
      "REST APIs",
      "CRUD Architecture",
      "API Design",
    ],
    color: "cyan",
  },
  {
    title: "Databases & Data Layer",
    skills: [
      "PostgreSQL",
      "Database Design",
      "Schema Modeling",
      "Query Optimization",
      "Data Integrity",
    ],
    color: "cyan",
  },
  {
    title: "Deployment & Systems",
    skills: [
      "Docker",
      "Model Inference Pipelines",
      "Scalable Services",
      "System Design",
    ],
    color: "purple",
  },
  {
    title: "Libraries & Frameworks",
    skills: ["PyTorch", "Hugging Face", "OpenCV", "scikit-learn", "NumPy"],
    color: "purple",
  },
  {
    title: "Frontend (Supportive)",
    skills: ["React", "Next.js", "Tailwind CSS", "Basic UI Composition"],
    color: "cyan",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-cyan-400" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="relative p-6 bg-[#0a0f1e]/40 border-2 animate-border-flow backdrop-blur-sm hover:bg-[#0a0f1e]/60 transition-all duration-300 group overflow-hidden"
              style={{
                borderColor: `rgba(${
                  category.color === "cyan"
                    ? "6, 182, 212"
                    : category.color === "purple"
                    ? "139, 92, 246"
                    : "236, 72, 153"
                }, 0.3)`,
                animationDelay: `${idx * 0.5}s`,
              }}
            >
              {/* Corner accents */}
              <div
                className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-${category.color}-400/50`}
              />
              <div
                className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-${category.color}-400/50`}
              />

              {/* Scanline effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(6,182,212,0.03)_2px,rgba(6,182,212,0.03)_4px)]" />
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-2 h-2 bg-${category.color}-400 animate-pulse`}
                  />
                  <h3
                    className={`text-xl font-semibold text-${category.color}-300 uppercase tracking-wider font-mono`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="bg-[#0f1729]/80 text-gray-300 border border-purple-500/20 hover:border-purple-400/50 hover:text-purple-300 hover:bg-purple-500/10 transition-all cursor-default font-mono text-xs uppercase tracking-wide"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
