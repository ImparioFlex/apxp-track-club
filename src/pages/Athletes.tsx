import { motion } from 'framer-motion';
import { currentRoster, alumniRoster, type Athlete } from '../data/athletes';

function AthleteProfileCard({ athlete, index }: { athlete: Athlete; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white shadow-sm hover:shadow-xl transition-all group overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={athlete.photo}
          alt={athlete.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/80 to-transparent" />

        {athlete.collegeCommitment && (
          <div className="absolute top-3 right-3 font-display text-xs font-bold tracking-widest uppercase bg-gold text-purple-deep px-3 py-1">
            {athlete.collegeCommitment.replace('University of ', '')}
          </div>
        )}
        {athlete.alumni && athlete.collegeDestination && (
          <div className="absolute top-3 right-3 font-display text-xs font-bold tracking-widest uppercase bg-white/90 text-purple-deep px-3 py-1">
            → {athlete.collegeDestination}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display font-extrabold text-xl uppercase text-white leading-none mb-1">
            {athlete.name}
          </h3>
          <p className="font-display text-xs tracking-wider text-white/60 uppercase">
            {athlete.alumni ? `Alumni · Class of ${athlete.classYear}` : `${athlete.school} · ${athlete.classYear}`}
          </p>
        </div>
      </div>

      {/* Stats & info */}
      <div className="p-4">
        {/* Events */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {athlete.events.map(event => (
            <span
              key={event}
              className="font-display text-[10px] font-semibold tracking-wider uppercase bg-purple-deep/8 text-purple-dark px-2 py-0.5"
            >
              {event}
            </span>
          ))}
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 gap-2">
          {athlete.keyStats.slice(0, 2).map((stat, i) => (
            <div key={i} className="bg-surface-light p-2 rounded">
              <span className="font-display font-bold text-lg text-purple-dark block leading-none">
                {stat.value}
              </span>
              <span className="font-display text-[9px] tracking-widest uppercase text-text-muted mt-0.5 block">
                {stat.note || stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* PRs expandable */}
        {athlete.prs.length > 0 && (
          <div className="mt-3 pt-3 border-t border-surface-light">
            <p className="font-display text-[10px] font-bold tracking-widest uppercase text-text-muted mb-1.5">
              Personal Records
            </p>
            <div className="space-y-1">
              {athlete.prs.slice(0, 3).map((pr, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <span className="font-display text-xs font-semibold text-text-dark">{pr.event}</span>
                  <span className="font-display text-xs font-bold text-purple-dark">{pr.mark}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Athletes() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-purple-deep pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-2">
              APXP Speed Development
            </p>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase text-white leading-none">
              The Roster
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Current athletes */}
      <section className="bg-surface-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-sm tracking-[0.3em] uppercase text-purple-dark mb-8">
            Current Athletes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentRoster.map((athlete, i) => (
              <AthleteProfileCard key={athlete.id} athlete={athlete} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      {alumniRoster.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display font-bold text-sm tracking-[0.3em] uppercase text-purple-dark mb-2">
              Alumni
            </h2>
            <p className="font-body text-base text-text-muted mb-8">
              Where APXP athletes have gone to compete at the next level.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {alumniRoster.map((athlete, i) => (
                <AthleteProfileCard key={athlete.id} athlete={athlete} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
