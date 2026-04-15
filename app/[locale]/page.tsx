'use client';

import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import StarBackground from '@/components/StarBackground';

export default function IntroPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('intro');
  const tCommon = useTranslations('common');

  const handleStart = () => {
    router.push(`/${locale}/quiz`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative">
      <StarBackground />

      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-3 sm:mb-4 fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-space-mono font-bold text-gold tracking-wider">
            EXOTI
          </h1>
        </div>

        {/* 副标题 */}
        <div className="mb-6 sm:mb-8 fade-in-up staggered-1">
          <p className="font-space-mono text-xs sm:text-sm text-text-dim tracking-wider">
            EXO TYPE INDICATOR
          </p>
        </div>

        {/* 主标题 */}
        <div className="mb-8 sm:mb-12 fade-in-up staggered-2">
          <h2 className="text-3xl sm:text-4xl md:text-[52px] font-cormorant font-light text-gold mb-4 sm:mb-6">
            EXOTI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text font-noto-serif px-2">
            {t('title')}
          </p>
        </div>

        {/* 开始按钮 */}
        <div className="fade-in-up staggered-3 w-full">
          <button onClick={handleStart} className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3">
            {tCommon('start')}
          </button>
        </div>
      </div>
    </div>
  );
}
