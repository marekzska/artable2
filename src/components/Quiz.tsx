import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PeriodKey, QuizMode } from '../data/types';
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
  '“Every artist was first an amateur.” — Emerson',
  'The Louvre thanks you for your honesty.',
  'Monet would be disappointed. And he was nearly blind.',
  'The brushstrokes speak. You just have to listen.',
];

interface Props {
  period: PeriodKey;
  mode: QuizMode;
  onBack: () => void;
}

export function Quiz({ period, mode, onBack }: Props) {
  const quiz = useQuiz(period, mode);
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
    const isCorrect = option === quiz.correctAnswer;
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

  // The hint shown during answering: artist name in title-mode, artwork title in artist-mode
  const hint = mode === 'artist' ? quiz.artwork.title : quiz.artwork.author;
  const hintLabel = mode === 'artist' ? '' : '';

  return (
    <motion.div
      className="h-dvh flex flex-col bg-canvas overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 pt-4 pb-1">
        <LivesBar lives={quiz.lives} />
        <ProgressBar current={quiz.currentIndex + 1} total={quiz.total} />
      </div>

      {/* Hint line — always visible, tells user what they’re looking at */}
      <div className="flex-shrink-0 px-4 pt-1 pb-0.5 text-center min-h-[1.6rem]">
        <p className="font-inter text-text-muted text-xs truncate">
          {hintLabel}{hint ?? ' '}
        </p>
      </div>

      {/* Artwork */}
      <div className="flex-1 min-h-0 px-3 py-1">
        <ArtworkDisplay artwork={quiz.artwork} isPulsing={isIdle && quiz.phase === 'answering'} />
      </div>

      {/* Reveal block — shown during feedback */}
      <div className="flex-shrink-0 px-4 py-1" style={{ minHeight: '2.5rem' }}>
        <motion.div
          animate={{ opacity: quiz.phase === 'feedback' ? 1 : 0, y: quiz.phase === 'feedback' ? 0 : 4 }}
          transition={{ duration: 0.22 }}
          className="text-center"
        >
          {mode === 'title' ? (
            <>
              <p className="font-playfair text-gold text-sm leading-tight">{quiz.artwork.title}</p>
              <p className="font-inter text-text-muted text-[0.62rem] mt-0.5">
                {quiz.artwork.artmovement}{quiz.artwork.year ? ` · ${quiz.artwork.year}` : ''}
              </p>
            </>
          ) : (
            <>
              <p className="font-playfair text-gold text-sm leading-tight">{quiz.artwork.author}</p>
              <p className="font-inter text-text-muted text-[0.62rem] mt-0.5">
                {quiz.artwork.artmovement}{quiz.artwork.year ? ` · ${quiz.artwork.year}` : ''}
              </p>
            </>
          )}
        </motion.div>
      </div>

      {/* Answer grid */}
      <div className="flex-shrink-0 px-3 pb-1">
        <AnswerGrid
          options={quiz.options}
          correctAnswer={quiz.correctAnswer}
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

      <AnimatePresence>
        {showCurator && quiz.artwork.bio && (
          <CuratorOverlay key="curator" bio={quiz.artwork.bio} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <Toast key={toast} message={toast} onDismiss={() => setToast(null)} duration={3500} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
