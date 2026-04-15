'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { personalities } from '@/data/personalities';
import StarBackground from '@/components/StarBackground';
import ShareCard from '@/components/ShareCard';
import ShareButton from '@/components/ShareButton';
import PersonalityRadarChart from '@/components/RadarChart';
import { DimensionLabels } from '@/components/RadarChart';
import VinylRecord from '@/components/VinylRecord';

export default function ResultClient({ type }: { type: string }) {
  const router = useRouter();
  const t = useTranslations('common');
  const tResult = useTranslations('result');
  const [mounted, setMounted] = useState(false);
  const typeCode = type.toUpperCase();

  const personality = personalities[typeCode];

  const handleRetake = () => {
    router.push('/');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!personality) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-text text-xl">人格类型不存在</div>
      </div>
    );
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative">
      <StarBackground />

      <div className="relative z-10 max-w-2xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* 导航栏 */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <button onClick={() => router.push('/')} className="text-gold hover:text-gold-light transition-colors text-sm sm:text-base">
            {t('back')}
          </button>
          <div className="font-space-mono text-xs sm:text-sm text-gold">
            EXOTI
          </div>
        </div>

        {/* 结果展示 */}
        <div className="mb-6 sm:mb-8">
          {/* 眉题 */}
          <div className="text-center mb-3 sm:mb-4">
            <div className="text-xs sm:text-xs text-gold mb-2 sm:mb-2 tracking-widest">
              {tResult('subtitle')}
            </div>
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-gold mb-3 sm:mb-3 font-light">
              {personality.name}
            </h1>
            <div className="text-lg sm:text-xl text-text tracking-[0.25em] mb-3 sm:mb-4">
              {personality.nameCn}
            </div>
            <div className="inline-block font-space-mono text-xs border border-gold text-gold px-3 sm:px-4 py-1 sm:py-1 mb-4 sm:mb-6">
              {tResult('type_label', { code: typeCode })}
            </div>
          </div>

          {/* 一句话画像 */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="border-t border-b border-gold/30 py-3 sm:py-4 max-w-xs sm:max-w-lg mx-auto px-2">
              <p className="text-sm text-text leading-relaxed">
                {personality.tagline}
              </p>
            </div>
          </div>

          {/* 雷达图 */}
          <div className="mb-6 sm:mb-8">
            <PersonalityRadarChart data={personality.radar} />
            <DimensionLabels data={personality.radar} />
          </div>

          {/* 深度解读模块 */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-4">
              <div className="text-xs text-gold mb-2 tracking-widest">
                深度解读 · DEEP ANALYSIS
              </div>
            </div>
            <div className="bg-surface2/50 border border-gold/30 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-text leading-relaxed whitespace-pre-line">
                {personality.analysis}
              </p>
            </div>
          </div>

          {/* 黑胶唱片 */}
          <div className="mb-6 sm:mb-8">
            <VinylRecord songName={personality.song} />
          </div>
        </div>

        {/* 分享卡片（用于生成图片） */}
        <div className="hidden">
          <ShareCard personality={personality} />
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <ShareButton typeCode={typeCode} />
          <button onClick={handleRetake} className="btn-secondary w-full sm:w-auto">
            {t('retake')}
          </button>
        </div>
      </div>
    </div>
  );
}
