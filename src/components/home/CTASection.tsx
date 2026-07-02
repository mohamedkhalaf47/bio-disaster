import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { CTA_CONTENT } from '@/config/data';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-brand-surface border border-brand-border rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-primary/10"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <h2 className="text-5xl md:text-7xl font-display font-extrabold text-brand-text mb-8 tracking-tighter leading-[0.95]">
          {CTA_CONTENT.headlinePrefix} <br />{' '}
          <span className="text-brand-primary italic">{CTA_CONTENT.headlineHighlight}</span>{' '}
          {CTA_CONTENT.headlineSuffix}
        </h2>
        <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          {CTA_CONTENT.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate('/quote-request')}
            className="h-16 px-12 bg-brand-primary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-brand-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
          >
            Become a Partner{' '}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigate('/impact')}
            className="h-16 px-12 bg-slate-900 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-slate-200 hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <BarChart3 size={20} /> See Our Impact
          </button>
        </div>
      </motion.div>
    </section>
  );
};
