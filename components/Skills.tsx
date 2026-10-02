"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Layers,
  Sparkles,
  Search,
  BookOpen,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "backend" | "cloud" | "fundamentals";
  level: number;
  experience: string;
  tags: string[];
  icon: string;
}

const SKILLS_DATA: SkillItem[] = [
  // 1. Languages
  {
    name: "Java",
    category: "languages",
    level: 94,
    experience: "Core Java, OOP, Collections Framework, Multithreading & JDBC",
    tags: ["Java 17+", "OOP", "Collections", "JDBC"],
    icon: "☕",
  },
  {
    name: "Python",
    category: "languages",
    level: 92,
    experience: "FastAPI backends, Sentence Transformers, NumPy, Vector Math",
    tags: ["Python 3.x", "NumPy", "Sentence Transformers"],
    icon: "🐍",
  },
  {
    name: "JavaScript",
    category: "languages",
    level: 90,
    experience: "ES6+, Async/Await, DOM Manipulation, Event Loop & Promises",
    tags: ["ES6+", "Async/Await", "Dynamic Web"],
    icon: "⚡",
  },
  {
    name: "SQL",
    category: "languages",
    level: 92,
    experience: "Complex Joins, Subqueries, Indexing, Schema Normalization",
    tags: ["Queries", "Relational", "ACID", "Joins"],
    icon: "📊",
  },
  {
    name: "HTML5",
    category: "languages",
    level: 95,
    experience: "Semantic markup, Accessibility (a11y), Modern Web Standards",
    tags: ["HTML5", "Semantic UI", "SEO"],
    icon: "🌐",
  },
  {
    name: "CSS3",
    category: "languages",
    level: 90,
    experience: "Flexbox, CSS Grid, Responsive Design, Animations & Variables",
    tags: ["CSS3", "Flexbox", "Grid", "Animations"],
    icon: "🎨",
  },

  // 2. Backend & Web
  {
    name: "Spring / JSP & Servlets",
    category: "backend",
    level: 92,
    experience: "MVC architecture, HTTP Session handling, Filters, Servlet Lifecycle",
    tags: ["Spring", "JSP", "Servlets", "MVC", "Tomcat"],
    icon: "🍃",
  },
  {
    name: "FastAPI",
    category: "backend",
    level: 94,
    experience: "High-performance async REST APIs, Pydantic schemas, Swagger docs",
    tags: ["FastAPI", "Pydantic", "AsyncIO", "REST"],
    icon: "🚀",
  },
  {
    name: "Streamlit",
    category: "backend",
    level: 90,
    experience: "Rapid interactive data apps & ML model frontend deployment",
    tags: ["Streamlit", "ML Dashboards", "Data UI"],
    icon: "🎈",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 88,
    experience: "Event-driven runtime, NPM ecosystem, REST APIs, JSON processing",
    tags: ["Node.js", "Express", "REST"],
    icon: "🟢",
  },
  {
    name: "Next.js",
    category: "backend",
    level: 92,
    experience: "App Router, Server-Side Rendering (SSR), Client components, API routes",
    tags: ["Next.js 14", "App Router", "SSR"],
    icon: "▲",
  },
  {
    name: "React",
    category: "backend",
    level: 92,
    experience: "Component lifecycle, Hooks, State management, Virtual DOM",
    tags: ["React 18", "Hooks", "Component Architecture"],
    icon: "⚛️",
  },

  // 3. Databases & Cloud
  {
    name: "MySQL",
    category: "cloud",
    level: 93,
    experience: "Relational modeling, Foreign keys, Stored procedures, Transactions",
    tags: ["MySQL", "RDBMS", "InnoDB", "Indexing"],
    icon: "🐬",
  },
  {
    name: "MongoDB",
    category: "cloud",
    level: 88,
    experience: "Document schemas, BSON queries, Aggregation pipelines, Atlas cloud",
    tags: ["MongoDB", "NoSQL", "Mongoose"],
    icon: "🍃",
  },
  {
    name: "AWS (Amazon Web Services)",
    category: "cloud",
    level: 88,
    experience: "EC2 instances, S3 storage, Cloud Architecting principles, IAM policies",
    tags: ["AWS Certified", "EC2", "S3", "Cloud Architecture"],
    icon: "☁️",
  },
  {
    name: "Apache Tomcat",
    category: "cloud",
    level: 90,
    experience: "Web application deployment (WAR), Servlet container configuration",
    tags: ["Tomcat", "Deployment", "WAR", "Server Config"],
    icon: "🐱",
  },
  {
    name: "Maven",
    category: "cloud",
    level: 91,
    experience: "Dependency management, pom.xml configuration, build lifecycle",
    tags: ["Maven", "Build Automation", "Java Build"],
    icon: "📦",
  },

  // 4. Core Fundamentals
  {
    name: "Data Structures & Algorithms (DSA)",
    category: "fundamentals",
    level: 95,
    experience: "Arrays, LinkedLists, Stacks, Queues, Trees, Graphs, DP & Binary Search",
    tags: ["DSA", "LeetCode", "Optimal Complexity", "Problem Solving"],
    icon: "🧩",
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "fundamentals",
    level: 96,
    experience: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID principles",
    tags: ["OOP", "SOLID", "Design Patterns", "Clean Code"],
    icon: "🏛️",
  },
  {
    name: "DBMS & RDBMS",
    category: "fundamentals",
    level: 94,
    experience: "ACID properties, Normalization (1NF to BCNF), Concurrency & Indexing",
    tags: ["DBMS", "ACID", "Normalization", "Concurrency"],
    icon: "💾",
  },
  {
    name: "Operating Systems (OS)",
    category: "fundamentals",
    level: 90,
    experience: "Process scheduling, Threads, Deadlocks, Memory management, Paging",
    tags: ["Processes", "Threads", "Memory Management", "Deadlocks"],
    icon: "⚙️",
  },
  {
    name: "System Architecture",
    category: "fundamentals",
    level: 89,
    experience: "MVC design pattern, Client-Server model, REST principles, Scalability",
    tags: ["MVC", "Client-Server", "Scalability", "System Design"],
    icon: "📐",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "languages", label: "Languages", icon: Code },
  { id: "backend", label: "Backend & Web", icon: Server },
  { id: "cloud", label: "Databases & Cloud", icon: Database },
  { id: "fundamentals", label: "Core Fundamentals", icon: BookOpen },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory =
      selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-xs font-mono text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Weaponry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Categorized <span className="gradient-text-cyan-indigo">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Grounded in core Computer Science fundamentals at Galgotias University, spanning modern
            Java enterprise stacks, Python AI tooling, and cloud architectures.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "bg-dark-900/60 text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-900/80 border border-white/10 focus:border-cyan-500/50 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 group relative overflow-hidden"
              >
                {/* Glow accent in corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl pointer-events-none group-hover:from-cyan-500/25 transition-all" />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-dark-900/90 border border-white/10 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar with Glowing Neon */}
                <div className="space-y-1.5 mb-3">
                  <div className="w-full bg-dark-900/80 rounded-full h-2 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                    />
                  </div>
                </div>

                {/* Experience Detail */}
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {skill.experience}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-900/70 text-gray-300 border border-white/5 group-hover:border-cyan-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-mono text-sm">
            No technologies found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </div>
    </section>
  );
}
