'use client';

import { QuizResult as QuizResultType } from '@/types/quiz';

interface QuizResultProps {
  result: QuizResultType;
  onRestart: () => void;
}

export default function QuizResult({ result, onRestart }: QuizResultProps) {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  
  const getGradeInfo = (percentage: number) => {
    if (percentage >= 90) {
      return {
        grade: 'A+',
        message: '훌륭합니다! Next.js 전문가 수준입니다!',
        color: 'text-green-700',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      };
    } else if (percentage >= 80) {
      return {
        grade: 'A',
        message: '매우 좋습니다! Next.js를 잘 이해하고 있습니다.',
        color: 'text-green-700',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      };
    } else if (percentage >= 70) {
      return {
        grade: 'B',
        message: '좋습니다! 조금 더 학습하면 완벽해질 것 같습니다.',
        color: 'text-blue-700',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
      };
    } else if (percentage >= 60) {
      return {
        grade: 'C',
        message: '기본기는 있습니다. 더 깊이 학습해보세요.',
        color: 'text-yellow-700',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
      };
    } else {
      return {
        grade: 'D',
        message: 'Next.js 기초부터 차근차근 학습하시길 추천합니다.',
        color: 'text-red-700',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      };
    }
  };

  const gradeInfo = getGradeInfo(percentage);

  const getRecommendation = (percentage: number) => {
    if (percentage >= 80) {
      return [
        '고급 Next.js 최적화 기법 학습',
        'Next.js 13+ App Router 심화 학습',
        '서버 컴포넌트와 클라이언트 컴포넌트 패턴 연구',
        'Next.js 프로덕션 배포 및 성능 최적화'
      ];
    } else if (percentage >= 60) {
      return [
        'Next.js 라우팅 시스템 복습',
        'getStaticProps, getServerSideProps 학습',
        'API 라우트 구현 연습',
        'Next.js 이미지 및 폰트 최적화 학습'
      ];
    } else {
      return [
        'Next.js 기본 개념 학습',
        'React 기초 다지기',
        'Next.js 공식 문서 읽기',
        '간단한 Next.js 프로젝트 만들어보기'
      ];
    }
  };

  const recommendations = getRecommendation(percentage);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Grade Card */}
      <div className={`${gradeInfo.bgColor} rounded-2xl border ${gradeInfo.borderColor} p-8`}>
        <div className="text-center">
          <div className={`text-6xl font-bold ${gradeInfo.color} mb-4`}>
            {gradeInfo.grade}
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-2">
            {result.score}/{result.totalQuestions}
          </div>
          <div className="text-xl text-gray-600 mb-4">
            {percentage}% 점수
          </div>
          <p className={`text-lg ${gradeInfo.color} font-medium`}>
            {gradeInfo.message}
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📚</span>
          학습 추천사항
        </h3>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{recommendation}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📊</span>
          상세 결과
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="text-2xl font-bold text-green-700">
              {result.score}
            </div>
            <div className="text-sm text-gray-600 font-medium">정답</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
            <div className="text-2xl font-bold text-red-700">
              {result.totalQuestions - result.score}
            </div>
            <div className="text-sm text-gray-600 font-medium">오답</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">
              {percentage}%
            </div>
            <div className="text-sm text-gray-600 font-medium">정답률</div>
          </div>
        </div>
      </div>

      {/* Restart Button */}
      <div className="text-center pt-4">
        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-sm"
        >
          다시 도전하기
        </button>
      </div>
    </div>
  );
} 