import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-pipeline">
      <div className="container">
        <div className="section-header-pipeline">
          <div className="pipeline-stage-badge">
            <span className="stage-icon">📊</span>
            <span className="stage-text">STAGE 1: DATA INGESTION</span>
          </div>
          <h2 className="section-title-pipeline">About Me</h2>
          <p className="section-subtitle-pipeline">
            Raw data input • Profile validation • Quality check: PASSED ✓
          </p>
        </div>

        <div className="about-grid-pipeline">
          {/* Left: Photo and Quick Stats */}
          <div className="about-photo-section">
            <div className="profile-card-glow">
              <div className="profile-image-wrapper">
                <img src="/profile-about.jpg" alt="Dileep Anagandula" className="profile-image-about" />
                <div className="image-border-glow"></div>
              </div>
              
              <div className="profile-info-card">
                <h3 className="profile-name-glow">Dileep Anagandula</h3>
                <p className="profile-title-glow">Senior Data Engineer</p>
                
                <div className="quick-stats">
                  <div className="stat-item-small">
                    <span className="stat-icon-small">📍</span>
                    <span>United States</span>
                  </div>
                  <div className="stat-item-small">
                    <span className="stat-icon-small">💼</span>
                    <span>Caterpillar</span>
                  </div>
                  <div className="stat-item-small">
                    <span className="stat-icon-small">🎓</span>
                    <span>MS Business</span>
                  </div>
                  <div className="stat-item-small">
                    <span className="stat-icon-small">⚡</span>
                    <span>5+ Years</span>
                  </div>
                </div>

                <div className="availability-banner">
                  <span className="pulse-dot-green"></span>
                  <span className="availability-text">OPEN TO OPPORTUNITIES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content-pipeline">
            <div className="terminal-about-card">
              <div className="terminal-header-small">
                <div className="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="terminal-title-small">profile.py</span>
              </div>
              
              <div className="terminal-content-about">
                <div className="code-line">
                  <span className="code-comment"># Senior Data Engineer Profile</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">class</span> <span className="code-class">DataEngineer</span>:
                </div>
                <div className="code-line code-indent">
                  <span className="code-keyword">def</span> <span className="code-function">__init__</span>(self):
                </div>
                <div className="code-line code-indent-2">
                  self.name = <span className="code-string">"Dileep Anagandula"</span>
                </div>
                <div className="code-line code-indent-2">
                  self.experience = <span className="code-number">5</span> <span className="code-comment"># years</span>
                </div>
                <div className="code-line code-indent-2">
                  self.specialization = <span className="code-string">"Pipeline Architecture"</span>
                </div>
              </div>
            </div>

            <div className="story-card-pipeline">
              <h4 className="story-title">
                <span className="title-icon">🎯</span>
                My Journey in Data Engineering
              </h4>
              <p className="story-text">
                I'm a <strong>Senior Data Engineer</strong> with over <strong>5 years of experience</strong> 
                designing, owning, and operating scalable data pipelines and complex data integrations. 
                My expertise lies in workflow orchestration, batch reprocessing, and handling both 
                structured and unstructured data from diverse sources.
              </p>
              <p className="story-text">
                Throughout my career, I've worked with industry-leading companies including 
                <span className="company-highlight"> Caterpillar</span>, 
                <span className="company-highlight"> State Street Corporation</span>, and 
                <span className="company-highlight"> Tech Mahindra</span>, where I've consistently 
                delivered high-quality data solutions that drive business value.
              </p>
            </div>

            <div className="focus-areas-grid">
              <div className="focus-card">
                <div className="focus-icon">🔄</div>
                <h5>Pipeline Architecture</h5>
                <p>Scalable ETL/ELT design</p>
              </div>
              <div className="focus-card">
                <div className="focus-icon">☁️</div>
                <h5>Cloud Platforms</h5>
                <p>Azure, AWS, GCP</p>
              </div>
              <div className="focus-card">
                <div className="focus-icon">⚡</div>
                <h5>Real-time Processing</h5>
                <p>Kafka, Spark Streaming</p>
              </div>
              <div className="focus-card">
                <div className="focus-icon">🎯</div>
                <h5>Data Quality</h5>
                <p>Governance & Validation</p>
              </div>
            </div>

            <div className="education-current-card">
              <div className="edu-section">
                <h4 className="edu-title">
                  <span className="edu-icon">🎓</span>
                  Education
                </h4>
                <div className="edu-content">
                  <p className="edu-degree">Master of Science in Business</p>
                  <p className="edu-school">Webster University</p>
                  <p className="edu-date">2024 – 2026 | St. Louis, Missouri</p>
                </div>
              </div>

              <div className="current-section">
                <h4 className="current-title">
                  <span className="current-icon">💼</span>
                  Current Role
                </h4>
                <div className="current-content">
                  <p className="current-position">Data Engineer</p>
                  <p className="current-company">Caterpillar</p>
                  <p className="current-date">January 2025 – Present</p>
                  <div className="current-badge">Leading Enterprise Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Flow Indicator */}
        <div className="pipeline-flow-indicator">
          <div className="flow-line-horizontal"></div>
          <div className="flow-arrow">→</div>
          <div className="flow-text">DATA FLOWING TO NEXT STAGE</div>
        </div>
      </div>
    </section>
  );
};

export default About;