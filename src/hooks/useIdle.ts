import { useEffect, useRef } from 'react';

export function useIdle(delayMs: number, onIdle: () => void, onActive: () => void) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const isIdleRef = useRef(false);
  const onIdleRef = useRef(onIdle);
  const onActiveRef = useRef(onActive);
  onIdleRef.current = onIdle;
  onActiveRef.current = onActive;

  useEffect(() => {
    const startTimer = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        isIdleRef.current = true;
        onIdleRef.current();
      }, delayMs);
    };

    const handleActivity = () => {
      if (isIdleRef.current) {
        isIdleRef.current = false;
        onActiveRef.current();
      }
      startTimer();
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'touchmove'];
    events.forEach(e => window.addEventListener(e, handleActivity, { passive: true }));
    startTimer();

    return () => {
      clearTimeout(timerRef.current);
      events.forEach(e => window.removeEventListener(e, handleActivity));
    };
  }, [delayMs]);
}
