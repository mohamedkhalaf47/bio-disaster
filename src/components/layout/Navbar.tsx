import { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE_INFO } from '@/config/data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToQuoteRequest = () => navigate('/quote-request');

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6',
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-brand-border py-4'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 relative overflow-hidden transition-transform group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-transparent opacity-50" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-display font-black text-2xl leading-none -mb-1">b</span>
              <Droplet className="text-brand-accent fill-brand-accent/20" size={16} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter text-brand-primary uppercase leading-tight">
              {SITE_INFO.projectName}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'text-sm font-bold uppercase tracking-widest transition-colors',
                  isActive ? 'text-brand-primary' : 'text-slate-500 hover:text-brand-primary'
                )
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
          <button
            onClick={goToQuoteRequest}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-xl shadow-slate-200 hover:scale-105 transition-all"
          >
            Become a Partner
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-3xl overflow-hidden border border-gray-100 shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'text-lg font-medium border-b border-gray-50 pb-2 text-left',
                      isActive ? 'text-brand-primary' : 'text-gray-900'
                    )
                  }
                >
                  {link.name}
                </RouterNavLink>
              ))}
              <button
                onClick={() => {
                  goToQuoteRequest();
                  setIsOpen(false);
                }}
                className="bg-brand-primary text-white w-full py-4 rounded-2xl font-bold"
              >
                Become a Partner
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
