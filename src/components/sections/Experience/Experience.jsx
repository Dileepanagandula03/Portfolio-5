import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Caterpillar',
      logo: '🏗️',
      role: 'Data Engineer',
      period: 'January 2025 – Present',
      duration: 'Current',
      location: 'United States',
      type: 'Full-time',
      status: 'active',
      description: 'Leading enterprise data pipeline development and optimization for operational analytics platforms.',
      achievements: [
        'Led development and optimization of enterprise data pipelines integrating structured operational data',
        'Monitored and maintained production workflows, reducing recurring ingestion issues by ~25%',
        'Designed and integrated new data sources into existing ingestion frameworks',
        'Collaborated with stakeholders to align pipeline design with performance and scalability goals'
      ],
      technologies: ['Azure', 'Databricks', 'Data Factory', 'Python', 'PySpark', 'SQL'],
      impact: {
        metric: '25%',
        description: 'Reduction in pipeline failures',
        icon: '📉'
      }
    },
    {
      company: 'State Street Corporation',
      logo: '🏦',
      role: 'Senior Data Engineer',
      period: 'May 2021 – December 2023',
      duration: '2.5 years',
      location: 'United States',
      type: 'Full-time',
      status: 'completed',
      description: 'Owned complex data pipelines for regulated financial datasets with focus on quality and compliance.',
      achievements: [
        'Owned complex data pipelines processing regulated financial datasets',
        'Implemented validation and reconciliation logic ensuring data consistency',
        'Troubleshot pipeline errors, reducing manual reprocessing effort by ~20%',
        'Led migration of legacy ETL processes to modern cloud-based architectures'
      ],
      technologies: ['SQL Server', 'SSIS', 'Python', 'Azure', 'Power BI', 'ETL'],
      impact: {
        metric: '20%',
        description: 'Reduction in manual effort',
        icon: '⚡'
      }
    },
    {
      company: 'Tech Mahindra',
      logo: '💼',
      role: 'Data Engineer',
      period: 'June 2019 – April 2021',
      duration: '1.8 years',
      location: 'India',
      type: 'Full-time',
      status: 'completed',
      description: 'Developed and maintained data ingestion workflows for enterprise systems integration.',
      achievements: [
        'Developed and maintained data ingestion workflows for structured and semi-structured data',
        'Designed transformation and enrichment logic aligning with downstream application models',
        'Supported batch reprocessing and validation of large datasets',
        'Collaborated with cross-functional teams to implement data quality frameworks'
      ],
      technologies: ['Python', 'SQL', 'Talend', 'PostgreSQL', 'REST APIs', 'ETL'],
      impact: {
        metric: '15%',
        description: 'Improvement in delivery stability',
        icon: '🎯'
      }
    }
  ];

  return (
    <section id="experience" className="experience-pipeline">
      <div className="container">
        {/* Pipeline Stage Header */}
        <div className="section-header-pipeline">
          <div className="pipeline-stage-badge">
            <span className="stage-icon">📥</span>
            <span className="stage-text">STAGE 3: DATA LOADING</span>
          </div>
          <h2 className="section-title-pipeline">Professional Experience</h2>
          <p className="section-subtitle-pipeline">
            Career Journey • 5+ Years • 3 Top Companies • Impact: HIGH
          </p>
        </div>

        {/* Experience Stats */}
        <div className="experience-stats-grid">
          <div className="exp-stat-card">
            <div className="exp-stat-icon">🏢</div>
            <div className="exp-stat-number">3</div>
            <div className="exp-stat-label">Top Companies</div>
          </div>
          <div className="exp-stat-card">
            <div className="exp-stat-icon">⏱️</div>
            <div className="exp-stat-number">5+</div>
            <div className="exp-stat-label">Years Experience</div>
          </div>
          <div className="exp-stat-card">
            <div className="exp-stat-icon">🚀</div>
            <div className="exp-stat-number">50+</div>
            <div className="exp-stat-label">Pipelines Built</div>
          </div>
          <div className="exp-stat-card">
            <div className="exp-stat-icon">💎</div>
            <div className="exp-stat-number">100TB+</div>
            <div className="exp-stat-label">Data Processed</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line-glow"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item-glow ${exp.status}`} data-index={index}>
              <div className="timeline-node-glow">
                <div className="node-inner"></div>
                <div className="node-pulse"></div>
              </div>

              <div className="timeline-content-glow">
                <div className="company-header-glow">
                  <div className="company-info-glow">
                    <div className="company-logo-glow">{exp.logo}</div>
                    <div className="company-text">
                      <h3 className="company-name-glow">{exp.company}</h3>
                      <h4 className="role-title-glow">{exp.role}</h4>
                    </div>
                  </div>

                  <div className="period-info-glow">
                    <div className="period-badge-glow">
                      <span className="period-icon">📅</span>
                      <span>{exp.period}</span>
                    </div>
                    <div className="duration-badge-glow">
                      {exp.duration}
                    </div>
                  </div>
                </div>

                <div className="job-meta-glow">
                  <span className="meta-item-glow">
                    <span className="meta-icon-glow">📍</span>
                    {exp.location}
                  </span>
                  <span className="meta-item-glow">
                    <span className="meta-icon-glow">💼</span>
                    {exp.type}
                  </span>
                  {exp.status === 'active' && (
                    <span className="active-badge-glow">
                      <span className="active-dot"></span>
                      CURRENTLY ACTIVE
                    </span>
                  )}
                </div>

                <p className="job-description-glow">{exp.description}</p>

                <div className="achievements-section-glow">
                  <h5 className="achievements-title-glow">
                    <span className="title-icon-glow">🎯</span>
                    Key Achievements
                  </h5>
                  <ul className="achievements-list-glow">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <span className="achievement-bullet-glow">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tech-section-glow">
                  <h5 className="tech-title-glow">
                    <span className="title-icon-glow">🛠️</span>
                    Technologies
                  </h5>
                  <div className="tech-tags-glow">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag-glow">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="impact-card-glow">
                  <div className="impact-icon-glow">{exp.impact.icon}</div>
                  <div className="impact-content-glow">
                    <div className="impact-metric-glow">{exp.impact.metric}</div>
                    <div className="impact-description-glow">{exp.impact.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Flow Indicator */}
        <div className="pipeline-flow-indicator">
          <div className="flow-line-horizontal"></div>
          <div className="flow-arrow">→</div>
          <div className="flow-text">DATA LOADED • READY FOR ANALYTICS</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;