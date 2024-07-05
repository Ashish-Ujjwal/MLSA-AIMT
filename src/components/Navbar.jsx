import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo1 from '../Images/Ml-removebg-preview.png'
import logo2 from '../Images/Ml__1_-removebg-preview.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <img src={logo1} alt="Logo" className={styles.navslogo1} />
      </div>
      {/* <div className={styles.navlogo}>
        <img src={logo2} alt="Logo" className={styles.navslogo2} />
      </div> */}
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li className={styles.hov}><a href="#home">Home</a></li>
        <li className={styles.hov}><a href="#about">About</a></li>
        <li className={styles.hov}><a href="#services">Services</a></li>
        <li className={styles.hov}><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;