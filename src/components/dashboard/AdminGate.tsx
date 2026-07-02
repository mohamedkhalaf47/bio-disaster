import { useState, useEffect, type ReactNode } from "react";
import { motion } from "motion/react";
import { Lock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { isAdminSession, tryAdminLogin } from "@/lib/adminAuth";

interface AdminGateProps {
	children: ReactNode;
}

export const AdminGate = ({ children }: AdminGateProps) => {
	const [authorized, setAuthorized] = useState(false);
	const [checked, setChecked] = useState(false);
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAuthorized(isAdminSession());
			setChecked(true);
		}, 0);
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (tryAdminLogin(password)) {
			setAuthorized(true);
			setError(false);
		} else {
			setError(true);
		}
	};

	// Avoid a flash of the login form while we check sessionStorage
	if (!checked) return null;

	if (authorized) return <>{children}</>;

	return (
		<div className="min-h-[70vh] flex items-center justify-center px-6">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				className="w-full max-w-sm"
			>
				<Card className="text-center">
					<div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<Lock className="text-brand-primary" size={24} />
					</div>
					<h2 className="text-2xl font-extrabold tracking-tight mb-2">
						Admin Access
					</h2>
					<p className="text-sm text-slate-500 font-medium mb-8">
						This dashboard is restricted to the BioDiesel team.
					</p>
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="password"
							autoFocus
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setError(false);
							}}
							placeholder="Enter password"
							className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-primary outline-none transition-all font-bold text-center placeholder:text-slate-300"
						/>
						{error && (
							<p className="text-red-500 text-xs font-bold">
								Incorrect password. Try again.
							</p>
						)}
						<button
							type="submit"
							className="w-full h-14 bg-brand-primary text-white rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
						>
							Unlock Dashboard <ArrowRight size={18} />
						</button>
					</form>
				</Card>
			</motion.div>
		</div>
	);
};
