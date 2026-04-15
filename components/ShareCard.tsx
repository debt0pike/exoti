'use client';

import type { Personality } from '@/data/types';
import PersonalityRadarChart from './RadarChart';
import { DimensionLabels } from './RadarChart';
import VinylRecord from './VinylRecord';

interface ShareCardProps {
  personality: Personality;
}

export default function ShareCard({ personality }: ShareCardProps) {
  return (
    <div
      id="share-card"
      className="bg-bg p-8 min-w-[540px] max-w-[540px] mx-auto"
      style={{ aspectRatio: '9/16' }}
    >
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="font-space-mono text-lg text-gold tracking-wider mb-1">
          EXOTI
        </div>
        <div className="font-space-mono text-xs text-text-dim tracking-wider">
          EXO TYPE INDICATOR
        </div>
      </div>

      {/* 人格信息 */}
      <div className="text-center mb-6">
        <div className="text-xs text-gold mb-2 tracking-widest">
          你的 EXO-L 人格 / YOUR EXOTI PERSONA
        </div>
        <h1 className="font-cormorant text-5xl text-gold mb-3 font-light">
          {personality.name}
        </h1>
        <div className="text-xl text-text tracking-[0.25em] mb-4">
          {personality.nameCn}
        </div>
        <div className="inline-block font-space-mono text-xs border border-gold text-gold px-4 py-1 mb-6">
          [ {personality.code} TYPE ]
        </div>
        <div className="text-sm text-text leading-relaxed max-w-md mx-auto">
          {personality.tagline}
        </div>
      </div>

      {/* 雷达图 */}
      <div className="mb-6">
        <PersonalityRadarChart data={personality.radar} />
        <DimensionLabels data={personality.radar} />
      </div>

      {/* 黑胶唱片 */}
      <div className="mb-6">
        <VinylRecord songName={personality.song} />
      </div>

      {/* 底部水印 */}
      <div className="text-center pt-6 border-t border-white/10">
        <div className="font-space-mono text-xs text-text-dim">
          EXOTI · exoti.app
        </div>
      </div>
    </div>
  );
}
