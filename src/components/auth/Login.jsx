import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-card glass">
        <div className="auth-header">
          <img src="/logo.png" alt="Musiverse" />
          <h2>Welcome Back</h2>
          <p>Login to Musiverse to continue listening.</p>
        </div>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email or Username</label>
            <input type="text" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="#" className="forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Log In</button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
