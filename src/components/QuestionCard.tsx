'use client';

import { Question } from '@/types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showResult: boolean;
  disabled?: boolean;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  showResult,
  disabled = false
}: QuestionCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '쉬움';
      case 'medium': return '보통';
      case 'hard': return '어려움';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex-1 leading-relaxed">
          {question.question}
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(question.difficulty)} ml-4 flex-shrink-0`}>
          {getDifficultyText(question.difficulty)}
        </span>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium";
          
          if (showResult) {
            if (index === question.correctAnswer) {
              buttonClass += " bg-green-50 border-green-300 text-green-800";
            } else if (index === selectedAnswer && index !== question.correctAnswer) {
              buttonClass += " bg-red-50 border-red-300 text-red-800";
            } else {
              buttonClass += " border-gray-200 text-gray-700";
            }
          } else {
            if (selectedAnswer === index) {
              buttonClass += " bg-blue-50 border-blue-300 text-blue-800";
            } else {
              buttonClass += " border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50";
            }
            
            if (disabled) {
              buttonClass = buttonClass.replace('hover:border-gray-300 hover:bg-gray-50', '');
              buttonClass += " cursor-not-allowed opacity-60";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && !disabled && onAnswerSelect(index)}
              className={buttonClass}
              disabled={showResult || disabled}
            >
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full mr-3 mt-0.5 flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">
              {selectedAnswer === question.correctAnswer ? '✅' : '❌'}
            </span>
            <span className={`font-semibold text-lg ${selectedAnswer === question.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
              {selectedAnswer === question.correctAnswer ? '정답입니다!' : '틀렸습니다.'}
            </span>
          </div>
          <div className="space-y-2 text-blue-800">
            <p>
              <span className="font-semibold">정답:</span> {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
            </p>
            <p>
              <span className="font-semibold">해설:</span> {question.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 