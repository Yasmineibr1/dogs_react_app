import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import logo from '../../assets/logo.png';
function Navbar() {
  //State to know if the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 //Function to toggle the mobile menu open and closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* navigation links for big screens */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Dog Gallery</Link>
          <Link to="/breedsearch">Dog Breed Search</Link>
        </div>

        {/* Hhamburger menu on small screens*/}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* hamburger menu displayed only on small/mobile screens*/}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/gallery" onClick={toggleMobileMenu}>Dog Gallery</Link>
          <Link to="/breedsearch" onClick={toggleMobileMenu}>Dog Breed Search</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
