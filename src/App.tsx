import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppView, PeriodKey } from './data/types';
import { IntroScreen } from './components/IntroScreen';
import { PeriodMenu } from './components/PeriodMenu';
import { Quiz } from './components/Quiz';

export default function App() {
  const [view, setView] = useState<AppView>(() =>
    sessionStorage.getItem('artable_intro') ? 'menu' : 'intro'
  );
  const [period, setPeriod] = useState<PeriodKey>('modern');

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('artable_intro', '1');
    setView('menu');
  }, []);

  const handleSelectPeriod = useCallback((p: PeriodKey) => {
    setPeriod(p);
    setView('quiz');
  }, []);

  const handleBackToMenu = useCallback(() => {
    setView('menu');
  }, []);

  return (
    <div className="h-dvh overflow-hidden bg-canvas">
      <AnimatePresence mode="wait">
        {view === 'intro' && (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
        )}
        {view === 'menu' && (
          <PeriodMenu key="menu" onSelectPeriod={handleSelectPeriod} />
        )}
        {view === 'quiz' && (
          <Quiz key={`quiz-${period}`} period={period} onBack={handleBackToMenu} />
        )}
      </AnimatePresence>
    </div>
  );
}
