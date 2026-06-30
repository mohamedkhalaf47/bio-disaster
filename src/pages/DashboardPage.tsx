import { motion } from "motion/react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Card } from "@/components/ui/Card";
import { DASHBOARD_SUMMARY_CARDS } from "@/config/data";
import { cn } from "@/lib/utils";

export const DashboardPage = () => {
	const navigate = useNavigate();

	return (
		<div className="pt-20 bg-brand-background min-h-screen">
			{/* Page Header */}
			<div className="px-6 pt-12 pb-10 border-b border-brand-border bg-white">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<span className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary">
							Operations Center
						</span>
						<h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-brand-text mt-2 leading-none">
							BioDiesel
							<br />
							Dashboard
						</h1>
						<p className="text-brand-muted font-medium mt-3 max-w-md">
							Pilot phase — Assiut, Egypt. Started March 2025. All financial
							figures are demo projections.
						</p>
					</motion.div>
					<motion.button
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						onClick={() => navigate("/quote-request")}
						className="h-14 px-8 bg-brand-primary text-white font-bold rounded-2xl shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all flex items-center gap-2 group shrink-0"
					>
						Add Partner
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</motion.button>
				</div>
			</div>

			{/* Summary KPI Cards */}
			<div className="px-6 py-10 border-b border-brand-border">
				<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{DASHBOARD_SUMMARY_CARDS.map((card, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.08 }}
						>
							<Card className="hover:shadow-md">
								<div className="flex items-start justify-between mb-4">
									<p className="text-xs font-black uppercase tracking-widest text-slate-400">
										{card.label}
									</p>
									<div
										className={cn(
											"text-xs font-bold px-2 py-1 rounded-lg",
											card.positive
												? "bg-brand-secondary/10 text-brand-secondary"
												: "bg-red-50 text-red-500",
										)}
									>
										{card.trend}
									</div>
								</div>
								<p className="text-3xl font-display font-black tracking-tighter text-brand-primary mb-1">
									{card.value}
								</p>
								<p className="text-xs font-medium text-slate-400">{card.sub}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			{/* Pilot Phase Notice */}
			<div className="px-6 py-5">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center gap-3 bg-brand-accent/20 border border-brand-accent/40 rounded-2xl px-5 py-3">
						<TrendingUp size={16} className="text-brand-primary shrink-0" />
						<p className="text-sm font-bold text-brand-primary">
							Pilot Phase Active — Financials & loyalty data below are demo
							projections. Real partner requests appear in the Quotes tab after
							submission.
						</p>
					</div>
				</div>
			</div>

			{/* Main Dashboard (Financials / Quotes / Loyalty tabs) */}
			<Dashboard />
		</div>
	);
};
