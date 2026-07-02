import { Droplet, FlaskConical, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PROCESS_INTRO, PROCESS_STEPS } from '@/config/data';

const ICONS = { Droplet, FlaskConical, Leaf };

export const ProcessSection = () => (
  <section className="py-24 px-6 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
        {PROCESS_INTRO.eyebrow}
      </h4>
      <SectionTitle>{PROCESS_INTRO.title}</SectionTitle>
      <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
        {PROCESS_INTRO.description}
      </p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {PROCESS_STEPS.map((item, idx) => {
        const Icon = ICONS[item.iconName];
        return (
          <Card key={idx} className="flex flex-col h-full">
            <div className="w-14 h-14 bg-brand-secondary/10 border border-brand-secondary/20 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Icon className="text-brand-primary" />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">{item.title}</h3>
            <p className="text-slate-500 font-medium mb-6 flex-grow leading-relaxed">
              {item.desc}
            </p>
            <div className="pt-6 border-t border-slate-50 text-xs font-bold text-slate-400 uppercase tracking-widest">
              {item.detail}
            </div>
          </Card>
        );
      })}
    </div>
  </section>
);
