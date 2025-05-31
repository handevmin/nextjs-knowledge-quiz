'use client';

import { useState } from 'react';
import { questions } from '@/data/questions';
import { QuizResult, UserAnswer } from '@/types/quiz';
import QuestionCard from '@/components/QuestionCard';
import QuizResultComponent from '@/components/QuizResult';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentAnswer = userAnswers.find(
    answer => answer.questionId === currentQuestion?.id
  )?.selectedOption;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: answerIndex
    };

    setUserAnswers(prev => {
      const filtered = prev.filter(answer => answer.questionId !== currentQuestion.id);
      return [...filtered, newAnswer];
    });
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowExplanation(false);
    }
  };

  const calculateResult = (): QuizResult => {
    const correctCount = userAnswers.reduce((count, answer) => {
      const question = questions.find(q => q.id === answer.questionId);
      return question && question.correctAnswer === answer.selectedOption 
        ? count + 1 
        : count;
    }, 0);

    return {
      score: correctCount,
      totalQuestions: questions.length,
      answers: userAnswers.map(answer => answer.selectedOption),
      correctAnswers: questions.map(q => q.correctAnswer)
    };
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setShowResult(false);
    setQuizStarted(false);
    setShowExplanation(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const canCheckAnswer = currentAnswer !== undefined && !showExplanation;
  const canProceed = showExplanation;

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Next.js 지식 테스트
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Next.js에 대한 지식을 확인하고 학습 방향을 찾아보세요
              </p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-gray-700 font-medium">문제 수</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                  <div className="text-gray-700 font-medium">난이도 단계</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
                  <div className="text-gray-700 font-medium">예상 소요시간(분)</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">테스트 특징</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Next.js 기본 개념부터 고급 기능까지 체계적 구성</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>난이도별 색상 구분으로 시각적 이해도 향상</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>각 문제마다 즉시 피드백과 상세한 해설 제공</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>점수별 맞춤형 학습 추천 및 개선 방향 제시</span>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <button
                  onClick={startQuiz}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-sm"
                >
                  테스트 시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted && showResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              테스트 완료!
            </h1>
            <p className="text-gray-600">결과를 확인해보세요</p>
          </div>
          <QuizResultComponent 
            result={calculateResult()} 
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Next.js 지식 테스트
              </h1>
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` 
                }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={currentAnswer ?? null}
            onAnswerSelect={handleAnswerSelect}
            showResult={showExplanation}
            disabled={showExplanation}
          />

          {/* Check Answer Button */}
          {!showExplanation && (
            <div className="text-center mb-6">
              <button
                onClick={handleCheckAnswer}
                disabled={!canCheckAnswer}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
              >
                정답 확인
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                이전
              </button>
              
              <div className="text-gray-600 text-sm font-medium">
                응답 완료: {userAnswers.length} / {questions.length}
              </div>

              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                {isLastQuestion ? '결과 보기' : '다음'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
