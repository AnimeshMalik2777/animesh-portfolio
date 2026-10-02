"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Maximize2,
  X,
  Sparkles,
  Server,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  id: string;
  title: string;
  category: "ai" | "java" | "fullstack";
  tagline: string;
  description: string;
  architectureDetails: {
    overview: string;
    highlights: string[];
    challenges: string;
    stack: string[];
  };
  metrics: string;
  demoUrl: string;
  githubUrl: string;
  badge: string;
  accentColor: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "ai-semantic-search",
    title: "AI Semantic Search Engine",
    category: "ai",
    tagline: "Vector Embedding Search Engine with Cosine Similarity",
    description:
      "End-to-end vector embedding search engine using cosine similarity for intelligent article and document retrieval with high-performance REST APIs.",
    architectureDetails: {
      overview:
        "Engineered with Python, FastAPI, and Sentence Transformers. Incoming documents and queries are projected into high-dimensional vector space using pre-trained dense embedding models. Fast vectorized matrix multiplication via NumPy executes cosine similarity scoring for sub-50ms ranking.",
      highlights: [
        "Real-time semantic search beyond simple keyword matching",
        "Automated text chunking and dense vector embedding pipeline",
        "High-throughput asynchronous REST API endpoints with FastAPI",
        "Interactive Streamlit frontend for query exploration and similarity tuning",
      ],
      challenges:
        "Optimizing matrix cosine similarity computations for low-latency batch article queries using vectorized NumPy operations.",
      stack: ["Python", "FastAPI", "Streamlit", "NumPy", "Sentence Transformers", "REST APIs"],
    },
    metrics: "Sub-50ms semantic retrieval across indexed articles",
    demoUrl: "https://github.com/AnimeshMalik2777",
    githubUrl: "https://github.com/AnimeshMalik2777",
    badge: "Flagship AI Project",
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "enterprise-shopping-platform",
    title: "Enterprise Online Shopping Platform",
    category: "java",
    tagline: "Full-Stack MVC E-Commerce Engine with User Auth",
    description:
      "Full-stack e-commerce engine with user auth, session management, dynamic shopping cart, product catalog, and MVC architecture running on Apache Tomcat.",
    architectureDetails: {
      overview:
        "Architected following strict MVC (Model-View-Controller) design patterns. Leverages Java Servlets as controllers, JSP with JSTL for dynamic server-side views, and JDBC connection pools communicating with a normalized MySQL relational database.",
      highlights: [
        "Secure user authentication with salted hashing and HTTP session tracking",
        "Dynamic session-persistent shopping cart with quantity recalculation",
        "Modular backend architecture with clean DAO and Service layer separation",
        "Custom relational database schemas with foreign key integrity in MySQL",
      ],
      challenges:
        "Ensuring ACID compliance and transaction isolation during concurrent checkout cart updates and inventory deduction.",
      stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat", "Maven"],
    },
    metrics: "100% ACID Compliant Checkout & Zero-Leak Session Mgmt",
    demoUrl: "https://github.com/AnimeshMalik2777",
    githubUrl: "https://github.com/AnimeshMalik2777",
    badge: "Enterprise Java",
    accentColor: "from-indigo-500 to-purple-600",
  },
  {
    id: "nextjs-dev-portfolio",
    title: "Dynamic Developer Portfolio 2.0",
    category: "fullstack",
    tagline: "Dark Glassmorphism Portfolio with In-Browser CLI",
    description:
      "High-performance personal developer portfolio with custom cyber aesthetics, in-browser CLI terminal emulator, live problem-solving telemetry, and 60fps animations.",
    architectureDetails: {
      overview:
        "Built on Next.js 14 App Router with Tailwind CSS and Framer Motion. Implements responsive glassmorphic cards, keyboard-driven terminal emulator, and accessible UI components.",
      highlights: [
        "Zero-latency in-browser interactive terminal command interpreter",
        "Fluid Framer Motion micro-interactions and neon glow aesthetics",
        "Prerendered static pages with 100/100 Lighthouse performance metrics",
        "Direct WhatsApp CTA and dual-channel inquiry system",
      ],
      challenges:
        "Fine-tuning backdrop-blur and neon shadows for high-framerate rendering across all mobile and desktop browsers.",
      stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    metrics: "100 Lighthouse Performance & 60fps Glassmorphic UI",
    demoUrl: "https://github.com/AnimeshMalik2777",
    githubUrl: "https://github.com/AnimeshMalik2777",
    badge: "Modern Full Stack",
    accentColor: "from-cyan-400 to-emerald-500",
  },
  {
    id: "dsa-algorithmic-vault",
    title: "Algorithmic Problem-Solving Vault",
    category: "fullstack",
    tagline: "Optimized DSA Implementations & Pattern Reference",
    description:
      "Curated repository of optimized algorithmic solutions across LeetCode, covering dynamic programming, graph traversals, trees, and system design patterns.",
    architectureDetails: {
      overview:
        "Comprehensive documentation of time/space complexity trade-offs, edge-case handlers, and recurrence relation derivations for complex algorithmic challenges in Java and Python.",
      highlights: [
        "Optimal O(N) and O(log N) solutions for LeetCode Medium/Hard challenges",
        "Deep dives into Dynamic Programming, Sliding Window, and Graph DFS/BFS",
        "Unit tested solutions ensuring correctness against extreme boundary cases",
        "Clean OOP structure adhering to industry-standard naming conventions",
      ],
      challenges:
        "Deriving non-trivial state transition formulas for multi-dimensional dynamic programming and graph cycle detection.",
      stack: ["Java", "Python", "DSA", "LeetCode", "JUnit"],
    },
    metrics: "Hundreds of Verified Solutions & Optimal Complexities",
    demoUrl: "https://leetcode.com/u/Animesh2777/",
    githubUrl: "https://github.com/AnimeshMalik2777",
    badge: "DSA & Problem Solving",
    accentColor: "from-amber-500 to-orange-600",
  },
];

const CATEGORY_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Python" },
  { id: "java", label: "Enterprise Java" },
  { id: "fullstack", label: "Full Stack & DSA" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === "all") return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flagship <span className="gradient-text-cyan-indigo">Projects &amp; Solutions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Hands-on systems engineered by Animesh: from AI vector search engines to Java enterprise e-commerce platforms. Click any card to inspect system architecture.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                  : "bg-dark-900/60 text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow backdrop on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      {project.metrics.split("&")[0]}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mb-3 font-mono">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.architectureDetails.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-dark-900/90 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group-hover:underline"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Architecture
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                      title="View Code on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      title="Live Preview / Repo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark-950/85 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.25)] max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Solution
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-medium text-cyan-400 font-mono">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* System Architecture Overview */}
              <div className="space-y-6 text-sm text-gray-300">
                <div className="p-4 rounded-xl bg-dark-900/90 border border-white/10 space-y-2">
                  <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400" />
                    System Architecture &amp; Pipeline
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedProject.architectureDetails.overview}
                  </p>
                </div>

                {/* Key Engineering Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-indigo-300 uppercase tracking-wider font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Key Highlights &amp; Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.architectureDetails.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300"
                      >
                        <span className="text-cyan-400 font-bold font-mono">0{idx + 1}.</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Challenges Solved */}
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
                  <h4 className="text-xs font-mono text-amber-300 uppercase tracking-wider font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Engineering Challenge Solved
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {selectedProject.architectureDetails.challenges}
                  </p>
                </div>

                {/* Full Stack Chips */}
                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider font-bold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.architectureDetails.stack.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-dark-900 border border-cyan-500/20 text-cyan-300 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-gray-400">
                  Impact: <span className="text-white font-bold">{selectedProject.metrics}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-dark-900 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
