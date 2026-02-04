import React from 'react';
import Button from '../../common/Button';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'End-to-End Azure Medallion Data Pipeline',
      type: 'Cloud Data Engineering',
      status: 'Production',
      description: 'Architected a metadata-driven Azure Data Factory ingestion framework using Lookup and ForEach activities to ingest CSV and JSON data from APIs and IoT sources into ADLS Gen2 Bronze layer.',
      technologies: ['Azure Data Factory', 'PySpark', 'Azure Databricks', 'ADLS Gen2', 'Azure Synapse', 'Power BI', 'Delta Lake'],
      highlights: [
        'Engineered PySpark ETL pipelines in Azure Databricks to cleanse, standardize, and join datasets across Bronze, Silver, and Gold layers',
        'Exposed curated Gold data via Azure Synapse for secure Power BI reporting using Managed Identity and Service Principal authentication',
        'Implemented medallion architecture for data quality and governance',
        'Eliminated hardcoded pipelines enabling scalable source onboarding'
      ],
      metrics: {
        performance: '40% faster processing',
        scalability: '10x data volume capacity',
        automation: '95% automated ingestion',
        uptime: '99.8% pipeline uptime'
      },
      architecture: ['Bronze Layer', 'Silver Layer', 'Gold Layer', 'Synapse Analytics'],
      link: 'https://github.com/Dileepanagandula03',
      color: '#00d4ff'
    },
    {
      id: 2,
      title: 'ETL vs ELT: Data Engineering Framework Comparison',
      type: 'Research & Architecture',
      status: 'Published',
      description: 'Designed a comparative ETL vs ELT decision framework by analyzing performance, scalability, cost efficiency, and governance tradeoffs in cloud-based data pipelines.',
      technologies: ['Cloud Architecture', 'ETL', 'ELT', 'Data Governance', 'Pipeline Design', 'Cost Optimization', 'Azure', 'AWS'],
      highlights: [
        'Demonstrated how cloud-native ELT architectures improve scalability and cost efficiency for large and semi-structured datasets',
        'Defined scenarios where ETL remains critical for data quality, compliance, and pre-load validation',
        'Provided actionable guidance for enterprise data platform design',
        'Created decision matrix for architecture selection based on data characteristics'
      ],
      metrics: {
        costSaving: '30% infrastructure cost reduction',
        scalability: 'Cloud-native elasticity',
        adoption: 'Enterprise-wide framework',
        impact: 'Strategic decision tool'
      },
      architecture: ['ETL Pattern', 'ELT Pattern', 'Hybrid Approach', 'Decision Matrix'],
      link: 'https://github.com/Dileepanagandula03',
      color: '#00ff00'
    }
  ];

  return (
    <section id="projects" className="projects-pipeline">
      <div className="container">
        {/* Pipeline Stage Header */}
        <div className="section-header-pipeline">
          <div className="pipeline-stage-badge">
            <span className="stage-icon">📈</span>
            <span className="stage-text">STAGE 4: ANALYTICS & OUTPUT</span>
          </div>
          <h2 className="section-title-pipeline">Featured Projects</h2>
          <p className="section-subtitle-pipeline">
            Production-Ready • High-Impact • Scalable Solutions
          </p>
        </div>

        {/* Projects Output Dashboard */}
        <div className="output-dashboard">
          <div className="output-card">
            <div className="output-icon">🚀</div>
            <div className="output-value">2</div>
            <div className="output-label">Featured Projects</div>
          </div>
          <div className="output-card">
            <div className="output-icon">💎</div>
            <div className="output-value">100%</div>
            <div className="output-label">Production Grade</div>
          </div>
          <div className="output-card">
            <div className="output-icon">⚡</div>
            <div className="output-value">40%</div>
            <div className="output-label">Performance Gain</div>
          </div>
          <div className="output-card">
            <div className="output-icon">📊</div>
            <div className="output-value">10x</div>
            <div className="output-label">Scalability</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-terminal">
          {projects.map((project, index) => (
            <div key={project.id} className="terminal-project-card" style={{'--project-color': project.color}} data-index={index}>
              {/* Terminal Header */}
              <div className="terminal-header-project">
                <div className="terminal-buttons-project">
                  <span className="btn-red"></span>
                  <span className="btn-yellow"></span>
                  <span className="btn-green"></span>
                </div>
                <div className="terminal-title-project">
                  <span className="terminal-path">~/projects/</span>
                  <span className="terminal-file">project_{project.id}.py</span>
                </div>
                <div className="terminal-status">
                  <span className="status-dot-project"></span>
                  {project.status}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="terminal-body-project">
                {/* Command Line */}
                <div className="command-line">
                  <span className="prompt-terminal">dileep@data-engineer:~$</span>
                  <span className="command-terminal"> cat project_details.txt</span>
                </div>

                {/* Project Content */}
                <div className="project-content-terminal">
                  <div className="project-header-terminal">
                    <h3 className="project-title-terminal">{project.title}</h3>
                    <div className="project-type-badge">{project.type}</div>
                  </div>

                  <p className="project-description-terminal">{project.description}</p>

                  {/* Technologies Section */}
                  <div className="terminal-section">
                    <div className="section-command">
                      <span className="prompt-terminal">$</span>
                      <span className="command-terminal"> ls technologies/</span>
                    </div>
                    <div className="tech-grid-terminal">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge-terminal">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Section */}
                  <div className="terminal-section">
                    <div className="section-command">
                      <span className="prompt-terminal">$</span>
                      <span className="command-terminal"> cat architecture.yaml</span>
                    </div>
                    <div className="architecture-flow">
                      {project.architecture.map((layer, idx) => (
                        <React.Fragment key={idx}>
                          <div className="architecture-node">{layer}</div>
                          {idx < project.architecture.length - 1 && (
                            <div className="architecture-arrow">→</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Section */}
                  <div className="terminal-section">
                    <div className="section-command">
                      <span className="prompt-terminal">$</span>
                      <span className="command-terminal"> cat achievements.log</span>
                    </div>
                    <ul className="highlights-list-terminal">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <span className="highlight-bullet">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Section */}
                  <div className="terminal-section">
                    <div className="section-command">
                      <span className="prompt-terminal">$</span>
                      <span className="command-terminal"> python metrics.py --show</span>
                    </div>
                    <div className="metrics-grid-terminal">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="metric-card-terminal">
                          <div className="metric-label-terminal">
                            {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                          </div>
                          <div className="metric-value-terminal">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Git Clone Section */}
                  <div className="terminal-section">
                    <div className="section-command">
                      <span className="prompt-terminal">$</span>
                      <span className="command-terminal"> git clone {project.link}</span>
                    </div>
                    <div className="clone-output">
                      <span className="clone-text">Cloning into 'project_{project.id}'...</span>
                      <span className="clone-success">✓ Repository cloned successfully</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="project-actions-terminal">
                    <Button variant="primary" href={project.link}>
                      <span className="btn-icon-project">💻</span>
                      View on GitHub
                    </Button>
                  </div>
                </div>

                {/* Cursor */}
                <div className="command-line">
                  <span className="prompt-terminal">dileep@data-engineer:~$</span>
                  <span className="cursor-blink-terminal">_</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects CTA */}
        <div className="all-projects-cta-terminal">
          <div className="cta-icon-large">💻</div>
          <h3 className="cta-title-terminal">Want to See More?</h3>
          <p className="cta-description-terminal">
            Check out my GitHub for additional projects, contributions, and data engineering solutions
          </p>
          <Button variant="outline" href="https://github.com/Dileepanagandula03">
            <span className="btn-icon-project">🚀</span>
            Browse All Projects on GitHub
          </Button>
        </div>

        {/* Pipeline Complete Indicator */}
        <div className="pipeline-complete-indicator">
          <div className="complete-icon">✓</div>
          <div className="complete-text">PIPELINE COMPLETE • DATA READY</div>
          <div className="complete-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;