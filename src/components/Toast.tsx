import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  message: string;
  onDismiss: () => void;
  duration?: number;
}

export function Toast({ message, onDismiss, duration = 4000 }: Props) {
  useEffect(() => {
    const t = setTimeout(onDismiss, duration);
    return () => clearTimeout(t);
  }, [onDismiss, duration]);

  return (
    <motion.div
      className="fixed top-4 left-4 right-4 z-50 glass rounded-xl px-4 py-3 cursor-pointer shadow-2xl"
      onClick={onDismiss}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <p className="font-inter text-text-primary text-xs leading-relaxed">{message}</p>
    </motion.div>
  );
}
