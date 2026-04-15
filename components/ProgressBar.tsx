interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-space-mono text-xs text-gold">
          Q{String(current).padStart(2, '0')} / {total}
        </span>
        <span className="font-space-mono text-xs text-text-dim">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
