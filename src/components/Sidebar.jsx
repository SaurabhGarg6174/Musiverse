import { useState } from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const date = new Date();
  const year = date.getFullYear();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          className={`toggle-button ${isOpen ? "active" : ""}`}
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars"></i>
        </button>

        <section className="section">
          <ul>
            <li className="brand">
              <img src="src/assets/logo.png" alt="Musiverse" />
            </li>
            <Link className="link" to="/">
              <li className="menu">
                <i className="fas fa-home"></i>
                <div>Home</div>
              </li>
            </Link>
            <Link className="link" to="/library">
              <li className="menu">
                <i className="fas fa-folder"></i>
                <div>Library</div>
              </li>
            </Link>
            <Link className="link" to="/contact">
              <li className="menu">
                <i className="fas fa-phone"></i>
                <div>Contact Us</div>
              </li>
            </Link>
            <li className="copyright">
              &copy; {year} Musiverse. All rights reserved. Designed by Saurabh
              Garg
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Sidebar;
