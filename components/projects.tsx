import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FileText } from "lucide-react";

const projects = [
    {
    title: "Steam GameFinder — Semantic Game Recommendation Engine",
    description:
      "An AI-driven game discovery system that enables natural language-based search and recommendation of Steam games. The platform combines LLM-powered intent understanding, vector embeddings, and hybrid ranking to deliver context-aware, explainable recommendations.",
    tech: [
      "Python",
      "LLMs (LLaMA)",
      "Semantic Search",
      "Vector Databases (Pinecone)",
      "Hybrid Ranking Systems",
      "FastAPI",
    ],
    github: "https://github.com/AnuragG-007/steam-gamefinder",
    demo: "https://steam-games-amg.vercel.app/",
    blog: "/projects/steam-games-recommendation-engine",
  },
  {
    title: "LegalWork.AI — Legal Document Summarization System",
    description:
      "An AI-powered legal NLP system for summarizing legislative bills, judicial & court hearings, and legal transcripts. The platform leverages fine-tuned large language models to generate structured, research-grade summaries for faster legal analysis and decision-making.",
    tech: [
      "Python",
      "LLM Fine-Tuning",
      "Hugging Face Transformers",
      "LED / Long-Context Models",
      "NLP",
      "FastAPI",
    ],
    github: "https://github.com/AnuragG-007/nlp-legal-document-summarizer",
    demo: "https://legalsum.vercel.app/",
    blog: "/projects/legal-led-summarization",
  },
  {
    title: "QuantMind Alpha — AI-Driven Financial Forecasting Terminal",
    description:
      "A FastAPI-powered backend for real-time financial time-series forecasting and analysis, delivering predictive insights for stocks and market data through scalable APIs.",
    tech: [
      "Python",
      "FastAPI",
      "Deep Learning (LSTM)",
      "Time Series Forecasting",
      "Docker",
      "Hugging Face Spaces",
    ],
    github: "https://github.com/AnuragG-007/LSTM-financial-dashboard-build",
    demo: "https://stock-pred-lstm.vercel.app",
    blog: "/projects/stock-timeseries-analysis",
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "Custom BERT-based sentiment classifier trained on domain-specific data with 94% accuracy.",
    tech: ["BERT", "Hugging Face", "PyTorch", "MLflow", "AWS"],
  },
  {
    title: "Image Segmentation Platform",
    description:
      "Scalable segmentation service using U-Net architecture for medical imaging applications.",
    tech: ["U-Net", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-cyan-400" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="relative bg-[#0a0f1e]/40 border-2 border-cyan-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/40" />

              <CardHeader>
                <CardTitle className="text-xl text-cyan-300 uppercase tracking-wide font-mono">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 font-mono text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="outline"
                      className="text-xs border-purple-500/30 text-purple-300 bg-purple-500/5 font-mono uppercase"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-2 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-mono uppercase text-xs tracking-wider"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-2 border-purple-500/40 text-purple-400 hover:bg-purple-500/10 font-mono uppercase text-xs tracking-wider"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </a>
                  )}

                  {project.blog && (
                    <Link href={project.blog} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-2 border-pink-500/40 text-pink-400 hover:bg-pink-500/10 font-mono uppercase text-xs tracking-wider"
                      >
                        <FileText className="mr-1 h-3 w-3" />
                        Blog
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
