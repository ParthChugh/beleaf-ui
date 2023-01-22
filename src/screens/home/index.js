import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Welcome to our website</h1>
        <p>We offer the best products and services in the industry.</p>
        <button className="home-button">Learn More</button>
      </div>
      <div className="home-services">
        <h2>Our Services</h2>
        <div className="home-service">
          <h3>Service 1</h3>
          <p>Description of service 1</p>
        </div>
        <div className="home-service">
          <h3>Service 2</h3>
          <p>Description of service 2</p>
        </div>
        <div className="home-service">
          <h3>Service 3</h3>
          <p>Description of service 3</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;