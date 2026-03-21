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
      <span className="font-display font-bold text-5xl md:text-6xl text-purple-dark leading-none block tabular-nums">
        {stat.prefix || ''}{count}{stat.suffix}
      </span>
      <p className="font-display text-sm md:text-base tracking-widest uppercase text-text-muted mt-2 max-w-[180px] mx-auto">
        {stat.label}
      </p>
    </div>
  );
}

export default function Pipeline() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="bg-surface-light py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-base font-semibold tracking-[0.3em] uppercase text-gold-dim mb-2">
            Track Record
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase text-text-dark leading-none mb-4">
            Where They Go Next
          </h2>
          <p className="font-body text-lg text-text-muted max-w-xl mx-auto mb-14">
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
          <p className="font-display text-sm tracking-[0.3em] uppercase text-text-muted mb-8">
            Where APXP Athletes Compete
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {collegeLogos.map(college => (
              <div
                key={college.name}
                className="flex items-center justify-center hover:scale-110 transition-transform w-16 h-16 md:w-20 md:h-20"
                title={college.name}
              >
                <img
                  src={college.logo}
                  alt={college.name}
                  className="max-w-full max-h-full object-contain drop-shadow-sm"
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
