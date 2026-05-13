import { useState, useCallback, useEffect } from 'react';
import { Artwork, PeriodKey, QuizPhase } from '../data/types';
import { getArtworksForPeriod } from '../data/artworks';
import { shuffle } from '../utils/shuffle';

const FEEDBACK_MS = 1500;
const LS_LIVES = 'artable_lives';
const LS_QUESTION = 'artable_question';
const LS_OPTIONS = 'artable_options';
const LS_PERIOD = 'artable_period';

function generateOptions(artworks: Artwork[], currentIndex: number): string[] {
  const correct = artworks[currentIndex].title;
  const pool = artworks.filter((_, i) => i !== currentIndex).map(a => a.title);
  const wrong = shuffle(pool).slice(0, 3);
  return shuffle([correct, ...wrong]);
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

export function useQuiz(period: PeriodKey) {
  const artworks = getArtworksForPeriod(period);

  const [state, setState] = useState<State>(() => {
    const savedPeriod = localStorage.getItem(LS_PERIOD);
    const isSamePeriod = savedPeriod === period;

    const lives = isSamePeriod
      ? Math.max(1, Math.min(3, parseInt(localStorage.getItem(LS_LIVES) ?? '3', 10)))
      : 3;
    const savedIndex = isSamePeriod
      ? parseInt(localStorage.getItem(LS_QUESTION) ?? '0', 10)
      : 0;
    const currentIndex = Math.min(Math.max(0, savedIndex), artworks.length - 1);
    const savedOptions = isSamePeriod
      ? (() => {
          try {
            return JSON.parse(localStorage.getItem(LS_OPTIONS) ?? 'null') as string[] | null;
          } catch {
            return null;
          }
        })()
      : null;
    const options = savedOptions ?? generateOptions(artworks, currentIndex);

    return { artworks, currentIndex, lives, options, phase: 'answering', selectedOption: null, correctCount: 0 };
  });

  useEffect(() => {
    localStorage.setItem(LS_PERIOD, period);
    localStorage.setItem(LS_LIVES, String(state.lives));
    localStorage.setItem(LS_QUESTION, String(state.currentIndex));
    localStorage.setItem(LS_OPTIONS, JSON.stringify(state.options));
  }, [period, state.lives, state.currentIndex, state.options]);

  const answer = useCallback((option: string) => {
    setState(prev => {
      if (prev.phase !== 'answering') return prev;
      return { ...prev, phase: 'feedback', selectedOption: option };
    });

    setTimeout(() => {
      setState(prev => {
        if (prev.phase !== 'feedback') return prev;
        const isCorrect = prev.selectedOption === prev.artworks[prev.currentIndex].title;
        const newLives = isCorrect ? prev.lives : prev.lives - 1;
        const nextIndex = prev.currentIndex + 1;
        const isLast = nextIndex >= prev.artworks.length;

        if (!isCorrect && newLives <= 0) {
          return { ...prev, phase: 'gameover', lives: 0 };
        }
        if (isLast) {
          return {
            ...prev,
            phase: 'victory',
            lives: newLives,
            correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
          };
        }

        const newOptions = generateOptions(prev.artworks, nextIndex);
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
  }, []);

  const reset = useCallback(() => {
    const newOptions = generateOptions(artworks, 0);
    localStorage.setItem(LS_LIVES, '3');
    localStorage.setItem(LS_QUESTION, '0');
    localStorage.setItem(LS_OPTIONS, JSON.stringify(newOptions));
    setState({
      artworks,
      currentIndex: 0,
      lives: 3,
      options: newOptions,
      phase: 'answering',
      selectedOption: null,
      correctCount: 0,
    });
  }, [artworks]);

  return {
    artwork: state.artworks[state.currentIndex],
    currentIndex: state.currentIndex,
    total: state.artworks.length,
    lives: state.lives,
    options: state.options,
    phase: state.phase,
    selectedOption: state.selectedOption,
    correctCount: state.correctCount,
    answer,
    reset,
  };
}
