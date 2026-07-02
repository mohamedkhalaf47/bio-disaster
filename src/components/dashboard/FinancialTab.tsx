import { TrendingUp, Wallet, PieChart } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { VisitCounter } from "./VisitCounter";
import {
	QUARTERLY_TARGETS,
	DASHBOARD_KPIS,
	REVENUE_STREAMS,
} from "@/config/data";

export const FinancialTab = () => (
	<motion.div
		key="financial"
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		className="grid grid-cols-1 lg:grid-cols-3 gap-8"
	>
		<div className="lg:col-span-2 space-y-8">
			<Card>
				<div className="flex justify-between items-center mb-8">
					<h3 className="text-xl font-extrabold tracking-tight">
						Quarterly Roadmap
					</h3>
					<div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
						Targets, not actuals
					</div>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-slate-100">
								<th className="pb-4 text-xs font-black uppercase tracking-widest text-slate-400">
									Quarter
								</th>
								<th className="pb-4 text-xs font-black uppercase tracking-widest text-slate-400">
									Active Hubs
								</th>
								<th className="pb-4 text-xs font-black uppercase tracking-widest text-slate-400">
									Revenue
								</th>
								<th className="pb-4 text-xs font-black uppercase tracking-widest text-slate-400 text-right">
									Net Profit
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-50">
							{QUARTERLY_TARGETS.map((q) => (
								<tr
									key={q.quarter}
									className="hover:bg-slate-50/50 transition-colors"
								>
									<td className="py-4 font-bold text-slate-900">{q.quarter}</td>
									<td className="py-4 font-mono text-sm text-slate-600">
										{q.hubs}
									</td>
									<td className="py-4 font-mono text-sm text-slate-600">
										EGP {q.revenue.toLocaleString()}
									</td>
									<td className="py-4 text-right font-black font-mono text-brand-primary">
										EGP {q.profit.toLocaleString()}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<Card>
					<div className="flex items-center justify-between mb-6">
						<div className="p-3 bg-brand-secondary/10 text-brand-secondary rounded-xl">
							<TrendingUp size={24} />
						</div>
						<span className="text-xs font-bold text-brand-secondary bg-brand-secondary/10 px-2 py-1 rounded-lg">
							{DASHBOARD_KPIS.currentRevenue.change}
						</span>
					</div>
					<p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">
						{DASHBOARD_KPIS.currentRevenue.label}
					</p>
					<h4 className="text-3xl font-black tracking-tighter text-slate-900">
						{DASHBOARD_KPIS.currentRevenue.value}
					</h4>
				</Card>
				<Card>
					<div className="flex items-center justify-between mb-6">
						<div className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
							<Wallet size={24} />
						</div>
						<span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
							{DASHBOARD_KPIS.currentProfit.change}
						</span>
					</div>
					<p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">
						{DASHBOARD_KPIS.currentProfit.label}
					</p>
					<h4 className="text-3xl font-black tracking-tighter text-slate-900">
						{DASHBOARD_KPIS.currentProfit.value}
					</h4>
				</Card>
				<VisitCounter />
			</div>
		</div>

		<div className="space-y-8">
			<Card>
				<h3 className="text-lg font-extrabold tracking-tight mb-6 text-brand-primary">
					Revenue Breakdown (Q1)
				</h3>
				<div className="space-y-6">
					{REVENUE_STREAMS.map((stream, idx) => (
						<div key={idx}>
							<div className="flex justify-between items-center text-sm mb-2">
								<span className="font-bold text-slate-500 uppercase tracking-widest">
									{stream.label}
								</span>
								<span className="font-mono font-black text-brand-primary">
									{stream.amount}
								</span>
							</div>
							<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
								<div
									className={cn(
										"h-full",
										stream.colorVariant === "primary"
											? "bg-brand-primary"
											: "bg-brand-accent",
									)}
									style={{ width: stream.percentWidth }}
								/>
							</div>
						</div>
					))}
				</div>

				<div className="mt-10 pt-8 border-t border-slate-100">
					<button className="w-full py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-brand-primary transition-colors">
						View Secondary Streams
					</button>
				</div>
			</Card>

			<div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full -mr-16 -mt-16 blur-2xl" />
				<PieChart className="text-brand-accent mb-6" size={32} />
				<h4 className="text-xl font-extrabold mb-2">Goal Status</h4>
				<p className="text-sm opacity-60 mb-6 font-medium">
					{DASHBOARD_KPIS.goalStatusPercent}% of early-stage adoption target
					reached.
				</p>
				<button className="w-full bg-brand-primary py-3 rounded-xl font-bold text-sm tracking-tight hover:bg-brand-secondary transition-colors">
					Export Full Report
				</button>
			</div>
		</div>
	</motion.div>
);
