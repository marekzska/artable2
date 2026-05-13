import { useEffect, useRef } from 'react';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useKonami(onActivate: () => void) {
  const posRef = useRef(0);
  const callbackRef = useRef(onActivate);
  callbackRef.current = onActivate;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[posRef.current]) {
        posRef.current += 1;
        if (posRef.current === KONAMI.length) {
          callbackRef.current();
          posRef.current = 0;
        }
      } else {
        posRef.current = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
}
