# 🚀 Next.js 지식 테스트

Next.js 수업을 위한 학생들의 지식 수준을 평가할 수 있는 온라인 퀴즈 사이트입니다.

## ✨ 주요 기능

- **15개의 다양한 문제**: 기초부터 고급까지 3단계 난이도
- **실시간 피드백**: 각 문제마다 상세한 설명 제공
- **맞춤형 학습 추천**: 결과에 따른 개인별 학습 방향 제시
- **아름다운 UI**: 모던하고 반응형 디자인
- **진행률 표시**: 실시간 퀴즈 진행 상황 확인

## 🎯 문제 구성

### 쉬움 (Easy)
- Next.js 기본 개념
- React 기반 프레임워크 이해
- 환경 변수 사용법
- 기본 컴포넌트 사용법

### 보통 (Medium)  
- 라우팅 시스템 (Pages Router, App Router)
- SSR, SSG 개념
- API 라우트 구현
- 메타데이터 설정
- 이미지 및 폰트 최적화

### 어려움 (Hard)
- ISR (Incremental Static Regeneration)
- Middleware와 Edge Runtime
- Turbopack 이해
- 고급 최적화 기법

## 🛠️ 기술 스택

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (권장)

## 🚀 시작하기

### 개발 환경 설정

1. 저장소 클론
```bash
git clone [repository-url]
cd nextjs-quiz
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 확인
```
http://localhost:3000
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 애플리케이션 실행
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── QuestionCard.tsx   # 문제 카드 컴포넌트
│   └── QuizResult.tsx     # 결과 표시 컴포넌트
├── data/                  # 데이터 파일
│   └── questions.ts       # 퀴즈 문제 데이터
└── types/                 # TypeScript 타입 정의
    └── quiz.ts            # 퀴즈 관련 타입
```

## 🎓 교육적 활용

### 수업 전 활용
- 학생들의 사전 지식 수준 파악
- 수업 난이도 조정을 위한 기준점 설정
- 개별 학습 계획 수립

### 수업 후 활용  
- 학습 성과 측정
- 복습이 필요한 영역 식별
- 다음 단계 학습 방향 제시

## 📊 결과 분석

### 등급 체계
- **A+ (90-100%)**: Next.js 전문가 수준
- **A (80-89%)**: 우수한 이해도
- **B (70-79%)**: 양호한 수준  
- **C (60-69%)**: 기본 이해
- **D (60% 미만)**: 추가 학습 필요

### 맞춤형 추천
각 등급별로 다음 학습 단계를 제시합니다:
- 고득점자: 고급 최적화 및 실무 패턴
- 중간 점수: 핵심 기능 심화 학습
- 저득점자: 기초 개념 재학습

## 🔧 커스터마이징

### 문제 추가/수정
`src/data/questions.ts` 파일에서 문제를 추가하거나 수정할 수 있습니다.

```typescript
{
  id: 16,
  question: '새로운 문제',
  options: ['선택지1', '선택지2', '선택지3', '선택지4'],
  correctAnswer: 0,
  explanation: '상세한 설명',
  difficulty: 'medium'
}
```

### 스타일링 변경
Tailwind CSS를 사용하여 디자인을 쉽게 커스터마이징할 수 있습니다.

## 📱 반응형 지원

- 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- 터치 인터페이스 지원
- 다양한 화면 크기에 대응하는 유연한 레이아웃

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 지원

문의사항이나 버그 리포트는 GitHub Issues를 통해 제출해주세요.

---

**Happy Learning! 🎉**
