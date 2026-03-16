import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to <span className="gradient-text">MUSIVERSE</span></h1>
        <p>Premium streaming for the true music enthusiast.</p>
        <div className="hero-actions">
          <Link to="/signup" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/library" className="btn btn-secondary">
            Go to Library
          </Link>
        </div>
      </header>
      
      <main className="home-sections">
        <section className="features-grid">
          <div className="feature-card glass">
            <i className="fa-solid fa-music"></i>
            <h3>Millions of Songs</h3>
            <p>Access high-quality audio from your favorite artists.</p>
          </div>
          <div className="feature-card glass">
            <i className="fa-solid fa-bolt"></i>
            <h3>Instant Play</h3>
            <p>Seamless playback with no buffering or interruptions.</p>
          </div>
          <div className="feature-card glass">
            <i className="fa-solid fa-heart"></i>
            <h3>Personalized</h3>
            <p>Smart recommendations based on your unique taste.</p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2026 MUSIVERSE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
