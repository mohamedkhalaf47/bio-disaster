import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PRODUCT_CAROUSEL_ITEMS } from '@/config/data';
import bioDieselImg from '@/assets/bio_diesel.png';
import glycerinImg from '@/assets/glycerin.png';

const IMAGES: Record<string, string> = {
  bio_diesel: bioDieselImg,
  glycerin: glycerinImg,
};

export const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = PRODUCT_CAROUSEL_ITEMS.length;
  const current = PRODUCT_CAROUSEL_ITEMS[index];

  const goTo = (i: number) => setIndex((i + total) % total);

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h4 className="text-xs uppercase font-bold text-brand-primary tracking-widest mb-4">
            The Final Product
          </h4>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-4">
            From waste to worth
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            A look at what comes out the other end of our process.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-1/2 max-md:w-full h-150 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-brand-background mx-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.key}
                src={IMAGES[current.key]}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-extrabold tracking-tight mb-1">{current.title}</h3>
              <p className="text-sm font-medium opacity-80 max-w-lg">{current.caption}</p>
            </div>

            {/* Prev / Next controls */}
            {total > 1 && (
              <>
                <button
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous product"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
                >
                  <ChevronLeft size={20} className="text-slate-900" />
                </button>
                <button
                  onClick={() => goTo(index + 1)}
                  aria-label="Next product"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
                >
                  <ChevronRight size={20} className="text-slate-900" />
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          {total > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {PRODUCT_CAROUSEL_ITEMS.map((item, i) => (
                <button
                  key={item.key}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${item.title}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-8 bg-brand-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
