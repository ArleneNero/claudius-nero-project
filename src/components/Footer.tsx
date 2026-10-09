import React from 'react';
import { SITE_CONFIG } from '../config/site';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#030509] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Mark & Title matching reference logo style */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0066FF] via-[#38BDF8] to-[#F97316] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0A0E17] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              </div>
            </div>
            <span className="font-bold text-base text-white tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Bottom info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            &copy; {CURRENT_YEAR} {SITE_CONFIG.name}. All rights reserved.
          </div>

          <div className="font-mono text-[11px] text-slate-500">
            {SITE_CONFIG.domain}
          </div>
        </div>
      </div>
    </footer>
  );
};
