import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { LATEST_UPDATES } from '@/config/data';

export const LatestUpdates = () => (
  <section className="py-20 px-6 bg-white border-y border-slate-100">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
          What's New
        </h4>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter">
          Latest Updates
        </h2>
      </div>

      <div className="space-y-5">
        {LATEST_UPDATES.map((update, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col sm:flex-row gap-6 items-start bg-brand-background border border-brand-border rounded-3xl p-8 hover:border-brand-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 shrink-0 text-brand-primary font-bold text-sm bg-brand-primary/10 px-4 py-2 rounded-xl">
              <Calendar size={14} />
              {update.date}
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-brand-text mb-2">
                {update.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">{update.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
