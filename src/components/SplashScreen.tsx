import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'bolt' | 'logo' | 'exit'>('bolt');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 900);
    const t2 = setTimeout(() => setPhase('exit'), 2400);
    const t3 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-purple-deep flex flex-col items-center justify-center overflow-hidden"
      style={{
        pointerEvents: phase === 'exit' ? 'none' : 'all',
        willChange: 'opacity',
      }}
    >
      {/* Lightning bolt — fades in then out */}
      <motion.svg
        viewBox="0 0 120 200"
        className="w-16 md:w-24 absolute"
        style={{ willChange: 'transform, opacity' }}
        initial={{ opacity: 0, y: 20 }}
        animate={
          phase === 'bolt'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -30 }
        }
        transition={{
          duration: phase === 'bolt' ? 0.5 : 0.35,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <path
          d="M75 5 L30 95 L55 95 L40 195 L95 85 L65 85 L85 5 Z"
          fill="#E8D44D"
        />
        <path
          d="M72 20 L38 90 L58 90 L46 180 L88 90 L66 90 L80 20 Z"
          fill="#f0e060"
          opacity="0.5"
        />
      </motion.svg>

      {/* Logo — fades in after bolt */}
      <motion.img
        src="/apxp-logo-light.png"
        alt="APXP"
        className="w-72 md:w-[460px] relative z-10"
        style={{ willChange: 'transform, opacity' }}
        initial={{ opacity: 0 }}
        animate={
          phase === 'logo' || phase === 'exit'
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Loading bar */}
      <div className="absolute bottom-20 w-44 md:w-56 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gold rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />
      </div>

      {/* Tagline */}
      <motion.p
        className="absolute bottom-12 font-display text-sm tracking-[0.4em] uppercase text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'logo' ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        Speed Development
      </motion.p>
    </motion.div>
  );
}
