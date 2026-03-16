import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ isCollapsed, setIsCollapsed }) {
  const date = new Date();
  const year = date.getFullYear();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed-ui" : ""}`}>
        <div className="sidebar-top">
          <div className="brand">
            <img src="/logo.png" alt="Musiverse" />
            {!isCollapsed && <span>Musiverse</span>}
          </div>
          <button
            className="toggle-button"
            onClick={toggleSidebar}
          >
            <i className={`fas fa-${isCollapsed ? "bars" : "times"}`}></i>
          </button>
        </div>


        <nav className="sidebar-nav">
          <ul>
            <Link className="link" to="/">
              <li className="menu">
                <i className="fas fa-home"></i>
                {!isCollapsed && <div className="menu-text">Home</div>}
              </li>
            </Link>
            <Link className="link" to="/library">
              <li className="menu">
                <i className="fas fa-layer-group"></i>
                {!isCollapsed && <div className="menu-text">Library</div>}
              </li>
            </Link>
            <Link className="link" to="/contact">
              <li className="menu">
                <i className="fas fa-envelope"></i>
                {!isCollapsed && <div className="menu-text">Contact Us</div>}
              </li>
            </Link>
          </ul>
        </nav>

        {!isCollapsed && (
          <div className="sidebar-footer">
            <p className="copyright">
              &copy; {year} Musiverse <br />
              Designed by Saurabh Garg
            </p>
          </div>
        )}
      </div>
    </>
  );
}



export default Sidebar;
