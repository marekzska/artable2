import { motion } from 'framer-motion';

interface Props {
  bio: string;
}

export function CuratorOverlay({ bio }: Props) {
  return (
    <motion.div
      className="absolute bottom-16 left-3 right-3 z-40 rounded-xl px-4 py-3"
      style={{
        background: 'linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.05) 100%)',
        border: '1px solid rgba(201,169,110,0.2)',
        backdropFilter: 'blur(8px)',
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.3 }}
    >
      <p className="font-inter text-[0.55rem] text-gold/50 uppercase tracking-[0.2em] mb-1.5">
        Curator note
      </p>
      <p className="font-playfair italic text-text-muted/80 text-[0.7rem] leading-relaxed">
        {bio}
      </p>
    </motion.div>
  );
}
