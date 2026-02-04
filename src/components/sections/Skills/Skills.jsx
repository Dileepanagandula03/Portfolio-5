import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      color: '#00d4ff',
      skills: [
        { name: 'Azure (ADF, Databricks, Synapse)', level: 95, projects: 8 },
        { name: 'AWS (S3, Glue, Redshift)', level: 85, projects: 5 },
        { name: 'Google Cloud Platform', level: 75, projects: 3 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      color: '#ff9500',
      skills: [
        { name: 'Python & PySpark', level: 95, projects: 10 },
        { name: 'SQL (PostgreSQL, T-SQL)', level: 92, projects: 10 },
        { name: 'Scala', level: 80, projects: 4 }
      ]
    },
    {
      title: 'Big Data Processing',
      icon: '⚡',
      color: '#00ff00',
      skills: [
        { name: 'Apache Spark', level: 90, projects: 8 },
        { name: 'Kafka', level: 85, projects: 6 },
        { name: 'Databricks', level: 92, projects: 7 },
        { name: 'Hadoop Ecosystem', level: 78, projects: 4 }
      ]
    },
    {
      title: 'Data Engineering Tools',
      icon: '🔧',
      color: '#667eea',
      skills: [
        { name: 'Apache Airflow', level: 88, projects: 7 },
        { name: 'Azure Data Factory', level: 95, projects: 9 },
        { name: 'dbt (Data Build Tool)', level: 82, projects: 5 },
        { name: 'Terraform', level: 75, projects: 4 }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: '#ff00ff',
      skills: [
        { name: 'Azure SQL Database', level: 90, projects: 8 },
        { name: 'Snowflake', level: 85, projects: 5 },
        { name: 'MongoDB', level: 80, projects: 6 },
        { name: 'Delta Lake', level: 88, projects: 7 }
      ]
    },
    {
      title: 'DevOps & BI Tools',
      icon: '🚀',
      color: '#ffd700',
      skills: [
        { name: 'Docker & Kubernetes', level: 80, projects: 5 },
        { name: 'Git & GitHub', level: 92, projects: 10 },
        { name: 'CI/CD Pipelines', level: 85, projects: 6 },
        { name: 'Power BI & Tableau', level: 88, projects: 7 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-pipeline">
      <div className="container">
        {/* Pipeline Stage Header */}
        <div className="section-header-pipeline">
          <div className="pipeline-stage-badge">
            <span className="stage-icon">⚙️</span>
            <span className="stage-text">STAGE 2: DATA TRANSFORMATION</span>
          </div>
          <h2 className="section-title-pipeline">Technical Skills</h2>
          <p className="section-subtitle-pipeline">
            Processing • Enrichment • Validation • Quality Score: 95%
          </p>
        </div>

        {/* Processing Status Dashboard */}
        <div className="processing-dashboard">
          <div className="dashboard-card">
            <div className="dashboard-icon">📊</div>
            <div className="dashboard-value">24</div>
            <div className="dashboard-label">Technologies</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">🎯</div>
            <div className="dashboard-value">6</div>
            <div className="dashboard-label">Specializations</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">⚡</div>
            <div className="dashboard-value">87%</div>
            <div className="dashboard-label">Avg Proficiency</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">🔥</div>
            <div className="dashboard-value">10+</div>
            <div className="dashboard-label">Projects</div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-pipeline">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-pipeline" style={{'--category-color': category.color}}>
              <div className="category-header-pipeline">
                <span className="category-icon-pipeline">{category.icon}</span>
                <h3 className="category-title-pipeline">{category.title}</h3>
              </div>

              <div className="skills-list-pipeline">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item-pipeline">
                    <div className="skill-header-pipeline">
                      <span className="skill-name-pipeline">{skill.name}</span>
                      <span className="skill-percentage-pipeline">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar-container-pipeline">
                      <div 
                        className="skill-bar-fill-pipeline" 
                        style={{width: `${skill.level}%`}}
                      >
                        <div className="skill-bar-shine-pipeline"></div>
                      </div>
                    </div>

                    <div className="skill-meta-pipeline">
                      <span className="skill-projects">
                        <span className="meta-icon">📦</span>
                        {skill.projects} projects
                      </span>
                      <span className="skill-status">
                        <span className="status-dot-skill"></span>
                        Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Summary Cards */}
        <div className="skill-summary-cards">
          <div className="summary-card-skill">
            <div className="summary-icon-skill">🎯</div>
            <h4>Core Expertise</h4>
            <p>Data Pipeline Architecture, ETL/ELT Design, Cloud Data Platforms, Real-time Processing</p>
          </div>
          <div className="summary-card-skill">
            <div className="summary-icon-skill">📚</div>
            <h4>Continuous Learning</h4>
            <p>Always exploring new technologies, best practices, and industry trends in data engineering</p>
          </div>
          <div className="summary-card-skill">
            <div className="summary-icon-skill">🏆</div>
            <h4>Certifications</h4>
            <p>Azure Data Engineer Associate • Cloud Platform Expert • Big Data Specialist</p>
          </div>
        </div>

        {/* Pipeline Flow Indicator */}
        <div className="pipeline-flow-indicator">
          <div className="flow-line-horizontal"></div>
          <div className="flow-arrow">→</div>
          <div className="flow-text">TRANSFORMATION COMPLETE • LOADING...</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;