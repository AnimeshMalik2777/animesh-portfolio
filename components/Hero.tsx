"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Cpu,
  Zap,
  GraduationCap,
  MapPin,
  CornerDownLeft,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

const ROLES = [
  "Software Developer",
  "Full Stack Specialist",
  "Java & Python Backend Specialist",
  "AI & Vector Search Engineer",
  "Problem Solver (DSA)",
];

const METRICS = [
  { label: "B.Tech CSE (2023-Present)", value: "Galgotias Univ", icon: GraduationCap, color: "text-cyan-400" },
  { label: "Core Engineering Stack", value: "Java & Python", icon: Cpu, color: "text-indigo-400" },
  { label: "Problem Solving Track", value: "LeetCode Active", icon: Zap, color: "text-amber-400" },
  { label: "Base Location", value: "Greater Noida, UP", icon: MapPin, color: "text-emerald-400" },
];

interface HeroTermLine {
  id: string;
  type: "system" | "user" | "response";
  text: string | React.ReactNode;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Hero mini-terminal state
  const [termInput, setTermInput] = useState("");
  const [termLines, setTermLines] = useState<HeroTermLine[]>([
    {
      id: "h-init",
      type: "system",
      text: "Initialized Animesh's Portfolio... Type 'help' to explore.",
    },
  ]);
  const termEndRef = useRef<HTMLDivElement>(null);
  const termInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentFullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1800;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroTermCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newLines: HeroTermLine[] = [
      ...termLines,
      { id: Math.random().toString(), type: "user", text: `$ ${trimmed}` },
    ];

    if (lower === "clear") {
      setTermLines([
        {
          id: Math.random().toString(),
          type: "system",
          text: "Initialized Animesh's Portfolio... Type 'help' to explore.",
        },
      ]);
      return;
    }

    let reply: React.ReactNode;
    if (lower === "help") {
      reply = (
        <span className="text-gray-300">
          Commands: <span className="text-cyan-300 font-bold">skills</span>,{" "}
          <span className="text-cyan-300 font-bold">projects</span>,{" "}
          <span className="text-cyan-300 font-bold">education</span>,{" "}
          <span className="text-cyan-300 font-bold">contact</span>,{" "}
          <span className="text-cyan-300 font-bold">clear</span>
        </span>
      );
    } else if (lower === "skills") {
      reply = (
        <span className="text-gray-300">
          Java, Python, FastAPI, Spring/JSP, Streamlit, Next.js, MySQL, AWS, Docker
        </span>
      );
    } else if (lower === "projects") {
      reply = (
        <span className="text-gray-300">
          1. AI Semantic Search Engine (Python/FastAPI) | 2. Enterprise E-Commerce (Java/Servlets/MySQL)
        </span>
      );
    } else if (lower === "education") {
      reply = (
        <span className="text-gray-300">
          B.Tech CSE @ Galgotias University (2023–Present) | Greater Noida, UP
        </span>
      );
    } else if (lower === "contact") {
      reply = (
        <span className="text-gray-300">
          Email: <span className="text-cyan-300">animeshmalik277@gmail.com</span> | WhatsApp: <span className="text-emerald-400">+91 6396520400</span>
        </span>
      );
    } else {
      reply = (
        <span className="text-rose-400">
          Unknown command: &apos;{trimmed}&apos;. Type &apos;help&apos; for list.
        </span>
      );
    }

    newLines.push({
      id: Math.random().toString(),
      type: "response",
      text: reply,
    });

    setTermLines(newLines);
    setTimeout(() => termEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleHeroTermCommand(termInput);
      setTermInput("");
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pill & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Software Developer &amp; Full Stack Specialist</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>Galgotias University (2023–Present)</span>
              </span>
            </motion.div>

            {/* Main Title with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m <span className="gradient-text-cyan-indigo">Animesh</span>.
              </h1>
              <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-3xl lg:text-4xl font-mono text-gray-300 font-semibold">
                  I am a{" "}
                  <span className="text-cyan-400 text-glow-cyan border-b-2 border-cyan-400 pb-0.5">
                    {displayText}
                  </span>
                  <span className="inline-block w-2 h-7 sm:h-8 bg-cyan-400 ml-1 animate-pulse align-middle" />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Passionate Computer Science undergraduate at <strong className="text-white font-medium">Galgotias University</strong> based in Greater Noida / Shamli, UP. Experienced in building robust Java &amp; Python architectures, FastAPI vector search engines, and modern full-stack systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 transition-all duration-300 group-hover:scale-105" />
                <span className="relative flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <button
                onClick={() => scrollTo("#skills")}
                className="group px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-gray-300 bg-dark-900/90 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2.5 backdrop-blur-md"
              >
                <Cpu className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
                <span>Technical Skills</span>
              </button>

              {/* Direct WhatsApp with Animesh's Phone */}
              <a
                href="https://wa.me/916396520400?text=Hi%20Animesh,%20I%20have%20a%20project%20query."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-gray-400 hover:text-emerald-400 bg-dark-900/60 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                title="Connect on WhatsApp (+91 6396520400)"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AnimeshMalik2777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-gray-400 hover:text-white bg-dark-900/60 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                title="GitHub: AnimeshMalik2777"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/AnimeshMalik2777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-gray-400 hover:text-indigo-400 bg-dark-900/60 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                title="LinkedIn: AnimeshMalik2777"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Animesh2777/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-gray-400 hover:text-amber-400 bg-dark-900/60 border border-white/10 hover:border-amber-500/30 transition-all duration-300"
                title="LeetCode: Animesh2777"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Hero Terminal Component */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg glass-panel rounded-2xl p-5 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.18)] relative overflow-hidden flex flex-col h-[380px]"
              onClick={() => termInputRef.current?.focus()}
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-400">
                    animesh@cli:~
                  </span>
                </div>
                <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                  Interactive Terminal
                </div>
              </div>

              {/* Terminal Output Stream */}
              <div className="flex-1 overflow-y-auto font-mono text-xs space-y-2 text-gray-200 pr-1">
                {termLines.map((line) => (
                  <div key={line.id} className="leading-relaxed">
                    {line.type === "system" && (
                      <div className="text-cyan-400 font-semibold">{line.text}</div>
                    )}
                    {line.type === "user" && (
                      <div className="text-indigo-300 font-bold">{line.text}</div>
                    )}
                    {line.type === "response" && (
                      <div className="pl-2 border-l border-cyan-500/30 text-gray-300 py-0.5">
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}

                {/* Active Prompt */}
                <div className="flex items-center gap-1.5 text-cyan-400 pt-1">
                  <span className="text-gray-500 font-bold select-none">&gt;</span>
                  <input
                    ref={termInputRef}
                    type="text"
                    value={termInput}
                    onChange={(e) => setTermInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="type 'help', 'skills'..."
                    className="w-full bg-transparent text-white outline-none font-mono text-xs caret-cyan-400 placeholder-gray-600"
                  />
                  <CornerDownLeft className="w-3.5 h-3.5 text-gray-600" />
                </div>
                <div ref={termEndRef} />
              </div>

              {/* Suggested Clickable Pills */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
                <span className="text-gray-500 whitespace-nowrap text-[10px]">Try:</span>
                {["help", "skills", "projects", "education", "contact", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHeroTermCommand(cmd);
                    }}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all whitespace-nowrap"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="glass-card rounded-xl p-4 border border-white/5 hover:border-cyan-500/30 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-dark-900/90 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-mono group-hover:text-cyan-300 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
