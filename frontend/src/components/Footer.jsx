
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h2>&gt; Rangaswamy S G<span className="dot">.</span></h2>
          <p>Building scalable and modern web applications.</p>
        </div>

        {/* Center */}
        <div className="footer-center">
          <h4>Contact</h4>
          <p>Email: rangaranga44440@gmail.com</p>
          <p>Location: Mysore, India</p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="footer-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Rangaswamy S G. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;