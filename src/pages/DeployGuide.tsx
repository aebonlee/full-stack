import React, { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { deployTopics } from '../data/learningData';

export default function DeployGuide(): React.ReactElement {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const topic = deployTopics[selectedIndex];

  return (
    <>
      <Hero
        title="배포"
        subtitle="GitHub Pages, 도메인 설정, OG 태그, CI/CD 자동화를 학습합니다."
      />

      <div className="sidebar-layout">
        <aside className="sidebar">
          <nav className="sidebar-menu">
            {deployTopics.map((t, i) => (
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
