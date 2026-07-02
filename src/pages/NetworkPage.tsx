import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Users, Factory, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { NetworkSection } from '@/components/network/NetworkSection';
import { Card } from '@/components/ui/Card';
import { COLLECTION_FLOW, PARTNER_TYPES } from '@/config/data';

const ICONS = { Users, Factory, Network, CheckCircle2 };

export const NetworkPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-brand-background">

      {/* Page Hero */}
      <div className="py-20 px-6 text-center relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand-secondary/10 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-brand-primary mb-6 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              The Collection Model
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-brand-text mb-6 leading-[0.95]">
              From every kitchen<br />
              <span className="text-brand-primary italic">to the hub.</span>
            </h1>
            <p className="text-xl text-brand-muted font-medium leading-relaxed max-w-2xl mx-auto">
              Our Hub & Spoke model connects waste oil sources across every city we operate in
              into a single, efficient production pipeline.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hub & Spoke diagram + benefits */}
      <NetworkSection />

      {/* Collection Flow — step by step */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">End-to-End Process</h4>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
              How the flow works
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              From signing up a restaurant to delivering biodiesel — every step is tracked and documented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLECTION_FLOW.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full group hover:border-brand-primary/30">
                  <div className="flex items-start gap-5 mb-5">
                    <span className="w-12 h-12 shrink-0 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-mono font-black text-sm shadow-lg shadow-brand-primary/20">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight text-brand-text pt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 px-6 bg-brand-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">Who Can Join</h4>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
              Every source counts
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              Whether you're a single household or a franchise chain — there's a place for you in the network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNER_TYPES.map((partner, idx) => {
              const Icon = ICONS[partner.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 shrink-0 bg-brand-secondary/10 border border-brand-secondary/20 rounded-2xl flex items-center justify-center">
                        <Icon className="text-brand-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-extrabold tracking-tight mb-2">{partner.title}</h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">{partner.desc}</p>
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary bg-brand-primary/5 border border-brand-primary/20 px-4 py-2 rounded-xl">
                          <CheckCircle2 size={14} />
                          {partner.benefit}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => navigate('/quote-request')}
              className="h-16 px-12 bg-brand-primary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-brand-primary/20 hover:scale-105 transition-all inline-flex items-center gap-3 group"
            >
              Join the Network
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
