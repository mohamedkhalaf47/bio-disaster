import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT, SITE_INFO } from "@/config/data";

export const Hero = () => (
	<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-brand-background">
		<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
					<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
					<span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
						{SITE_INFO.badgeText}
					</span>
				</div>
				<h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.95] tracking-tighter mb-8">
					{HERO_CONTENT.headlinePrefix}{" "}
					<span className="text-brand-accent italic">
						{HERO_CONTENT.headlineHighlight}
					</span>{" "}
					{HERO_CONTENT.headlineSuffix}
				</h1>
				<p className="text-xl text-brand-muted font-medium leading-relaxed max-w-lg mb-10">
					{HERO_CONTENT.description}
				</p>
				<div className="flex flex-wrap items-center gap-6">
					<button className="h-16 px-10 bg-brand-primary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-brand-primary/30 transition-transform active:scale-95 hover:scale-105 flex items-center gap-2">
						Get Started <ArrowRight size={20} />
					</button>
					<div className="flex flex-col">
						<span className="text-sm font-bold text-slate-400">
							{HERO_CONTENT.trustedByLabel}
						</span>
						<div className="flex gap-4 items-center mt-2 grayscale opacity-50 font-black text-xl italic tracking-tighter uppercase text-brand-primary">
							<span>Bio</span>
							<span>Flow</span>
							<span>UCO</span>
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="relative"
			>
				<div className="absolute inset-0 bg-brand-secondary/20 rounded-[3rem] -rotate-3 blur-2xl" />
				<div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
					<img
						src={HERO_CONTENT.imageUrl}
						alt="Sustainable energy concept"
						className="w-full h-full object-cover"
						referrerPolicy="no-referrer"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
					<div className="absolute bottom-8 left-8 text-white">
						<p className="text-sm font-semibold opacity-80 uppercase tracking-widest">
							{HERO_CONTENT.imageCaptionLabel}
						</p>
						<p className="text-2xl font-bold">
							{HERO_CONTENT.imageCaptionValue}
						</p>
					</div>
				</div>
			</motion.div>
		</div>

		{/* Background Shapes */}
		<div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -z-10" />
		<div className="absolute top-1/2 -left-24 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10" />
	</section>
);
