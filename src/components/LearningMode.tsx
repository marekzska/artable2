import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PeriodKey } from '../data/types';
import { getArtworksForPeriod } from '../data/artworks';

interface Props {
  period: PeriodKey;
  onBack: () => void;
}

export function LearningMode({ period, onBack }: Props) {
  const artworks = getArtworksForPeriod(period);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);

  const artwork = artworks[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setImgLoaded(false);
    setIndex(i => Math.max(0, Math.min(artworks.length - 1, i + dir)));
  };

  return (
    <motion.div
      className="h-dvh flex flex-col bg-canvas overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={onBack} className="font-inter text-text-muted text-xs flex items-center gap-1">
          <span className="text-sm">‹</span> Back
        </button>
        <span className="font-inter text-text-muted text-xs tabular-nums">
          {index + 1} / {artworks.length}
        </span>
      </div>

      {/* Artwork image */}
      <div className="flex-1 min-h-0 px-3 py-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={artwork.title}
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: imgLoaded ? 1 : 0, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={artwork.link}
              alt={artwork.title}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onLoad={() => setImgLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full border-2 border-gold/15 border-t-gold/50 animate-spin" />
          </div>
        )}
      </div>

      {/* Info card */}
      <div className="flex-shrink-0 px-4 pt-2 pb-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={artwork.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-playfair text-text-primary text-base leading-snug">{artwork.title}</p>
            <p className="font-inter text-gold text-sm mt-0.5">{artwork.author}</p>
            <p className="font-inter text-text-muted text-xs mt-0.5">
              {artwork.artmovement}{artwork.year ? ` · ${artwork.year}` : ''}
            </p>
            {artwork.bio && (
              <p className="font-playfair italic text-text-muted/70 text-xs mt-2 leading-relaxed line-clamp-3">
                {artwork.bio}
              </p>
            )}
            <p className="font-inter text-text-muted/25 text-[0.52rem] mt-1.5">
              {artwork.copyright ?? 'Public domain'}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 pb-6 pt-3 gap-3">
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          className="flex-1 glass rounded-xl py-3 font-inter text-text-primary text-sm disabled:opacity-20 transition-opacity"
        >
          ← Previous
        </button>
        <button
          onClick={() => go(1)}
          disabled={index === artworks.length - 1}
          className="flex-1 glass rounded-xl py-3 font-inter text-text-primary text-sm disabled:opacity-20 transition-opacity"
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
}
