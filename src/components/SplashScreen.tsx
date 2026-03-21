import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'bolt' | 'logo' | 'exit'>('bolt');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? null : null}
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'exit' ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[200] bg-purple-deep flex flex-col items-center justify-center overflow-hidden"
        style={{ pointerEvents: phase === 'exit' ? 'none' : 'all' }}
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

        {/* Lightning bolt */}
        <motion.svg
          viewBox="0 0 120 200"
          className="w-20 md:w-28 absolute"
          initial={{ scale: 3, opacity: 0, rotate: -15 }}
          animate={
            phase === 'bolt'
              ? { scale: 1, opacity: 1, rotate: 0 }
              : { scale: 0.5, opacity: 0, y: -40 }
          }
          transition={
            phase === 'bolt'
              ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.4, ease: 'easeIn' }
          }
        >
          {/* Bolt outline - purple */}
          <path
            d="M75 5 L30 95 L55 95 L40 195 L95 85 L65 85 L85 5 Z"
            fill="none"
            stroke="#2D1B69"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {/* Bolt fill - gold */}
          <path
            d="M75 5 L30 95 L55 95 L40 195 L95 85 L65 85 L85 5 Z"
            fill="#E8D44D"
            opacity="0.9"
          />
          {/* Inner highlight */}
          <path
            d="M72 20 L38 90 L58 90 L46 180 L88 90 L66 90 L80 20 Z"
            fill="#f0e060"
            opacity="0.6"
          />
        </motion.svg>

        {/* Logo image */}
        <motion.img
          src="/apxp-logo-light.png"
          alt="APXP"
          className="w-80 md:w-[500px] relative z-10"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            phase === 'logo' || phase === 'exit'
              ? { scale: 1, opacity: 1 }
              : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Loading bar */}
        <motion.div
          className="absolute bottom-20 w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gold rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="absolute bottom-12 font-display text-sm tracking-[0.4em] uppercase text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'logo' ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Speed Development
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
