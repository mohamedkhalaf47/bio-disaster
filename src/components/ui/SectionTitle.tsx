import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
	children: React.ReactNode;
	className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
	<motion.h2
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className={cn(
			"text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-6",
			className,
		)}
	>
		{children}
	</motion.h2>
);
