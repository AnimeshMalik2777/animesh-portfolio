"use client";

import React from "react";
import {
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-500/10 bg-dark-950/80 backdrop-blur-2xl py-12 overflow-hidden">
      {/* Decorative top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-sm">
                &lt;A/&gt;
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Animesh
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Software Developer &amp; Full Stack Specialist &bull; B.Tech CSE @ Galgotias University (2023–Present).
              Engineering Java/Spring enterprise platforms, Python/FastAPI AI search engines, and modern web apps.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-gray-400">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">
              {"// 01. About"}
            </a>
            <a href="#terminal" className="hover:text-cyan-300 transition-colors">
              {"// 02. Terminal"}
            </a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">
              {"// 03. Skills"}
            </a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              {"// 04. Projects"}
            </a>
            <a href="#leetcode" className="hover:text-cyan-300 transition-colors">
              {"// 05. LeetCode & Certs"}
            </a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">
              {"// 06. Contact"}
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5">
            <a
              href="https://github.com/AnimeshMalik2777"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-white transition-all"
              title="GitHub: AnimeshMalik2777"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/AnimeshMalik2777"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-indigo-500/30 text-gray-400 hover:text-indigo-400 transition-all"
              title="LinkedIn: AnimeshMalik2777"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/Animesh2777/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-amber-500/30 text-gray-400 hover:text-amber-400 transition-all"
              title="LeetCode: Animesh2777"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/916396520400?text=Hi%20Animesh,%20I%20have%20a%20project%20query."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400 transition-all"
              title="WhatsApp: +91 6396520400"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 transition-all group"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Health Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-400">All systems operational &bull; Edge cached</span>
          </div>

          <div className="text-center sm:text-right">
            <span>&copy; {new Date().getFullYear()} Animesh. Built with Next.js 14, Tailwind &amp; Framer Motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
