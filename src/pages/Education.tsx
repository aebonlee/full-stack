import React, { useState } from 'react';
import Hero from '../components/Hero';
import { educationData, startupClassData } from '../data/learningData';
import { FiCheck, FiMail, FiPhone, FiMessageSquare, FiClock, FiTarget, FiUsers, FiCalendar, FiAward } from 'react-icons/fi';

type TabKey = 'curriculum' | 'startup';

export default function Education(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<TabKey>('curriculum');

  return (
    <>
      <Hero
        title="과정소개"
        subtitle="풀스택 개발 커리큘럼부터 AI 기반 창업교실까지, 실전 중심의 교육 프로그램을 소개합니다."
      />

      <div className="main-section">
        <div className="edu-tabs">
          <button
            className={`edu-tab${activeTab === 'curriculum' ? ' active' : ''}`}
            onClick={() => setActiveTab('curriculum')}
          >
            풀스택 개발 커리큘럼
          </button>
          <button
            className={`edu-tab${activeTab === 'startup' ? ' active' : ''}`}
            onClick={() => setActiveTab('startup')}
          >
            창업교실
          </button>
        </div>

        {activeTab === 'curriculum' && (
          <>
            <h2 className="section-title" style={{ marginTop: '2rem' }}>단계별 학습 과정</h2>
            <p className="section-subtitle">입문부터 고급까지 체계적인 커리큘럼으로 풀스택 개발을 단계별로 학습하세요</p>
            <div className="card-grid">
              {educationData.map((course, i) => (
                <div className="edu-card" key={i}>
                  <div className="edu-card-header">
                    <div className="edu-card-level">{course.level}</div>
                    <div className="edu-card-title">{course.title}</div>
                  </div>
                  <div className="edu-card-body">
                    <p className="edu-card-desc">{course.description}</p>
                    <ul className="edu-card-topics">
                      {course.topics.map((topic, j) => (
                        <li key={j}>
                          <FiCheck size={14} color="var(--primary)" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'startup' && (
          <>
            <div className="startup-intro" style={{ marginTop: '2rem' }}>
              <h2 className="section-title">창업교실</h2>
              <p className="section-subtitle">
                AI 시대, 코딩을 몰라도 웹 서비스를 만들고 창업할 수 있습니다.
                바이브코딩과 Claude Code를 활용한 실전 창업 교육 프로그램입니다.
              </p>
            </div>

            <div className="startup-highlights">
              <div className="startup-highlight-item">
                <FiTarget size={24} color="var(--primary)" />
                <div>
                  <strong>실전 중심</strong>
                  <p>이론보다 실습, 바로 사업에 적용할 수 있는 실전 역량 강화</p>
                </div>
              </div>
              <div className="startup-highlight-item">
                <FiUsers size={24} color="var(--primary)" />
                <div>
                  <strong>소수 정예</strong>
                  <p>과정당 최대 15명, 1:1 멘토링과 개별 피드백 제공</p>
                </div>
              </div>
              <div className="startup-highlight-item">
                <FiAward size={24} color="var(--primary)" />
                <div>
                  <strong>결과물 보장</strong>
                  <p>수료 시 완성된 사업 기획서 또는 웹 서비스 포트폴리오 제공</p>
                </div>
              </div>
            </div>

            <div className="startup-courses">
              {startupClassData.map((course, i) => (
                <div className="startup-card" key={i}>
                  <div className="startup-card-header">
                    <h3 className="startup-card-title">{course.title}</h3>
                    <div className="startup-card-meta">
                      <span className="startup-meta-item">
                        <FiCalendar size={14} /> {course.duration}
                      </span>
                      <span className="startup-meta-item">
                        <FiUsers size={14} /> {course.target}
                      </span>
                    </div>
                  </div>
                  <div className="startup-card-body">
                    <p className="startup-card-desc">{course.description}</p>

                    <div className="startup-card-section">
                      <h4>커리큘럼</h4>
                      <ul className="startup-curriculum-list">
                        {course.curriculum.map((item, j) => (
                          <li key={j}>
                            <FiCheck size={14} color="var(--primary)" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="startup-card-section">
                      <h4>수료 후 성과물</h4>
                      <ul className="startup-outcomes-list">
                        {course.outcomes.map((item, j) => (
                          <li key={j}>
                            <FiAward size={14} color="var(--accent, #2EC4B6)" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="edu-contact-box">
          <h3 className="edu-contact-title">교육 문의</h3>
          <p className="edu-contact-desc">
            교육 과정에 대한 자세한 문의는 아래 연락처로 연락주세요.
          </p>
          <div className="edu-contact-list">
            <div className="edu-contact-item">
              <FiMail size={18} />
              <span>aebon@dreamitbiz.com</span>
            </div>
            <div className="edu-contact-item">
              <FiPhone size={18} />
              <span>010-3700-0629</span>
            </div>
            <div className="edu-contact-item">
              <FiMessageSquare size={18} />
              <span>카카오톡: aebon</span>
            </div>
            <div className="edu-contact-item">
              <FiClock size={18} />
              <span>평일: 09:00 ~ 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
