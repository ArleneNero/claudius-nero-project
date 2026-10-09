import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const ContactSection: React.FC = () => {
  const email = SITE_CONFIG.CONTACT_EMAIL;

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#030509] border-t border-white/10 scroll-mt-20">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/10 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Section Tag */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono mb-3">
          GET IN TOUCH
        </h2>

        {/* Heading */}
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
          Discuss an AI Automation Opportunity
        </h3>

        {/* Short invitation */}
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Whether you have a specific workflow bottleneck or are exploring options for internal AI tooling, we are open to discussing practical project ideas and pilot concepts.
        </p>

        {/* Contact Card */}
        <div className="max-w-xl mx-auto rounded-2xl glass-card p-5 sm:p-10 shadow-2xl space-y-5 sm:space-y-6">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Direct Email Inquiry</h4>
            <p className="text-xs text-slate-400">Official contact mailbox</p>
          </div>

          <a
            href={`mailto:${email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold rounded-full text-white btn-glow-blue transition-all duration-300 active:scale-98 max-w-full"
          >
            <span className="truncate">Email Us ({email})</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
