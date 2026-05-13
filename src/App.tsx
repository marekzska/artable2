import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppView, PeriodKey, QuizMode } from './data/types';
import { IntroScreen } from './components/IntroScreen';
import { PeriodMenu } from './components/PeriodMenu';
import { ModeSelect } from './components/ModeSelect';
import { Quiz } from './components/Quiz';
import { LearningMode } from './components/LearningMode';
import { periods } from './data/periods';

export default function App() {
  const [view, setView] = useState<AppView>(() =>
    sessionStorage.getItem('artable_intro') ? 'menu' : 'intro'
  );
  const [period, setPeriod] = useState<PeriodKey>('modern');
  const [mode, setMode] = useState<QuizMode>('title');

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('artable_intro', '1');
    setView('menu');
  }, []);

  const handleSelectPeriod = useCallback((p: PeriodKey) => {
    setPeriod(p);
    setView('mode-select');
  }, []);

  const handleSelectMode = useCallback((m: QuizMode) => {
    setMode(m);
    setView(m === 'learning' ? 'learning' : 'quiz');
  }, []);

  const handleBackToMenu = useCallback(() => setView('menu'), []);
  const handleBackToModeSelect = useCallback(() => setView('mode-select'), []);

  const selectedPeriod = periods.find(p => p.key === period)
    ?? { key: period, label: 'All Periods', era: 'The full journey' };

  return (
    <div className="h-dvh overflow-hidden bg-canvas">
      <AnimatePresence mode="wait">
        {view === 'intro' && (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
        )}
        {view === 'menu' && (
          <PeriodMenu key="menu" onSelectPeriod={handleSelectPeriod} />
        )}
        {view === 'mode-select' && (
          <ModeSelect key="mode-select" period={selectedPeriod} onSelectMode={handleSelectMode} onBack={handleBackToMenu} />
        )}
        {view === 'quiz' && (
          <Quiz key={`quiz-${period}-${mode}`} period={period} mode={mode} onBack={handleBackToModeSelect} />
        )}
        {view === 'learning' && (
          <LearningMode key={`learn-${period}`} period={period} onBack={handleBackToModeSelect} />
        )}
      </AnimatePresence>
    </div>
  );
}
