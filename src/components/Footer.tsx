import { Link } from 'react-router-dom';
import { useApply } from '../context/ApplyContext';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function Footer() {
  const { openApply } = useApply();
  return (
    <footer className="bg-purple-deep border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section — big logo + tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <img
              src="/apxp-logo-light.png"
              alt="APXP Speed Development"
              className="h-12 md:h-14 w-auto mb-2"
            />
            <span className="font-display text-base font-semibold tracking-[0.2em] text-gold uppercase block">
              Speed Development
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/i_coach_speed/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/I_Coach_Speed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://www.apxpspeed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all"
              aria-label="Website"
            >
              <GlobeIcon />
            </a>
          </div>
        </div>

        {/* Middle — links + info grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <span className="font-display text-sm font-bold tracking-widest uppercase text-white/40 block mb-4">
              Navigate
            </span>
            <div className="flex flex-col gap-3">
              <a href="/#program" className="font-body text-base text-white/60 hover:text-gold transition-colors no-underline">
                The Program
              </a>
              <Link to="/athletes" className="font-body text-base text-white/60 hover:text-gold transition-colors no-underline">
                Athletes
              </Link>
              <a href="/#results" className="font-body text-base text-white/60 hover:text-gold transition-colors no-underline">
                Results
              </a>
              <button onClick={openApply} className="font-body text-base text-white/60 hover:text-gold transition-colors bg-transparent border-none cursor-pointer p-0 text-left">
                Apply
              </button>
            </div>
          </div>

          <div>
            <span className="font-display text-sm font-bold tracking-widest uppercase text-white/40 block mb-4">
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <p className="font-body text-base text-white/60">
                P.O. Box 245<br />
                Richmond, TX
              </p>
              <p className="font-body text-base text-white/50">
                DM on Instagram for inquiries
              </p>
            </div>
          </div>

          <div>
            <span className="font-display text-sm font-bold tracking-widest uppercase text-white/40 block mb-4">
              Ready?
            </span>
            <p className="font-body text-base text-white/60 mb-4">
              Limited spots available for elite athletes ready to compete at the next level.
            </p>
            <button
              onClick={openApply}
              className="font-display text-base font-bold tracking-wider uppercase bg-gold text-purple-deep px-8 py-3 hover:bg-gold-bright transition-all border-none cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/30">
            © {new Date().getFullYear()} APXP Speed Development. All rights reserved.
          </p>
          <a
            href="https://imparioflex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-semibold tracking-wider uppercase text-white/30 hover:text-gold/60 transition-colors no-underline"
          >
            Website by Impario Flex
          </a>
        </div>
      </div>
    </footer>
  );
}
