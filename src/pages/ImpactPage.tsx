import { motion } from 'motion/react';
import { Users, Globe, BarChart3, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImpactSection } from '@/components/impact/ImpactSection';
import { ProductCarousel } from '@/components/impact/ProductCarousel';
import { GrowthRoadmap } from "@/components/impact/GrowthRoadmap";
import { Card } from '@/components/ui/Card';
import { SDGS, BENEFICIARIES } from '@/config/data';

const ICONS = { Users, Globe, BarChart3 };

export const ImpactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-brand-background">

      {/* Page Hero */}
      <div className="py-20 px-6 text-center relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-emerald-50 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-brand-primary mb-6 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              Real-World Impact
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-brand-text mb-6 leading-[0.95]">
              Numbers that<br />
              <span className="text-brand-primary italic">matter.</span>
            </h1>
            <p className="text-xl text-brand-muted font-medium leading-relaxed max-w-2xl mx-auto">
              Every liter of waste oil we collect reduces pollution, creates energy,
              and moves Egypt toward a cleaner future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Stats */}
      <ImpactSection />

      {/* Beneficiaries */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">Who We Impact</h4>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
              Beneficiaries
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              From direct workers to entire communities — BioDiesel creates a ripple effect across every region we operate in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFICIARIES.map((group, idx) => {
              const Icon = ICONS[group.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                        <Icon className="text-brand-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">{group.type}</p>
                        <p className="text-2xl font-display font-black tracking-tighter text-brand-primary">{group.range}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Growth Roadmap */}
      <GrowthRoadmap />

      {/* SDG Alignment */}
      <section className="py-24 px-6 bg-brand-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">UN Sustainable Development Goals</h4>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
              SDG Alignment
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              BioDiesel directly contributes to 6 of the UN's 17 Sustainable Development Goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SDGS.map((sdg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full group hover:border-brand-primary/30">
                  <div className="flex items-center gap-4 mb-5">
                    <span className={`w-14 h-14 shrink-0 ${sdg.color} text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-lg`}>
                      {sdg.number.split(' ')[1]}
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">SDG</p>
                      <h3 className="font-extrabold text-brand-text leading-tight">{sdg.label}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{sdg.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Environment highlight bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-slate-950 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                { icon: <Leaf className="text-brand-accent" size={28} />, val: '1–5 tons', label: 'CO₂ equivalent avoided / month' },
                { icon: <BarChart3 className="text-brand-accent" size={28} />, val: '1,000–3,000 L', label: 'waste oil diverted from landfills' },
                { icon: <Users className="text-brand-accent" size={28} />, val: '500–2,000', label: 'people saved from oil pollution effects' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">{item.icon}</div>
                  <p className="text-3xl font-display font-black tracking-tighter text-brand-accent">{item.val}</p>
                  <p className="text-sm font-medium opacity-60 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
              Be Part of the Impact
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
