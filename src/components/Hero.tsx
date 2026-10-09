import React from 'react';
import { ArrowRight, ChevronDown, Globe, Sparkles, Zap, Bot, UserCheck, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col justify-center bg-[#030509]">
      
      {/* Laser Light Streaks matching reference image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Diagonal Beams (Top Right to Bottom Right) */}
        <svg
          className="absolute top-0 right-0 w-[900px] h-[900px] opacity-70 transform translate-x-32 -translate-y-20"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#glow-filter)">
            {/* Primary Diagonal Beam 1 */}
            <path
              d="M300 -100 L1000 600"
              stroke="url(#blue-gradient-1)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Primary Diagonal Beam 2 */}
            <path
              d="M350 -100 L1050 600"
              stroke="url(#cyan-gradient-1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Secondary Parallel Beams */}
            <path
              d="M480 -100 L1180 600"
              stroke="url(#blue-gradient-2)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M520 -100 L1220 600"
              stroke="url(#orange-accent-beam)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter id="glow-filter" x="-50" y="-50" width="1300" height="1300" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="blue-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0066FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cyan-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blue-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="orange-accent-beam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#EA580C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bottom-Right Blue Radial Bloom */}
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-gradient-to-tl from-[#0066FF]/40 via-[#38BDF8]/20 to-transparent blur-3xl rounded-full opacity-80" />

        {/* Bottom-Left Warm Orange Aura */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#F97316]/35 via-[#EA580C]/15 to-transparent blur-3xl rounded-full opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Hero Headline & Copy (Matching reference alignment & styling) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 pt-4">
            
            {/* Eyebrow Badge matching reference pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="text-[11px] font-semibold tracking-wider text-slate-200 uppercase font-mono">
                SUPERCHARGE YOUR WORKFLOWS
              </span>
            </div>

            {/* Oversized Clean White Headline matching reference */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Automate Your Workflows with AI Agents
            </h1>

            {/* Subheadline matching reference style */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              We design custom AI agents and connected workflows to help teams handle repetitive tasks, find answers faster, and keep people in control.
            </p>

            {/* CTA Buttons matching reference pill shape with glow borders */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full text-white btn-glow-orange transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4 text-orange-400" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full text-white bg-white/5 border border-white/20 hover:border-sky-400/50 hover:bg-white/10 transition-all duration-300"
              >
                Discuss a Project
              </a>
            </div>
          </div>

          {/* Right Column / Lower Hero Preview Panel matching reference bottom window preview */}
          <div className="lg:col-span-5 w-full mt-6 lg:mt-0">
            <div className="relative rounded-2xl bg-[#0A0E17]/90 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/90 p-5 sm:p-6 overflow-hidden group hover:border-sky-400/40 transition-all duration-300">
              
              {/* Sleek Header Bar with Red/Yellow/Green window dots */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
                </div>
                
                {/* Model selector dropdown matching reference "GPT 4.5" pill dropdown */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Claudius Engine</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-slate-400">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Mock App Interface Workspace */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#101625] border border-white/10 text-xs text-slate-300 font-mono flex items-center justify-between">
                  <span className="text-slate-400">A whole new way to automate operations.</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-sans border border-sky-500/30">
                    Illustrative workflow
                  </span>
                </div>

                {/* 4 Connected Nodes Diagram */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">1. Trigger</div>
                      <div className="text-[10px] text-slate-400">Event Received</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-sky-500 text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">2. AI Agent</div>
                      <div className="text-[10px] text-sky-300">Processing</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">3. Human Review</div>
                      <div className="text-[10px] text-slate-400">Operator Sign-off</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">4. Tools</div>
                      <div className="text-[10px] text-slate-400">API Executed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom status note */}
              <div className="mt-4 pt-3 border-t border-white/10 text-center">
                <span className="text-[11px] text-slate-400">
                  Claudius Nero Project architecture &bull; Human-in-the-loop safeguards
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
