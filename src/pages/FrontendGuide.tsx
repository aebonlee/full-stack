import React, { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { frontendTopics } from '../data/learningData';

export default function FrontendGuide(): React.ReactElement {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const topic = frontendTopics[selectedIndex];

  return (
    <>
      <Hero
        title="프론트엔드"
        subtitle="React 19, Vite, TypeScript, 라우팅, 상태 관리, CSS 디자인 시스템을 체계적으로 학습합니다."
      />

      <div className="sidebar-layout">
        <aside className="sidebar">
          <nav className="sidebar-menu">
            {frontendTopics.map((t, i) => (
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
