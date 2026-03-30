import React, { useState, useEffect } from "react"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../api";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [user, setUser] = useState(null);

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

  // FIX: re-fetch user on route change
  useEffect(() => {
    API.get("/auth/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      });
  }, [location.pathname]); 

  // Logout
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`navbar ${show ? "show" : "hide"}`}>
      
      {/* Logo */}
      <div className="logo">
        &gt; Rangaswamy S G<span className="dot">.</span>
      </div>

      {/* Links */}
      <div className="nav-links">
        <Link className={isActive("/") ? "active" : ""} to="/">Home</Link>
        <Link className={isActive("/about") ? "active" : ""} to="/about">About</Link>
        <Link className={isActive("/projects") ? "active" : ""} to="/projects">Projects</Link>
        <Link className={isActive("/contact") ? "active" : ""} to="/contact">Contact</Link>

        {/* ✅ Logged in */}
        {user ? (
          <>
            <span className="user-name">Hi, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;