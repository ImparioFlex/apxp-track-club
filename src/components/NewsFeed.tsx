import { motion } from 'framer-motion';
import { newsItems } from '../data/news';
import { useInView } from '../hooks/useInView';

function NewsCard({ item, large = false }: { item: typeof newsItems[0]; large?: boolean }) {
  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 no-underline ${large ? 'row-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden ${large ? 'h-64 md:h-full' : 'h-40'}`}>
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-3 left-3 font-display text-xs font-bold tracking-widest uppercase bg-gold text-purple-deep px-3 py-1">
          {item.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className={`font-display font-bold uppercase text-text-dark leading-tight mb-2 group-hover:text-purple-dark transition-colors ${large ? 'text-xl md:text-2xl' : 'text-base'}`}>
          {item.headline}
        </h3>
        {large && (
          <p className="font-body text-text-muted text-base leading-relaxed mb-3 line-clamp-3">
            {item.blurb}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="font-body text-sm text-text-muted">{item.date}</span>
          <span className="font-display text-xs font-semibold tracking-wider uppercase text-purple-dark">
            {item.sourceName} →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function NewsFeed() {
  const { ref, inView } = useInView(0.1);

  const featured = newsItems.find(n => n.featured) || newsItems[0];
  const sideCards = newsItems.filter(n => n.id !== featured.id).slice(0, 2);
  const scrollRow = newsItems.filter(n => n.id !== featured.id).slice(2);

  return (
    <section id="results" className="bg-surface-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-purple-dark mb-2">
            Latest
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase text-text-dark mb-10 leading-none">
            Making Headlines
          </h2>
        </motion.div>

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-5 gap-5 mb-8"
        >
          <div className="md:col-span-3">
            <NewsCard item={featured} large />
          </div>
          <div className="md:col-span-2 flex flex-col gap-5">
            {sideCards.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Horizontal scroll row */}
        {scrollRow.length > 0 && (
          <div className="overflow-x-auto -mx-6 px-6 pb-4">
            <div className="flex gap-5 min-w-max">
              {scrollRow.map(item => (
                <div key={item.id} className="w-72 flex-shrink-0">
                  <NewsCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
