import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LeetCodeStats from "@/components/LeetCodeStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Glassmorphic Navigation Header */}
      <Navbar />

      {/* Main Content Sections with Smooth Scrolling */}
      <main className="flex-1 space-y-12">
        <Hero />
        <Terminal />
        <Skills />
        <Projects />
        <LeetCodeStats />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
