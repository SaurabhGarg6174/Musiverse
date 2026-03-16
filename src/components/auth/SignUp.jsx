import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const SignUp = () => {
  return (
    <div className="auth-page">
      <div className="auth-card glass">
        <div className="auth-header">
          <img src="/logo.png" alt="Musiverse" />
          <h2>Create Account</h2>
          <p>Join Musiverse and start your musical journey.</p>
        </div>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Choose a secure password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <p className="terms">By signing up, you agree to our <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.</p>
          <button type="submit" className="btn btn-primary auth-btn">Create Account</button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
