import { create } from 'zustand';
import { QuizState } from '@/data/types';

interface QuizStore extends QuizState {
  setCurrentIndex: (index: number) => void;
  setAnswer: (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  currentIndex: 0,
  answers: {},
  isComplete: false,

  setCurrentIndex: (index) => set({ currentIndex: index }),

  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),

  resetQuiz: () =>
    set({
      currentIndex: 0,
      answers: {},
      isComplete: false,
    }),
}));
