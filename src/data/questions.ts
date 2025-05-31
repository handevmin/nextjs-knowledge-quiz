import { Question } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: 'Next.js는 무엇을 기반으로 만들어진 React 프레임워크인가요?',
    options: ['Vue.js', 'Angular', 'React', 'Svelte'],
    correctAnswer: 2,
    explanation: 'Next.js는 React를 기반으로 만들어진 풀스택 웹 애플리케이션 프레임워크입니다.',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: 'Next.js 13+ App Router에서 페이지를 생성하는 올바른 방법은?',
    options: [
      'components 디렉토리에 파일을 생성',
      'app 디렉토리에 page.tsx 파일을 생성',
      'pages 디렉토리에 파일을 생성',
      'views 디렉토리에 파일을 생성'
    ],
    correctAnswer: 1,
    explanation: 'App Router에서는 app 디렉토리 내에 page.tsx 파일을 생성하여 페이지를 만듭니다.',
    difficulty: 'medium'
  },
  {
    id: 3,
    question: 'Next.js의 SSR(Server-Side Rendering)의 장점이 아닌 것은?',
    options: [
      'SEO 개선',
      '초기 로딩 속도 향상',
      '클라이언트 자바스크립트 실행 시간 단축',
      '서버 부하 감소'
    ],
    correctAnswer: 3,
    explanation: 'SSR은 서버에서 렌더링을 수행하므로 오히려 서버 부하가 증가합니다.',
    difficulty: 'medium'
  },
  {
    id: 4,
    question: 'Next.js App Router에서 동적 라우팅을 구현하는 방법은?',
    options: [
      '[id].tsx 파일 생성',
      'product/[id]/page.tsx 파일 생성',
      '{id}.tsx 파일 생성',
      'route/id.tsx 파일 생성'
    ],
    correctAnswer: 1,
    explanation: 'App Router에서는 대괄호 []를 사용하여 동적 세그먼트를 생성하고, page.tsx 파일로 페이지를 정의합니다.',
    difficulty: 'medium'
  },
  {
    id: 5,
    question: 'Next.js에서 이미지 최적화를 위해 사용하는 컴포넌트는?',
    options: ['<img>', '<Image>', '<Picture>', '<Img>'],
    correctAnswer: 1,
    explanation: 'Next.js의 Image 컴포넌트는 자동 이미지 최적화, lazy loading, 반응형 이미지 등을 제공합니다.',
    difficulty: 'easy'
  },
  {
    id: 6,
    question: 'Next.js의 getStaticProps 함수는 언제 실행되나요?',
    options: [
      '클라이언트에서 페이지 로드 시',
      '빌드 타임에만',
      '서버에서 요청할 때마다',
      '브라우저에서 렌더링할 때'
    ],
    correctAnswer: 1,
    explanation: 'getStaticProps는 빌드 타임에 실행되어 정적 페이지를 생성합니다.',
    difficulty: 'medium'
  },
  {
    id: 7,
    question: 'Next.js App Router에서 서버 컴포넌트와 클라이언트 컴포넌트를 구분하는 방법은?',
    options: [
      '파일 확장자로 구분',
      '"use client" 지시어 사용',
      'import 방식으로 구분',
      '자동으로 구분됨'
    ],
    correctAnswer: 1,
    explanation: '"use client" 지시어를 파일 상단에 추가하면 클라이언트 컴포넌트가 되고, 없으면 서버 컴포넌트입니다.',
    difficulty: 'medium'
  },
  {
    id: 8,
    question: 'Next.js App Router에서 API 라우트 파일명은?',
    options: [
      'api.ts',
      'route.ts',
      'handler.ts',
      'index.ts'
    ],
    correctAnswer: 1,
    explanation: 'App Router에서는 app/api 디렉토리 내에 route.ts 파일을 생성하여 API 라우트를 만듭니다.',
    difficulty: 'medium'
  },
  {
    id: 9,
    question: 'Next.js의 ISR(Incremental Static Regeneration)의 특징이 아닌 것은?',
    options: [
      '빌드 후에도 페이지를 업데이트할 수 있음',
      '정적 생성의 이점을 유지',
      '실시간으로 데이터가 업데이트됨',
      '특정 간격으로 페이지를 재생성'
    ],
    correctAnswer: 2,
    explanation: 'ISR은 실시간 업데이트가 아닌, 설정된 간격(revalidate)에 따라 페이지를 재생성합니다.',
    difficulty: 'hard'
  },
  {
    id: 10,
    question: 'Next.js App Router에서 메타데이터를 설정하는 방법은?',
    options: [
      'Head 컴포넌트 사용',
      'metadata 객체 export',
      'useHead 훅 사용',
      'meta 태그 직접 추가'
    ],
    correctAnswer: 1,
    explanation: 'App Router에서는 metadata 객체를 export하여 메타데이터를 설정합니다.',
    difficulty: 'medium'
  },
  {
    id: 11,
    question: 'Next.js에서 환경 변수를 클라이언트에서 사용하려면?',
    options: [
      'NEXT_PUBLIC_ 접두사 사용',
      'CLIENT_ 접두사 사용',
      'PUBLIC_ 접두사 사용',
      '별도 설정 없이 사용 가능'
    ],
    correctAnswer: 0,
    explanation: 'NEXT_PUBLIC_ 접두사를 가진 환경 변수만 클라이언트에서 접근할 수 있습니다.',
    difficulty: 'easy'
  },
  {
    id: 12,
    question: 'Next.js의 Middleware는 어디에서 실행되나요?',
    options: [
      '클라이언트',
      '서버',
      'Edge Runtime',
      '빌드 타임'
    ],
    correctAnswer: 2,
    explanation: 'Next.js Middleware는 Edge Runtime에서 실행되어 빠른 응답 시간을 제공합니다.',
    difficulty: 'hard'
  },
  {
    id: 13,
    question: 'Next.js App Router에서 로딩 UI를 구현하는 파일명은?',
    options: [
      'loading.tsx',
      'loader.tsx',
      'spinner.tsx',
      'pending.tsx'
    ],
    correctAnswer: 0,
    explanation: 'App Router에서는 loading.tsx 파일을 사용하여 로딩 UI를 구현합니다.',
    difficulty: 'medium'
  },
  {
    id: 14,
    question: 'Next.js에서 폰트 최적화를 위해 사용하는 방법은?',
    options: [
      'Google Fonts CDN 직접 링크',
      'next/font 모듈 사용',
      'CSS @import 사용',
      'webpack 설정 수정'
    ],
    correctAnswer: 1,
    explanation: 'next/font 모듈을 사용하면 폰트를 최적화하고 자동으로 self-host할 수 있습니다.',
    difficulty: 'medium'
  },
  {
    id: 15,
    question: 'Next.js에서 새 프로젝트 생성시 권장되는 라우팅 시스템은?',
    options: [
      'Pages Router',
      'App Router',
      '둘 다 동일함',
      'Express Router'
    ],
    correctAnswer: 1,
    explanation: 'Next.js 13+에서는 App Router가 새로운 권장 방식이며, 더 강력하고 유연한 기능을 제공합니다.',
    difficulty: 'easy'
  }
]; 