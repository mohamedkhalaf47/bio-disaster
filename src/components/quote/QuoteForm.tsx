import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AVAILABLE_PRODUCTS, QUOTE_FORM_CONTENT } from '@/config/data';
import type { Quote, QuoteFormData, ClientType } from '@/types';

interface QuoteFormProps {
  onSubmit: (quote: Quote) => void;
  onCancel: () => void;
}

export const QuoteForm = ({ onSubmit, onCancel }: QuoteFormProps) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    company: '',
    clientType: 'B2B',
    products: [],
    volume: '',
    email: '',
    notes: '',
  });

  const toggleProduct = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.products.length === 0) {
      alert('Please select at least one product.');
      return;
    }
    onSubmit({
      id: `QT-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      client: `${formData.company} (${formData.clientType})`,
      status: 'Pending',
      date: new Date().toLocaleDateString(),
      amount: `$${(parseInt(formData.volume || '0') * 1.5).toLocaleString()}`,
      type: formData.products.join(', '),
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-brand-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <SectionTitle className="mb-4">{QUOTE_FORM_CONTENT.title}</SectionTitle>
          <p className="text-slate-500 font-medium">{QUOTE_FORM_CONTENT.description}</p>
        </div>

        <Card className="p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Name / Company
                </label>
                <input
                  required
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-primary outline-none transition-all font-bold placeholder:text-slate-300"
                  placeholder="e.g. Green Logistics or Family Home"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Client Type
                </label>
                <select
                  value={formData.clientType}
                  onChange={(e) =>
                    setFormData({ ...formData, clientType: e.target.value as ClientType })
                  }
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-primary outline-none transition-all font-bold"
                >
                  <option value="B2B">B2B (Logistics / Industry)</option>
                  <option value="B2C">B2C (Homes / Restaurants)</option>
                </select>
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-2">
                  Select Products (Multiple Selection)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AVAILABLE_PRODUCTS.map((product) => (
                    <button
                      key={product}
                      type="button"
                      onClick={() => toggleProduct(product)}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-2xl border transition-all text-left group',
                        formData.products.includes(product)
                          ? 'bg-brand-primary/5 border-brand-primary text-brand-primary'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      )}
                    >
                      <div
                        className={cn(
                          'w-5 h-5 rounded-md border flex items-center justify-center transition-all',
                          formData.products.includes(product)
                            ? 'bg-brand-primary border-brand-primary text-white'
                            : 'bg-white border-slate-300 group-hover:border-slate-400'
                        )}
                      >
                        {formData.products.includes(product) && <CheckCircle2 size={14} />}
                      </div>
                      <span className="text-sm font-bold">{product}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Business / Contact Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-primary outline-none transition-all font-bold placeholder:text-slate-300"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Monthly Volume (Liters/Units)
                </label>
                <input
                  required
                  type="number"
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-primary outline-none transition-all font-bold placeholder:text-slate-300"
                  placeholder="e.g. 5000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                Additional Requirements
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full min-h-30 p-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-primary outline-none transition-all font-bold placeholder:text-slate-300 resize-none"
                placeholder="Details about your delivery schedule or specific engine compatibility needs..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="grow h-16 bg-brand-primary text-white rounded-2xl font-bold shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Submit Request <CheckCircle2 size={20} />
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="h-16 px-10 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};