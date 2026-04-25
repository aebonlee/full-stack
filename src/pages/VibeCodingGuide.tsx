import React, { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { vibeCodingTopics } from '../data/learningData';

const aiTools = [
  {
    name: 'Claude Code',
    icon: '🤖',
    type: 'CLI 에이전트형',
    color: '#0A2463',
    features: [
      'CLI 기반, 파일 시스템 직접 접근',
      '대규모 프로젝트 전체 생성',
      '멀티 파일 동시 편집',
      'Git 작업 자동화',
      'CLAUDE.md로 프로젝트 컨텍스트 관리',
    ],
    bestFor: '새 프로젝트 생성, 대규모 리팩토링, CI/CD 설정',
  },
  {
    name: 'Cursor',
    icon: '✏️',
    type: 'IDE 통합형',
    color: '#7C3AED',
    features: [
      'VS Code 기반 IDE',
      'Tab 완성 + Chat + Composer',
      '인라인 코드 편집',
      '디버깅 브레이크포인트 활용',
      'UI 디자인 미세 조정',
    ],
    bestFor: '한 파일 내 세부 편집, 디버깅, 타입 자동완성',
  },
  {
    name: 'GitHub Copilot',
    icon: '🐙',
    type: '코드 완성형',
    color: '#059669',
    features: [
      '코드 완성 특화',
      '대부분 IDE 지원',
      '주석 기반 코드 생성',
      'GitHub 생태계 통합',
      'Copilot Chat 지원',
    ],
    bestFor: '빠른 코드 완성, 보일러플레이트 자동 생성',
  },
  {
    name: 'Codex CLI',
    icon: '🧠',
    type: 'CLI 에이전트형',
    color: '#EA580C',
    features: [
      'OpenAI의 CLI 도구',
      '코드 실행 환경 내장',
      '멀티모달 입력 지원',
      '샌드박스 실행 가능',
      'GPT 모델 기반',
    ],
    bestFor: '코드 실행과 테스트, 프로토타이핑',
  },
];

export default function VibeCodingGuide(): React.ReactElement {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const topic = vibeCodingTopics[selectedIndex];
  const isAiToolsTopic = topic.id === 'ai-tools';

  return (
    <>
      <Hero
        title="바이브코딩"
        subtitle="바이브코딩 개념, 프롬프트 엔지니어링, AI 도구 비교, 코드 리뷰를 학습합니다."
      />

      <div className="sidebar-layout">
        <aside className="sidebar">
          <nav className="sidebar-menu">
            {vibeCodingTopics.map((t, i) => (
              <button
                key={i}
                className={`sidebar-item${selectedIndex === i ? ' active' : ''}`}
                onClick={() => setSelectedIndex(i)}
              >
                {t.title}
              </button>
            ))}
          </nav>
        </aside>
        <div className="sidebar-content">
          <div className="topic-card">
            <div className="topic-card-header">
              <div className="topic-card-icon">{topic.icon}</div>
              <div className="topic-card-title">{topic.title}</div>
            </div>
            <div className="topic-card-body">
              <p>{topic.description}</p>

              {isAiToolsTopic ? (
                <>
                  <h4>AI 코딩 도구 비교</h4>
                  <div className="ai-tools-grid">
                    {aiTools.map((tool, i) => (
                      <div className="ai-tool-card" key={i} style={{ borderTopColor: tool.color }}>
                        <div className="ai-tool-left" style={{ background: `${tool.color}10` }}>
                          <span className="ai-tool-icon">{tool.icon}</span>
                          <div className="ai-tool-name">{tool.name}</div>
                          <div className="ai-tool-type">{tool.type}</div>
                        </div>
                        <div className="ai-tool-right">
                          <ul className="ai-tool-features">
                            {tool.features.map((f, j) => (
                              <li key={j}>{f}</li>
                            ))}
                          </ul>
                          <div className="ai-tool-best">
                            <strong>추천:</strong> {tool.bestFor}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4>추천 조합</h4>
                  <p>Claude Code(CLI) + Cursor(IDE)를 함께 사용하면 시너지가 극대화됩니다. Claude Code로 대규모 작업, Cursor로 세부 편집.</p>

                  {topic.code && (
                    <CodeBlock code={topic.code} language={topic.codeLang || 'javascript'} />
                  )}
                </>
              ) : (
                <>
                  {topic.content.map((section, idx) => (
                    <div key={idx}>
                      {section.subtitle && <h4>{section.subtitle}</h4>}
                      {section.text && <p>{section.text}</p>}
                      {section.items && (
                        <ul>
                          {section.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                  {topic.code && (
                    <CodeBlock code={topic.code} language={topic.codeLang || 'javascript'} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
