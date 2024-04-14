// import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="TopBar">
      <ul>
        <li className="searchContainer">
          <input
            type="text"
            id="searchInput"
            placeholder="Search for songs or artists..."
          />
          <button id="searchButton">
            <i className="fas fa-search"></i>
          </button>
        </li>
        {/* <li className="navItems">Premium</li> */}
        {/* <li className="navItems">Support</li> */}
        <liv className="navItems">Download</liv>
        <li className="junk">|</li>
        <Link className="link" to="/signup">
          <li className="navItems">Sign Up</li>
        </Link>
        <Link className="link" to="/login">
          <li className="navItems" id="Login">
            Login
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
