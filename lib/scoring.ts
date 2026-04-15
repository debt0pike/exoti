import { QuizAnswer } from '@/data/types';

export function calculateResult(answers: Record<number, 'A' | 'B' | 'C' | 'D'>): string {
  const scores = { A: 0, B: 0, C: 0, D: 0 };

  Object.values(answers).forEach((type) => {
    scores[type]++;
  });

  // 按分数降序排列
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const primary = sorted[0][0]; // 主型（最高分）
  const secondary = sorted[1][0]; // 副型（第二高）

  return `${primary}${secondary}`; // 如 "AD"、"BC"
}

export function validateQuiz(answers: Record<number, 'A' | 'B' | 'C' | 'D'>): boolean {
  // 确保所有27道题都已回答
  return Object.keys(answers).length === 27;
}
