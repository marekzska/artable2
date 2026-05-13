import { motion } from 'framer-motion';

type ButtonState = 'default' | 'correct' | 'wrong' | 'reveal';

interface Props {
  label: string;
  state: ButtonState;
  disabled: boolean;
  onClick: () => void;
}

export function AnswerButton({ label, state, disabled, onClick }: Props) {
  const base = 'w-full rounded-xl px-3 py-3 text-left font-inter font-medium transition-colors duration-200 min-h-[3rem]';

  const styles: Record<ButtonState, string> = {
    default: 'glass text-text-primary text-xs',
    correct: 'bg-correct/20 border border-correct/60 text-white text-xs',
    wrong:   'bg-wrong/20   border border-wrong/60   text-white text-xs',
    reveal:  'bg-correct/10 border border-correct/35 text-white/80 text-xs',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[state]} ${disabled && state === 'default' ? 'opacity-40 cursor-not-allowed' : ''}`}
      animate={
        state === 'correct'
          ? { scale: [1, 1.025, 1] }
          : state === 'wrong'
          ? { x: [0, -5, 5, -3, 3, 0] }
          : {}
      }
      transition={{ duration: 0.3 }}
      whileTap={state === 'default' && !disabled ? { scale: 0.97 } : {}}
    >
      <span className="line-clamp-2 leading-snug">{label}</span>
    </motion.button>
  );
}
