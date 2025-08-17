import React, { useState } from 'react';
import './Nav.css';

import logo_light from '../../assets/icons/logo_glow_gold.png';
import logo_dark from '../../assets/icons/logo_glow_goldb.png';

import Toggle_light from '../../assets/icons/day1.png';
import Toggle_dark from '../../assets/icons/night1.png';

import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Nav({ theam, seTheam }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    theam === 'light' ? seTheam("dark") : seTheam("light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={theam === 'light' ? logo_light : logo_dark} alt="logo" className='logo' />

      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>About</li>
        <li onClick={closeMenu}>Services</li>
        <li onClick={closeMenu}>Happy customer</li>
        <li onClick={closeMenu}>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="mailto:someone@example.com"><FaEnvelope /></a>
      </div>

      {/* Theme Toggle */}
      <img onClick={toggleTheme} src={theam === 'light' ? Toggle_dark : Toggle_light} alt="theme toggle" className='toggle-icon' />

      {/* Hamburger */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Nav;
