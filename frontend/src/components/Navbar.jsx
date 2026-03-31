import React, { useState, useEffect } from "react"; 
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  // const [menuOpen, setMenuOpen] = useState(false);

  // Hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`navbar ${show ? "show" : "hide"}`}>
      
      {/* Logo */}
      <div className="logo">
        &gt; Rangaswamy S G<span className="dot">.</span>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link className={isActive("/") ? "active" : ""} to="/">Home</Link>
        <Link className={isActive("/about") ? "active" : ""} to="/about">About</Link>
        <Link className={isActive("/projects") ? "active" : ""} to="/projects">Projects</Link>
        <Link className={isActive("/contact") ? "active" : ""} to="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
    
    </div>
  );
};

export default Navbar;