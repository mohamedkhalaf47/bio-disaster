import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => (
	<div
		{...props}
		className={cn(
			"bg-white border border-slate-200 rounded-3xl p-8 shadow-sm transition-all hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-1 relative overflow-hidden",
			className,
		)}
	>
		{children}
	</div>
);
