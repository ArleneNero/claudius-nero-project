import React from 'react';
import { Database, GitPullRequest, RefreshCw } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Database className="w-6 h-6 text-sky-400" />,
      title: 'Scattered Information',
      description:
        'Knowledge is often trapped across emails, chat channels, shared drives, and internal tools, making answer retrieval slow and inconsistent.',
    },
    {
      icon: <GitPullRequest className="w-6 h-6 text-blue-500" />,
      title: 'Manual Handoffs',
      description:
        'Transferring context and tasks between teams creates unnecessary friction, status update delays, and potential data entry errors.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-500" />,
      title: 'Repetitive Follow-ups',
      description:
        'Operational teams waste valuable hours on routine status tracking, manual ticket sorting, and standardized communication cycles.',
    },
  ];

  return (
    <section className="py-24 relative bg-[#030509] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono">
            THE OPERATIONAL BOTTLENECK
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Workflow Challenges Modern Teams Face
          </p>
          <p className="text-sm sm:text-base text-slate-300">
            As operations grow, manual routine tasks slow down execution and draw focus away from high-impact work.
          </p>
        </div>

        {/* Exactly 3 Problem Cards (No buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
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
