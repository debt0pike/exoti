'use client';

interface OptionCardProps {
  type: 'A' | 'B' | 'C' | 'D';
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function OptionCard({ type, text, isSelected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        option-card w-full text-left
        ${isSelected ? 'selected' : ''}
      `}
    >
      <div className="flex items-start gap-3">
        <span className="font-space-mono text-sm font-bold text-gold flex-shrink-0">
          {type}
        </span>
        <span className="text-sm leading-relaxed text-text">
          {text}
        </span>
      </div>
    </button>
  );
}
