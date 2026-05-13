import { useMemo } from 'react';
import { motion } from 'framer-motion';

const QUOTES = [
  'Even the great masters had their struggles.',
  'Art is a journey, not a destination.',
  '"I have not failed. I\'ve found 10,000 ways that won\'t work." — Edison',
  'The Louvre will still be there tomorrow.',
  'Van Gogh was rejected too. You\'re in good company.',
  'Beauty is in the eye of the beholder. The answer is not.',
];

interface Props {
  correctCount: number;
  total: number;
  onRetry: () => void;
  onBack: () => void;
}

export function GameOver({ correctCount, total, onRetry, onBack }: Props) {
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], []);

  return (
    <motion.div
      className="h-dvh flex flex-col items-center justify-center bg-canvas px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="text-5xl mb-6 select-none"
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.5, delay: 0.1 }}
      >
        🖼️
      </motion.div>

      <motion.div
        className="flex gap-1.5 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} className="text-lg" style={{ color: 'rgba(255,255,255,0.1)' }}>♥</span>
        ))}
      </motion.div>

      <motion.h2
        className="font-playfair text-text-primary text-2xl mb-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Out of lives
      </motion.h2>

      <motion.p
        className="font-inter text-gold text-sm mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {correctCount} of {total} identified
      </motion.p>

      <motion.p
        className="font-playfair italic text-text-muted text-sm mt-5 mb-10 max-w-xs leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        {quote}
      </motion.p>

      <motion.div
        className="flex flex-col gap-3 w-full max-w-xs"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <button
          onClick={onRetry}
          className="glass rounded-xl py-3.5 font-inter text-text-primary text-sm hover:border-white/20 transition-colors"
        >
          Try again
        </button>
        <button
          onClick={onBack}
          className="font-inter text-text-muted text-sm py-2"
        >
          Choose period
        </button>
      </motion.div>
    </motion.div>
  );
}
