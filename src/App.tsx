import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { ProcessPage } from "@/pages/ProcessPage";
import { NetworkPage } from "@/pages/NetworkPage";
import { ImpactPage } from "@/pages/ImpactPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { QuoteRequestPage } from "@/pages/QuoteRequestPage";
import { initAnalytics } from "@/lib/analytics";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);
	return null;
}

export default function App() {
	useEffect(() => {
		initAnalytics();
	}, []);

	return (
		<div className="antialiased font-sans flex flex-col min-h-screen">
			<ScrollToTop />
			<Navbar />
			<main className="grow">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/process" element={<ProcessPage />} />
					<Route path="/network" element={<NetworkPage />} />
					<Route path="/impact" element={<ImpactPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/quote-request" element={<QuoteRequestPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
