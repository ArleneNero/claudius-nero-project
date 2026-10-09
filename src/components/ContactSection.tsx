import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const ContactSection: React.FC = () => {
  const email = SITE_CONFIG.CONTACT_EMAIL;

  return (
    <section id="contact" className="py-24 relative bg-[#030509] border-t border-white/10 scroll-mt-20">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Section Tag */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono mb-3">
          GET IN TOUCH
        </h2>

        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Discuss an AI Automation Opportunity
        </h3>

        {/* Short invitation */}
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you have a specific workflow bottleneck or are exploring options for internal AI tooling, we are open to discussing practical project ideas and pilot concepts.
        </p>

        {/* Contact Card */}
        <div className="max-w-xl mx-auto rounded-2xl glass-card p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Direct Email Inquiry</h4>
            <p className="text-xs text-slate-400">Official contact mailbox</p>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white btn-glow-blue transition-all duration-300"
          >
            Email Us ({email})
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
