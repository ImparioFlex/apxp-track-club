import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-purple-deep border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & address */}
          <div>
            <span className="font-display font-bold text-2xl tracking-wider text-white block mb-1">
              APXP
            </span>
            <span className="font-display text-sm font-medium tracking-widest text-gold uppercase block mb-4">
              Speed Development
            </span>
            <p className="font-body text-sm text-white/50">
              P.O. Box 245<br />
              Richmond, TX
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-bold tracking-widest uppercase text-white/30 mb-1">
              Links
            </span>
            <a href="/#program" className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline">
              The Program
            </a>
            <Link to="/athletes" className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline">
              Athletes
            </Link>
            <a href="/#results" className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline">
              Results
            </a>
            <Link to="/apply" className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline">
              Apply
            </Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-bold tracking-widest uppercase text-white/30 mb-1">
              Connect
            </span>
            <a
              href="https://www.instagram.com/i_coach_speed/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline"
            >
              Instagram — @i_coach_speed
            </a>
            <a
              href="https://x.com/I_Coach_Speed"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline"
            >
              X — @I_Coach_Speed
            </a>
            <a
              href="https://www.apxpspeed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-white/60 hover:text-gold transition-colors no-underline"
            >
              apxpspeed.com
            </a>
            <p className="font-body text-sm text-white/40 mt-2">
              Questions? DM on Instagram or reach out through the apply form.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} APXP Speed Development. All rights reserved.
          </p>
          <a
            href="https://imparioflex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs font-semibold tracking-wider uppercase text-white/25 hover:text-gold/50 transition-colors no-underline"
          >
            Website by Impario Flex
          </a>
        </div>
      </div>
    </footer>
  );
}
