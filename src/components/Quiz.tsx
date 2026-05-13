import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PeriodKey } from '../data/types';
import { useQuiz } from '../hooks/useQuiz';
import { useIdle } from '../hooks/useIdle';
import { LivesBar } from './LivesBar';
import { ProgressBar } from './ProgressBar';
import { ArtworkDisplay } from './ArtworkDisplay';
import { AnswerGrid } from './AnswerGrid';
import { GameOver } from './GameOver';
import { Victory } from './Victory';
import { Toast } from './Toast';
import { CuratorOverlay } from './CuratorOverlay';

const WRONG_QUOTES = [
  'Even Picasso had off days…',
  'Art is subjective. Your answer was not.',
  '"Every artist was first an amateur." — Emerson',
  'The Louvre thanks you for your honesty.',
  'Monet would be disappointed. And he was nearly blind.',
  'The brushstrokes speak. You just have to listen.',
];

interface Props {
  period: PeriodKey;
  onBack: () => void;
}

export function Quiz({ period, onBack }: Props) {
  const quiz = useQuiz(period);
  const [isIdle, setIsIdle] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showCurator, setShowCurator] = useState(false);
  const curatorMode = localStorage.getItem('artable_curator') === '1';

  useIdle(
    30000,
    useCallback(() => setIsIdle(true), []),
    useCallback(() => setIsIdle(false), []),
  );

  useEffect(() => {
    if (quiz.phase === 'answering') setShowCurator(false);
  }, [quiz.phase]);

  useEffect(() => {
    if (quiz.phase === 'victory' && period !== 'all_periods') {
      const completed = JSON.parse(localStorage.getItem('artable_completed') ?? '[]') as string[];
      if (!completed.includes(period)) {
        localStorage.setItem('artable_completed', JSON.stringify([...completed, period]));
      }
    }
  }, [quiz.phase, period]);

  const handleAnswer = useCallback((option: string) => {
    const isCorrect = option === quiz.artwork.title;

    if (!isCorrect && quiz.currentIndex === 0 && quiz.correctCount === 0) {
      const quote = WRONG_QUOTES[Math.floor(Math.random() * WRONG_QUOTES.length)];
      setTimeout(() => setToast(quote), 300);
    }

    if (curatorMode && quiz.artwork.bio) {
      setTimeout(() => setShowCurator(true), 200);
    }

    quiz.answer(option);
  }, [quiz, curatorMode]);

  if (quiz.phase === 'gameover') {
    return <GameOver correctCount={quiz.correctCount} total={quiz.total} onRetry={quiz.reset} onBack={onBack} />;
  }
  if (quiz.phase === 'victory') {
    return <Victory correctCount={quiz.correctCount} total={quiz.total} onBack={onBack} onRetry={quiz.reset} />;
  }

  return (
    <motion.div
      className="h-dvh flex flex-col bg-canvas overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 pt-safe pt-4 pb-1">
        <LivesBar lives={quiz.lives} />
        <ProgressBar current={quiz.currentIndex + 1} total={quiz.total} />
      </div>

      {/* Artwork image — fills available space */}
      <div className="flex-1 min-h-0 px-3 py-1">
        <ArtworkDisplay artwork={quiz.artwork} isPulsing={isIdle && quiz.phase === 'answering'} />
      </div>

      {/* Artist info — revealed during feedback */}
      <div className="flex-shrink-0 px-4 py-1" style={{ minHeight: '2.75rem' }}>
        <motion.div
          animate={{ opacity: quiz.phase === 'feedback' ? 1 : 0, y: quiz.phase === 'feedback' ? 0 : 4 }}
          transition={{ duration: 0.25 }}
          className="text-center"
        >
          <p className="font-playfair text-gold text-sm leading-tight">
            {quiz.artwork.author}
          </p>
          <p className="font-inter text-text-muted text-[0.65rem] mt-0.5">
            {quiz.artwork.artmovement}
            {quiz.artwork.year ? ` · ${quiz.artwork.year}` : ''}
          </p>
        </motion.div>
      </div>

      {/* Answer grid */}
      <div className="flex-shrink-0 px-3 pb-1">
        <AnswerGrid
          options={quiz.options}
          correctAnswer={quiz.artwork.title}
          selectedOption={quiz.selectedOption}
          phase={quiz.phase}
          onAnswer={handleAnswer}
        />
      </div>

      {/* Copyright */}
      <div className="flex-shrink-0 pb-3 px-4 text-center">
        <p className="font-inter text-text-muted/25 text-[0.52rem] tracking-wide truncate">
          {quiz.artwork.copyright ?? 'Public domain'}
        </p>
      </div>

      {/* Curator overlay (easter egg) */}
      <AnimatePresence>
        {showCurator && quiz.artwork.bio && (
          <CuratorOverlay key="curator" bio={quiz.artwork.bio} />
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast key={toast} message={toast} onDismiss={() => setToast(null)} duration={3500} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
