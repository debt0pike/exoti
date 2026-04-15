'use client';

import { useState } from 'react';
import html2canvas from 'html2canvas';

interface ShareButtonProps {
  typeCode: string;
}

export default function ShareButton({ typeCode }: ShareButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleShare = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('share-card');
      if (!element) {
        console.error('Share card not found');
        return;
      }

      const canvas = await html2canvas(element, {
        backgroundColor: '#0a0a0f',
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `EXOTI-${typeCode}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to generate share image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleShare}
      disabled={isGenerating}
      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? '生成中...' : '✦ 生成分享图片'}
    </button>
  );
}
