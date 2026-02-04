import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`portfolio-container ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        <div className={`toggle-switch ${isDark ? 'dark' : 'light'}`}>
          <div className="toggle-slider"></div>
        </div>
        <span className="toggle-label">{isDark ? 'Dark' : 'Light'}</span>
      </div>

      <div className="top-bar">
        <div className="seeking-badge">
          🚀 ACTIVELY SEEKING OPPORTUNITIES • DATA ENGINEER • FULL-TIME • IMMEDIATE START • OPEN TO RELOCATION
        </div>
      </div>

      <nav className="main-nav">
        <div className="nav-content">
          <div className="logo">Dileep</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/Dileep_Data_Engineer_2026.pdf" download className="btn-outline">📥 Download Resume</a>
          </div>
        </div>
      </nav>

      {/* BLOCK 1: HERO */}
      <section className="block hero-block-new" id="home">
        <div className="hero-grid-new">
          <div className="hero-left-new">
            <div className="status-badge">
              💼 Strategic Data Engineer | 5+ Years | OPT EAD
            </div>
            
            <h1 className="hero-title-new">
              Hi, I'm<br/>
              <span className="name-gradient">Dileep Anagandula</span>
            </h1>

            <p className="hero-desc">
              Strategic Data Engineer with 5+ years delivering <span className="highlight-orange">scalable data platforms</span> across healthcare and financial services. Specialized in architecting Medallion (Lakehouse) data models on Azure and Databricks.
            </p>

            <div className="hero-info-cards">
              <div className="info-card-small">
                <div className="icon">💼</div>
                <div className="text">
                  <div className="label">SEEKING</div>
                  <div className="value">Full-Time Data Engineer Roles</div>
                </div>
              </div>
              <div className="info-card-small">
                <div className="icon">📄</div>
                <div className="text">
                  <div className="label">OPEN TO</div>
                  <div className="value">C2C | W2 </div>
                </div>
              </div>
              <div className="info-card-small">
                <div className="icon">📍</div>
                <div className="text">
                  <div className="label">LOCATION</div>
                  <div className="value">Willing to Relocate (Any US State)</div>
                </div>
              </div>
              <div className="info-card-small">
                <div className="icon">⚡</div>
                <div className="text">
                  <div className="label">Willing To Join</div>
                  <div className="value">Immediate</div>
                </div>
              </div>
            </div>

            <div className="hero-stats-boxes">
              <div className="stat-box-hero">
                <div className="stat-num-hero">5+</div>
                <div className="stat-label-hero">YEARS</div>
              </div>
              <div className="stat-box-hero">
                <div className="stat-num-hero">3.8</div>
                <div className="stat-label-hero">GPA</div>
              </div>
              <div className="stat-box-hero">
                <div className="stat-num-hero">FULL-TIME</div>
                <div className="stat-label-hero">AVAILABLE</div>
              </div>
              <div className="stat-box-hero">
                <div className="stat-num-hero">Austin TX</div>
                <div className="stat-label-hero">Location</div>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">🚀 View Projects</a>
              <a href="#contact" className="btn-secondary">💬 Get in Touch</a>
              <a href="/Dileep_Data_Engineer_2026.pdf" download className="btn-outline">📥 Download Resume</a>
            </div>
          </div>

          <div className="hero-right-new">
            <div className="video-card-new">
              <div className="video-header">
                <div className="badge-video">💼 Data Engineer</div>
                <div className="badge-video">5+ Years Experience</div>
              </div>
              
              <div className="video-container-new">
                <iframe
                  src="https://www.loom.com/embed/26f4f04aafaa4d8caf8886e1543b668d"
                  frameBorder="0"
                  allowFullScreen
                  title="Intro Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px'
                  }}
                ></iframe>
              </div>

              <div className="video-footer">
                <div className="footer-badge">
                  <div className="icon">🎓</div>
                  <div>
                    <div className="label">MS Graduate</div>
                    <div className="value">3.8 GPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">SCROLL TO EXPLORE</div>
      </section>

      {/* BLOCK 2: ABOUT */}
      <section className="block about-block-v2" id="about">
        <div className="about-geo">
          <div className="about-circle"></div>
          <div className="about-red-stripe"></div>
        </div>

        <div className="about-content-v2">
          <div className="about-header">
            <div className="block-num">02</div>
            <h2 className="about-title">ABOUT ME</h2>
          </div>

          <div className="about-layout">
            <div className="photo-section">
              <div className="photo-geometric">
                <div className="photo-bg-orange"></div>
                <div className="photo-frame-v2">
                  <img src="/profile-about.jpg" alt="Dileep Anagandula" />
                </div>
                <div className="red-stripe-overlay"></div>
                <div className="photo-label">SENIOR DATA ENGINEER</div>
              </div>
            </div>

            <div className="text-section">
              <div className="about-intro-box">
                <h3>Who I Am</h3>
                <p className="intro-text">
                  I'm a <strong>Senior Data Engineer</strong> with over <strong>5 years of experience</strong> designing, 
                  owning, and operating scalable data pipelines and complex data integrations.
                </p>
              </div>

              <div className="about-description">
                <p>
                  My expertise lies in workflow orchestration, batch reprocessing, and handling both 
                  structured and unstructured data from diverse sources. I've worked with industry-leading 
                  companies including <span className="highlight-orange">The Cigna Group</span>, 
                  <span className="highlight-blue"> State Street Corporation</span>, and 
                  <span className="highlight-green"> Tech Mahindra</span>.
                </p>
              </div>

              <div className="info-cards">
                <div className="info-card orange-card">
                  <div className="card-icon">🎓</div>
                  <div className="card-content">
                    <div className="card-label">EDUCATION</div>
                    <div className="card-value">MS Information Technology</div>
                  </div>
                </div>

                <div className="info-card black-card">
                  <div className="card-icon">💼</div>
                  <div className="card-content">
                    <div className="card-label">STATUS</div>
                    <div className="card-value">OPT EAD</div>
                  </div>
                </div>

                <div className="info-card blue-card">
                  <div className="card-icon">🌎</div>
                  <div className="card-content">
                    <div className="card-label">LOCATION</div>
                    <div className="card-value">Austin, Texas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2.5: EDUCATION */}
      <section className="block education-block" id="education">
        <div className="education-content">
          <div className="education-header">
            <div className="block-num-edu">02.5</div>
            <h2 className="education-title">EDUCATION</h2>
            <div className="education-subtitle">{'// Academic Background & Achievements'}</div>
          </div>

          <div className="education-grid">
            {/* Masters Degree */}
            <div className="education-card masters-card">
              <div className="degree-icon">🎓</div>
              <div className="degree-content">
                <h3 className="degree-title">Master of Science</h3>
                <h4 className="degree-major">Information Technology</h4>
                <div className="university-name">Webster University</div>
                <div className="degree-details">
                  <div className="detail-item">
                    <span className="detail-label">GPA:</span>
                    <span className="detail-value gpa-highlight">3.8 / 4.0</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">Jan 2024 - Dec 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">Completed</span>
                  </div>
                </div>
                <div className="degree-highlights">
                  <div className="highlight-badge">Data Engineering</div>
                  <div className="highlight-badge">Machine Learning</div>
                  <div className="highlight-badge">Big Data Analytics</div>
                  <div className="highlight-badge">Cloud Computing</div>
                </div>
              </div>
            </div>

            {/* Bachelors Degree */}
            <div className="education-card bachelors-card">
              <div className="degree-icon">🎓</div>
              <div className="degree-content">
                <h3 className="degree-title">Bachelor of Technology</h3>
                <h4 className="degree-major">Electronics & Communication Engineering (ECE)</h4>
                <div className="university-name">GITAM University</div>
                <div className="degree-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">2015 - 2019</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">Visakhapatnam, India</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">Completed</span>
                  </div>
                </div>
                <div className="degree-highlights">
                  <div className="highlight-badge">Digital Systems</div>
                  <div className="highlight-badge">Signal Processing</div>
                  <div className="highlight-badge">Programming</div>
                  <div className="highlight-badge">Data Structures</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3: SKILLS */}
      <section className="block skills-block" id="skills">
        <div className="skills-geo">
          <div className="tech-circle-1"></div>
          <div className="tech-circle-2"></div>
          <div className="tech-grid-bg"></div>
        </div>

        <div className="skills-content">
          <div className="skills-header">
            <div className="block-num-skills">03</div>
            <h2 className="skills-title">TECHNICAL SKILLS</h2>
            <div className="skills-subtitle">{'// Data Processing • Cloud • Databases • Tools'}</div>
          </div>

          <div className="skills-grid">
            <div className="skill-category cyan-cat">
              <div className="cat-header">
                <div className="cat-icon">☁️</div>
                <h3>CLOUD PLATFORMS</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Azure (ADF, Databricks, Synapse)</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-level">EXPERT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">AWS (S3, Glue, Redshift)</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-level">PROFICIENT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Google Cloud Platform</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-level">PROFICIENT</span>
                </div>
              </div>
            </div>

            <div className="skill-category orange-cat">
              <div className="cat-header">
                <div className="cat-icon">💻</div>
                <h3>PROGRAMMING</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Python & PySpark</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-level">EXPERT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">SQL (PostgreSQL, T-SQL)</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '92%'}}></div>
                  </div>
                  <span className="skill-level">EXPERT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Scala</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-level">PROFICIENT</span>
                </div>
              </div>
            </div>

            <div className="skill-category green-cat">
              <div className="cat-header">
                <div className="cat-icon">⚡</div>
                <h3>DATA PROCESSING</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Apache Spark</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-level">EXPERT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Apache Kafka</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-level">PROFICIENT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Apache Airflow</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '88%'}}></div>
                  </div>
                  <span className="skill-level">EXPERT</span>
                </div>
              </div>
            </div>

            <div className="skill-category purple-cat">
              <div className="cat-header">
                <div className="cat-icon">🗄️</div>
                <h3>DATABASES</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Delta Lake</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-level">EXPERT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Snowflake</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-level">PROFICIENT</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MongoDB</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '78%'}}></div>
                  </div>
                  <span className="skill-level">PROFICIENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4: EXPERIENCE */}
      <section className="block experience-block" id="experience">
        <div className="exp-geo">
          <div className="exp-yellow-splash"></div>
        </div>

        <div className="exp-content">
          <div className="exp-header">
            <div className="block-num-exp">04</div>
            <h2 className="exp-title">WORK EXPERIENCE</h2>
            <div className="exp-subtitle">{'// 3 Companies • 5+ Years • Real-time Systems'}</div>
          </div>

          <div className="timeline">
            <div className="timeline-item orange-timeline">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">JAN 2025 - Present</div>
                <h3 className="timeline-company">THE CIGNA GROUP</h3>
                <h4 className="timeline-role">Data Engineer</h4>
                <p className="timeline-desc">
                  Automated the ingestion and processing of high volume X12 health care EDI files using Python and T-SQL, enhancing data delivery efficiency and ensuring 100% compliance with HIPAA security protocols for business critical claims data.
                </p>
                <div className="timeline-tags">
                  <span className="tag">Azure</span>
                  <span className="tag">Python</span>
                  <span className="tag">SQL Server</span>
                  <span className="tag">ETL</span>
                </div>
              </div>
            </div>

            <div className="timeline-item blue-timeline">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">MAY 2021 - DEC 2023</div>
                <h3 className="timeline-company">STATE STREET CORPORATION</h3>
                <h4 className="timeline-role">Senior Data Engineer</h4>
                <p className="timeline-desc">
                  Engineered high availability data pipelines to consolidate complex trade and position data from systems like GLS and Geneva, ensuring 100% SLA adherence for financial clients including Lazard, BlackRock, and Blackstone.
                </p>
                <div className="timeline-tags">
                  <span className="tag">Kafka</span>
                  <span className="tag">Spark</span>
                  <span className="tag">Delta Lake</span>
                  <span className="tag">Databricks</span>
                </div>
              </div>
            </div>

            <div className="timeline-item green-timeline">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">Jun 2019 - APR 2021</div>
                <h3 className="timeline-company">TECH MAHINDRA</h3>
                <h4 className="timeline-role">Junior Data Engineer</h4>
                <p className="timeline-desc">
                  Leading team of 5 engineers building cloud-native data platforms. 
                  Designed microservices architecture for data ingestion at scale. 
                  Reduced infrastructure costs by 30% through optimization.
                </p>
                <div className="timeline-tags">
                  <span className="tag">AWS</span>
                  <span className="tag">Airflow</span>
                  <span className="tag">Snowflake</span>
                  <span className="tag">Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5: PROJECTS */}
      <section className="block projects-block" id="projects">
        <div className="projects-geo">
          <div className="neon-glow-1"></div>
          <div className="neon-glow-2"></div>
        </div>

        <div className="projects-content">
          <div className="projects-header">
            <div className="block-num-proj">05</div>
            <h2 className="projects-title">REAL-TIME PROJECTS</h2>
            <div className="projects-subtitle">{'// Production Systems • Million Records/Sec'}</div>
          </div>

          <div className="projects-grid">
            <div className="project-card neon-card-1">
              <div className="project-number">01</div>
              <div className="project-icon">⚡</div>
              <h3 className="project-name">REAL-TIME WEATHER DATA PIPELINE</h3>
              <p className="project-desc">
                Built end-to-end real-time and batch weather data pipeline on Azure. Used Azure Functions 
                for serverless data ingestion, Event Hub for streaming, Stream Analytics for real-time processing, 
                and Data Factory for batch orchestration. Implemented Logic Apps for automated alerts.
              </p>
              <div className="project-metrics">
                <div className="metric">
                  <div className="metric-val">Real-Time</div>
                  <div className="metric-lbl">Processing</div>
                </div>
                <div className="metric">
                  <div className="metric-val">$60</div>
                  <div className="metric-lbl">Cost Learning</div>
                </div>
                <div className="metric">
                  <div className="metric-val">Azure</div>
                  <div className="metric-lbl">Cloud Native</div>
                </div>
              </div>
              <div className="project-tech">
                <span>Azure Functions</span>
                <span>Event Hub</span>
                <span>Stream Analytics</span>
                <span>Data Factory</span>
              </div>
            </div>

            <div className="project-card neon-card-2">
              <div className="project-number">02</div>
              <div className="project-icon">🚀</div>
              <h3 className="project-name">CAPSTONE PROJECT</h3>
              <p className="project-desc">
                Enterprise-scale data engineering capstone project demonstrating end-to-end pipeline 
                architecture, data quality frameworks, and performance optimization techniques using 
                modern cloud-native tools and best practices.
              </p>
              <div className="project-metrics">
                <div className="metric">
                  <div className="metric-val">Full Stack</div>
                  <div className="metric-lbl">Implementation</div>
                </div>
                <div className="metric">
                  <div className="metric-val">Production</div>
                  <div className="metric-lbl">Grade Quality</div>
                </div>
                <div className="metric">
                  <div className="metric-val">Scalable</div>
                  <div className="metric-lbl">Architecture</div>
                </div>
              </div>
              <div className="project-tech">
                <span>Python</span>
                <span>Spark</span>
                <span>Cloud</span>
                <span>CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 6: CONTACT */}
      <section className="block contact-block" id="contact">
        <div className="contact-geo">
          <div className="contact-gradient"></div>
        </div>

        <div className="contact-content">
          <div className="contact-header">
            <div className="block-num-contact">06</div>
            <h2 className="contact-title">LET'S CONNECT</h2>
            <p className="contact-subtitle">
              Ready to discuss how I can help build your data infrastructure?
            </p>
          </div>

          <div className="contact-grid">
            <a href="mailto:dileepanagandula3@gmail.com" className="contact-card email-card">
              <div className="contact-icon">📧</div>
              <h3>Email Me</h3>
              <p>dileepanagandula3@gmail.com</p>
              <div className="contact-arrow">→</div>
            </a>

            <a href="https://www.linkedin.com/in/anagandula-dileep/" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
              <div className="contact-arrow">→</div>
            </a>

            <a href="https://github.com/Dileepanagandula03" target="_blank" rel="noopener noreferrer" className="contact-card github-card">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>
              <p>View my code</p>
              <div className="contact-arrow">→</div>
            </a>
          </div>

          <div className="contact-footer">
            <p>© 2026 Dileep Anagandula • Data Engineer • Austin, Texas</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;