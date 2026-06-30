import { motion } from "motion/react";
import { Users, Factory, Network, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { NETWORK_INTRO, NETWORK_NODES, NETWORK_BENEFITS } from "@/config/data";

const ICONS = { Users, Factory, Network, CheckCircle2 };

export const NetworkSection = () => (
	<section className="py-24 px-6 overflow-hidden bg-brand-background">
		<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
			<div className="order-2 lg:order-1">
				<div className="relative">
					<div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-3xl scale-125" />
					<div className="relative grid grid-cols-2 gap-6">
						<div className="space-y-6 pt-12">
							{NETWORK_NODES.slice(0, 2).map((node, idx) => {
								const Icon = ICONS[node.iconName];
								const isDark = node.variant === "dark";
								return (
									<div
										key={idx}
										className={cn(
											"p-8 rounded-4xl border",
											isDark
												? "bg-slate-900 shadow-2xl shadow-brand-primary/20 text-white translate-x-4"
												: "bg-brand-surface shadow-xl shadow-slate-200/50 border-brand-border",
										)}
									>
										<Icon
											className={cn(
												"mb-4",
												isDark ? "text-brand-accent" : "text-brand-primary",
											)}
										/>
										<h4
											className={cn(
												"text-lg font-extrabold tracking-tight mb-2",
												isDark ? "text-white" : "",
											)}
										>
											{node.title}
										</h4>
										<p
											className={cn(
												"text-sm font-medium leading-relaxed",
												isDark ? "opacity-70" : "text-slate-500",
											)}
										>
											{node.desc}
										</p>
									</div>
								);
							})}
						</div>
						<div className="space-y-6">
							{NETWORK_NODES.slice(2, 4).map((node, idx) => {
								const Icon = ICONS[node.iconName];
								return (
									<div
										key={idx}
										className="bg-brand-surface p-8 rounded-4xl shadow-xl shadow-brand-primary/5 border border-brand-border"
									>
										<Icon className="text-brand-primary mb-4" />
										<h4 className="text-lg font-extrabold tracking-tight mb-2 text-brand-primary">
											{node.title}
										</h4>
										<p className="text-sm font-medium text-slate-500 leading-relaxed">
											{node.desc}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			<div className="order-1 lg:order-2">
				<h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
					{NETWORK_INTRO.eyebrow}
				</h4>
				<SectionTitle>{NETWORK_INTRO.title}</SectionTitle>
				<p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">
					{NETWORK_INTRO.description}
				</p>
				<ul className="space-y-6">
					{NETWORK_BENEFITS.map((item, idx) => (
						<motion.li
							key={idx}
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className="flex items-center gap-5 group"
						>
							<span className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center font-mono text-sm font-bold shadow-sm group-hover:bg-brand-secondary/10 group-hover:border-brand-secondary transition-all">
								{item.tag}
							</span>
							<span className="font-bold text-slate-700 tracking-tight">
								{item.text}
							</span>
						</motion.li>
					))}
				</ul>
			</div>
		</div>
	</section>
);
