import type { Quote } from "@/types";
import { SEED_QUOTES } from "@/config/data";

const STORAGE_KEY = "biodiesel_quotes";

/**
 * Reads quotes from localStorage. Falls back to the seed data
 * (and persists it) on first visit or if storage is corrupted.
 */
export function loadQuotes(): Quote[] {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_QUOTES));
			return SEED_QUOTES;
		}
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) throw new Error("Invalid quotes shape");
		return parsed as Quote[];
	} catch {
		// Corrupted storage — reset to seed data
		localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_QUOTES));
		return SEED_QUOTES;
	}
}

export function saveQuotes(quotes: Quote[]): void {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
	} catch {
		// localStorage unavailable (private mode, quota, etc.) — fail silently,
		// the in-memory state still works for the current session.
	}
}
