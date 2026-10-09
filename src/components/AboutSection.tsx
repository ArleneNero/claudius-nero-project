import React from 'react';
import { SITE_CONFIG } from '../config/site';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#030509] border-t border-white/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Tag */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono mb-3">
          ABOUT THE INITIATIVE
        </h2>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
          Grounded Automation for Growing Teams
        </h3>

        {/* Exact Honest Paragraph */}
        <div className="rounded-2xl glass-card p-8 sm:p-10 text-left sm:text-center space-y-4">
          <p className="text-base sm:text-lg text-white leading-relaxed font-normal">
            <span className="font-semibold text-sky-400">{SITE_CONFIG.name}</span> is an emerging AI automation initiative focused on building useful, maintainable solutions for real operational problems.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Rather than chasing broad industry hype, our goal is to design simple, well-governed AI assistants and system integrations that directly save time and reduce manual friction for business operators.
          </p>
        </div>

      </div>
    </section>
  );
};
