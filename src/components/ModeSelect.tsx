import { motion } from 'framer-motion';
import { Period, QuizMode } from '../data/types';

interface Props {
  period: Period;
  onSelectMode: (mode: QuizMode) => void;
  onBack: () => void;
}

const modes: { mode: QuizMode; icon: string; label: string; description: string }[] = [
  {
    mode: 'title',
    icon: '\u{1F5BC}️',
    label: 'Guess the Artwork',
    description: 'See the painting, name the title',
  },
  {
    mode: 'artist',
    icon: '\u{1F58C}️',
    label: 'Guess the Artist',
    description: 'See the work, name the painter',
  },
  {
    mode: 'learning',
    icon: '\u{1F4D6}',
    label: 'Learning Mode',
    description: 'Browse and discover at your own pace',
  },
];

export function ModeSelect({ period, onSelectMode, onBack }: Props) {
  return (
    <motion.div
      className="h-dvh flex flex-col bg-canvas overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
    >
      {/* Header */}
      <header className="flex-shrink-0 px-4 pt-5 pb-4">
        <button
          onClick={onBack}
          className="font-inter text-text-muted text-xs flex items-center gap-1.5 mb-4"
        >
          <span className="text-sm">‹</span> Periods
        </button>
        <h2 className="font-playfair text-text-primary text-xl leading-tight">{period.label}</h2>
        <p className="font-inter text-text-muted text-xs mt-0.5">{period.era}</p>
      </header>

      {/* Mode cards */}
      <main className="flex-1 min-h-0 flex flex-col justify-center px-4 gap-3">
        {modes.map(({ mode, icon, label, description }, i) => (
          <motion.button
            key={mode}
            onClick={() => onSelectMode(mode)}
            className="glass rounded-xl px-5 py-4 text-left flex items-center gap-4 active:bg-gold/[0.08] transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.07 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl select-none flex-shrink-0">{icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-playfair text-text-primary text-base leading-tight">{label}</p>
              <p className="font-inter text-text-muted text-xs mt-0.5 leading-snug">{description}</p>
            </div>
            <span className="text-text-muted/30 text-sm flex-shrink-0">›</span>
          </motion.button>
        ))}
      </main>

      <footer className="flex-shrink-0 pb-5" />
    </motion.div>
  );
}
