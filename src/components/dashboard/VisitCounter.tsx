import { BarChart3, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ANALYTICS_CONFIG } from '@/config/data';

/**
 * Displays total site visits.
 *
 * This is a placeholder card — it does NOT call the Google Analytics
 * Data API (that requires a backend + OAuth service account, which is
 * out of scope for a static frontend-only site). Once a GA4
 * measurementId is set in config/data.ts, this card shows the ID and
 * links out to the live GA dashboard. Wire up a real number here once
 * a backend proxy to the GA Data API exists.
 */
export const VisitCounter = () => {
  const { measurementId } = ANALYTICS_CONFIG;

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
          <BarChart3 size={24} />
        </div>
        {measurementId ? (
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-brand-primary/20 transition-colors"
          >
            View in GA <ExternalLink size={10} />
          </a>
        ) : (
          <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
            Not connected
          </span>
        )}
      </div>
      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">
        Total Site Visits
      </p>
      {measurementId ? (
        <>
          <h4 className="text-3xl font-black tracking-tighter text-slate-900">—</h4>
          <p className="text-xs text-slate-400 font-medium mt-1">
            GA4 property {measurementId} — see live dashboard for exact numbers
          </p>
        </>
      ) : (
        <>
          <h4 className="text-3xl font-black tracking-tighter text-slate-300">—</h4>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Add a Google Analytics Measurement ID in config/data.ts to enable this
          </p>
        </>
      )}
    </Card>
  );
};
