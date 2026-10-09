import React from 'react';
import { Bot, Network, FileSearch, Plug } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: <Bot className="w-6 h-6 text-blue-500" />,
      title: 'Custom AI Agents',
      description:
        'Task-specific AI agents engineered to follow your business protocols while maintaining explicit human review checkpoints for sensitive actions.',
    },
    {
      icon: <Network className="w-6 h-6 text-sky-400" />,
      title: 'Workflow Automation',
      description:
        'Multi-step automation pipelines connecting triggers, data transformations, and scheduled operations to eliminate repetitive manual steps.',
    },
    {
      icon: <FileSearch className="w-6 h-6 text-blue-400" />,
      title: 'Document & Knowledge AI',
      description:
        'Context-aware search and assistant interfaces that query internal documentation with transparent, traceable source references.',
    },
    {
      icon: <Plug className="w-6 h-6 text-orange-500" />,
      title: 'Systems Integration',
      description:
        'Custom integration layer connecting disparate SaaS applications and internal databases through clean, reliable API orchestrations.',
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 relative bg-[#030509] border-t border-white/10 scroll-mt-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono">
            OUR CORE CAPABILITIES
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Targeted AI Solutions for Operational Efficiency
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We focus on practical, modular automation designed around your existing workflows and team structures.
          </p>
        </div>

        {/* Exactly 4 Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl glass-card p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
