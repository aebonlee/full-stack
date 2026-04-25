/* ============================================================
   FULL-STACK Learning Data
   Claude Code & 바이브코딩으로 풀스택 개발 학습
   ============================================================ */

export interface ContentSection {
  subtitle?: string;
  text?: string;
  items?: string[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: ContentSection[];
  code: string;
  codeLang: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EducationCourse {
  id: string;
  level: string;
  title: string;
  description: string;
  topics: string[];
}

export interface SearchItem {
  title: string;
  category: string;
  path: string;
  icon: string;
}

/* ─── 프론트엔드 토픽 ─── */
export const frontendTopics: Topic[] = [
  {
    id: 'react-basics',
    title: 'React 기초',
    icon: '⚛️',
    description: 'React의 핵심 개념인 컴포넌트, JSX, Props, State를 이해하고, 함수형 컴포넌트 기반의 모던 React 개발 방법을 학습합니다.',
    content: [
      { subtitle: 'React란?', text: 'React는 Meta(Facebook)에서 만든 UI 라이브러리로, 컴포넌트 기반으로 재사용 가능한 UI를 구축합니다.' },
      { subtitle: '핵심 개념', items: ['JSX: JavaScript 안에서 HTML을 작성하는 문법', 'Props: 부모에서 자식으로 데이터 전달', 'State: 컴포넌트 내부의 변경 가능한 데이터', 'Effect: 사이드 이펙트(API 호출, 구독 등) 처리'] },
      { subtitle: 'React 19의 새로운 기능', items: ['use() 훅으로 Promise 직접 읽기', 'Server Components 지원', 'Actions를 통한 폼 처리 개선', '자동 메모이제이션 (React Compiler)'] },
    ],
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default Counter;`,
    codeLang: 'tsx',
  },
  {
    id: 'vite-setup',
    title: 'Vite 프로젝트 설정',
    icon: '⚡',
    description: 'Vite를 사용한 빠른 React 프로젝트 생성, TypeScript 설정, 환경변수 관리, 빌드 최적화를 학습합니다.',
    content: [
      { subtitle: 'Vite란?', text: 'Vite는 차세대 프론트엔드 빌드 도구로, ESM(ES Modules) 기반의 초고속 개발 서버와 Rollup 기반의 최적화된 빌드를 제공합니다.' },
      { subtitle: '주요 장점', items: ['번들링 없는 즉각적인 서버 시작', 'HMR(Hot Module Replacement) 지원', 'TypeScript, JSX, CSS 기본 지원', '환경변수(.env) 자동 로드 (VITE_ 접두사)'] },
      { subtitle: '프로젝트 구조', items: ['index.html: SPA 진입점', 'src/main.tsx: React 앱 마운트', 'src/App.tsx: 라우팅 및 레이아웃', 'vite.config.ts: 빌드 설정'] },
    ],
    code: `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5173
  }
})`,
    codeLang: 'typescript',
  },
  {
    id: 'react-router',
    title: 'React Router',
    icon: '🧭',
    description: 'React Router v7을 사용한 SPA 라우팅, 중첩 라우트, URL 파라미터, 코드 스플리팅을 학습합니다.',
    content: [
      { subtitle: 'SPA 라우팅 개념', text: '싱글 페이지 애플리케이션(SPA)에서 URL 변경 시 페이지를 새로 로드하지 않고, 컴포넌트만 교체하여 빠른 네비게이션을 구현합니다.' },
      { subtitle: '주요 컴포넌트', items: ['BrowserRouter: HTML5 History API 기반 라우터', 'Routes / Route: 경로와 컴포넌트 매핑', 'Link: 페이지 전환 링크', 'useNavigate: 프로그래밍 방식 네비게이션'] },
      { subtitle: '고급 패턴', items: ['React.lazy()와 Suspense로 코드 스플리팅', 'AuthGuard로 보호된 라우트 구현', '중첩 라우트(Nested Routes)로 레이아웃 공유', 'useParams, useSearchParams로 URL 파라미터 활용'] },
    ],
    code: `import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}`,
    codeLang: 'tsx',
  },
  {
    id: 'state-management',
    title: '상태 관리 패턴',
    icon: '🔄',
    description: 'Context API, useReducer, 그리고 커스텀 훅을 활용한 React 상태 관리 패턴을 학습합니다.',
    content: [
      { subtitle: '상태 관리가 필요한 이유', text: '인증 상태, 테마, 토스트 알림 등 여러 컴포넌트에서 공유해야 하는 전역 상태를 효율적으로 관리하기 위해 Context API를 사용합니다.' },
      { subtitle: '주요 패턴', items: ['AuthContext: 인증 상태 + OAuth + 프로필 관리', 'ThemeContext: 다크/라이트 모드 + 색상 테마', 'ToastContext: 전역 알림 메시지 시스템', '커스텀 훅으로 비즈니스 로직 캡슐화'] },
    ],
    code: `// ThemeContext 예시
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}`,
    codeLang: 'tsx',
  },
  {
    id: 'css-design',
    title: 'CSS 디자인 시스템',
    icon: '🎨',
    description: 'CSS 커스텀 프로퍼티(변수) 기반의 디자인 시스템, 다크 모드, 반응형 디자인을 학습합니다.',
    content: [
      { subtitle: 'CSS 변수 기반 디자인 시스템', text: ':root에 색상, 폰트, 여백 등을 변수로 정의하고, 다크 모드나 색상 테마 변경 시 변수만 교체하면 전체 UI가 변경됩니다.' },
      { subtitle: '핵심 기법', items: ['CSS Custom Properties (--primary, --bg-body 등)', 'data-theme="dark" 속성으로 다크 모드 전환', 'data-color 속성으로 5가지 색상 테마 지원', 'Glassmorphism 네비게이션바 (backdrop-filter)'] },
      { subtitle: '반응형 전략', items: ['모바일 퍼스트 접근 (min-width 미디어 쿼리)', '768px 이하: 사이드바 → 가로 스크롤 탭', '1100px 이하: 네비게이션 → 햄버거 메뉴', 'Grid + Flexbox 레이아웃 조합'] },
    ],
    code: `:root {
  --primary: #0A2463;
  --primary-dark: #061539;
  --primary-light: #3E92CC;
  --primary-rgb: 10, 36, 99;

  --bg-body: #F4F7FA;
  --bg-card: #FFFFFF;
  --text-primary: #111827;
  --text-secondary: #4B5563;
}

[data-theme="dark"] {
  --bg-body: #0B1120;
  --bg-card: #1E293B;
  --text-primary: #F1F5F9;
  --text-secondary: #CBD5E1;
}`,
    codeLang: 'css',
  },
  {
    id: 'typescript',
    title: 'TypeScript 활용',
    icon: '🔷',
    description: 'React 프로젝트에서의 TypeScript 활용법 — 인터페이스, 제네릭, 타입 가드를 실전에서 적용합니다.',
    content: [
      { subtitle: 'TypeScript를 사용하는 이유', text: '컴파일 타임에 타입 오류를 잡아 런타임 버그를 줄이고, IDE의 자동완성과 리팩토링을 강력하게 지원합니다.' },
      { subtitle: 'React에서의 TypeScript', items: ['컴포넌트 Props 타입 정의 (interface)', 'useState, useRef 등 훅의 제네릭 타입', 'event handler 타입 (React.ChangeEvent 등)', 'API 응답 타입 정의로 안전한 데이터 처리'] },
    ],
    code: `interface UserProfile {
  id: string;
  email: string;
  display_name: string;
  role: 'member' | 'admin' | 'superadmin';
  created_at: string;
}

interface Props {
  user: UserProfile;
  onUpdate: (updates: Partial<UserProfile>) => Promise<void>;
}

function ProfileCard({ user, onUpdate }: Props) {
  return (
    <div>
      <h2>{user.display_name}</h2>
      <p>{user.email}</p>
      <span className={\`badge badge-\${user.role}\`}>
        {user.role}
      </span>
    </div>
  );
}`,
    codeLang: 'tsx',
  },
];

/* ─── 백엔드 토픽 ─── */
export const backendTopics: Topic[] = [
  {
    id: 'supabase-intro',
    title: 'Supabase 소개',
    icon: '🗄️',
    description: 'Supabase의 핵심 기능 — PostgreSQL 데이터베이스, 인증, 실시간 구독, Edge Functions를 학습합니다.',
    content: [
      { subtitle: 'Supabase란?', text: 'Supabase는 Firebase의 오픈소스 대안으로, PostgreSQL 기반의 BaaS(Backend as a Service)입니다. 자체 호스팅도 가능합니다.' },
      { subtitle: '핵심 서비스', items: ['Database: PostgreSQL + Row Level Security(RLS)', 'Auth: 이메일/비밀번호, OAuth(Google, Kakao 등)', 'Storage: 파일 업로드/다운로드', 'Edge Functions: 서버리스 Deno 함수', 'Realtime: WebSocket 기반 실시간 구독'] },
      { subtitle: 'DreamIT 프로젝트에서의 활용', text: '83개 사이트가 단일 Supabase 프로젝트를 공유하며, 테이블 접두사(fs_, vibe_, coding_ 등)로 데이터를 구분합니다.' },
    ],
    code: `// Supabase 클라이언트 초기화
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: 'pkce',
      detectSessionInUrl: true,
      autoRefreshToken: true,
      persistSession: true,
    }
  }
)`,
    codeLang: 'typescript',
  },
  {
    id: 'auth-system',
    title: '인증 시스템 구축',
    icon: '🔐',
    description: 'Google OAuth, Kakao 로그인, 이메일 인증을 포함한 완전한 인증 시스템을 구축합니다.',
    content: [
      { subtitle: 'OAuth 인증 흐름', text: 'PKCE(Proof Key for Code Exchange) 방식으로 안전한 OAuth 인증을 구현합니다. Google과 Kakao 소셜 로그인을 지원합니다.' },
      { subtitle: '인증 기능 목록', items: ['이메일/비밀번호 회원가입 및 로그인', 'Google OAuth 로그인', 'Kakao OAuth 로그인 (profile_nickname, account_email 스코프)', '비밀번호 재설정 이메일 발송', 'SSO 쿠키를 통한 크로스 도메인 세션 공유', '10분 무동작 자동 로그아웃'] },
      { subtitle: '프로필 자동 관리', items: ['최초 로그인 시 user_profiles 자동 생성', 'visited_sites 배열에 현재 도메인 자동 추가', 'role 자동 보정 (user → member)', 'ProfileCompleteModal로 이름/전화번호 수집'] },
    ],
    code: `// Google OAuth 로그인
const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: \`\${window.location.origin}/\`
    },
  });
  if (error) console.error(error);
};

// Kakao OAuth 로그인
const signInWithKakao = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: \`\${window.location.origin}/\`,
      scopes: 'profile_nickname profile_image account_email',
    },
  });
};`,
    codeLang: 'typescript',
  },
  {
    id: 'database-design',
    title: '데이터베이스 설계',
    icon: '📊',
    description: 'PostgreSQL 테이블 설계, RLS(Row Level Security), 트리거, RPC 함수를 학습합니다.',
    content: [
      { subtitle: '테이블 접두사 전략', text: '단일 Supabase 프로젝트에서 여러 사이트를 운영할 때, 테이블 접두사(fs_, vibe_ 등)로 데이터를 논리적으로 분리합니다.' },
      { subtitle: 'RLS(Row Level Security)', items: ['테이블별 접근 정책 설정', '인증된 사용자만 데이터 읽기/쓰기', '본인 데이터만 수정/삭제 가능', '관리자는 모든 데이터 접근 가능'] },
      { subtitle: '트리거와 함수', items: ['회원가입 시 자동 프로필 생성 트리거', '게시글 조회수 증가 RPC 함수', '반드시 EXCEPTION WHEN OTHERS THEN RETURN NEW 포함', '하나의 트리거 실패가 전체 시스템에 영향 주의'] },
    ],
    code: `-- 게시판 테이블 생성 (fs_ 접두사)
CREATE TABLE IF NOT EXISTS fs_board_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'free',
  user_id UUID REFERENCES auth.users(id),
  author_name TEXT,
  views INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 활성화
ALTER TABLE fs_board_posts ENABLE ROW LEVEL SECURITY;

-- 누구나 읽기 가능
CREATE POLICY "fs_posts_read" ON fs_board_posts
  FOR SELECT USING (true);

-- 본인만 수정/삭제
CREATE POLICY "fs_posts_modify" ON fs_board_posts
  FOR ALL USING (auth.uid() = user_id);`,
    codeLang: 'sql',
  },
  {
    id: 'edge-functions',
    title: 'Edge Functions',
    icon: '⚙️',
    description: 'Supabase Edge Functions를 활용한 서버리스 API — 이메일 발송, SMS, 결제 검증을 구현합니다.',
    content: [
      { subtitle: 'Edge Functions란?', text: 'Deno 기반의 서버리스 함수로, Supabase 프로젝트에서 직접 실행됩니다. API 키 보호가 필요한 외부 서비스 호출에 적합합니다.' },
      { subtitle: '공용 Edge Functions (DreamIT)', items: ['send-email: Resend API를 통한 이메일 발송', 'send-sms: icode TCP를 통한 SMS/LMS 발송', 'verify-payment: PortOne 결제 검증', '모든 *.dreamitbiz.com 사이트에서 공용 사용'] },
      { subtitle: '프론트엔드 연동', text: 'supabase.functions.invoke() 메서드로 Edge Function을 호출합니다. CORS는 Supabase가 자동으로 처리합니다.' },
    ],
    code: `// 프론트엔드에서 이메일 발송
import { sendEmail, buildEmailHtml } from '../utils/notifications';

const html = buildEmailHtml({
  title: '환영합니다!',
  body: '<p>풀스택 학습에 오신 것을 환영합니다.</p>',
  siteName: 'FULL-STACK',
  primaryColor: '#0A2463',
});

await sendEmail({
  to: 'user@example.com',
  subject: '가입을 축하합니다',
  html,
});

// SMS 발송
import { sendSMS } from '../utils/notifications';

await sendSMS({
  receiver: '01012345678',
  message: '풀스택 학습 사이트에 가입해주셔서 감사합니다!',
});`,
    codeLang: 'typescript',
  },
  {
    id: 'api-patterns',
    title: 'API 통신 패턴',
    icon: '🔗',
    description: 'Supabase 클라이언트를 활용한 CRUD 패턴, 에러 처리, 타입 안전한 쿼리를 학습합니다.',
    content: [
      { subtitle: 'Supabase 쿼리 패턴', text: 'Supabase JS 클라이언트는 PostgREST를 래핑한 빌더 패턴 API를 제공합니다. SQL에 가까운 직관적인 문법으로 데이터를 조회/삽입/수정/삭제합니다.' },
      { subtitle: '주요 메서드', items: ['select(): 데이터 조회 (필터, 정렬, 페이지네이션)', 'insert(): 데이터 삽입', 'update(): 데이터 수정', 'delete(): 데이터 삭제', 'rpc(): PostgreSQL 함수 호출'] },
      { subtitle: '에러 처리 전략', items: ['Supabase가 없을 때 graceful degradation', '{ data, error } 구조분해로 에러 확인', 'try-catch로 네트워크 에러 포착', '사용자에게 Toast로 결과 알림'] },
    ],
    code: `// CRUD 패턴 예시
async function getPosts(page = 1, pageSize = 10) {
  const { data, error, count } = await supabase
    .from('fs_board_posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) throw error;
  return { data, count };
}

async function createPost(title, content, userId) {
  const { data, error } = await supabase
    .from('fs_board_posts')
    .insert([{ title, content, user_id: userId }])
    .select()
    .single();

  if (error) throw error;
  return data;
}`,
    codeLang: 'typescript',
  },
];

/* ─── Claude Code 토픽 ─── */
export const claudeCodeTopics: Topic[] = [
  {
    id: 'claude-code-intro',
    title: 'Claude Code 소개',
    icon: '🤖',
    description: 'Claude Code CLI 도구의 핵심 기능, 설치 방법, 에이전틱 코딩 개념을 학습합니다.',
    content: [
      { subtitle: 'Claude Code란?', text: 'Claude Code는 Anthropic이 만든 CLI 기반 AI 코딩 도구로, 터미널에서 직접 코드를 생성, 편집, 실행하는 에이전틱 코딩을 지원합니다.' },
      { subtitle: '핵심 특징', items: ['터미널 기반 (VS Code, JetBrains 확장 지원)', '파일 읽기/쓰기/편집 자동 수행', 'Git 작업 자동화 (커밋, PR 생성)', '멀티 파일 동시 편집', 'MCP(Model Context Protocol) 서버 연동'] },
      { subtitle: '설치 방법', text: 'npm install -g @anthropic-ai/claude-code 명령으로 설치합니다. Node.js 18+ 필요.' },
    ],
    code: `# Claude Code 설치
npm install -g @anthropic-ai/claude-code

# 프로젝트에서 Claude Code 시작
cd my-project
claude

# 대화형 모드에서 명령
> "이 프로젝트의 구조를 분석해줘"
> "사용자 인증 기능을 추가해줘"
> "TypeScript 타입 에러를 모두 수정해줘"

# 원라인 명령
claude "README.md를 한국어로 작성해줘"`,
    codeLang: 'bash',
  },
  {
    id: 'claude-md',
    title: 'CLAUDE.md 활용',
    icon: '📋',
    description: 'CLAUDE.md 파일을 통한 프로젝트 맞춤 설정, 컨벤션 정의, 메모리 관리를 학습합니다.',
    content: [
      { subtitle: 'CLAUDE.md란?', text: 'CLAUDE.md는 프로젝트 루트에 두는 설정 파일로, Claude Code가 프로젝트를 이해하는 데 필요한 맥락과 규칙을 정의합니다.' },
      { subtitle: '포함할 내용', items: ['프로젝트 개요 및 기술 스택', '코딩 컨벤션 (네이밍, 파일 구조 등)', '빌드 및 배포 명령어', '금지 사항 (rm -rf, force push 등)', '자주 사용하는 패턴과 예시'] },
      { subtitle: '메모리 시스템', text: '.claude/memory/ 디렉토리에 세션 간 지속되는 메모리를 저장합니다. 프로젝트 구조, 반복 패턴, 해결된 문제 등을 기록합니다.' },
    ],
    code: `# CLAUDE.md 예시

## 프로젝트 개요
- React 19 + Vite + TypeScript
- Supabase 백엔드 (접두사: fs_)
- GitHub Pages 배포

## 코딩 규칙
- 함수형 컴포넌트만 사용
- CSS 변수 기반 스타일링
- 한국어 UI, 영문 코드

## 배포
\`\`\`bash
npm run build && npx gh-pages -d dist
\`\`\`

## 금지 사항
- git push --force 절대 금지
- .env 파일 커밋 금지
- node_modules 커밋 금지`,
    codeLang: 'markdown',
  },
  {
    id: 'agentic-coding',
    title: '에이전틱 코딩 실전',
    icon: '🚀',
    description: 'Claude Code를 활용한 실전 개발 워크플로우 — 기능 구현, 디버깅, 리팩토링을 AI와 함께합니다.',
    content: [
      { subtitle: '에이전틱 코딩이란?', text: 'AI가 단순 코드 완성을 넘어, 파일 시스템 접근, 명령 실행, Git 작업까지 자율적으로 수행하는 개발 방식입니다.' },
      { subtitle: '실전 워크플로우', items: ['1. 요구사항을 자연어로 설명', '2. Claude가 파일 구조 분석', '3. 관련 파일 읽기 및 수정', '4. 빌드/테스트 실행', '5. 에러 발생 시 자동 수정', '6. Git 커밋 및 PR 생성'] },
      { subtitle: '효과적인 프롬프트 작성법', items: ['구체적인 요구사항 명시', '기존 코드 패턴 참조 요청', '단계별 접근 (plan → implement → test)', '결과물 검증 요청 (tsc, build)'] },
    ],
    code: `# Claude Code 실전 사용 예시

# 새 페이지 추가
claude "vibe 사이트의 ClaudeCodeGuide.tsx를 참고해서
       full-stack 사이트에 FrontendGuide 페이지를 만들어줘.
       사이드바 레이아웃으로 frontendTopics를 표시해."

# 버그 수정
claude "npm run build 하면 TypeScript 에러가 나는데 수정해줘"

# 리팩토링
claude "communityService.ts의 반복 코드를
       제네릭 함수로 리팩토링해줘"

# 배포
claude "/commit" # 변경사항 커밋
claude "npx gh-pages -d dist" # GitHub Pages 배포`,
    codeLang: 'bash',
  },
  {
    id: 'mcp-server',
    title: 'MCP 서버 연동',
    icon: '🔌',
    description: 'Model Context Protocol을 통한 외부 서비스 연동 — GitHub, Notion, 데이터베이스 등과 Claude Code를 연결합니다.',
    content: [
      { subtitle: 'MCP란?', text: 'Model Context Protocol은 AI 모델이 외부 도구와 데이터에 접근하기 위한 표준 프로토콜입니다. Claude Code에서 MCP 서버를 통해 다양한 서비스와 연동할 수 있습니다.' },
      { subtitle: '주요 MCP 서버', items: ['GitHub MCP: PR 조회, 이슈 관리', 'Notion MCP: 문서 조회/생성', 'Supabase MCP: 데이터베이스 직접 조회', 'Slack MCP: 메시지 전송/조회'] },
      { subtitle: '설정 방법', text: '.claude/settings.json 파일에 MCP 서버를 등록합니다. 서버는 npx, docker, 또는 로컬 스크립트로 실행할 수 있습니다.' },
    ],
    code: `// .claude/settings.json 예시
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server"],
      "env": {
        "SUPABASE_URL": "https://xxx.supabase.co",
        "SUPABASE_KEY": "your-service-role-key"
      }
    }
  }
}`,
    codeLang: 'json',
  },
  {
    id: 'project-management',
    title: '프로젝트 관리',
    icon: '📁',
    description: 'Claude Code를 활용한 대규모 프로젝트 관리 — 멀티 사이트, 코드 품질, 자동화를 학습합니다.',
    content: [
      { subtitle: '대규모 프로젝트 관리', text: 'DreamIT의 83개 사이트처럼 대규모 프로젝트를 Claude Code로 효율적으로 관리하는 방법을 학습합니다.' },
      { subtitle: '핵심 전략', items: ['템플릿 프로젝트(templete-ref)로 새 사이트 빠르게 생성', '공유 패턴 (AuthContext, Navbar, Footer) 일관성 유지', '일괄 업데이트 스크립트로 전 사이트 동시 적용', 'TypeScript strict 모드로 코드 품질 보장'] },
      { subtitle: '메모리 활용', items: ['MEMORY.md에 프로젝트 구조 기록', 'sites-catalog.md에 83개 사이트 목록 관리', '개발 이력을 Dev_md/ 폴더에 날짜별 기록', '반복 실수는 debugging.md에 기록'] },
    ],
    code: `# DreamIT 프로젝트 관리 구조

D:\\dreamit-web\\
├── templete-ref/      # 새 사이트 생성용 템플릿
├── full-stack/        # 이 사이트!
├── vibe/              # 바이브코딩 사이트
├── coding/            # 코딩 학습 사이트
├── ... (83개 사이트)
├── Dev_md/            # 개발 이력 문서
│   ├── 2026-04-25-full-stack-setup.md
│   └── ...
└── .claude/
    └── memory/
        ├── MEMORY.md          # 핵심 메모리
        └── sites-catalog.md   # 사이트 카탈로그`,
    codeLang: 'bash',
  },
];

/* ─── 바이브코딩 토픽 ─── */
export const vibeCodingTopics: Topic[] = [
  {
    id: 'vibe-concept',
    title: '바이브코딩 개념',
    icon: '🎵',
    description: '바이브코딩(Vibe Coding)의 개념과 철학 — AI와 협업하는 새로운 개발 패러다임을 이해합니다.',
    content: [
      { subtitle: '바이브코딩이란?', text: '바이브코딩은 "분위기(vibe)에 맞게 코딩한다"는 의미로, 개발자가 원하는 결과를 자연어로 설명하면 AI가 코드를 생성하고 실행하는 개발 방식입니다.' },
      { subtitle: '기존 개발과의 차이', items: ['전통적 개발: 개발자가 한 줄씩 코드 작성', '코파일럿 시대: AI가 코드 완성 제안', '바이브코딩: AI가 전체 기능을 자율적으로 구현', '개발자 역할: 코더 → 아키텍트/리뷰어로 전환'] },
      { subtitle: '바이브코딩의 장점', items: ['개발 속도 10~50배 향상', '코딩 경험 없어도 앱 개발 가능', '반복 작업 자동화', '일관된 코드 품질 유지'] },
    ],
    code: `# 바이브코딩 워크플로우 예시

# Step 1: 비전을 설명
"사용자가 글을 쓸 수 있는 커뮤니티 게시판을 만들어줘.
 카테고리 필터, 페이지네이션, 댓글 기능이 필요해."

# Step 2: AI가 구현
# → communityService.ts 생성
# → CommunityList.tsx 생성
# → CommunityWrite.tsx 생성
# → CommunityView.tsx 생성
# → SQL 스크립트 생성

# Step 3: 리뷰 & 수정
"카테고리에 '수강신청'과 '수강후기'를 추가해줘"

# Step 4: 배포
"빌드하고 GitHub Pages에 배포해줘"`,
    codeLang: 'bash',
  },
  {
    id: 'prompt-engineering',
    title: '프롬프트 엔지니어링',
    icon: '💡',
    description: 'AI에게 효과적으로 지시하는 프롬프트 작성법 — 맥락 제공, 단계별 지시, 결과 검증을 학습합니다.',
    content: [
      { subtitle: '좋은 프롬프트의 조건', items: ['명확한 목표 설정 (무엇을 만들 것인가)', '맥락 제공 (기존 코드, 기술 스택, 규칙)', '구체적인 요구사항 (UI, 기능, 에러 처리)', '참조할 예시 (기존 파일, 패턴)'] },
      { subtitle: '프롬프트 패턴', items: ['분석 요청: "이 코드의 구조를 분석하고 개선점을 찾아줘"', '구현 요청: "vibe의 CommunityList.tsx를 참고해서 만들어줘"', '수정 요청: "TypeScript 에러를 모두 수정해줘"', '검증 요청: "npm run build가 성공하는지 확인해줘"'] },
    ],
    code: `# 나쁜 프롬프트 ❌
"로그인 기능 만들어"

# 좋은 프롬프트 ✅
"vibe 사이트의 Login.tsx를 참고해서 full-stack 사이트의
 로그인 페이지를 만들어줘.

 요구사항:
 1. Google OAuth + Kakao OAuth 지원
 2. 이메일/비밀번호 로그인 및 회원가입
 3. 비밀번호 재설정 기능
 4. AuthContext의 signIn, signInWithGoogle,
    signInWithKakao 함수 사용
 5. 로그인 성공 시 홈(/)으로 리다이렉트
 6. CSS는 auth-page, auth-card 등 기존 클래스 사용"`,
    codeLang: 'bash',
  },
  {
    id: 'ai-tools',
    title: 'AI 코딩 도구 비교',
    icon: '🛠️',
    description: 'Claude Code, Cursor, GitHub Copilot, Codex 등 주요 AI 코딩 도구를 비교하고 적합한 도구를 선택합니다.',
    content: [
      { subtitle: 'AI 코딩 도구 분류', items: ['코드 완성형: GitHub Copilot, Codeium', 'IDE 통합형: Cursor (VS Code 기반)', 'CLI 에이전트형: Claude Code, Codex CLI', '웹 빌더형: Bolt, Lovable, v0'] },
      { subtitle: '도구별 특징 비교', items: ['Claude Code: CLI 기반, 파일 시스템 직접 접근, 대규모 프로젝트에 강점', 'Cursor: VS Code 기반 IDE, Tab 완성 + Chat + Composer', 'GitHub Copilot: 코드 완성 특화, 대부분 IDE 지원', 'Codex CLI: OpenAI의 CLI 도구, 코드 실행 환경 내장'] },
      { subtitle: '추천 조합', text: 'Claude Code(CLI) + Cursor(IDE)를 함께 사용하면 시너지가 극대화됩니다. Claude Code로 대규모 작업, Cursor로 세부 편집.' },
    ],
    code: `# Claude Code vs Cursor 사용 시나리오

# Claude Code가 적합한 경우:
# - 새 프로젝트 전체 생성
# - 멀티 파일 동시 편집
# - Git 작업 자동화
# - 대규모 리팩토링
# - CI/CD 파이프라인 설정

# Cursor가 적합한 경우:
# - 한 파일 내 세부 편집
# - UI 디자인 미세 조정
# - 디버깅 (브레이크포인트 활용)
# - 타입 정의 자동완성
# - 인라인 코드 리뷰`,
    codeLang: 'bash',
  },
  {
    id: 'code-review',
    title: 'AI 코드 리뷰',
    icon: '🔍',
    description: 'AI가 생성한 코드를 검증하고 개선하는 방법 — 보안, 성능, 가독성 체크리스트를 학습합니다.',
    content: [
      { subtitle: 'AI 코드를 리뷰해야 하는 이유', text: 'AI가 생성한 코드도 완벽하지 않습니다. 보안 취약점, 성능 이슈, 불필요한 코드가 포함될 수 있으므로 반드시 검증해야 합니다.' },
      { subtitle: '리뷰 체크리스트', items: ['보안: XSS, SQL Injection, 환경변수 노출 확인', '성능: 불필요한 re-render, N+1 쿼리, 큰 번들 사이즈', '가독성: 변수명, 함수 분리, 주석 적절성', '타입 안전성: any 타입 사용 최소화', '에러 처리: 예외 상황 대응 로직 확인'] },
    ],
    code: `# AI 코드 리뷰 프롬프트 예시

claude "다음 관점에서 src/contexts/AuthContext.tsx를
       리뷰해줘:

       1. 보안 이슈 (토큰 노출, XSS 등)
       2. 메모리 누수 가능성
       3. 에러 처리 누락
       4. TypeScript 타입 안전성
       5. 성능 최적화 여지

       문제가 있으면 수정 코드를 제안해줘."`,
    codeLang: 'bash',
  },
];

/* ─── 배포 토픽 ─── */
export const deployTopics: Topic[] = [
  {
    id: 'github-pages',
    title: 'GitHub Pages 배포',
    icon: '🌐',
    description: 'GitHub Pages를 사용한 정적 사이트 배포 — gh-pages 패키지, 커스텀 도메인, SPA 라우팅 설정을 학습합니다.',
    content: [
      { subtitle: 'GitHub Pages란?', text: 'GitHub 리포지토리에서 직접 정적 웹사이트를 호스팅하는 무료 서비스입니다. DreamIT의 83개 사이트가 모두 GitHub Pages로 배포됩니다.' },
      { subtitle: '배포 흐름', items: ['1. npm run build로 dist/ 폴더 생성', '2. npx gh-pages -d dist로 gh-pages 브랜치에 푸시', '3. GitHub Pages가 자동으로 사이트 업데이트', '4. 커스텀 도메인(*.dreamitbiz.com) 적용'] },
      { subtitle: 'SPA 라우팅 처리', text: 'GitHub Pages는 서버 사이드 라우팅을 지원하지 않으므로, 404.html 리다이렉트 스크립트와 index.html의 URL 복원 스크립트로 SPA 라우팅을 처리합니다.' },
    ],
    code: `# 배포 명령어
npm run build && npx gh-pages -d dist

# package.json 스크립트
{
  "scripts": {
    "build": "tsc -b && vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 커스텀 도메인 설정 (public/CNAME)
full-stack.dreamitbiz.com

# Cloudflare DNS 설정
# Type: CNAME
# Name: full-stack
# Target: aebonlee.github.io`,
    codeLang: 'bash',
  },
  {
    id: 'domain-setup',
    title: '도메인 & DNS 설정',
    icon: '🔗',
    description: 'Cloudflare DNS 설정, HTTPS 자동 인증, 서브도메인 관리를 학습합니다.',
    content: [
      { subtitle: 'Cloudflare DNS', text: 'dreamitbiz.com 도메인의 DNS를 Cloudflare에서 관리합니다. 서브도메인별로 CNAME 레코드를 GitHub Pages에 연결합니다.' },
      { subtitle: '설정 단계', items: ['Cloudflare에 서브도메인 CNAME 추가', 'GitHub 리포지토리 Settings → Pages → Custom Domain 설정', 'HTTPS 자동 인증서 발급 (GitHub가 자동 처리)', 'public/CNAME 파일에 도메인 기록'] },
      { subtitle: '트러블슈팅', items: ['DNS 전파 대기 (최대 48시간, 보통 5분)', 'HTTPS 인증서 발급 대기 (최대 24시간)', 'CNAME 파일이 빌드 시 삭제되지 않도록 public/ 폴더에 배치', 'Cloudflare Proxy(오렌지 구름)는 GitHub Pages와 충돌할 수 있음'] },
    ],
    code: `# Cloudflare DNS 레코드 예시

# full-stack.dreamitbiz.com
Type: CNAME
Name: full-stack
Target: aebonlee.github.io
Proxy: DNS only (회색 구름)

# GitHub Repository Settings
# Settings → Pages → Custom domain
# full-stack.dreamitbiz.com
# ✅ Enforce HTTPS`,
    codeLang: 'bash',
  },
  {
    id: 'og-seo',
    title: 'OG 태그 & SEO',
    icon: '🏷️',
    description: 'Open Graph 메타 태그, SEO 최적화, 소셜 미디어 공유 미리보기 설정을 학습합니다.',
    content: [
      { subtitle: 'Open Graph (OG) 태그', text: 'OG 태그는 웹페이지가 소셜 미디어에서 공유될 때 표시되는 미리보기 정보를 정의합니다.' },
      { subtitle: '필수 OG 태그', items: ['og:title — 페이지 제목', 'og:description — 페이지 설명', 'og:image — 미리보기 이미지 (1200x630px 권장)', 'og:url — 페이지 URL', 'og:type — website', 'og:site_name — 사이트 이름'] },
      { subtitle: 'OG 이미지 생성', text: 'sharp 또는 canvas 패키지를 사용하여 프로그래밍 방식으로 1200x630 크기의 OG 이미지를 생성합니다.' },
    ],
    code: `<!-- index.html OG 태그 설정 -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="FULL-STACK" />
<meta property="og:title"
  content="FULL-STACK - Claude Code & 바이브코딩" />
<meta property="og:description"
  content="풀스택 개발을 배우는 학습 플랫폼" />
<meta property="og:url"
  content="https://full-stack.dreamitbiz.com" />
<meta property="og:image"
  content="https://full-stack.dreamitbiz.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- 카카오 공유 디버거 -->
<!-- https://developers.kakao.com/tool/debugger/sharing -->`,
    codeLang: 'html',
  },
  {
    id: 'ci-cd',
    title: 'CI/CD 자동화',
    icon: '🔄',
    description: 'GitHub Actions를 활용한 빌드/배포 자동화, TypeScript 검증, 자동 배포 파이프라인을 학습합니다.',
    content: [
      { subtitle: 'CI/CD란?', text: 'CI(Continuous Integration)는 코드 변경 시 자동 빌드/테스트, CD(Continuous Deployment)는 자동 배포를 의미합니다.' },
      { subtitle: '현재 DreamIT의 배포 방식', items: ['수동 배포: npm run build && npx gh-pages -d dist', '장점: 배포 시점을 개발자가 제어', '단점: 수동 작업, 실수 가능성', 'Claude Code에서 "deploy" 명령으로 자동화 가능'] },
      { subtitle: 'GitHub Actions 자동화', text: 'main 브랜치에 push 시 자동으로 빌드하고 gh-pages 브랜치에 배포하는 워크플로우를 설정할 수 있습니다.' },
    ],
    code: `# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
    codeLang: 'yaml',
  },
];

/* ─── 실전 프로젝트 토픽 ─── */
export const projectTopics: Topic[] = [
  {
    id: 'project-planning',
    title: '프로젝트 설계',
    icon: '📐',
    description: '풀스택 프로젝트의 기획부터 설계까지 — 요구사항 분석, 와이어프레임, 기술 스택 선정을 학습합니다.',
    content: [
      { subtitle: '프로젝트 시작하기', text: 'Claude Code와 함께 새 프로젝트를 처음부터 만드는 과정을 단계별로 진행합니다.' },
      { subtitle: '설계 단계', items: ['1. 요구사항 정의: 어떤 기능이 필요한가?', '2. 기술 스택 선정: React + Vite + Supabase + TypeScript', '3. 데이터 모델 설계: 테이블, 관계, RLS 정책', '4. 페이지/라우트 구조 설계', '5. UI/UX 레이아웃 결정 (사이드바, 카드 그리드 등)'] },
    ],
    code: `# Claude Code로 프로젝트 시작하기

# 1. 리포지토리 생성 & 클론
git clone https://github.com/aebonlee/my-project.git

# 2. 템플릿에서 시작
claude "templete-ref 폴더를 기반으로
       새 학습 사이트를 설정해줘.
       site.ts의 id, name, dbPrefix를 수정해줘."

# 3. Supabase 테이블 생성
claude "fs_ 접두사로 게시판과 댓글 테이블을
       생성하는 SQL 스크립트를 작성해줘."

# 4. 핵심 기능 구현
claude "인증, 게시판, 관리자 대시보드를 구현해줘."`,
    codeLang: 'bash',
  },
  {
    id: 'fullstack-build',
    title: '풀스택 앱 구축',
    icon: '🏗️',
    description: 'React + Supabase로 완전한 풀스택 애플리케이션을 구축하는 실전 과정입니다.',
    content: [
      { subtitle: '프론트엔드 구축', items: ['React 19 + Vite 7 프로젝트 생성', '라우팅 (React Router v7)', '인증 UI (로그인, 회원가입, 소셜 로그인)', '학습 콘텐츠 페이지 (사이드바 레이아웃)', '커뮤니티 게시판 (CRUD + 댓글)', '관리자 대시보드'] },
      { subtitle: '백엔드 구축', items: ['Supabase 테이블 생성 (접두사 전략)', 'RLS 정책 설정', 'OAuth 설정 (Google, Kakao)', 'Edge Functions 연동 (이메일, SMS)'] },
      { subtitle: '통합 & 배포', items: ['환경변수 설정 (.env)', 'TypeScript 빌드 (tsc -b)', 'GitHub Pages 배포 (gh-pages -d dist)', 'Cloudflare DNS + 커스텀 도메인'] },
    ],
    code: `# 풀스택 프로젝트 전체 구조

my-project/
├── index.html          # SPA 진입점 + OG 태그
├── package.json
├── vite.config.ts
├── .env                # Supabase 키 (gitignored)
├── public/
│   ├── CNAME           # 커스텀 도메인
│   ├── favicon.svg
│   └── og-image.png    # 소셜 미리보기 이미지
├── src/
│   ├── main.tsx        # 앱 마운트 + Provider
│   ├── App.tsx         # 라우팅
│   ├── index.css       # 디자인 시스템
│   ├── config/         # Supabase, Admin 설정
│   ├── contexts/       # Auth, Theme, Toast
│   ├── components/     # 재사용 컴포넌트
│   ├── pages/          # 페이지 컴포넌트
│   ├── services/       # Supabase CRUD
│   ├── data/           # 학습 콘텐츠 데이터
│   ├── hooks/          # 커스텀 훅
│   └── utils/          # 유틸리티 함수
└── supabase/
    └── setup.sql       # 테이블 생성 스크립트`,
    codeLang: 'bash',
  },
  {
    id: 'community-feature',
    title: '커뮤니티 기능 구현',
    icon: '💬',
    description: '게시판 CRUD, 카테고리 필터, 페이지네이션, 댓글 시스템을 구현하는 실전 프로젝트입니다.',
    content: [
      { subtitle: '기능 목록', items: ['게시글 작성/조회/삭제 (CRUD)', '카테고리 필터 (전체/공지/자유/질문/수강신청/수강후기)', '페이지네이션 (10개씩 표시)', '댓글 작성/삭제', '조회수 증가 (RPC 함수)', '본인 글/댓글만 삭제 가능'] },
      { subtitle: '데이터 구조', items: ['fs_board_posts: 게시글 테이블', 'fs_board_comments: 댓글 테이블', 'user_id로 auth.users 참조', 'RLS로 읽기는 공개, 수정/삭제는 작성자만'] },
    ],
    code: `// 커뮤니티 서비스 CRUD 예시
import { supabase } from '../config/supabase';

// 게시글 목록 조회 (페이지네이션)
export async function getPosts(page = 1, pageSize = 10) {
  const { data, error, count } = await supabase
    .from('fs_board_posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);
  return { data, error, count };
}

// 게시글 작성
export async function createPost({ title, content, category, userId, authorName }) {
  const { data, error } = await supabase
    .from('fs_board_posts')
    .insert([{ title, content, category, user_id: userId, author_name: authorName }])
    .select().single();
  return { data, error };
}`,
    codeLang: 'typescript',
  },
  {
    id: 'admin-dashboard',
    title: '관리자 대시보드',
    icon: '📊',
    description: '회원 관리, 콘텐츠 관리, 통계 기능을 갖춘 관리자 대시보드를 구현합니다.',
    content: [
      { subtitle: '관리자 기능', items: ['회원 관리: 목록 조회, 검색, 역할 확인', '콘텐츠 관리: 게시글/댓글 조회, 검색, 삭제', '통계: 회원수, 게시글수, 댓글수 요약', 'AdminGuard로 관리자만 접근 가능'] },
      { subtitle: '접근 제어', items: ['ADMIN_EMAILS 배열에 등록된 이메일만 관리자 인정', '3개 글로벌 슈퍼관리자 계정', 'AdminGuard 컴포넌트로 라우트 보호', '비관리자는 홈으로 리다이렉트'] },
    ],
    code: `// 관리자 권한 체크
import { ADMIN_EMAILS } from '../config/admin';

const allEmails = [
  user?.email,
  user?.user_metadata?.email,
].filter(Boolean).map(e => e.toLowerCase());

const isAdmin = allEmails.some(
  e => ADMIN_EMAILS.includes(e)
);

// AdminGuard 컴포넌트
function AdminGuard({ children }) {
  const { user, isAdmin, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/" />;
  return children;
}`,
    codeLang: 'tsx',
  },
  {
    id: 'portfolio',
    title: '포트폴리오 완성',
    icon: '🎓',
    description: '완성된 프로젝트를 포트폴리오로 정리하고, README 작성, 배포 URL 공유를 학습합니다.',
    content: [
      { subtitle: '포트폴리오 체크리스트', items: ['README.md 작성 (프로젝트 설명, 기술 스택, 스크린샷)', 'OG 이미지 설정 (소셜 미디어 미리보기)', '커스텀 도메인 연결', 'TypeScript 빌드 성공 (tsc 0 errors)', '모바일 반응형 확인', '다크 모드 지원 확인'] },
      { subtitle: '발표 준비', items: ['프로젝트 개요 (무엇을, 왜 만들었는가)', '기술적 도전과 해결 방법', 'Claude Code 활용 사례', '배포된 사이트 데모', '향후 개선 계획'] },
    ],
    code: `# README.md 작성 예시

# FULL-STACK 학습 플랫폼

Claude Code & 바이브코딩으로 풀스택 개발을 배우는
학습 플랫폼입니다.

## 기술 스택
- **Frontend**: React 19, Vite 7, TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Deployment**: GitHub Pages + Cloudflare DNS
- **AI Tools**: Claude Code, Cursor

## 주요 기능
- 7개 학습 섹션 (프론트엔드, 백엔드, Claude Code 등)
- Google/Kakao OAuth 로그인
- 커뮤니티 게시판 (CRUD + 댓글)
- 관리자 대시보드
- 다크 모드 + 5색 테마
- 모바일 반응형

## 배포 URL
https://full-stack.dreamitbiz.com`,
    codeLang: 'markdown',
  },
];

/* ─── FAQ ─── */
export const faqData: FaqItem[] = [
  { question: '풀스택 개발이란 무엇인가요?', answer: '풀스택 개발은 프론트엔드(UI)와 백엔드(서버, 데이터베이스)를 모두 다루는 개발 방식입니다. 이 사이트에서는 React(프론트엔드) + Supabase(백엔드) 조합으로 풀스택 웹 앱을 만드는 방법을 학습합니다.' },
  { question: 'Claude Code와 바이브코딩의 차이점은?', answer: 'Claude Code는 Anthropic의 CLI 기반 AI 코딩 도구이고, 바이브코딩은 AI와 대화하며 코드를 만드는 개발 방식의 총칭입니다. Claude Code는 바이브코딩을 실현하는 도구 중 하나입니다.' },
  { question: '코딩을 전혀 모르는 초보자도 배울 수 있나요?', answer: '네, 가능합니다. AI 도구가 코드를 대신 작성해주므로, HTML/CSS/JavaScript의 기본 개념만 이해하면 바이브코딩으로 실제 웹 앱을 만들 수 있습니다.' },
  { question: 'Supabase는 왜 사용하나요?', answer: 'Supabase는 무료 티어가 넉넉하고, PostgreSQL 기반이라 강력하며, 인증/저장소/실시간 기능을 기본 제공합니다. 별도의 서버 구축 없이 백엔드를 바로 사용할 수 있어 풀스택 학습에 최적입니다.' },
  { question: 'GitHub Pages는 무료인가요?', answer: '네, GitHub Pages는 공개 리포지토리에 대해 완전 무료입니다. 커스텀 도메인도 무료로 연결할 수 있고, HTTPS 인증서도 자동으로 발급됩니다. DreamIT의 83개 사이트가 모두 GitHub Pages로 운영됩니다.' },
  { question: 'React와 Vite는 각각 무엇인가요?', answer: 'React는 Facebook이 만든 UI 라이브러리로, 컴포넌트 기반으로 웹 인터페이스를 구축합니다. Vite는 차세대 빌드 도구로, React 프로젝트의 빠른 개발 서버와 최적화된 빌드를 제공합니다.' },
  { question: 'TypeScript는 꼭 필요한가요?', answer: 'TypeScript는 선택 사항이지만, 코드의 안정성과 개발 효율을 크게 높여줍니다. IDE의 자동완성, 타입 체크, 리팩토링 지원이 훨씬 강력해집니다. Claude Code도 TypeScript를 잘 지원합니다.' },
  { question: '이 사이트의 기술 스택은?', answer: 'React 19 + Vite 7 + TypeScript + Supabase + GitHub Pages입니다. 이 사이트 자체가 학습하는 풀스택 기술로 만들어졌습니다. 소스 코드는 GitHub에서 확인할 수 있습니다.' },
];

/* ─── 교육과정 ─── */
export const educationData: EducationCourse[] = [
  {
    id: 'beginner',
    level: '입문',
    title: '풀스택 개발 첫걸음',
    description: 'HTML, CSS, JavaScript 기초부터 React와 Vite 프로젝트 설정까지 풀스택 개발의 기초를 다집니다.',
    topics: ['웹 개발 기초 (HTML/CSS/JS)', 'React 컴포넌트와 JSX', 'Vite 프로젝트 생성과 구조', 'Git & GitHub 기초', 'Claude Code 설치와 기본 사용법'],
  },
  {
    id: 'elementary',
    level: '초급',
    title: '프론트엔드 마스터',
    description: 'React Router, 상태 관리, TypeScript, CSS 디자인 시스템을 익혀 완전한 프론트엔드를 구축합니다.',
    topics: ['React Router로 SPA 라우팅', 'Context API 상태 관리', 'TypeScript 실전 적용', 'CSS 변수 기반 디자인 시스템', '다크 모드와 반응형 디자인', '코드 스플리팅과 성능 최적화'],
  },
  {
    id: 'intermediate',
    level: '중급',
    title: '백엔드 & 풀스택 통합',
    description: 'Supabase를 활용한 백엔드 구축, OAuth 인증, 데이터베이스 설계, Edge Functions를 학습합니다.',
    topics: ['Supabase PostgreSQL 데이터베이스', 'Google/Kakao OAuth 인증', 'Row Level Security(RLS)', 'Edge Functions (이메일, SMS)', '커뮤니티 게시판 구현', '관리자 대시보드 구축'],
  },
  {
    id: 'advanced',
    level: '고급',
    title: '배포 & 프로젝트 관리',
    description: 'GitHub Pages 배포, CI/CD 자동화, 대규모 프로젝트 관리, 포트폴리오 완성까지 마스터합니다.',
    topics: ['GitHub Pages + 커스텀 도메인 배포', 'Cloudflare DNS 설정', 'OG 태그와 SEO 최적화', 'GitHub Actions CI/CD', 'Claude Code로 대규모 프로젝트 관리', '포트폴리오 작성과 발표'],
  },
];

/* ─── 검색 인덱스 ─── */
export const searchData: SearchItem[] = [
  // 프론트엔드
  ...frontendTopics.map(t => ({ title: t.title, category: '프론트엔드', path: '/frontend', icon: t.icon })),
  // 백엔드
  ...backendTopics.map(t => ({ title: t.title, category: '백엔드', path: '/backend', icon: t.icon })),
  // Claude Code
  ...claudeCodeTopics.map(t => ({ title: t.title, category: 'Claude Code', path: '/claude-code', icon: t.icon })),
  // 바이브코딩
  ...vibeCodingTopics.map(t => ({ title: t.title, category: '바이브코딩', path: '/vibe-coding', icon: t.icon })),
  // 배포
  ...deployTopics.map(t => ({ title: t.title, category: '배포', path: '/deploy', icon: t.icon })),
  // 프로젝트
  ...projectTopics.map(t => ({ title: t.title, category: '프로젝트', path: '/projects', icon: t.icon })),
  // 기타
  { title: 'Q&A', category: '자주 묻는 질문', path: '/qna', icon: '❓' },
  { title: '교육과정', category: '커리큘럼', path: '/education', icon: '📚' },
  { title: '커뮤니티', category: '게시판', path: '/community', icon: '💬' },
];
