'use client';

import { useEffect, useState } from 'react';

interface VinylRecordProps {
  songName: string;
}

export default function VinylRecord({ songName }: VinylRecordProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-48">
        {/* 黑胶唱片 */}
        <div
          className={`
            w-full h-full rounded-full border-4 border-black/50
            ${isPlaying ? 'animate-spin' : ''}
          `}
          style={{
            animationDuration: '3s',
            background: `
              radial-gradient(circle at 50% 50%, #1a1a24 0%, #1a1a24 20%,
              #111118 20%, #111118 22%,
              #0a0a0f 22%, #0a0a0f 25%,
              #1a1a24 25%, #1a1a24 45%,
              #111118 45%, #111118 47%,
              #0a0a0f 47%, #0a0a0f 50%,
              #1a1a24 50%, #1a1a24 70%,
              #111118 70%, #111118 72%,
              #0a0a0f 72%, #0a0a0f 100%
            )
          `,
          }}
        >
          {/* 中心标签 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-surface2 to-surface border-2 border-gold/30 flex items-center justify-center">
            <div className="text-center">
              <div className="font-space-mono text-[10px] text-gold leading-tight">
                EXOTI
              </div>
              <div className="font-space-mono text-[8px] text-text-dim mt-1">
                ORIGINAL
              </div>
            </div>
          </div>
        </div>

        {/* 光泽效果 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* 歌曲名称 */}
      <div className="text-center">
        <div className="text-xs text-gold mb-1">专属原声带</div>
        <div className="font-cormorant text-xl text-text">{songName}</div>
      </div>
    </div>
  );
}
