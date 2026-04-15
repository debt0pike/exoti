'use client';

import { Question, QuizAnswer } from '@/data/types';
import OptionCard from './OptionCard';

interface QuizCardProps {
  question: Question;
  selectedAnswer: QuizAnswer | null;
  onAnswerSelect: (answer: QuizAnswer) => void;
}

export default function QuizCard({ question, selectedAnswer, onAnswerSelect }: QuizCardProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <span className="font-space-mono text-xs text-gold mb-4 block">
          Q{String(question.id).padStart(2, '0')}
        </span>
        <h2 className="text-2xl font-cormorant font-light leading-relaxed text-text">
          {question.text}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionCard
            key={option.type}
            type={option.type}
            text={option.text}
            isSelected={selectedAnswer?.type === option.type}
            onClick={() => onAnswerSelect({ questionId: question.id, type: option.type })}
          />
        ))}
      </div>
    </div>
  );
}
