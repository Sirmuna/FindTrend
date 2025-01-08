import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#" },
    { label: "How it work", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Solution", href: "#" },
    { label: "Features", href: "#" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="logo-container">
              <img src="logo.png" />
              <span className="brand-name">Findtrend</span>
            </div>

            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  //   style={{
                  //     color: "red",
                  //   }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="auth-buttons">
              <button className="login-button">Login</button>
              <button className="register-button">Register</button>
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <div className="auth-buttons">
              <button className="login-button">Login</button>
              <button className="register-button">Register</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
