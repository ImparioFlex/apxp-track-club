import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);
  return isDesktop;
}

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'bolt' | 'logo' | 'exit'>('bolt');
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 900);
    const t2 = setTimeout(() => setPhase('exit'), 2400);
    const t3 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  // Desktop: zoom bolt in from large, then zoom logo in
  // Mobile: simple fade + slide (no scale = no jank)
  const boltAnimation = isDesktop
    ? {
        initial: { scale: 4, opacity: 0, rotate: -10 },
        bolt: { scale: 1, opacity: 1, rotate: 0 },
        out: { scale: 0.3, opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        bolt: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -30 },
      };

  const logoAnimation = isDesktop
    ? {
        initial: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0.5, opacity: 0 },
      }
    : {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-purple-deep flex flex-col items-center justify-center overflow-hidden"
      style={{ pointerEvents: phase === 'exit' ? 'none' : 'all' }}
    >
      {/* Background glow — desktop only */}
      {isDesktop && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      )}

      {/* Lightning bolt */}
      <motion.svg
        viewBox="0 0 120 200"
        className="w-16 md:w-28 absolute"
        style={isDesktop ? { willChange: 'transform, opacity' } : { willChange: 'opacity' }}
        initial={boltAnimation.initial}
        animate={phase === 'bolt' ? boltAnimation.bolt : boltAnimation.out}
        transition={{
          duration: phase === 'bolt' ? 0.7 : 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <path
          d="M75 5 L30 95 L55 95 L40 195 L95 85 L65 85 L85 5 Z"
          fill="none"
          stroke="#E8D44D"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M75 5 L30 95 L55 95 L40 195 L95 85 L65 85 L85 5 Z"
          fill="#E8D44D"
          opacity="0.9"
        />
        <path
          d="M72 20 L38 90 L58 90 L46 180 L88 90 L66 90 L80 20 Z"
          fill="#f0e060"
          opacity="0.5"
        />
      </motion.svg>

      {/* Logo */}
      <motion.img
        src="/apxp-logo-light.png"
        alt="APXP"
        className="w-72 md:w-[460px] relative z-10"
        style={isDesktop ? { willChange: 'transform, opacity' } : { willChange: 'opacity' }}
        initial={logoAnimation.initial}
        animate={
          phase === 'logo' || phase === 'exit'
            ? logoAnimation.visible
            : logoAnimation.hidden
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
