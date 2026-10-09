import React from 'react';
import { Search, Compass, Code2, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Search className="w-5 h-5 text-sky-400" />,
      title: 'Discover',
      description:
        'We analyze your manual routines, identify key operational bottlenecks, and document existing data sources and guardrails.',
    },
    {
      num: '02',
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      title: 'Design',
      description:
        'We map out exact execution steps, define explicit tool access levels, and establish required human approval checkpoints.',
    },
    {
      num: '03',
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      title: 'Build',
      description:
        'We develop targeted AI agent logic, connect necessary API integrations, and perform rigorous edge-case validation.',
    },
    {
      num: '04',
      icon: <SlidersHorizontal className="w-5 h-5 text-orange-400" />,
      title: 'Refine',
      description:
        'We deploy a controlled, scoped pilot to collect real operator feedback, fine-tuning response accuracy and system performance.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 relative bg-[#030509] border-t border-white/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono">
            OUR ENGAGEMENT APPROACH
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Partner with Your Team
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A structured, step-by-step process focused on risk reduction, thorough testing, and operational stability.
          </p>
        </div>

        {/* Exactly 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl glass-card p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {step.icon}
                  </div>
                  <span className="text-xl sm:text-2xl font-extrabold font-mono text-slate-600">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guardrails Safeguard Banner */}
        <div className="mt-8 sm:mt-12 rounded-2xl glass-card p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
          <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20 shrink-0">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              Built with Controlled Pilots & Human-in-the-Loop Safeguards
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We advocate starting with tightly scoped pilot projects. Automated actions requiring high accountability are always routed through operator review steps to ensure safety and precision.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
