"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Check,
  Copy,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

const BUDGET_OPTIONS = [
  { label: "< $500", desc: "MVP / Bug Fix / Quick Task" },
  { label: "$500 – $1,500", desc: "Feature Build / Full Stack App" },
  { label: "$1,500 – $3,500", desc: "Complete System Architecture" },
  { label: "$3,500+", desc: "Enterprise AI & Scalable Backend" },
  { label: "Flexible", desc: "Discuss on intro call" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budgetRange: "$500 – $1,500",
    projectBrief: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = "animeshmalik277@gmail.com";
  const whatsappUrl =
    "https://wa.me/916396520400?text=Hi%20Animesh,%20I%20have%20a%20project%20query.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const dynamicWhatsAppLink = `https://wa.me/916396520400?text=${encodeURIComponent(
    `Hi Animesh, my name is ${formData.name || "Client"} (${formData.email || "No email"}). I have a project inquiry with budget ${formData.budgetRange}: ${formData.projectBrief || "Let's discuss details."}`
  )}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a Project <span className="gradient-text-cyan-indigo">With Animesh</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Ready to bring your software vision to life? Submit your project brief below for a fast
            technical quote or connect instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Instant WhatsApp CTA & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Instant WhatsApp Card */}
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Instant WhatsApp Connect</h3>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Direct line &bull; Typical reply &lt; 30 mins</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Prefer immediate chat without filling out forms? Launch a pre-configured conversation
                with Animesh on WhatsApp with one click.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-dark-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all group-hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]"
              >
                <MessageCircle className="w-5 h-5 fill-dark-950" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Info Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
              <h4 className="text-sm font-mono text-cyan-300 uppercase tracking-wider font-bold">
                Direct Channels &amp; Verification
              </h4>

              {/* Email copy */}
              <div className="p-3.5 rounded-xl bg-dark-900/80 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm text-white font-mono select-all">
                    {myEmail}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Status & Location Info */}
              <div className="space-y-3 text-xs text-gray-300 font-mono">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Shamli / Greater Noida, UP, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>B.Tech CSE @ Galgotias University (2023–Present)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Available for Full-Stack, Java Backend &amp; AI Contracts</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href="https://github.com/AnimeshMalik2777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/AnimeshMalik2777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/Animesh2777/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-amber-500/40 text-gray-300 hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-1.5"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  Priority Response
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                Fill out the details below. All client project briefs receive a tailored architecture outline within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-5"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white">Inquiry Dispatched Successfully!</h4>
                      <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                        Thank you, <span className="text-white font-semibold">{formData.name}</span>! Animesh has received your project brief. A technical response will be sent to <span className="text-cyan-400 font-mono">{formData.email}</span>.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-xl bg-dark-900/80 border border-white/10 text-left font-mono text-xs space-y-1.5 text-gray-300">
                      <div><span className="text-gray-500">Selected Budget:</span> <span className="text-amber-400 font-semibold">{formData.budgetRange}</span></div>
                      <div><span className="text-gray-500">Project Brief:</span> <span className="text-gray-300 line-clamp-2">{formData.projectBrief}</span></div>
                    </div>

                    {/* Optional Instant WhatsApp Forward */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={dynamicWhatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      >
                        <MessageCircle className="w-4 h-4 fill-dark-950" />
                        <span>Also Forward to WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            budgetRange: "$500 – $1,500",
                            projectBrief: "",
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-cyan-300 transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-300">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Alex Morgan"
                          className="w-full bg-dark-900/90 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-300">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="alex@company.com"
                          className="w-full bg-dark-900/90 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                          <span>Estimated Budget Range *</span>
                        </label>
                        <span className="text-[11px] font-mono text-amber-400/90">
                          {formData.budgetRange}
                        </span>
                      </div>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full bg-dark-900/90 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono"
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt.label} value={opt.label}>
                            {opt.label} ({opt.desc})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Brief */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Project Brief *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.projectBrief}
                        onChange={(e) =>
                          setFormData({ ...formData, projectBrief: e.target.value })
                        }
                        placeholder="Describe your vision, target timeline, features required, or technical stack..."
                        className="w-full bg-dark-900/90 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/60 transition-all font-mono resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Inquiry...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
