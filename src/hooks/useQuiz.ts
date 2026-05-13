import { useState, useCallback, useEffect } from 'react';
import { Artwork, PeriodKey, QuizMode, QuizPhase } from '../data/types';
import { getArtworksForPeriod } from '../data/artworks';
import { shuffle } from '../utils/shuffle';

const FEEDBACK_MS = 1500;
const LS_LIVES = 'artable_lives';
const LS_QUESTION = 'artable_question';
const LS_OPTIONS = 'artable_options';
const LS_PERIOD = 'artable_period';
const LS_MODE = 'artable_mode';

function generateOptions(artworks: Artwork[], currentIndex: number, mode: QuizMode): string[] {
  if (mode === 'artist') {
    const correct = artworks[currentIndex].author;
    const pool = [...new Set(
      artworks.filter((_, i) => i !== currentIndex).map(a => a.author)
    )];
    const wrong = shuffle(pool).slice(0, 3);
    // Pad with generic names if not enough unique authors
    while (wrong.length < 3) wrong.push(`Unknown ${wrong.length + 1}`);
    return shuffle([correct, ...wrong]);
  }
  const correct = artworks[currentIndex].title;
  const pool = artworks.filter((_, i) => i !== currentIndex).map(a => a.title);
  return shuffle([correct, ...shuffle(pool).slice(0, 3)]);
}

interface State {
  artworks: Artwork[];
  currentIndex: number;
  lives: number;
  options: string[];
  phase: QuizPhase;
  selectedOption: string | null;
  correctCount: number;
}

export function useQuiz(period: PeriodKey, mode: QuizMode) {
  const artworks = getArtworksForPeriod(period);

  const [state, setState] = useState<State>(() => {
    const savedPeriod = localStorage.getItem(LS_PERIOD);
    const savedMode = localStorage.getItem(LS_MODE);
    const isSame = savedPeriod === period && savedMode === mode;

    const lives = isSame
      ? Math.max(1, Math.min(3, parseInt(localStorage.getItem(LS_LIVES) ?? '3', 10)))
      : 3;
    const savedIndex = isSame ? parseInt(localStorage.getItem(LS_QUESTION) ?? '0', 10) : 0;
    const currentIndex = Math.min(Math.max(0, savedIndex), artworks.length - 1);
    const savedOptions = isSame
      ? (() => { try { return JSON.parse(localStorage.getItem(LS_OPTIONS) ?? 'null') as string[] | null; } catch { return null; } })()
      : null;
    const options = savedOptions ?? generateOptions(artworks, currentIndex, mode);

    return { artworks, currentIndex, lives, options, phase: 'answering', selectedOption: null, correctCount: 0 };
  });

  useEffect(() => {
    localStorage.setItem(LS_PERIOD, period);
    localStorage.setItem(LS_MODE, mode);
    localStorage.setItem(LS_LIVES, String(state.lives));
    localStorage.setItem(LS_QUESTION, String(state.currentIndex));
    localStorage.setItem(LS_OPTIONS, JSON.stringify(state.options));
  }, [period, mode, state.lives, state.currentIndex, state.options]);

  const answer = useCallback((option: string) => {
    setState(prev => {
      if (prev.phase !== 'answering') return prev;
      return { ...prev, phase: 'feedback', selectedOption: option };
    });

    setTimeout(() => {
      setState(prev => {
        if (prev.phase !== 'feedback') return prev;
        const correct = mode === 'artist'
          ? prev.artworks[prev.currentIndex].author
          : prev.artworks[prev.currentIndex].title;
        const isCorrect = prev.selectedOption === correct;
        const newLives = isCorrect ? prev.lives : prev.lives - 1;
        const nextIndex = prev.currentIndex + 1;
        const isLast = nextIndex >= prev.artworks.length;

        if (!isCorrect && newLives <= 0) return { ...prev, phase: 'gameover', lives: 0 };
        if (isLast) {
          return { ...prev, phase: 'victory', lives: newLives, correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount };
        }

        const newOptions = generateOptions(prev.artworks, nextIndex, mode);
        return {
          ...prev,
          phase: 'answering',
          selectedOption: null,
          currentIndex: nextIndex,
          lives: newLives,
          options: newOptions,
          correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
        };
      });
    }, FEEDBACK_MS);
  }, [mode]);

  const reset = useCallback(() => {
    const newOptions = generateOptions(artworks, 0, mode);
    localStorage.setItem(LS_LIVES, '3');
    localStorage.setItem(LS_QUESTION, '0');
    localStorage.setItem(LS_OPTIONS, JSON.stringify(newOptions));
    setState({ artworks, currentIndex: 0, lives: 3, options: newOptions, phase: 'answering', selectedOption: null, correctCount: 0 });
  }, [artworks, mode]);

  const correctAnswer = mode === 'artist'
    ? state.artworks[state.currentIndex]?.author
    : state.artworks[state.currentIndex]?.title;

  return {
    artwork: state.artworks[state.currentIndex],
    currentIndex: state.currentIndex,
    total: state.artworks.length,
    lives: state.lives,
    options: state.options,
    phase: state.phase,
    selectedOption: state.selectedOption,
    correctCount: state.correctCount,
    correctAnswer,
    answer,
    reset,
  };
}
