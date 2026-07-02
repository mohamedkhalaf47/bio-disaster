import { Droplet, Globe, Camera, Mail, ChevronRight } from 'lucide-react';
import { FOOTER_CONTENT, SOCIAL_LINKS, SITE_INFO } from '@/config/data';

const ICONS = { Globe, Camera, Mail };

export const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 overflow-hidden relative">
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

    <div className="max-w-7xl mx-auto border-b border-white/5 pb-16 mb-16 grid grid-cols-1 md:grid-cols-3 gap-20">
      <div className="md:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-lg leading-none -mb-0.5">b</span>
              <Droplet size={12} className="text-brand-accent fill-brand-accent/20" />
            </div>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase text-brand-secondary">
            {SITE_INFO.projectName}
          </span>
        </div>
        <p className="text-slate-400 font-medium leading-relaxed mb-10 max-w-xs">
          {FOOTER_CONTENT.description}
        </p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social, idx) => {
            const Icon = ICONS[social.iconName];
            return (
              <a
                key={idx}
                href={social.url}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-end items-end">
        <div className="bg-brand-primary/10 border border-brand-primary/20 p-8 rounded-[2.5rem] max-w-sm">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-4">
            {FOOTER_CONTENT.loyaltyTitle}
          </h4>
          <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
            {FOOTER_CONTENT.loyaltyDescription}
          </p>
          <button className="text-brand-secondary text-xs font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
            Learn More <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
      <p>{FOOTER_CONTENT.copyright}</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);
