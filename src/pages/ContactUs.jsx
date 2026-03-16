import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>Get in <span className="gradient-text">Touch</span></h1>
        <p>Whether you have questions, feedback, or just want to talk music, we're here for you.</p>
      </div>
      
      <div className="contact-grid">
        <form className="contact-form glass">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us what's on your mind..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        
        <div className="contact-info">
          <div className="info-card glass">
            <i className="fa-solid fa-envelope"></i>
            <h3>Email Support</h3>
            <p>support@musiverse.com</p>
          </div>
          <div className="info-card glass">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Location</h3>
            <p>123 Music Lane, Audio Valley, CA</p>
          </div>
          <div className="info-card glass">
            <i className="fa-solid fa-phone"></i>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
