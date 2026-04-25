import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { FiMonitor, FiServer, FiTerminal, FiMusic, FiGlobe, FiLayers, FiHelpCircle, FiBookOpen } from 'react-icons/fi';

interface Category { to: string; icon: React.ReactNode; title: string; description: string; badge?: string; }
interface RoadmapStep { title: string; desc: string; }

const categories: Category[] = [
  { to: '/frontend', icon: <FiMonitor size={24} />, title: '프론트엔드', description: 'React 19, Vite, TypeScript, 라우팅, 상태 관리, CSS 디자인 시스템을 학습합니다.', badge: '6 토픽' },
  { to: '/backend', icon: <FiServer size={24} />, title: '백엔드', description: 'Supabase PostgreSQL, 인증, 데이터베이스, Edge Functions, API 패턴을 학습합니다.', badge: '5 토픽' },
  { to: '/claude-code', icon: <FiTerminal size={24} />, title: 'Claude Code', description: 'CLI 기반 에이전틱 코딩, CLAUDE.md, MCP 서버, 프로젝트 관리를 학습합니다.', badge: '5 토픽' },
  { to: '/vibe-coding', icon: <FiMusic size={24} />, title: '바이브코딩', description: '바이브코딩 개념, 프롬프트 엔지니어링, AI 도구 비교, 코드 리뷰를 학습합니다.', badge: '5 토픽' },
  { to: '/deploy', icon: <FiGlobe size={24} />, title: '배포', description: 'GitHub Pages, 도메인 설정, OG 태그, CI/CD 자동화를 학습합니다.', badge: '4 토픽' },
  { to: '/projects', icon: <FiLayers size={24} />, title: '실전 프로젝트', description: '프로젝트 설계부터 풀스택 구축, 커뮤니티, 관리자 대시보드, 포트폴리오까지.', badge: '5 토픽' },
  { to: '/qna', icon: <FiHelpCircle size={24} />, title: 'Q&A', description: '풀스택 학습 중 자주 묻는 질문과 답변을 모았습니다.' },
  { to: '/education', icon: <FiBookOpen size={24} />, title: '과정소개', description: '풀스택 개발 커리큘럼과 창업교실 프로그램을 소개합니다.' },
];

const roadmapSteps: RoadmapStep[] = [
  { title: '프론트엔드 기초', desc: 'React, Vite, TypeScript의 핵심 개념을 이해하고, 컴포넌트 기반 UI 개발의 기초를 학습합니다.' },
  { title: '백엔드 & 인증', desc: 'Supabase로 데이터베이스를 구축하고, Google/Kakao OAuth 인증 시스템을 완성합니다.' },
  { title: 'AI와 함께 개발', desc: 'Claude Code와 바이브코딩으로 풀스택 프로젝트를 빠르고 효율적으로 구축합니다.' },
  { title: '배포 & 포트폴리오', desc: 'GitHub Pages로 배포하고, OG 태그와 커스텀 도메인을 설정하여 포트폴리오를 완성합니다.' },
];

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero
        title="풀스택 개발 완전정복"
        subtitle="Claude Code & 바이브코딩으로 React + Supabase 풀스택 웹 개발을 처음부터 배포까지 마스터하세요."
        stats={[
          { number: '8', label: '학습 영역' },
          { number: '29+', label: '실전 토픽' },
          { number: '60+', label: '코드 예제' },
        ]}
      />
      <div className="main-section">
        <h2 className="section-title">학습 카테고리</h2>
        <p className="section-subtitle">풀스택 개발에 필요한 모든 지식을 체계적으로 학습하세요</p>
        <div className="card-grid">
          {categories.map((cat, i) => (
            <Link to={cat.to} key={i} className="card" style={{ textDecoration: 'none' }}>
              <div className="card-icon">{cat.icon}</div>
              <div className="card-title">{cat.title}</div>
              <div className="card-desc">{cat.description}</div>
              {cat.badge && <span className="card-badge">{cat.badge}</span>}
            </Link>
          ))}
        </div>
      </div>
      <div className="main-section">
        <h2 className="section-title">학습 로드맵</h2>
        <p className="section-subtitle">단계별로 따라가며 풀스택 개발의 전체 흐름을 이해하세요</p>
        <div className="roadmap">
          {roadmapSteps.map((step, i) => (
            <div className="roadmap-item" key={i}>
              <h4>Step {i + 1}. {step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
