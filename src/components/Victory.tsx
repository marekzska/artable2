import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function Confetti({ count }: { count: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: ['#c9a96e', '#f0ede8', '#3d8b5e', '#b34040', '#c9a96e'][i % 5],
        delay: Math.random() * 0.8,
        duration: 1.5 + Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 120,
        rotate: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map(p => (
        <motion.div
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-sm"
          style={{ left: `${p.left}%`, top: '-8px', background: p.color }}
          initial={{ y: 0, opacity: 1, rotate: 0, x: 0 }}
          animate={{ y: '110vh', opacity: [1, 1, 0], rotate: p.rotate, x: p.drift }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  );
}

interface Props {
  correctCount: number;
  total: number;
  onBack: () => void;
  onRetry: () => void;
}

export function Victory({ correctCount, total, onBack, onRetry }: Props) {
  const isPerfect = correctCount === total;
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className={`h-dvh flex flex-col items-center justify-center px-8 text-center relative overflow-hidden ${
        isPerfect ? 'bg-[#0d0b06]' : 'bg-canvas'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {showConfetti && <Confetti count={isPerfect ? 30 : 18} />}

      <motion.div
        className="text-5xl mb-6 select-none"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.6, delay: 0.1 }}
      >
        {isPerfect ? '🏆' : '🎨'}
      </motion.div>

      <motion.h2
        className={`font-playfair text-2xl mb-2 ${
          isPerfect ? 'text-gold' : 'text-text-primary'
        }`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {isPerfect ? 'Grand Master' : 'Well done'}
      </motion.h2>

      <motion.p
        className="font-inter text-gold text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.38 }}
      >
        {correctCount} of {total} identified correctly
      </motion.p>

      {isPerfect && (
        <motion.p
          className="font-playfair italic text-gold/60 text-sm mt-4 max-w-xs leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          A flawless eye. The curators are genuinely impressed.
        </motion.p>
      )}

      <motion.div
        className="flex flex-col gap-3 w-full max-w-xs mt-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <button
          onClick={onRetry}
          className="glass rounded-xl py-3.5 font-inter text-text-primary text-sm hover:border-white/20 transition-colors"
        >
          Play again
        </button>
        <button
          onClick={onBack}
          className="font-inter text-text-muted text-sm py-2"
        >
          Choose another period
        </button>
      </motion.div>
    </motion.div>
  );
}
