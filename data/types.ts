export interface Question {
  id: number;
  text: string;
  options: {
    type: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
}

export interface QuizAnswer {
  questionId: number;
  type: 'A' | 'B' | 'C' | 'D';
}

export interface Personality {
  code: string;
  name: string;
  nameCn: string;
  tagline: string;
  song: string;
  radar: {
    Faith: number;
    Grit: number;
    Presence: number;
    Devotion: number;
    Connection: number;
    Introspection: number;
  };
  analysis: string;
}

export interface QuizState {
  currentIndex: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  isComplete: boolean;
}
