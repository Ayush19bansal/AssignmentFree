import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import './Navbar.css'; // You can style your navbar in this CSS file

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <h1 className="navbar-logo">Karo Abhayaas</h1>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <GiHamburgerMenu />
        </div>
        <ul className={`navbar-menu ${showMenu ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={handleMenuToggle}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={handleMenuToggle}>Classes</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={handleMenuToggle}>Products</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={handleMenuToggle}>About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={handleMenuToggle}><FaUser /></a>
          </li>
        </ul>
        <div className="dark-mode-toggle">
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <label htmlFor="darkModeToggle">Dark Mode</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
