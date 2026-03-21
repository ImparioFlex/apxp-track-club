import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function ApplyCTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="relative bg-purple-deep py-24 md:py-32 overflow-hidden">
      {/* Diagonal yellow stripes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-0 w-3 h-[150%] bg-gold/20 rotate-[-30deg] origin-top-right" />
        <div className="absolute -right-60 top-0 w-1 h-[150%] bg-gold/10 rotate-[-30deg] origin-top-right" />
        <div className="absolute -left-20 bottom-0 w-2 h-[150%] bg-gold/10 rotate-[30deg] origin-bottom-left" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.9] mb-6">
            Limited Spots.<br />
            <span className="text-gold">Elite Standards.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            APXP accepts a select number of athletes each year. If you're ready
            to compete at the highest level, start your application.
          </p>
          <Link
            to="/apply"
            className="inline-block font-display font-bold text-lg md:text-xl tracking-wider uppercase bg-gold text-purple-deep px-12 py-5 hover:bg-gold-bright transition-all hover:scale-105 no-underline"
          >
            Begin Application →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
