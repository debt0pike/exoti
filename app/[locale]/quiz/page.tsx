'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import StarBackground from '@/components/StarBackground';
import { questions } from '@/data/questions';
import { QuizAnswer } from '@/data/types';
import { calculateResult } from '@/lib/scoring';

export default function QuizPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('common');
  const tQuiz = useTranslations('quiz');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentQuestion.id];

  const handleAnswerSelect = (answer: QuizAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [answer.questionId]: answer.type
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFinish = () => {
    const resultType = calculateResult(answers);
    router.push(`/${locale}/result/${resultType}`);
  };

  return (
    <div className="min-h-screen relative">
      <StarBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* 导航栏 */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <button onClick={() => router.push(`/${locale}`)} className="text-gold text-sm sm:text-base">
            {t('back')}
          </button>
          <div className="font-space-mono text-xs sm:text-sm text-gold">
            EXOTI
          </div>
        </div>

        {/* 进度 */}
        <div className="mb-6 sm:mb-8">
          <div className="text-gold text-sm sm:text-base">
            {tQuiz('progress', { current: currentIndex + 1, total: questions.length })}
          </div>
          <div className="h-[2px] sm:h-1 bg-white/10 mt-2 sm:mt-3">
            <div
              className="h-full bg-[#c9a96e]"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* 问题 */}
        <div className="mb-6 sm:mb-8">
          <div className="mb-3 sm:mb-4">
            <div className="text-gold text-xs sm:text-xs mb-2 tracking-widest">Q{String(currentQuestion.id).padStart(2, '0')}</div>
            <h2 className="text-lg sm:text-2xl text-text leading-relaxed px-2">
              {currentQuestion.text}
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.type}
                onClick={() => handleAnswerSelect({ questionId: currentQuestion.id, type: option.type as 'A' | 'B' | 'C' | 'D' })}
                className={`w-full text-left p-3 sm:p-4 border border-white/10 rounded-lg
                  transition-all duration-150 active:bg-white/5
                  ${selectedAnswer === option.type ? 'border-[#c9a96e] bg-[#c9a96e]/5' : 'hover:border-gold/30'}`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-[#c9a96e] font-bold text-sm sm:text-base">{option.type}</span>
                  <span className="text-sm sm:text-base text-text leading-relaxed flex-1">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 sm:px-8 py-3 border border-white/20 text-white rounded-lg disabled:opacity-30 transition-all duration-200"
          >
            {t('previous')}
          </button>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleFinish}
              disabled={!selectedAnswer}
              className="px-8 sm:px-12 py-3 border border-[#c9a96e] text-[#c9a96e] rounded-lg disabled:opacity-50 transition-all duration-200"
            >
              {t('finish')}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="px-8 sm:px-12 py-3 border border-[#c9a96e] text-[#c9a96e] rounded-lg disabled:opacity-50 transition-all duration-200"
            >
              {t('next')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
