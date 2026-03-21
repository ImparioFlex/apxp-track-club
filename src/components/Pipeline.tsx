import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { pipelineStats, collegeLogos } from '../data/program';
import { useInView } from '../hooks/useInView';

function AnimatedStat({ stat, inView }: { stat: typeof pipelineStats[0]; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const start = performance.now();
      const target = stat.value;

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(target * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, stat.value]);

  return (
    <div className="text-center">
      <span className="font-display font-bold text-5xl md:text-6xl text-gold leading-none block tabular-nums">
        {stat.prefix || ''}{count}{stat.suffix}
      </span>
      <p className="font-display text-sm md:text-base tracking-widest uppercase text-white/60 mt-2 max-w-[180px] mx-auto">
        {stat.label}
      </p>
    </div>
  );
}

export default function Pipeline() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="relative bg-purple-deep py-20 md:py-28 noise-overlay overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-mid/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-2">
            Track Record
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase text-white leading-none mb-4">
            Where They Go Next
          </h2>
          <p className="font-body text-lg text-white/50 max-w-xl mx-auto mb-14">
            Fast times become futures. Our athletes don't just break records — they earn full-ride scholarships and compete at the highest level.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16"
        >
          {pipelineStats.map((stat, i) => (
            <AnimatedStat key={i} stat={stat} inView={inView} />
          ))}
        </motion.div>

        {/* College logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-white/30 mb-6">
            Where APXP Athletes Compete
          </p>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {collegeLogos.map(college => (
              <div
                key={college.name}
                className="flex items-center justify-center bg-white rounded-lg px-5 py-4 hover:shadow-lg hover:shadow-gold/10 hover:scale-105 transition-all w-24 h-20 md:w-28 md:h-24"
              >
                <img
                  src={college.logo}
                  alt={college.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
