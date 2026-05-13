interface Props {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: Props) {
  const pct = Math.min((current / total) * 100, 100);
  return (
    <div className="flex items-center gap-2" aria-label={`Question ${current} of ${total}`}>
      <div className="w-20 h-px bg-white/8 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold/50 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-inter text-text-muted text-xs tabular-nums">
        {current}/{total}
      </span>
    </div>
  );
}
