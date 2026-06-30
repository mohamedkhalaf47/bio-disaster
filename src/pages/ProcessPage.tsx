import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FlaskConical, ChevronDown, ArrowRight } from "lucide-react";
import { ProcessSection } from "@/components/process/ProcessSection";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { REACTION_SPECS, BIODIESEL_BLENDS, PROCESS_FAQ } from "@/config/data";

export const ProcessPage = () => {
	const navigate = useNavigate();
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	return (
		<div className="pt-20 bg-brand-background">
			{/* Page Hero */}
			<div className="py-20 px-6 text-center relative overflow-hidden border-b border-brand-border">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent" />
				<div className="max-w-3xl mx-auto relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-brand-primary mb-6 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20">
							The Science
						</span>
						<h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-brand-text mb-6 leading-[0.95]">
							Waste oil in,
							<br />
							<span className="text-brand-primary italic">clean fuel out.</span>
						</h1>
						<p className="text-xl text-brand-muted font-medium leading-relaxed max-w-2xl mx-auto">
							A single chemical reaction — Transesterification — is all it takes
							to transform used cooking oil into high-quality biodiesel.
						</p>
					</motion.div>
				</div>
			</div>

			{/* Core 3-step section */}
			<ProcessSection />

			{/* Reaction Spec Sheet */}
			<section className="py-24 px-6 bg-brand-background">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left — visual equation */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] blur-3xl" />
						<div className="relative bg-slate-950 rounded-[2.5rem] p-10 text-white overflow-hidden">
							<div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />

							<div className="flex items-center gap-3 mb-8">
								<div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center">
									<FlaskConical className="text-brand-accent" size={20} />
								</div>
								<span className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary">
									Chemical Equation
								</span>
							</div>

							{/* Equation blocks */}
							<div className="space-y-4 mb-8">
								<div className="flex flex-wrap items-center gap-3 text-sm font-mono">
									<span className="bg-white/10 px-4 py-2 rounded-xl font-bold">
										Triglycerides (UCO)
									</span>
									<span className="text-brand-accent font-black text-lg">
										+
									</span>
									<span className="bg-white/10 px-4 py-2 rounded-xl font-bold">
										3 CH₃OH
									</span>
									<span className="text-slate-400 text-xs">Methanol</span>
								</div>
								<div className="flex items-center gap-3 pl-4">
									<div className="w-8 h-px bg-brand-primary" />
									<span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
										NaOH / KOH catalyst
									</span>
									<div className="w-8 h-px bg-brand-primary" />
									<span className="text-brand-accent font-black text-lg">
										→
									</span>
								</div>
								<div className="flex flex-wrap items-center gap-3 text-sm font-mono">
									<span className="bg-brand-primary/30 border border-brand-primary/50 px-4 py-2 rounded-xl font-bold text-brand-accent">
										Biodiesel (FAME)
									</span>
									<span className="text-brand-accent font-black text-lg">
										+
									</span>
									<span className="bg-white/10 px-4 py-2 rounded-xl font-bold">
										Glycerol
									</span>
								</div>
							</div>

							<p className="text-xs text-slate-400 font-medium leading-relaxed border-t border-white/10 pt-6">
								FAME = Fatty Acid Methyl Esters. The reaction runs under
								controlled temperature and mixing conditions, achieving a
								0.85–0.95 L yield per 1 L of waste oil.
							</p>
						</div>
					</motion.div>

					{/* Right — spec table */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
							Reaction Specifications
						</h4>
						<h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-8">
							By the numbers
						</h2>
						<div className="space-y-0 divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
							{REACTION_SPECS.map((spec, idx) => (
								<div
									key={idx}
									className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
								>
									<span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
										{spec.label}
									</span>
									<span className="text-sm font-black text-brand-text font-mono">
										{spec.value}
									</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Biodiesel Blend Types */}
			<section className="py-24 px-6 bg-white border-y border-slate-100">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
							Output Products
						</h4>
						<h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
							Fuel blend options
						</h2>
						<p className="text-slate-500 font-medium max-w-xl mx-auto">
							Our biodiesel can be blended to suit different engine types and
							use cases.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{BIODIESEL_BLENDS.map((blend, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
							>
								<Card
									className={cn(
										"h-full text-center relative",
										blend.highlight &&
											"border-brand-primary ring-2 ring-brand-primary/20",
									)}
								>
									{blend.highlight && (
										<div className="absolute top-1 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full z-10">
											Recommended
										</div>
									)}
									<div
										className={cn(
											"w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 text-3xl font-display font-black shadow-lg",
											blend.highlight
												? "bg-brand-primary text-white shadow-brand-primary/30"
												: "bg-brand-secondary/10 text-brand-primary",
										)}
									>
										{blend.name}
									</div>
									<h3 className="text-xl font-extrabold tracking-tight mb-3">
										{blend.ratio}
									</h3>
									<p className="text-slate-500 font-medium text-sm leading-relaxed">
										{blend.use}
									</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Accordion */}
			<section className="py-24 px-6 bg-brand-background">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-16">
						<h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
							Common Questions
						</h4>
						<h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter">
							Technical FAQ
						</h2>
					</div>

					<div className="space-y-3">
						{PROCESS_FAQ.map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.08 }}
								className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
							>
								<button
									onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
									className="w-full flex items-center justify-between px-6 py-5 text-left group"
								>
									<span className="font-bold text-brand-text group-hover:text-brand-primary transition-colors pr-4">
										{item.q}
									</span>
									<ChevronDown
										size={20}
										className={cn(
											"shrink-0 text-slate-400 transition-transform",
											openFaq === idx && "rotate-180 text-brand-primary",
										)}
									/>
								</button>
								<AnimatePresence>
									{openFaq === idx && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.25 }}
											className="overflow-hidden"
										>
											<p className="px-6 pb-5 text-slate-500 font-medium text-sm leading-relaxed border-t border-slate-100 pt-4">
												{item.a}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mt-12 text-center"
					>
						<button
							onClick={() => navigate("/quote-request")}
							className="h-16 px-12 bg-brand-primary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-brand-primary/20 hover:scale-105 transition-all inline-flex items-center gap-3 group"
						>
							Become a Partner
							<ArrowRight
								size={20}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</button>
					</motion.div>
				</div>
			</section>
		</div>
	);
};
