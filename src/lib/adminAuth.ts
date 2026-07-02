import { DASHBOARD_AUTH } from '@/config/data';

/**
 * Minimal client-side gate for the admin dashboard.
 * NOTE: this is NOT real security — the password lives in the bundled JS
 * and anyone can read it in devtools. It's just enough friction to keep
 * the dashboard out of casual visitors' way during the pilot phase.
 * Replace with real auth (backend + hashed credentials) before this
 * matters for anything sensitive.
 */
export function isAdminSession(): boolean {
  try {
    return sessionStorage.getItem(DASHBOARD_AUTH.sessionKey) === 'true';
  } catch {
    return false;
  }
}

export function tryAdminLogin(password: string): boolean {
  if (password === DASHBOARD_AUTH.password) {
    try {
      sessionStorage.setItem(DASHBOARD_AUTH.sessionKey, 'true');
    } catch {
      // sessionStorage unavailable — login still succeeds for this render,
      // just won't persist across reloads.
    }
    return true;
  }
  return false;
}

export function adminLogout(): void {
  try {
    sessionStorage.removeItem(DASHBOARD_AUTH.sessionKey);
  } catch {
    // ignore
  }
}
