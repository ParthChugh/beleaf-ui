import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="dashboard-widgets">
        <div className="widget">
          <h2>Widget 1</h2>
          <p>Content for widget 1</p>
        </div>
        <div className="widget">
          <h2>Widget 2</h2>
          <p>Content for widget 2</p>
        </div>
        <div className="widget">
          <h2>Widget 3</h2>
          <p>Content for widget 3</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;