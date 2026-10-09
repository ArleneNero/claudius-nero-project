import React from 'react';
import { LifeBuoy, BookOpenCheck, BarChart3, AlertCircle } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <LifeBuoy className="w-5 h-5 text-sky-400" />,
      title: 'Support Ticket Triage with Human Escalation',
      scenario: 'High-volume customer support desks needing quick response times.',
      workflow: 'Incoming tickets are parsed by topic and severity. The agent drafts a context-rich initial response and queues complex issues directly to the appropriate specialist for review.',
      safeguard: 'Human review required before sending customer-facing responses.',
    },
    {
      icon: <BookOpenCheck className="w-5 h-5 text-blue-400" />,
      title: 'Document Q&A with Source References',
      scenario: 'Operations and technical teams referencing lengthy policy manuals.',
      workflow: 'An internal assistant indexes technical specs, standard operating procedures, and compliance guidelines, answering natural-language queries with exact page citations.',
      safeguard: 'Clear links back to verified source documents to prevent hallucinations.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-orange-400" />,
      title: 'Routine Reporting with Approval',
      scenario: 'Weekly status aggregation across multiple platforms.',
      workflow: 'The agent gathers metrics from connected analytics, CRM, and task trackers every Friday morning, formatting a draft executive summary for management review.',
      safeguard: 'Manager sign-off required prior to company-wide distribution.',
    },
  ];

  return (
    <section id="use-cases" className="py-16 sm:py-24 relative bg-[#030509] border-t border-white/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300 max-w-full">
            <AlertCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">Example applications — illustrative concepts</span>
          </div>
          <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Custom AI Agents Apply to Practical Scenarios
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            These illustrative workflows demonstrate how automated processing pairs with human oversight to keep operations reliable.
          </p>
        </div>

        {/* Exactly 3 Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl glass-card p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    Concept 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <div>
                  <span className="text-[11px] sm:text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                    Target Scenario
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.scenario}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                    Automated Workflow
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.workflow}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/10 bg-white/5 -mx-5 -mb-5 sm:-mx-8 sm:-mb-8 p-3.5 sm:p-4 rounded-b-2xl">
                <span className="text-[10px] sm:text-[11px] font-semibold text-orange-400 block mb-0.5 uppercase tracking-wider">
                  Human-in-the-Loop Safeguard
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.safeguard}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
