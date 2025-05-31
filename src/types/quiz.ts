export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  answers: number[];
  correctAnswers: number[];
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
} 