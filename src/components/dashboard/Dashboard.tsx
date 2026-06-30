import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { TrendingUp, FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { loadQuotes, saveQuotes } from "@/lib/storage";
import { FinancialTab } from "./FinancialTab";
import { LoyaltyTab } from "./LoyaltyTab";
import { QuotesTab } from "./QuotesTab";
import type { Quote } from "@/types";

type DashboardSubTab = "financial" | "quotes" | "loyalty";

// Demo-only value — no real points logic is wired up yet.
const DEMO_LOYALTY_POINTS = 750;

export const Dashboard = () => {
	const [activeSubTab, setActiveSubTab] =
		useState<DashboardSubTab>("financial");
	const [quotes, setQuotes] = useState<Quote[]>([]);

	// Load persisted quotes on mount
	useEffect(() => {
		setTimeout(()=>{
      setQuotes(loadQuotes());
    },0)
	}, []);

	const addDemoQuote = () => {
		const newQuote: Quote = {
			id: `QT-00${quotes.length + 1}`,
			client: "New Bio Partner",
			status: "Pending",
			date: new Date().toLocaleDateString(),
			amount: `$${Math.floor(Math.random() * 10000 + 1000)}`,
			type: "B20 Blend",
		};
		const updated = [newQuote, ...quotes];
		setQuotes(updated);
		saveQuotes(updated);
	};

	return (
		<div className="px-6 pb-20">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
					<div>
						<h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-slate-900">
							Operations Center
						</h1>
						<p className="text-slate-500 font-medium mt-2">
							Manage your bio-fuel assets and relationships.
						</p>
					</div>
					<div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
						<button
							onClick={() => setActiveSubTab("financial")}
							className={cn(
								"px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
								activeSubTab === "financial"
									? "bg-white text-brand-primary shadow-sm"
									: "text-slate-500 hover:text-slate-900",
							)}
						>
							<TrendingUp size={18} /> Financials
						</button>
						<button
							onClick={() => setActiveSubTab("quotes")}
							className={cn(
								"px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
								activeSubTab === "quotes"
									? "bg-white text-brand-primary shadow-sm"
									: "text-slate-500 hover:text-slate-900",
							)}
						>
							<FileText size={18} /> Quotes
						</button>
						<button
							onClick={() => setActiveSubTab("loyalty")}
							className={cn(
								"px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
								activeSubTab === "loyalty"
									? "bg-white text-brand-primary shadow-sm"
									: "text-slate-500 hover:text-slate-900",
							)}
						>
							<Users size={18} /> Rewards
						</button>
					</div>
				</div>

				<AnimatePresence mode="wait">
					{activeSubTab === "financial" && <FinancialTab key="financial" />}
					{activeSubTab === "loyalty" && (
						<LoyaltyTab key="loyalty" points={DEMO_LOYALTY_POINTS} />
					)}
					{activeSubTab === "quotes" && (
						<QuotesTab key="quotes" quotes={quotes} onAddQuote={addDemoQuote} />
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};
