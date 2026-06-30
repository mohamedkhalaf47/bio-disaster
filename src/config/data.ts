/**
 * ============================================================
 * BioDiesel — Central Data Configuration
 * ============================================================
 * كل النصوص والأرقام والمعلومات الخاصة بالمشروع موجودة هنا.
 * لتعديل أي محتوى في الموقع (أرقام، وصف، حقائق...) عدّل هنا فقط
 * ولا تلمس أي ملف Component.
 * ============================================================
 */

import type {
	NavLink,
	ProcessStep,
	NetworkNode,
	NetworkBenefit,
	ImpactStat,
	FinancialMonth,
	RevenueStream,
	LoyaltyEarning,
	Quote,
	SocialLink,
	SiteInfo,
} from "@/types";

// ------------------------------------------------------------
// Site-wide info
// ------------------------------------------------------------
export const SITE_INFO: SiteInfo = {
	projectName: "BioDiesel",
	tagline: "Turning Waste into Clean Energy.",
	organization: "Enactus Assiut University",
	university: "Assiut University",
	badgeText: "Enactus Assiut — Est. March 2025",
};

// ------------------------------------------------------------
// Navigation
// ------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
	{ name: "Home", path: "/" },
	{ name: "Process", path: "/process" },
	{ name: "Network", path: "/network" },
	{ name: "Impact", path: "/impact" },
	{ name: "Dashboard", path: "/dashboard" },
];

// ------------------------------------------------------------
// Hero Section (Home page)
// ------------------------------------------------------------
export const HERO_CONTENT = {
	headlinePrefix: "Turning waste oil into",
	headlineHighlight: "clean fuel",
	headlineSuffix: "for Assiut.",
	description:
		"BioDiesel recycles Used Cooking Oil (UCO) from households, restaurants, and hotels into high-quality biodiesel — reducing pollution and powering a circular economy in Assiut.",
	imageUrl:
		"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop",
	imageCaptionLabel: "Country of Impact",
	imageCaptionValue: "Assiut, Egypt",
	trustedByLabel: "Aligned with",
};

// ------------------------------------------------------------
// CTA Section (Home page, bottom)
// ------------------------------------------------------------
export const CTA_CONTENT = {
	headlinePrefix: "Join the",
	headlineHighlight: "circular economy",
	headlineSuffix: "today.",
	description:
		"Partner with BioDiesel to recycle your waste cooking oil, reduce emissions, and contribute to a cleaner Assiut. Restaurants, hotels, and households welcome.",
};

// ------------------------------------------------------------
// Process Section — "The Chemistry of Change"
// ------------------------------------------------------------
export const PROCESS_INTRO = {
	eyebrow: "The Science",
	title: "The Chemistry of Change",
	description:
		"Our process uses Transesterification — triglycerides in waste oil react with methanol under NaOH or KOH catalyst, producing clean biodiesel and valuable glycerol as a byproduct.",
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		iconName: "Droplet",
		title: "The Inputs",
		desc: "Used Cooking Oil (UCO) collected from restaurants, hotels, and households — combined with methanol under controlled conditions.",
		detail: "Optimized for triglycerides recovery.",
	},
	{
		iconName: "FlaskConical",
		title: "The Reaction",
		desc: "Transesterification triggered by NaOH or KOH catalyst under controlled temperature and mixing conditions.",
		detail: "Monitored at constant temperature.",
	},
	{
		iconName: "Leaf",
		title: "The Results",
		desc: "Pure Biodiesel as the main product — ready for B20 blends — and Glycerol as a valuable byproduct.",
		detail: "0.85–0.95 L biodiesel per 1 L waste oil.",
	},
];

// ------------------------------------------------------------
// Network Section — "Hub & Spoke Strategy"
// ------------------------------------------------------------
export const NETWORK_INTRO = {
	eyebrow: "The Collection Model",
	title: "Hub & Spoke Strategy",
	description:
		"Waste oil is spread across Assiut. Our Hub & Spoke model connects restaurants, franchise chains, and households (spokes) to a central processing unit (hub) — ensuring a consistent, scalable supply.",
};

export const NETWORK_NODES: NetworkNode[] = [
	{
		iconName: "Users",
		title: "Households",
		desc: "Incentive-based collection programs for local families contributing waste cooking oil.",
		variant: "light",
	},
	{
		iconName: "Factory",
		title: "Processing Hub",
		desc: "Central facility where UCO undergoes transesterification to produce biodiesel.",
		variant: "dark",
	},
	{
		iconName: "Network",
		title: "Restaurants & Hotels",
		desc: "Primary UCO sources — signed agreements and log sheets document collected quantities.",
		variant: "light",
	},
	{
		iconName: "CheckCircle2",
		title: "Franchise Chains",
		desc: "Centralized networks enabling large-volume, consistent oil recovery.",
		variant: "light",
	},
];

export const NETWORK_BENEFITS: NetworkBenefit[] = [
	{
		tag: "01",
		text: "10–30 collection sources engaged (restaurants, hotels, households)",
	},
	{ tag: "02", text: "1,000–3,000 liters of waste oil diverted per month" },
	{
		tag: "03",
		text: "Signed agreements & log sheets track every collection point",
	},
	{ tag: "04", text: "Scalable infrastructure — designed to grow with Assiut" },
];

// ------------------------------------------------------------
// Impact Section — "Measuring Our Progress"
// ------------------------------------------------------------
export const IMPACT_INTRO = {
	eyebrow: "Benchmarks",
	title: "Measuring Our Progress",
};

export const IMPACT_STATS: ImpactStat[] = [
	{
		iconName: "Droplet",
		label: "Fuel Yield",
		value: "0.85–0.95L",
		sub: "per 1L Waste Oil",
	},
	{
		iconName: "Leaf",
		label: "CO₂ Avoided",
		value: "2.5–3 kg",
		sub: "per 1L Biodiesel",
	},
	{
		iconName: "BarChart3",
		label: "Pilot Production",
		value: "500–2,000L",
		sub: "per month (target)",
	},
	{
		iconName: "Users",
		label: "People Reached",
		value: "1,000–10,000",
		sub: "via outreach & awareness",
	},
];

// ------------------------------------------------------------
// Dashboard — Financial Tab
// ------------------------------------------------------------
export const FINANCIAL_DATA: FinancialMonth[] = [
	{ name: "Jan", revenue: 4000, costs: 2400, savings: 2400 },
	{ name: "Feb", revenue: 3000, costs: 1398, savings: 2210 },
	{ name: "Mar", revenue: 2000, costs: 9800, savings: 2290 },
	{ name: "Apr", revenue: 2780, costs: 3908, savings: 2000 },
	{ name: "May", revenue: 1890, costs: 4800, savings: 2181 },
	{ name: "Jun", revenue: 2390, costs: 3800, savings: 2500 },
	{ name: "Jul", revenue: 3490, costs: 4300, savings: 2100 },
];

export const DASHBOARD_KPIS = {
	efficiencyGain: { value: "89.4%", change: "+12.5%" },
	netSavings: { value: "$42,850", target: "Target: $50k" },
	goalStatusPercent: 92,
};

export const REVENUE_STREAMS: RevenueStream[] = [
	{
		label: "B20 Commercial",
		amount: "$24,103",
		percentWidth: "65%",
		colorVariant: "primary",
	},
	{
		label: "B100 Industrial",
		amount: "$12,450",
		percentWidth: "35%",
		colorVariant: "primary",
	},
	{
		label: "Glycerin Products",
		amount: "$6,297",
		percentWidth: "15%",
		colorVariant: "accent",
	},
];

// ------------------------------------------------------------
// Dashboard — Loyalty Tab
// ------------------------------------------------------------
export const LOYALTY_INFO = {
	pointsToNextTier: 250,
	nextTierName: "Eco-Ambassador",
	progressPercent: 75,
	currentTierCashback: "5%",
	currentTierBlend: "B20",
};

export const LOYALTY_EARNINGS: LoyaltyEarning[] = [
	{ label: "B100 Delivery", points: "+150", date: "Oct 24" },
	{ label: "UCO Collection", points: "+85", date: "Oct 21" },
	{ label: "Glycerin Wholesale", points: "+45", date: "Oct 15" },
];

// ------------------------------------------------------------
// Dashboard — Quotes Tab (seed/demo data)
// NOTE: actual runtime quotes are persisted in localStorage —
// this is only the initial seed shown on first visit.
// ------------------------------------------------------------
export const SEED_QUOTES: Quote[] = [
	{
		id: "QT-001",
		client: "Local Restaurant — Assiut",
		status: "Pending",
		date: new Date().toLocaleDateString(),
		amount: "—",
		type: "UCO Collection",
	},
	{
		id: "QT-002",
		client: "Hotel Kitchen Partner",
		status: "Approved",
		date: new Date().toLocaleDateString(),
		amount: "—",
		type: "UCO Collection",
	},
	{
		id: "QT-003",
		client: "Franchise Chain — Assiut",
		status: "Draft",
		date: new Date().toLocaleDateString(),
		amount: "—",
		type: "B20 Blend Supply",
	},
	{
		id: "QT-004",
		client: "Community Household Group",
		status: "Completed",
		date: new Date().toLocaleDateString(),
		amount: "—",
		type: "UCO Collection",
	},
];

export const AVAILABLE_PRODUCTS: string[] = [
	"UCO Collection Service (we collect your waste oil)",
	"B20 Biodiesel Blend (supply)",
	"B100 Pure Biodiesel (supply)",
	"Glycerol Byproduct",
	"Awareness & Training Partnership",
];

// ------------------------------------------------------------
// Quote Request Page
// ------------------------------------------------------------
export const QUOTE_FORM_CONTENT = {
	title: "Become a Partner",
	description:
		"Fill in your details to join our collection network or request biodiesel supply. We work with restaurants, hotels, households, and businesses across Assiut.",
};

// ------------------------------------------------------------
// Footer
// ------------------------------------------------------------
export const FOOTER_CONTENT = {
	description:
		"An Enactus Assiut University project — converting Used Cooking Oil into clean biodiesel for a sustainable Assiut. Started March 2025.",
	loyaltyTitle: "Partner With Us",
	loyaltyDescription:
		"Whether you're a restaurant, hotel, or household — join our collection network, contribute waste oil, and be part of Assiut's circular economy.",
	copyright: `© ${new Date().getFullYear()} BioDiesel • Enactus Assiut University`,
};

export const SOCIAL_LINKS: SocialLink[] = [
	{ iconName: "Globe", url: "#" },
	{ iconName: "Camera", url: "#" },
	{ iconName: "Mail", url: "#" },
];

// ------------------------------------------------------------
// Impact Page — SDGs
// ------------------------------------------------------------
export const SDGS = [
	{
		number: "SDG 7",
		label: "Affordable & Clean Energy",
		color: "bg-yellow-400",
		desc: "0.85–0.95L biodiesel per 1L waste oil. Pilot: 500–2,000 L/month.",
	},
	{
		number: "SDG 12",
		label: "Responsible Consumption",
		color: "bg-amber-600",
		desc: "1,000–3,000 L of waste oil diverted from improper disposal monthly.",
	},
	{
		number: "SDG 13",
		label: "Climate Action",
		color: "bg-green-600",
		desc: "2.5–3 kg CO₂ avoided per 1L biodiesel. Up to 5 tons CO₂/month.",
	},
	{
		number: "SDG 17",
		label: "Partnerships for the Goals",
		color: "bg-blue-700",
		desc: "5–20 active partners — restaurants, suppliers, institutions.",
	},
	{
		number: "SDG 5",
		label: "Gender Equality",
		color: "bg-red-500",
		desc: "10–40 female participants in collection, coordination & outreach.",
	},
	{
		number: "SDG 11",
		label: "Sustainable Cities & Communities",
		color: "bg-orange-500",
		desc: "1 urban waste-to-energy model. 10–30 community collection points.",
	},
];

export const BENEFICIARIES = [
	{
		type: "Direct",
		range: "50–150 individuals",
		icon: "Users" as const,
		items: [
			"Restaurant owners and staff in collection network",
			"Hotel kitchen teams contributing UCO",
			"Waste cooking oil collectors & logistics workers",
			"Small-scale suppliers in the processing chain",
		],
	},
	{
		type: "Indirect",
		range: "500–2,000 individuals",
		icon: "Globe" as const,
		items: [
			"Families of workers and suppliers (4–5 dependents each)",
			"Local communities benefiting from reduced waste & pollution",
			"End users of B20 biodiesel blends in transport",
			"Students engaged through awareness initiatives",
		],
	},
	{
		type: "Reach",
		range: "1,000–10,000 individuals",
		icon: "BarChart3" as const,
		items: [
			"Social media campaigns & digital outreach",
			"University workshops & events",
			"Online awareness campaigns",
			"Community participation activities",
		],
	},
];

// ------------------------------------------------------------
// Network Page — Collection Flow Steps
// ------------------------------------------------------------
export const COLLECTION_FLOW = [
	{
		step: "01",
		title: "Source Registration",
		desc: "Restaurants, hotels, and households sign agreements and get registered as collection points.",
	},
	{
		step: "02",
		title: "UCO Collection",
		desc: "Dedicated collectors pick up sealed containers of used cooking oil on a scheduled basis.",
	},
	{
		step: "03",
		title: "Transport to Hub",
		desc: "Oil is transported to the central processing facility using our logistics network.",
	},
	{
		step: "04",
		title: "Quality Check",
		desc: "Incoming UCO is tested for contamination and sorted before entering the reactor.",
	},
	{
		step: "05",
		title: "Transesterification",
		desc: "Controlled chemical reaction with methanol and NaOH/KOH catalyst converts UCO to biodiesel.",
	},
	{
		step: "06",
		title: "Distribution",
		desc: "Finished B20 or B100 biodiesel is distributed to end users; glycerol is sold as a byproduct.",
	},
];

export const PARTNER_TYPES = [
	{
		title: "Restaurants & Cafes",
		desc: "Register your kitchen as a UCO drop-off point. We handle collection logistics.",
		benefit: "Free oil disposal + certificate of environmental contribution",
		icon: "Factory" as const,
	},
	{
		title: "Hotels",
		desc: "Large-volume UCO sources. Signed agreements with regular pickup schedules.",
		benefit: "Consistent pickup + sustainability reporting for CSR",
		icon: "CheckCircle2" as const,
	},
	{
		title: "Households",
		desc: "Drop your used cooking oil at the nearest community collection point.",
		benefit: "Incentive rewards for every contribution",
		icon: "Users" as const,
	},
	{
		title: "Franchise Chains",
		desc: "Multi-branch networks with high UCO volume — ideal for bulk agreements.",
		benefit: "Bulk contracts + impact reporting across all branches",
		icon: "Network" as const,
	},
];

// ------------------------------------------------------------
// Process Page — Chemistry details & reaction specs
// ------------------------------------------------------------
export const REACTION_SPECS = [
	{ label: "Reaction Type", value: "Transesterification" },
	{ label: "Feedstock", value: "Used Cooking Oil (UCO)" },
	{ label: "Co-reactant", value: "Methanol (CH₃OH)" },
	{ label: "Catalyst", value: "NaOH or KOH" },
	{ label: "Main Product", value: "Biodiesel (FAME)" },
	{ label: "Byproduct", value: "Glycerol" },
	{ label: "Yield", value: "0.85 – 0.95 L per 1 L UCO" },
];

export const BIODIESEL_BLENDS = [
	{
		name: "B5",
		ratio: "5% Biodiesel / 95% Diesel",
		use: "Marine & heating applications",
		highlight: false,
	},
	{
		name: "B20",
		ratio: "20% Biodiesel / 80% Diesel",
		use: "Transport fleets — no engine modification needed",
		highlight: true,
	},
	{
		name: "B100",
		ratio: "100% Pure Biodiesel",
		use: "Industrial & compatible diesel engines",
		highlight: false,
	},
];

export const PROCESS_FAQ = [
	{
		q: "Does B20 require engine modification?",
		a: "No. B20 blends are compatible with standard diesel engines without any modification, making them the easiest entry point for fleet operators.",
	},
	{
		q: "What happens to the glycerol byproduct?",
		a: "Glycerol is separated after the reaction and sold to cosmetic, pharmaceutical, and food industries — creating an additional revenue stream.",
	},
	{
		q: "How is UCO quality controlled?",
		a: "Each batch of incoming oil is tested for contamination, water content, and free fatty acids before entering the reactor to ensure consistent output quality.",
	},
	{
		q: "What is the production capacity?",
		a: "Our pilot phase targets 500–2,000 liters of biodiesel per month, scaling with the growth of our collection network across Assiut.",
	},
];

// ------------------------------------------------------------
// Dashboard Page — Summary KPI cards (top of page)
// ------------------------------------------------------------
export const DASHBOARD_SUMMARY_CARDS = [
	{
		label: "Total Partners",
		value: "4",
		sub: "Active collection agreements",
		trend: "+2 this month",
		positive: true,
	},
	{
		label: "UCO Collected",
		value: "1,240 L",
		sub: "Cumulative this quarter",
		trend: "+18% vs last month",
		positive: true,
	},
	{
		label: "Biodiesel Produced",
		value: "1,054 L",
		sub: "At 0.85 L/L yield",
		trend: "On target",
		positive: true,
	},
	{
		label: "CO₂ Avoided",
		value: "2.6 tons",
		sub: "Estimated this quarter",
		trend: "~2.5 kg per liter",
		positive: true,
	},
];

// ------------------------------------------------------------
// Quote / Partner Form — steps sidebar
// ------------------------------------------------------------
export const PARTNER_FORM_STEPS = [
	{ step: "01", label: "Tell us about yourself" },
	{ step: "02", label: "Choose your partnership type" },
	{ step: "03", label: "Provide volume & details" },
	{ step: "04", label: "Submit & we'll be in touch" },
];

export const PARTNER_FORM_TRUST_SIGNALS = [
	{
		icon: "CheckCircle2" as const,
		text: "Free UCO collection — no cost to you",
	},
	{ icon: "Leaf" as const, text: "Environmental contribution certificate" },
	{ icon: "Users" as const, text: "Join 10–30 partners across Assiut" },
	{ icon: "Globe" as const, text: "Aligned with UN SDG 7, 12 & 13" },
];
