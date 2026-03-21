import { motion } from 'framer-motion';
import { coachBio } from '../data/program';
import { useInView } from '../hooks/useInView';

export default function Coach() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="bg-surface-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5]">
              <img
                src={coachBio.photo}
                alt={`Coach ${coachBio.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/30 to-transparent" />
            </div>
            {/* Yellow accent bar */}
            <div className="absolute -bottom-3 -right-3 w-24 h-1.5 bg-gold" />
            <div className="absolute -bottom-3 -right-3 w-1.5 h-24 bg-gold" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-purple-dark mb-2">
              The Coach
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase text-text-dark leading-[0.9] mb-6">
              Coached By<br />
              <span className="text-purple-dark">An Olympian</span>
            </h2>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {coachBio.credentials.map(cred => (
                <span
                  key={cred}
                  className="font-display text-sm font-bold tracking-wider uppercase bg-purple-deep/10 text-purple-dark px-4 py-2"
                >
                  {cred}
                </span>
              ))}
            </div>

            <p className="font-body text-lg text-text-muted leading-relaxed mb-6">
              {coachBio.bio}
            </p>

            {/* Quote */}
            <div className="border-l-4 border-gold pl-5 mb-6">
              <p className="font-body text-lg italic text-text-dark leading-relaxed">
                "{coachBio.quote}"
              </p>
            </div>

            <a
              href={coachBio.podcastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-base md:text-lg font-bold tracking-wider uppercase bg-purple-deep text-white px-6 py-4 hover:bg-purple-mid transition-colors no-underline mt-2"
            >
              <span className="text-2xl">🎙️</span>
              Listen: Coach McCray on the Gill Athletics Podcast →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
