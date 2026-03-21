import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredAthletes, type Athlete } from '../data/athletes';
import { useInView } from '../hooks/useInView';

function AthleteCard({ athlete, index }: { athlete: Athlete; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="athlete-card-border bg-purple-dark/80 backdrop-blur-sm"
    >
      {/* Card front */}
      <div className="relative">
        <div className="relative h-72 md:h-80 overflow-hidden rounded-t-xl">
          <img
            src={athlete.photo}
            alt={athlete.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-deep via-purple-deep/40 to-transparent" />

          {/* College commitment badge */}
          {athlete.collegeCommitment && (
            <div className="absolute top-3 right-3 font-display text-xs font-bold tracking-widest uppercase bg-gold text-purple-deep px-3 py-1">
              Committed: {athlete.collegeCommitment.replace('University of ', '')}
            </div>
          )}
        </div>

        {/* Name and info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl uppercase text-white leading-none mb-1">
            {athlete.name}
          </h3>
          <p className="font-display text-sm tracking-wider text-white/50 uppercase">
            {athlete.school} · Class of {athlete.classYear}
          </p>
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-3 divide-x divide-purple-mid/50 p-4">
        {athlete.keyStats.map((stat, i) => (
          <div key={i} className="text-center px-2">
            <span className="font-display font-bold text-xl md:text-2xl text-gold leading-none block">
              {stat.value}
            </span>
            <span className="font-display text-[10px] tracking-widest uppercase text-white/40 mt-1 block">
              {stat.note || stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full py-3 px-5 font-display text-sm font-bold tracking-widest uppercase text-gold hover:text-gold-bright transition-colors bg-purple-mid/30 hover:bg-purple-mid/50 border-none cursor-pointer flex items-center justify-center gap-2"
      >
        {expanded ? 'Close' : 'Full Bio'}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          ↓
        </motion.span>
      </button>

      {/* Expanded bio panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="p-5 border-t border-purple-mid/30">
              <p className="font-body text-base text-white/70 leading-relaxed mb-4">
                {athlete.bio}
              </p>

              {athlete.quote && (
                <blockquote className="border-l-2 border-gold pl-4 mb-4">
                  <p className="font-body text-base italic text-white/60">
                    "{athlete.quote}"
                  </p>
                </blockquote>
              )}

              {/* PRs */}
              <div className="mb-4">
                <h4 className="font-display text-sm font-bold tracking-widest uppercase text-gold mb-2">
                  Personal Records
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {athlete.prs.map((pr, i) => (
                    <div key={i} className="bg-purple-deep/50 px-3 py-2 rounded">
                      <span className="font-display font-bold text-sm text-white">{pr.event}: {pr.mark}</span>
                      {pr.note && (
                        <span className="block font-body text-xs text-white/40 mt-0.5">{pr.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              {athlete.awards && (
                <div className="mb-4">
                  <h4 className="font-display text-sm font-bold tracking-widest uppercase text-gold mb-2">
                    Awards & Honors
                  </h4>
                  <ul className="space-y-1">
                    {athlete.awards.map((award, i) => (
                      <li key={i} className="font-body text-sm text-white/60 flex items-start gap-2">
                        <span className="text-gold mt-1">•</span> {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Media links */}
              {athlete.mediaLinks && athlete.mediaLinks.length > 0 && (
                <div>
                  <h4 className="font-display text-sm font-bold tracking-widest uppercase text-gold mb-2">
                    In The Press
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {athlete.mediaLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-xs font-semibold tracking-wider uppercase text-white/50 hover:text-gold bg-purple-deep/50 px-3 py-1.5 rounded transition-colors no-underline"
                      >
                        {link.title} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FeaturedAthletes() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="athletes" className="relative bg-purple-deep py-20 md:py-28 noise-overlay">
      {/* Subtle diagonal stripe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-0 w-1 h-[120%] bg-gold/10 rotate-[25deg] origin-top-left" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-2">
              Featured
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase text-white leading-none">
              Record Breakers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {inView && featuredAthletes.map((athlete, i) => (
              <AthleteCard key={athlete.id} athlete={athlete} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-10"
          >
            <Link
              to="/athletes"
              className="font-display text-sm font-bold tracking-widest uppercase text-gold hover:text-gold-bright transition-colors no-underline inline-flex items-center gap-2"
            >
              See All Athletes
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
