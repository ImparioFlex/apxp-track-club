import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { programFeatures } from '../data/program';
import { useInView } from '../hooks/useInView';

export default function Program() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="program" className="bg-surface-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-purple-dark mb-2">
              The Program
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase text-text-dark leading-[0.9] mb-6">
              11 Months.<br />
              <span className="text-purple-dark">One Goal.</span>
            </h2>
            <p className="font-body text-lg text-text-muted leading-relaxed mb-8">
              APXP is a selective, 11-month speed development and track IQ program
              based in Houston, Texas. We don't just make athletes faster — we prepare
              the complete student-athlete for Division I competition and beyond.
              Every phase of the race, every aspect of recruiting, every detail that
              separates good from elite.
            </p>

            {/* Pull quote */}
            <div className="border-l-4 border-gold pl-5">
              <p className="font-body text-xl italic text-text-dark leading-relaxed">
                "I don't just coach speed. I coach the athlete who's going to walk into
                a D1 program on day one and compete — not adjust, <em className="text-purple-dark not-italic font-semibold">compete</em>."
              </p>
              <p className="font-display text-sm font-semibold tracking-wider uppercase text-text-muted mt-3">
                — Coach Danny McCray
              </p>
            </div>
          </motion.div>

          {/* Right column — feature blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {programFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="bg-white p-6 shadow-sm hover:shadow-lg transition-shadow border-b-2 border-transparent hover:border-gold group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-xl uppercase text-text-dark mb-2 group-hover:text-purple-dark transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-base text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Apply CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Link
                to="/apply"
                className="inline-block font-display font-bold text-lg tracking-wider uppercase bg-gold text-purple-deep px-10 py-4 hover:bg-gold-bright transition-all hover:scale-105 no-underline"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
