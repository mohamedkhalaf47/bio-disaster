import { motion } from "motion/react";
import { Plus, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import type { Quote } from "@/types";

interface QuotesTabProps {
	quotes: Quote[];
	onAddQuote: () => void;
}

const statusStyles: Record<Quote["status"], string> = {
	Approved: "bg-brand-secondary/10 text-brand-secondary",
	Pending: "bg-brand-accent/20 text-brand-primary",
	Draft: "bg-slate-100 text-slate-500",
	Completed: "bg-brand-primary/10 text-brand-primary",
};

export const QuotesTab = ({ quotes, onAddQuote }: QuotesTabProps) => (
	<motion.div
		key="quotes"
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		className="space-y-8"
	>
		<div className="flex justify-between items-center">
			<h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
				Recent Requests
			</h3>
			<button
				onClick={onAddQuote}
				className="bg-brand-primary text-white p-3 rounded-xl shadow-lg shadow-brand-primary/20 flex items-center gap-2 text-sm font-bold hover:scale-105 transition-all"
			>
				<Plus size={18} /> New Request
			</button>
		</div>

		<div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-slate-50 border-b border-slate-100">
							<th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
								Quote ID
							</th>
							<th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
								Client / Source
							</th>
							<th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
								Type
							</th>
							<th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">
								Status
							</th>
							<th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400 text-right">
								Amount
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-50">
						{quotes.map((quote) => (
							<tr
								key={quote.id}
								className="hover:bg-slate-50/50 transition-colors"
							>
								<td className="px-8 py-6 font-mono font-bold text-brand-primary text-sm">
									{quote.id}
								</td>
								<td className="px-8 py-6">
									<p className="font-bold text-slate-900">{quote.client}</p>
									<p className="text-xs text-slate-400 font-medium">
										Recorded: {quote.date}
									</p>
								</td>
								<td className="px-8 py-6">
									<span className="text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200 px-3 py-1 rounded-full">
										{quote.type}
									</span>
								</td>
								<td className="px-8 py-6">
									<div
										className={cn(
											"inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-lg",
											statusStyles[quote.status],
										)}
									>
										<span className="w-1.5 h-1.5 rounded-full bg-current" />
										{quote.status}
									</div>
								</td>
								<td className="px-8 py-6 text-right font-black font-mono text-slate-900">
									{quote.amount}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<Card className="flex items-center gap-6 group cursor-pointer border-dashed border-2 border-slate-200 bg-transparent hover:border-brand-primary hover:bg-white transition-all">
				<div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-secondary/10 group-hover:text-brand-primary transition-all">
					<Phone size={24} />
				</div>
				<div>
					<h4 className="font-bold text-slate-900">Expert Consultation</h4>
					<p className="text-sm text-slate-500">
						Speak with a bio-energy specialist today.
					</p>
				</div>
			</Card>
			<Card className="flex items-center gap-6 group cursor-pointer border-dashed border-2 border-slate-200 bg-transparent hover:border-brand-primary hover:bg-white transition-all">
				<div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-secondary/10 group-hover:text-brand-primary transition-all">
					<Mail size={24} />
				</div>
				<div>
					<h4 className="font-bold text-slate-900">Wholesale Proposals</h4>
					<p className="text-sm text-slate-500">
						Get volume pricing for fleet management.
					</p>
				</div>
			</Card>
		</div>
	</motion.div>
);
