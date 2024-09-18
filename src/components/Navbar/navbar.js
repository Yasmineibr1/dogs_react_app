import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'; 

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <button className="navbar-menu" onClick={toggleMenu}>
        &#9776; {/* Icône du menu hamburger */}
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Dog Gallery</Link></li>
        <li><Link to="/breedsearch" onClick={closeMenu}>Breed Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
