import { motion } from 'framer-motion';
import { Period } from '../data/types';

interface Props {
  period: Period;
  index: number;
  completed?: boolean;
  isAll?: boolean;
  onClick: () => void;
}

export function PeriodCard({ period, index, completed = false, isAll = false, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex items-center justify-between px-4 py-3.5 rounded-xl text-left
        glass transition-all duration-200
        ${isAll ? 'border-gold/25 bg-gold/[0.04]' : 'active:border-gold/20 active:bg-gold/[0.06]'}
      `}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.28, delay: index * 0.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <div>
        <p className={`font-playfair text-base leading-snug ${isAll ? 'text-gold' : 'text-text-primary'}`}>
          {period.label}
        </p>
        <p className={`font-inter text-[0.62rem] mt-0.5 tracking-wide ${isAll ? 'text-gold/50' : 'text-text-muted'}`}>
          {period.era}
        </p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {completed && (
          <span className="font-inter text-gold/60 text-xs">✓</span>
        )}
        <span className={`text-sm ${isAll ? 'text-gold/40' : 'text-text-muted/40'}`}>›</span>
      </div>
    </motion.button>
  );
}
