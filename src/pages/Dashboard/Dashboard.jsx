import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Portfolio Management System</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Projects</h3>
          <p className="dashboard-number">12</p>
          <span className="dashboard-label">Active Projects</span>
        </div>
        
        <div className="dashboard-card">
          <h3>Skills</h3>
          <p className="dashboard-number">25+</p>
          <span className="dashboard-label">Technologies</span>
        </div>
        
        <div className="dashboard-card">
          <h3>Experience</h3>
          <p className="dashboard-number">3+</p>
          <span className="dashboard-label">Years</span>
        </div>
        
        <div className="dashboard-card">
          <h3>Contacts</h3>
          <p className="dashboard-number">150+</p>
          <span className="dashboard-label">Connections</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;