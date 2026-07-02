// ============================================
// Shared types used across the app & config/data.ts
// ============================================

export type ClientType = "B2B" | "B2C";

export type QuoteStatus = "Pending" | "Approved" | "Draft" | "Completed";

export interface NavLink {
	name: string;
	path: string;
}

export interface ProcessStep {
	iconName: "Droplet" | "FlaskConical" | "Leaf";
	title: string;
	desc: string;
	detail: string;
}

export interface NetworkNode {
	iconName: "Users" | "Factory" | "Network" | "CheckCircle2";
	title: string;
	desc: string;
	variant: "light" | "dark";
}

export interface NetworkBenefit {
	tag: string;
	text: string;
}

export interface ImpactStat {
	iconName: "Droplet" | "Leaf" | "BarChart3" | "Users";
	label: string;
	value: string;
	sub: string;
}

export interface FinancialMonth {
	name: string;
	revenue: number;
	costs: number;
	savings: number;
}

export interface RevenueStream {
	label: string;
	amount: string;
	percentWidth: string;
	colorVariant: "primary" | "accent";
}

export interface LoyaltyEarning {
	label: string;
	points: string;
	date: string;
}

export interface Quote {
	id: string;
	client: string;
	status: QuoteStatus;
	date: string;
	amount: string;
	type: string;
}

export interface QuoteFormData {
	company: string;
	clientType: ClientType;
	products: string[];
	volume: string;
	email: string;
	phone: string;
	notes: string;
}

export interface SocialLink {
	iconName: "Globe" | "Camera" | "Mail";
	url: string;
}

export interface SiteInfo {
	projectName: string;
	tagline: string;
	organization: string;
	university: string;
	badgeText: string;
}

export interface QuarterlyTarget {
	quarter: string;
	hubs: number;
	revenue: number;
	profit: number;
}