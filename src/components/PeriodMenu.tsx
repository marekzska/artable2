import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PeriodKey } from '../data/types';
import { periods } from '../data/periods';
import { PeriodCard } from './PeriodCard';
import { Toast } from './Toast';
import { artFacts } from '../data/artFacts';
import { useKonami } from '../hooks/useKonami';

const LS_COMPLETED = 'artable_completed';

interface Props {
  onSelectPeriod: (period: PeriodKey) => void;
}

export function PeriodMenu({ onSelectPeriod }: Props) {
  const [toast, setToast] = useState<string | null>(null);
  const [curatorActive, setCuratorActive] = useState(
    () => localStorage.getItem('artable_curator') === '1'
  );
  const titleTapsRef = useRef(0);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const completedPeriods = JSON.parse(localStorage.getItem(LS_COMPLETED) ?? '[]') as string[];
  const allBaseCompleted = periods.every(p => completedPeriods.includes(p.key));

  useEffect(() => {
    localStorage.setItem('artable_lives', '3');
    localStorage.setItem('artable_question', '0');
  }, []);

  const handleKonami = useCallback(() => {
    localStorage.setItem('artable_curator', '1');
    setCuratorActive(true);
    setToast('\u{1F3A8} Curator Mode unlocked — you\'ll see artist insights after each answer!');
  }, []);

  useKonami(handleKonami);

  const handleTitleTap = () => {
    clearTimeout(tapTimerRef.current);
    titleTapsRef.current += 1;
    if (titleTapsRef.current >= 5) {
      titleTapsRef.current = 0;
      const fact = artFacts[Math.floor(Math.random() * artFacts.length)];
      setToast(fact);
    } else {
      tapTimerRef.current = setTimeout(() => {
        titleTapsRef.current = 0;
      }, 1500);
    }
  };

  return (
    <motion.div
      className="h-dvh flex flex-col bg-canvas overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-center pt-5 pb-2 px-4 relative">
        <button
          onClick={handleTitleTap}
          className="font-dancing text-4xl text-gold select-none leading-none"
          aria-label="Artable - tap 5 times for a surprise"
        >
          Artable
        </button>
        {curatorActive && (
          <span className="absolute right-4 font-inter text-[0.5rem] text-gold/40 uppercase tracking-widest">
            curator
          </span>
        )}
      </header>

      {/* Period grid: 7 regular + 1 all = 8 items in 4×2 */}
      <main className="flex-1 min-h-0 grid grid-cols-2 grid-rows-4 gap-2 p-3">
        {periods.map((period, i) => (
          <PeriodCard
            key={period.key}
            period={period}
            index={i}
            completed={completedPeriods.includes(period.key)}
            onClick={() => onSelectPeriod(period.key)}
          />
        ))}
        <PeriodCard
          key="all_periods"
          period={{ key: 'all_periods', label: 'All Periods', era: 'The full journey' }}
          index={7}
          completed={false}
          isAll
          onClick={() => onSelectPeriod('all_periods')}
        />
      </main>

      {/* Secret 9th card — appears when all 7 base periods are completed */}
      <AnimatePresence>
        {allBaseCompleted && (
          <motion.div
            className="flex-shrink-0 px-3 pb-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <button
              onClick={() => {
                setToast('✨ You found the hidden collection. Grand Masters only.');
                setTimeout(() => onSelectPeriod('all_periods'), 1600);
              }}
              className="w-full rounded-xl py-2 border border-gold/15 bg-gold/5 flex items-center justify-center gap-2"
            >
              <span className="font-inter text-gold/50 text-[0.6rem] tracking-[0.2em] uppercase">
                Hidden Gems
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="flex-shrink-0 pb-3 text-center">
        <p className="font-inter text-text-muted/20 text-[0.55rem] tracking-widest uppercase">
          by @marekzska
        </p>
      </footer>

      <AnimatePresence>
        {toast && <Toast key={toast} message={toast} onDismiss={() => setToast(null)} />}
      </AnimatePresence>
    </motion.div>
  );
}
