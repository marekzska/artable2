import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Artwork } from '../data/types';

interface Props {
  artwork: Artwork;
  isPulsing?: boolean;
}

export function ArtworkDisplay({ artwork, isPulsing = false }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [artwork.link]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Loading spinner */}
      <AnimatePresence>
        {!loaded && !error && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 rounded-full border-2 border-gold/15 border-t-gold/50 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={artwork.title}
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: isPulsing ? [1, 1.018, 1] : 1,
          }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.2 } }}
          transition={
            isPulsing
              ? { scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.3 } }
              : { duration: 0.35, ease: 'easeOut' }
          }
        >
          <img
            src={artwork.link}
            alt={artwork.title}
            className="max-w-full max-h-full object-contain rounded-md"
            style={{ maxHeight: '100%', maxWidth: '100%', display: 'block' }}
            onLoad={() => setLoaded(true)}
            onError={() => { setLoaded(true); setError(true); }}
          />
        </motion.div>
      </AnimatePresence>

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted/40">
          <span className="text-3xl mb-2">🖼️</span>
          <p className="font-inter text-xs">Image unavailable</p>
        </div>
      )}
    </div>
  );
}
