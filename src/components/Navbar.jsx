import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";

function Navbar() {
  const { searchQuery, setSearchQuery } = usePlayer();

  return (
    <div className="TopBar">
      <div className="search-section">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="searchInput"
            placeholder="Search for songs or artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="nav-links">
        <div className="nav-item">Download</div>
        <div className="divider">|</div>
        <Link className="link auth-link" to="/signup">Sign Up</Link>
        <Link className="link login-btn" to="/login">Login</Link>
      </div>
    </div>
  );
}


export default Navbar;

