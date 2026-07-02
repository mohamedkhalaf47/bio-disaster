import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Leaf, Users, Globe } from 'lucide-react';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { loadQuotes, saveQuotes } from '@/lib/storage';
import { PARTNER_FORM_STEPS, PARTNER_FORM_TRUST_SIGNALS, SITE_INFO } from '@/config/data';
import { cn } from '@/lib/utils';
import type { Quote } from '@/types';

const ICONS = { CheckCircle2, Leaf, Users, Globe };

export const QuoteRequestPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (newQuote: Quote) => {
    const existing = loadQuotes();
    saveQuotes([newQuote, ...existing]);
    navigate('/dashboard');
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-background">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Left sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 lg:sticky lg:top-28 space-y-8"
        >
          {/* Brand mark */}
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary">
              {SITE_INFO.organization}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-brand-text mt-2 leading-tight">
              Join our<br />
              <span className="text-brand-primary italic">collection network.</span>
            </h1>
            <p className="text-brand-muted font-medium mt-4 leading-relaxed">
              Whether you're a restaurant, hotel, or household —
              your waste oil powers a cleaner Egypt.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">How it works</p>
            {PARTNER_FORM_STEPS.map((s, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-9 h-9 shrink-0 bg-brand-primary text-white rounded-xl flex items-center justify-center font-mono font-black text-xs shadow-md shadow-brand-primary/20">
                  {s.step}
                </span>
                <span className="text-sm font-bold text-slate-600">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Why partner with us</p>
            {PARTNER_FORM_TRUST_SIGNALS.map((sig, idx) => {
              const Icon = ICONS[sig.icon];
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 shrink-0 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Icon size={15} className="text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{sig.text}</span>
                </div>
              );
            })}
          </div>

          {/* SDG badge strip */}
          <div className="flex flex-wrap gap-2">
            {['SDG 7', 'SDG 12', 'SDG 13'].map((sdg) => (
              <span
                key={sdg}
                className={cn(
                  'text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border',
                  'bg-brand-primary/5 border-brand-primary/20 text-brand-primary'
                )}
              >
                {sdg}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <QuoteForm onSubmit={handleSubmit} onCancel={() => navigate('/')} />
        </motion.div>
      </div>
    </div>
  );
};
