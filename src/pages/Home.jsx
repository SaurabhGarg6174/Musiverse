import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <div id="volumeControl">
        <i className="fa-solid fa-volume-down" id="volume"></i>
        <input type="range" min="0" max="1" step="0.01" value="0.5" id="volumeSlider"/>
        <i className="fa-solid fa-volume-up" id="volume"></i>
      </div> */}
      <header>
        <h1>Welcome to MUSIVERSE</h1>
        <p>Your ultimate destination for music streaming</p>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Access to millions of songs</li>
            <li>Create and share playlists</li>
            <li>Discover new artists and albums</li>
            <li>Personalized recommendations</li>
          </ul>
        </section>
        <section className="call-to-action">
          <h2>Start Listening Now!</h2>
          <Link to="/signup" className="btn btn-primary link">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-secondary link">
            Log In
          </Link>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 MUSIVERSE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
