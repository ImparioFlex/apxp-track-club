import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApply } from '../context/ApplyContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { openApply } = useApply();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Program', href: isHome ? '#program' : '/#program' },
    { label: 'Athletes', href: '/athletes' },
    { label: 'Results', href: isHome ? '#results' : '/#results' },
  ];

  const bg = scrolled || !isHome
    ? 'bg-purple-deep/95 backdrop-blur-md shadow-lg shadow-purple-deep/30'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="font-display font-bold text-2xl tracking-wider text-white">
            APXP
          </span>
          <span className="hidden sm:inline font-display text-sm font-medium tracking-widest text-gold uppercase">
            Speed Development
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-gold transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={openApply}
            className="font-display text-sm font-bold tracking-wider uppercase bg-gold text-purple-deep px-5 py-2.5 hover:bg-gold-bright transition-colors border-none cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-purple-deep/98 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-lg font-semibold tracking-widest uppercase text-white/90 hover:text-gold transition-colors no-underline"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileOpen(false); openApply(); }}
                className="font-display text-lg font-bold tracking-wider uppercase bg-gold text-purple-deep px-5 py-3 text-center border-none cursor-pointer mt-2"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
