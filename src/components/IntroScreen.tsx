import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: Props) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2800);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="h-dvh flex flex-col items-center justify-center bg-canvas cursor-pointer select-none"
      onClick={onComplete}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <motion.h1
        className="font-dancing text-[5.5rem] leading-none text-gold"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Artable
      </motion.h1>

      <motion.p
        className="font-inter text-text-muted text-[0.7rem] tracking-[0.3em] uppercase mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        by @marekzska
      </motion.p>

      <motion.p
        className="font-inter text-text-muted/40 text-[0.6rem] tracking-[0.25em] uppercase mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        An art quiz
      </motion.p>

      <motion.p
        className="absolute bottom-8 font-inter text-text-muted/20 text-[0.55rem] tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        tap anywhere to continue
      </motion.p>
    </motion.div>
  );
}
