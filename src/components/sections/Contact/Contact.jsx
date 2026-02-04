import React, { useState } from 'react';
import Button from '../../common/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:dileepanagandula3@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="contact-pipeline">
      <div className="container">
        {/* Pipeline Stage Header */}
        <div className="section-header-pipeline">
          <div className="pipeline-stage-badge">
            <span className="stage-icon">🌐</span>
            <span className="stage-text">STAGE 5: API ENDPOINT</span>
          </div>
          <h2 className="section-title-pipeline">Let's Connect</h2>
          <p className="section-subtitle-pipeline">
            Ready to build something amazing? • Open for opportunities • Available now
          </p>
        </div>

        {/* API Documentation Style */}
        <div className="api-documentation">
          <div className="api-header">
            <div className="api-method">POST</div>
            <div className="api-endpoint">/api/contact/dileep-anagandula</div>
            <div className="api-status">
              <span className="status-dot-api"></span>
              ACTIVE
            </div>
          </div>
          
          <div className="api-description">
            <p>Send a message to initiate collaboration. Response time: &lt; 24 hours</p>
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="contact-grid-pipeline">
          {/* Left: Contact Info + Photo */}
          <div className="contact-info-section">
            <div className="contact-photo-card">
              <div className="photo-wrapper-contact">
                <img src="/profile-contact.jpg" alt="Dileep Anagandula" className="profile-image-contact" />
                <div className="photo-glow-border"></div>
              </div>
              <div className="contact-profile-info">
                <h3 className="contact-name">Dileep Anagandula</h3>
                <p className="contact-role">Senior Data Engineer</p>
                <div className="contact-availability">
                  <span className="availability-dot-contact"></span>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            <div className="contact-cards-grid">
              <div className="contact-info-card">
                <div className="contact-card-icon">📧</div>
                <h4>Email</h4>
                <p className="contact-detail">dileepanagandula3@gmail.com</p>
                <Button variant="outline" href="mailto:dileepanagandula3@gmail.com">
                  Send Email
                </Button>
              </div>

              <div className="contact-info-card">
                <div className="contact-card-icon">💼</div>
                <h4>LinkedIn</h4>
                <p className="contact-detail">Connect professionally</p>
                <Button variant="outline" href="https://www.linkedin.com/in/anagandula-dileep/">
                  View Profile
                </Button>
              </div>

              <div className="contact-info-card">
                <div className="contact-card-icon">💻</div>
                <h4>GitHub</h4>
                <p className="contact-detail">Check repositories</p>
                <Button variant="outline" href="https://github.com/Dileepanagandula03">
                  View GitHub
                </Button>
              </div>

              <div className="contact-info-card">
                <div className="contact-card-icon">📱</div>
                <h4>Phone</h4>
                <p className="contact-detail">+1 314-575-7231</p>
                <Button variant="outline" href="tel:+13145757231">
                  Call Me
                </Button>
              </div>

              <div className="contact-info-card">
                <div className="contact-card-icon">🌐</div>
                <h4>Portfolio</h4>
                <p className="contact-detail">Current site</p>
                <Button variant="outline" href="https://dileepanagandula03.github.io/Dileep-Portfolio.github.io/">
                  Visit Site
                </Button>
              </div>

              <div className="contact-info-card highlight-card">
                <div className="contact-card-icon">📍</div>
                <h4>Location</h4>
                <p className="contact-detail">United States</p>
                <div className="location-badge">Open to relocation</div>
              </div>
            </div>

            <div className="response-time-banner">
              <div className="response-icon">⚡</div>
              <div className="response-content">
                <h4>Quick Response Time</h4>
                <p>I typically respond within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form - API Request Style */}
          <div className="contact-form-section">
            <div className="api-request-card">
              <div className="api-request-header">
                <div className="request-method">POST</div>
                <div className="request-url">/send-message</div>
              </div>

              <div className="api-request-body">
                <h3 className="form-title-api">Quick Message</h3>
                <p className="form-subtitle-api">Send me a message and I'll get back to you soon!</p>

                <form onSubmit={handleSubmit} className="contact-form-api">
                  <div className="form-group-api">
                    <label htmlFor="name">
                      <span className="label-icon-api">👤</span>
                      <span className="label-text-api">name</span>
                      <span className="label-type">: string</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="input-api"
                    />
                  </div>

                  <div className="form-group-api">
                    <label htmlFor="email">
                      <span className="label-icon-api">📧</span>
                      <span className="label-text-api">email</span>
                      <span className="label-type">: string</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="input-api"
                    />
                  </div>

                  <div className="form-group-api">
                    <label htmlFor="message">
                      <span className="label-icon-api">💬</span>
                      <span className="label-text-api">message</span>
                      <span className="label-type">: string</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows="6"
                      required
                      className="textarea-api"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary">
                    <span className="btn-icon-api">📤</span>
                    Send Message
                  </Button>
                </form>

                <div className="api-response-preview">
                  <div className="response-label">Expected Response:</div>
                  <div className="response-code">
                    <span className="code-bracket">{'{'}</span><br/>
                    <span className="code-indent">"status": <span className="code-string">"success"</span>,</span><br/>
                    <span className="code-indent">"message": <span className="code-string">"Message received!"</span>,</span><br/>
                    <span className="code-indent">"response_time": <span className="code-string">"&lt; 24h"</span></span><br/>
                    <span className="code-bracket">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="final-cta-banner">
          <div className="cta-content-final">
            <div className="cta-icon-final">🚀</div>
            <h3>Ready to Transform Your Data Infrastructure?</h3>
            <p>Let's discuss how I can help build scalable, reliable data pipelines for your organization</p>
            <div className="cta-buttons-final">
              <Button variant="primary" href="mailto:dileepanagandula3@gmail.com">
                <span className="btn-icon-cta">⚡</span>
                Start a Conversation
              </Button>
              <Button variant="outline" href="https://www.linkedin.com/in/anagandula-dileep/">
                <span className="btn-icon-cta">💼</span>
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Pipeline End Indicator */}
        <div className="pipeline-end-indicator">
          <div className="end-line"></div>
          <div className="end-icon">🎯</div>
          <div className="end-text">END OF PIPELINE • THANK YOU</div>
          <div className="end-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;