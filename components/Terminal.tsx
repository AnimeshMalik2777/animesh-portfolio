"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Terminal as TerminalIcon,
  CornerDownLeft,
  Maximize2,
  Minimize2,
  RotateCcw,
  Check,
  Copy,
} from "lucide-react";

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

const COMMAND_SUGGESTIONS = [
  "help",
  "bio",
  "skills",
  "projects",
  "education",
  "certs",
  "contact",
  "clear",
];

export default function Terminal() {
  const [inputVal, setInputVal] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialOutputs: CommandOutput[] = [
    {
      id: "init-1",
      command: "init",
      output: (
        <div className="text-cyan-400 font-semibold font-mono">
          Initialized Animesh&apos;s Portfolio... Type &apos;help&apos; to explore.
        </div>
      ),
    },
    {
      id: "init-2",
      command: "whoami",
      output: (
        <div className="text-gray-300 font-mono">
          <span className="text-cyan-400 font-bold">animesh</span> &bull; Software Developer &amp; Full Stack Specialist
          <div className="text-xs text-gray-400 mt-1">
            B.Tech CSE @ Galgotias University (2023–Present) | Greater Noida / Shamli, UP, India
          </div>
        </div>
      ),
    },
  ];

  const [outputs, setOutputs] = useState<CommandOutput[]>(initialOutputs);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputs]);

  const handleCommandExecution = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Track command in history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();
    let response: React.ReactNode;

    switch (lower) {
      case "help":
        response = (
          <div className="space-y-1 text-gray-300 text-xs sm:text-sm font-mono">
            <p className="text-cyan-300 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-cyan-400 font-bold">bio</span> - Background &amp; profile summary</div>
              <div><span className="text-cyan-400 font-bold">education</span> - Academic background &amp; university</div>
              <div><span className="text-cyan-400 font-bold">skills</span> - Categorized technical stack</div>
              <div><span className="text-cyan-400 font-bold">projects</span> - Flagship software projects</div>
              <div><span className="text-cyan-400 font-bold">certs</span> - Industry certifications</div>
              <div><span className="text-cyan-400 font-bold">contact</span> - Email, WhatsApp &amp; location</div>
              <div><span className="text-cyan-400 font-bold">socials</span> - GitHub, LinkedIn, LeetCode</div>
              <div><span className="text-cyan-400 font-bold">clear</span> - Flush terminal screen</div>
            </div>
          </div>
        );
        break;

      case "bio":
        response = (
          <div className="text-xs sm:text-sm text-gray-300 space-y-2">
            <p>
              Hi, I am <span className="text-cyan-400 font-bold">Animesh</span>. A passionate Software Developer &amp; Full Stack Specialist with strong foundations in Computer Science, Data Structures &amp; Algorithms, and systems development.
            </p>
            <p>
              Currently pursuing <span className="text-white font-medium">B.Tech in Computer Science and Engineering</span> at <span className="text-cyan-300">Galgotias University</span>. Proficient in Java enterprise systems (Spring/JSP), Python backends (FastAPI), AI vector search engines, and modern responsive frontend frameworks.
            </p>
          </div>
        );
        break;

      case "education":
        response = (
          <div className="text-xs sm:text-sm text-gray-300 space-y-1 font-mono">
            <div className="text-cyan-300 font-semibold">Academic Journey:</div>
            <div>• <span className="text-white font-bold">Degree:</span> Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</div>
            <div>• <span className="text-indigo-400 font-bold">Institution:</span> Galgotias University, Greater Noida, UP</div>
            <div>• <span className="text-amber-400 font-bold">Duration:</span> 2023 – Present</div>
            <div>• <span className="text-emerald-400 font-bold">Core Coursework:</span> DSA, OOP, DBMS, OS, Software Engineering, System Architecture</div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-xs sm:text-sm text-gray-300 space-y-2 font-mono">
            <div className="text-cyan-300 font-semibold">Technical Stack Breakdown:</div>
            <div>• <span className="text-indigo-400 font-bold">Languages:</span> Java, Python, JavaScript, HTML, CSS, SQL</div>
            <div>• <span className="text-cyan-400 font-bold">Backend &amp; Web:</span> Spring / JSP Servlets, FastAPI, Streamlit, Node.js, Next.js, React</div>
            <div>• <span className="text-purple-400 font-bold">Databases &amp; Cloud:</span> MySQL, MongoDB, AWS, Apache Tomcat, Maven</div>
            <div>• <span className="text-emerald-400 font-bold">Core Fundamentals:</span> DSA, OOP, DBMS, RDBMS, OS, System Architecture</div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-xs sm:text-sm text-gray-300 space-y-2">
            <div className="text-cyan-300 font-semibold font-mono">Flagship Projects:</div>
            <div className="p-2 rounded bg-white/5 border border-white/10 space-y-1">
              <div className="text-white font-bold flex items-center justify-between">
                <span>1. AI Semantic Search Engine</span>
                <span className="text-cyan-400 text-xs font-mono">Python &bull; FastAPI &bull; Streamlit</span>
              </div>
              <p className="text-gray-400 text-xs">Vector embedding search engine using cosine similarity for intelligent article retrieval with REST APIs.</p>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/10 space-y-1">
              <div className="text-white font-bold flex items-center justify-between">
                <span>2. Enterprise Online Shopping Platform</span>
                <span className="text-indigo-400 text-xs font-mono">Java &bull; Servlets &bull; MySQL &bull; Tomcat</span>
              </div>
              <p className="text-gray-400 text-xs">Full-stack e-commerce engine with user auth, session management, dynamic cart, and MVC architecture.</p>
            </div>
          </div>
        );
        break;

      case "certs":
      case "certifications":
        response = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <div className="text-cyan-300 font-semibold">Verified Certifications:</div>
            <div>1. <span className="text-rose-400 font-bold">Oracle Data Science</span> (Oracle Certified Professional)</div>
            <div>2. <span className="text-amber-400 font-bold">AWS Cloud Architecting</span> (AWS Academy Certified Graduate)</div>
            <div>3. <span className="text-amber-300 font-bold">AWS Cloud Foundations</span> (AWS Academy Certified Specialist)</div>
            <div>4. <span className="text-cyan-400 font-bold">NPTEL Software Testing</span> (Elite Certification by IIT/NPTEL)</div>
            <div>5. <span className="text-indigo-400 font-bold">AWS Java for Beginners</span> (Object-Oriented Java &amp; AWS)</div>
          </div>
        );
        break;

      case "socials":
        response = (
          <div className="text-xs sm:text-sm text-gray-300 space-y-1 font-mono">
            <p className="text-cyan-300 font-semibold">Verified Profiles:</p>
            <div>• GitHub: <a href="https://github.com/AnimeshMalik2777" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">github.com/AnimeshMalik2777</a></div>
            <div>• LinkedIn: <a href="https://linkedin.com/in/AnimeshMalik2777" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">linkedin.com/in/AnimeshMalik2777</a></div>
            <div>• LeetCode: <a href="https://leetcode.com/u/Animesh2777/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">leetcode.com/u/Animesh2777/</a></div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs sm:text-sm text-gray-300 space-y-1 font-mono">
            <div className="text-cyan-300 font-semibold">Direct Communication:</div>
            <div>• Email: <span className="text-white">animeshmalik277@gmail.com</span></div>
            <div>• Phone / WhatsApp: <a href="https://wa.me/916396520400" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 6396520400</a></div>
            <div>• Location: <span className="text-gray-300">Shamli / Greater Noida, UP, India</span></div>
          </div>
        );
        break;

      case "clear":
        setOutputs([
          {
            id: Math.random().toString(),
            command: "init",
            output: (
              <div className="text-cyan-400 font-semibold font-mono">
                Initialized Animesh&apos;s Portfolio... Type &apos;help&apos; to explore.
              </div>
            ),
          },
        ]);
        return;

      case "neofetch":
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs font-mono py-1">
            <div className="sm:col-span-4 text-cyan-400 select-none hidden sm:block">
              <pre className="text-[10px] leading-tight">
{`   /\\_/\\  
  ( o.o )  
   > ^ <   
 ANIMESH OS
 2026.10 LTS`}
              </pre>
            </div>
            <div className="sm:col-span-8 space-y-1 text-gray-300">
              <div><span className="text-cyan-400 font-bold">User:</span> Animesh Malik</div>
              <div><span className="text-indigo-400 font-bold">University:</span> Galgotias University (B.Tech CSE)</div>
              <div><span className="text-purple-400 font-bold">Primary:</span> Java, Python, FastAPI, Spring</div>
              <div><span className="text-emerald-400 font-bold">Status:</span> Open to Software Engineering Opportunities</div>
              <div><span className="text-amber-400 font-bold">Location:</span> Greater Noida / Shamli, UP, India</div>
              <div><span className="text-cyan-400 font-bold">DSA Track:</span> leetcode.com/u/Animesh2777/</div>
            </div>
          </div>
        );
        break;

      default:
        response = (
          <div className="text-rose-400 text-xs sm:text-sm font-mono">
            Command not found: &apos;{trimmed}&apos;. Type <span className="text-cyan-300 font-bold">&quot;help&quot;</span> to see available commands.
          </div>
        );
        break;
    }

    setOutputs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        output: response,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommandExecution(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  const copyTerminalOutput = () => {
    const text = outputs
      .map((item) => `$ ${item.command}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive CLI Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Command Center <span className="gradient-text-cyan-indigo">Terminal</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Interact with Animesh&apos;s portfolio directly through an in-browser Linux CLI. Type commands
            or click the suggestions below.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className={`glass-panel rounded-2xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden transition-all duration-300 ${
            isExpanded ? "fixed inset-4 z-50 max-w-none h-[calc(100vh-2rem)]" : "h-[480px]"
          } flex flex-col`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Title Bar */}
          <div className="bg-dark-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOutputs([]);
                }}
                className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
                title="Clear screen"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOutputs(initialOutputs);
                }}
                className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors"
                title="Reset terminal"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
                title="Toggle fullscreen"
              />
              <span className="ml-2 text-xs font-mono text-gray-400 hidden sm:inline">
                animesh@devbox:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyTerminalOutput();
                }}
                className="p-1 rounded text-gray-400 hover:text-cyan-300 transition-colors text-xs flex items-center gap-1"
                title="Copy terminal command log"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy Log"}</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOutputs(initialOutputs);
                }}
                className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                title="Reset session"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                title="Expand"
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4 bg-dark-950/90 text-gray-200">
            {outputs.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-gray-500 font-bold">animesh@devbox:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-cyan-500/20 py-0.5">{item.output}</div>
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div className="flex items-center gap-2 text-cyan-400 pt-1">
              <span className="text-gray-500 font-bold select-none">animesh@devbox:~$</span>
              <div className="flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-white outline-none font-mono text-xs sm:text-sm caret-cyan-400"
                  autoFocus
                  placeholder="type 'help', 'skills', 'education'..."
                />
              </div>
              <CornerDownLeft className="w-4 h-4 text-gray-600 hidden sm:block" />
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Suggestions Footer */}
          <div className="bg-dark-900/80 px-4 py-2.5 border-t border-white/10 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-gray-500 text-[11px] whitespace-nowrap">Suggested:</span>
            {COMMAND_SUGGESTIONS.map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommandExecution(cmd);
                }}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 text-gray-300 border border-white/5 hover:border-cyan-500/30 transition-all whitespace-nowrap text-[11px]"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
