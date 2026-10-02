"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Flame,
  Trophy,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/Icons";

interface TopicStat {
  name: string;
  solved: number;
  proficiency: "Expert" | "Advanced" | "Proficient";
}

const TOPIC_STATS: TopicStat[] = [
  { name: "Arrays & Two Pointers", solved: 95, proficiency: "Expert" },
  { name: "Dynamic Programming", solved: 80, proficiency: "Expert" },
  { name: "Trees & Binary Search Trees", solved: 75, proficiency: "Expert" },
  { name: "Graphs & Disjoint Sets", solved: 60, proficiency: "Advanced" },
  { name: "Binary Search", solved: 50, proficiency: "Advanced" },
  { name: "Stacks & Queues", solved: 45, proficiency: "Advanced" },
  { name: "Recursion & Backtracking", solved: 40, proficiency: "Proficient" },
  { name: "String Manipulation & Tries", solved: 35, proficiency: "Proficient" },
  { name: "Database Queries & SQL", solved: 55, proficiency: "Expert" },
];

interface Certification {
  id: string;
  title: string;
  issuer: "Oracle" | "AWS" | "NPTEL";
  issuerBadge: string;
  date: string;
  skills: string[];
  credentialId: string;
  iconBg: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "oracle-ds",
    title: "Oracle Data Science",
    issuer: "Oracle",
    issuerBadge: "Oracle Certified",
    date: "Certified Professional",
    skills: ["Data Science", "Machine Learning", "Python", "Data Pipeline"],
    credentialId: "ORCL-DS-2024",
    iconBg: "from-red-500/20 to-orange-500/20 border-red-500/40 text-red-400",
  },
  {
    id: "aws-arch",
    title: "AWS Cloud Architecting",
    issuer: "AWS",
    issuerBadge: "AWS Academy",
    date: "Certified Graduate",
    skills: ["Cloud Architecture", "High Availability", "VPC & Security", "EC2 & S3"],
    credentialId: "AWS-ARCH-2024",
    iconBg: "from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-400",
  },
  {
    id: "aws-found",
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    issuerBadge: "AWS Academy",
    date: "Certified Specialist",
    skills: ["Cloud Concepts", "IAM", "Serverless Basics", "Cloud Security"],
    credentialId: "AWS-FND-2024",
    iconBg: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300",
  },
  {
    id: "nptel-testing",
    title: "NPTEL Software Testing",
    issuer: "NPTEL",
    issuerBadge: "NPTEL / IIT",
    date: "Elite Certification",
    skills: ["Unit Testing", "Test Cases", "Boundary Value", "Integration Testing"],
    credentialId: "NPTEL-ST-2024",
    iconBg: "from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400",
  },
  {
    id: "aws-java",
    title: "AWS Java for Beginners",
    issuer: "AWS",
    issuerBadge: "AWS Academy",
    date: "Certified Foundation",
    skills: ["Java OOP", "AWS Integration", "Control Structures", "Data Types"],
    credentialId: "AWS-JAVA-2024",
    iconBg: "from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-400",
  },
];

export default function LeetCodeStats() {
  const [activeTab, setActiveTab] = useState<"overview" | "topics">("overview");

  const totalSolved = 450;
  const easySolved = 180;
  const mediumSolved = 220;
  const hardSolved = 50;

  const totalQuestions = 3100;
  const percentSolved = ((totalSolved / totalQuestions) * 100).toFixed(1);

  return (
    <section id="leetcode" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Problem Solving &amp; Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LeetCode Track &amp; <span className="gradient-text-cyan-indigo">Certifications</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Rigorous problem-solving expertise on LeetCode backed by industry-standard certifications
            from Oracle, Amazon Web Services (AWS), and NPTEL.
          </p>
        </div>

        {/* 1. LeetCode Problem Solving Widget */}
        <div className="glass-panel-elevated rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.12)] p-6 sm:p-10 relative overflow-hidden mb-16">
          {/* Ambient Corner Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Quick Badges Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <LeetCodeIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-white text-lg sm:text-xl">
                    LeetCode Profile: @Animesh2777
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40 font-mono font-bold">
                    Active Solver
                  </span>
                </div>
                <p className="text-xs font-mono text-gray-400">
                  Data Structures &amp; Algorithmic Thinking in Java &amp; Python
                </p>
              </div>
            </div>

            {/* Direct LeetCode & GitHub CTA */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AnimeshMalik2777"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-dark-900/90 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>DSA Repositories</span>
              </a>
              <a
                href="https://leetcode.com/u/Animesh2777/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-xs font-bold text-dark-950 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center gap-1.5"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 my-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Difficulty Breakdown
            </button>
            <button
              onClick={() => setActiveTab("topics")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === "topics"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Core Topics (9 Topics)
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Big Radial/Stat Display */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-900/60 border border-white/5 relative">
                {/* Visual Circle Gauge */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-dark-800"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-amber-400"
                      strokeWidth="8"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 * (1 - 0.65)}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-white font-mono">
                      {totalSolved}+
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      Problems Solved
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold mt-0.5">
                      {percentSolved}% Bank
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
                  <span>Consistent Problem Solving</span>
                </div>
              </div>

              {/* Right Column: Difficulty Breakdown Bars */}
              <div className="lg:col-span-8 space-y-4">
                {/* Easy */}
                <div className="p-4 rounded-xl bg-dark-900/80 border border-emerald-500/20 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Easy Problems (Fundamental Fluency)
                    </span>
                    <span className="text-gray-300 font-bold">
                      {easySolved} <span className="text-gray-500 font-normal">/ 850</span>
                    </span>
                  </div>
                  <div className="w-full bg-dark-950 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                      style={{ width: `${(easySolved / 850) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div className="p-4 rounded-xl bg-dark-900/80 border border-amber-500/20 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Medium Problems (Interview Core)
                    </span>
                    <span className="text-gray-300 font-bold">
                      {mediumSolved} <span className="text-gray-500 font-normal">/ 1700</span>
                    </span>
                  </div>
                  <div className="w-full bg-dark-950 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                      style={{ width: `${(mediumSolved / 1700) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div className="p-4 rounded-xl bg-dark-900/80 border border-rose-500/20 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-rose-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      Hard Problems (Algorithmic Depth)
                    </span>
                    <span className="text-gray-300 font-bold">
                      {hardSolved} <span className="text-gray-500 font-normal">/ 750</span>
                    </span>
                  </div>
                  <div className="w-full bg-dark-950 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-rose-400 rounded-full shadow-[0_0_10px_rgba(251,113,133,0.5)]"
                      style={{ width: `${(hardSolved / 750) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Focus summary */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-cyan-400 font-mono font-bold text-lg">Java &amp; Python</div>
                    <div className="text-[10px] text-gray-400 font-mono">Primary Languages</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-indigo-400 font-mono font-bold text-lg">Optimal O(N)</div>
                    <div className="text-[10px] text-gray-400 font-mono">Target Complexity</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center col-span-2 sm:col-span-1">
                    <div className="text-emerald-400 font-mono font-bold text-lg">Clean Code</div>
                    <div className="text-[10px] text-gray-400 font-mono">OOP Structure</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: TOPICS */}
          {activeTab === "topics" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              {TOPIC_STATS.map((topic) => (
                <div
                  key={topic.name}
                  className="p-3.5 rounded-xl bg-dark-900/70 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white">{topic.name}</div>
                    <span className="text-[10px] font-mono text-cyan-400">{topic.proficiency}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono font-bold text-emerald-400">
                      {topic.solved}+
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono">solved</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* 2. Professional Certifications Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Qualifications</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Professional <span className="gradient-text-cyan-indigo">Certifications</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-xl transition-all pointer-events-none" />

                <div>
                  {/* Issuer & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full bg-dark-900 border ${cert.iconBg}`}>
                      {cert.issuerBadge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mb-4">
                    {cert.date} &bull; {cert.credentialId}
                  </p>

                  {/* Skills validated pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900/90 text-gray-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    Authorized Issuer
                  </span>
                  <span className="text-gray-500">{cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
