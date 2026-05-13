import { motion } from 'framer-motion';

interface Props {
  lives: number;
}

export function LivesBar({ lives }: Props) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${lives} lives remaining`}>
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="text-base leading-none select-none"
          style={{ color: i < lives ? '#ef4444' : 'rgba(255,255,255,0.1)' }}
          animate={i === lives ? { scale: [1.4, 1], opacity: [0, 1] } : {}}
          transition={{ duration: 0.25 }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
