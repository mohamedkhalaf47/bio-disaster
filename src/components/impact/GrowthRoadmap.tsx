import { motion } from "motion/react";
import { Factory, TrendingUp, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GROWTH_ROADMAP_INTRO, QUARTERLY_TARGETS } from "@/config/data";

export const GrowthRoadmap = () => {
	const maxRevenue = Math.max(...QUARTERLY_TARGETS.map((q) => q.revenue));
	const maxHubs = Math.max(...QUARTERLY_TARGETS.map((q) => q.hubs));

	return (
		<section className="py-24 px-6 bg-brand-background">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
						{GROWTH_ROADMAP_INTRO.eyebrow}
					</h4>
					<h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
						{GROWTH_ROADMAP_INTRO.title}
					</h2>
					<p className="text-slate-500 font-medium max-w-xl mx-auto">
						{GROWTH_ROADMAP_INTRO.description}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					{QUARTERLY_TARGETS.map((q, idx) => (
						<motion.div
							key={q.quarter}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
						>
							<Card className="h-full">
								<div className="flex items-center justify-between mb-6">
									<span className="text-xs font-black uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full">
										{q.quarter}
									</span>
									<div className="flex items-center gap-1 text-slate-400">
										<Factory size={14} />
										<span className="text-xs font-bold">
											{q.hubs} hub{q.hubs > 1 ? "s" : ""}
										</span>
									</div>
								</div>

								{/* Hub scale bar */}
								<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
									<div
										className="h-full bg-brand-secondary rounded-full"
										style={{ width: `${(q.hubs / maxHubs) * 100}%` }}
									/>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 shrink-0 bg-brand-primary/10 rounded-xl flex items-center justify-center">
											<TrendingUp size={16} className="text-brand-primary" />
										</div>
										<div>
											<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
												Revenue
											</p>
											<p className="text-lg font-black text-brand-text font-mono">
												EGP {q.revenue.toLocaleString()}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 shrink-0 bg-brand-secondary/10 rounded-xl flex items-center justify-center">
											<DollarSign size={16} className="text-brand-secondary" />
										</div>
										<div>
											<p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
												Net Profit
											</p>
											<p className="text-lg font-black text-brand-text font-mono">
												EGP {q.profit.toLocaleString()}
											</p>
										</div>
									</div>
								</div>

								{/* Revenue scale bar (visual comparison across quarters) */}
								<div className="mt-6 pt-6 border-t border-slate-100">
									<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
										<div
											className="h-full bg-brand-primary rounded-full"
											style={{ width: `${(q.revenue / maxRevenue) * 100}%` }}
										/>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
