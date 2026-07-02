import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Droplet, Leaf, Users, ArrowRight } from "lucide-react";
import { HOME_IMPACT_TEASER } from "@/config/data";

const ICONS = { Droplet, Leaf, Users };

export const ImpactTeaser = () => {
	const navigate = useNavigate();

	return (
		<section className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-brand-primary/10 rounded-full blur-3xl" />
			<div className="max-w-6xl mx-auto relative">
				<div className="text-center mb-16">
					<h4 className="text-xs uppercase font-bold text-brand-secondary tracking-widest mb-4">
						{HOME_IMPACT_TEASER.eyebrow}
					</h4>
					<h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">
						{HOME_IMPACT_TEASER.title}
					</h2>
				</div>

				<p className="text-center text-brand-secondary font-bold text-sm uppercase tracking-widest mb-10 -mt-8">
					Scaling from 1 to 3 hubs by Q3–Q4
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
					{HOME_IMPACT_TEASER.stats.map((stat, idx) => {
						const Icon = ICONS[stat.iconName];
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center"
							>
								<div className="w-12 h-12 bg-brand-primary/20 text-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Icon size={20} />
								</div>
								<p className="text-3xl md:text-4xl font-display font-extrabold tracking-tighter text-brand-accent mb-2">
									{stat.value}
								</p>
								<p className="text-xs font-bold uppercase tracking-widest opacity-60">
									{stat.label}
								</p>
							</motion.div>
						);
					})}
				</div>

				<div className="text-center">
					<button
						onClick={() => navigate("/impact")}
						className="h-14 px-10 bg-white text-slate-900 font-bold rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-2 group"
					>
						{HOME_IMPACT_TEASER.ctaLabel}
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>
				</div>
			</div>
		</section>
	);
};
