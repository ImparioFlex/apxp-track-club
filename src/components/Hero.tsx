import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tickerItems } from '../data/news';

function CountUp({ end, suffix = '', duration = 2000 }: { end: string; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const isNumeric = !isNaN(parseFloat(end));
          if (!isNumeric) {
            setDisplay(end);
            return;
          }
          const target = parseFloat(end);
          const isDecimal = end.includes('.');
          const decimalPlaces = isDecimal ? end.split('.')[1].length : 0;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            setDisplay(isDecimal ? current.toFixed(decimalPlaces) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums font-display font-bold text-5xl md:text-7xl text-gold leading-none">
      {display}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-purple-deep">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526676317768-d9b14f15615a?w=1920&h=1080&fit=crop')" }}
      />

      {/* Diagonal yellow stripe */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -right-20 top-1/4 w-2 h-[140%] bg-gold/30 rotate-[-35deg] origin-top-right"
        />
        <div
          className="absolute -right-40 top-1/4 w-1 h-[140%] bg-gold/15 rotate-[-35deg] origin-top-right"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/60 via-purple-deep/40 to-purple-deep" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
            Houston, Texas
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.9] tracking-tight mb-6">
            Where Records<br />
            <span className="text-gold">Are Made</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            World records. National champions. $1M+ in scholarships. One program.
          </p>
        </motion.div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 mb-14 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <CountUp end="6.59" duration={2500} />
            <p className="font-display text-xs md:text-sm tracking-widest uppercase text-white/70 mt-2">World U18 Record</p>
          </div>
          <div className="text-center">
            <CountUp end="100" suffix="%" duration={2000} />
            <p className="font-display text-xs md:text-sm tracking-widest uppercase text-white/70 mt-2">Scholarship Rate</p>
          </div>
          <div className="text-center">
            <span className="tabular-nums font-display font-bold text-5xl md:text-7xl text-gold leading-none">$1M+</span>
            <p className="font-display text-xs md:text-sm tracking-widest uppercase text-white/70 mt-2">Athletic Aid Earned</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/apply"
            className="inline-block font-display font-bold text-lg tracking-wider uppercase bg-gold text-purple-deep px-10 py-4 hover:bg-gold-bright transition-all hover:scale-105 no-underline"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>

      {/* Results ticker */}
      <div className="relative z-10 bg-gold/10 border-t border-b border-gold/20 py-3 overflow-hidden mt-auto">
        <div className="ticker-scroll flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 font-display text-sm md:text-base tracking-wide">
              <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
              <span className="text-gold font-bold uppercase">{item.athlete}</span>
              <span className="text-white/60">{item.result}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
