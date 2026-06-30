import { motion } from "motion/react";
import { Droplet, Leaf, BarChart3, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IMPACT_INTRO, IMPACT_STATS } from "@/config/data";

const ICONS = { Droplet, Leaf, BarChart3, Users };

export const ImpactSection = () => (
	<section className="py-24 px-6 bg-slate-950 border-y border-brand-primary/20 text-white overflow-hidden relative">
		<div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 skew-x-12 -translate-y-12" />

		<div className="max-w-7xl mx-auto relative">
			<div className="text-center mb-20">
				<h4 className="text-xs uppercase font-bold text-brand-secondary tracking-widest mb-4">
					{IMPACT_INTRO.eyebrow}
				</h4>
				<SectionTitle className="text-white">{IMPACT_INTRO.title}</SectionTitle>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{IMPACT_STATS.map((stat, idx) => {
					const Icon = ICONS[stat.iconName];
					return (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] text-center hover:bg-white/10 transition-colors"
						>
							<div className="w-14 h-14 bg-brand-primary/20 text-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner shadow-brand-primary/20">
								<Icon />
							</div>
							<p className="text-5xl font-display font-extrabold tracking-tighter mb-4 text-brand-accent">
								{stat.value}
							</p>
							<div className="space-y-1">
								<p className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary">
									{stat.label}
								</p>
								<p className="text-xs font-bold font-mono opacity-40 uppercase">
									{stat.sub}
								</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	</section>
);
