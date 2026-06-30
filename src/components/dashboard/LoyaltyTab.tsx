import { motion } from "motion/react";
import { TrendingUp, PieChart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { LOYALTY_INFO, LOYALTY_EARNINGS } from "@/config/data";

interface LoyaltyTabProps {
	points: number;
}

export const LoyaltyTab = ({ points }: LoyaltyTabProps) => (
	<motion.div
		key="loyalty"
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		className="grid grid-cols-1 md:grid-cols-3 gap-8"
	>
		<Card className="md:col-span-2 relative overflow-hidden group">
			<div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-150" />
			<div className="flex justify-between items-start mb-12">
				<div>
					<h3 className="text-2xl font-extrabold tracking-tight mb-2">
						Bio-Points Balance
					</h3>
					<p className="text-slate-500 font-medium">
						Accumulated from sustainable energy contributions.
					</p>
				</div>
				<div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20">
					<TrendingUp size={32} />
				</div>
			</div>

			<div className="flex items-baseline gap-4 mb-8">
				<span className="text-7xl font-display font-black tracking-tighter text-brand-primary">
					{points}
				</span>
				<span className="text-xl font-bold text-slate-400 uppercase tracking-widest">
					Available Points
				</span>
			</div>

			<div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
				<div
					className="h-full bg-brand-primary rounded-full shadow-[0_0_15px_rgba(44,100,60,0.5)]"
					style={{ width: `${LOYALTY_INFO.progressPercent}%` }}
				/>
			</div>
			<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
				{LOYALTY_INFO.pointsToNextTier} points until next tier:{" "}
				<span className="text-brand-secondary font-black">
					{LOYALTY_INFO.nextTierName}
				</span>
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<button className="flex items-center justify-center gap-2 h-14 bg-brand-primary text-white rounded-xl font-bold hover:scale-[1.02] transition-all">
					Redeem for Cashback
				</button>
				<button className="flex items-center justify-center gap-2 h-14 bg-slate-900 text-white rounded-xl font-bold hover:scale-[1.02] transition-all">
					Apply to Future Order
				</button>
			</div>
		</Card>

		<div className="space-y-8">
			<Card className="bg-slate-900 border-none text-white">
				<h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary mb-6">
					Recent Earnings
				</h4>
				<div className="space-y-6">
					{LOYALTY_EARNINGS.map((item, i) => (
						<div
							key={i}
							className="flex justify-between items-center border-b border-white/5 pb-4"
						>
							<div>
								<p className="font-bold">{item.label}</p>
								<p className="text-[10px] uppercase font-black tracking-widest opacity-40">
									{item.date}
								</p>
							</div>
							<span className="font-mono font-black text-brand-secondary">
								{item.points}
							</span>
						</div>
					))}
				</div>
			</Card>

			<Card className="bg-brand-accent/10 border-brand-accent/20">
				<PieChart className="text-brand-primary mb-4" />
				<h4 className="font-bold text-slate-900 mb-2">Tier Benefits</h4>
				<p className="text-sm text-slate-500 mb-6">
					You currently enjoy {LOYALTY_INFO.currentTierCashback} cashback on all{" "}
					{LOYALTY_INFO.currentTierBlend} blends.
				</p>
				<button className="w-full h-12 bg-white border border-brand-accent/30 rounded-xl text-brand-primary text-xs font-black uppercase tracking-widest hover:bg-brand-accent/20 transition-colors">
					View My Rewards
				</button>
			</Card>
		</div>
	</motion.div>
);
