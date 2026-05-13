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
        relative flex flex-col justify-end p-3 rounded-xl text-left overflow-hidden
        glass transition-all duration-200
        ${isAll
          ? 'border-gold/25 bg-gold/[0.04] active:bg-gold/10'
          : 'active:border-white/20 active:bg-white/[0.08]'
        }
      `}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.97 }}
    >
      {completed && (
        <motion.span
          className="absolute top-2 right-2 text-gold/60 text-[0.65rem] font-inter"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ✓
        </motion.span>
      )}

      <p
        className={`font-playfair text-sm leading-snug ${
          isAll ? 'text-gold' : 'text-text-primary'
        }`}
      >
        {period.label}
      </p>
      <p
        className={`font-inter text-[0.58rem] mt-0.5 tracking-wide leading-none ${
          isAll ? 'text-gold/50' : 'text-text-muted'
        }`}
      >
        {period.era}
      </p>
    </motion.button>
  );
}
