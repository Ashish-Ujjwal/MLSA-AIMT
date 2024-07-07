import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo1 from '../Images/Ml-removebg-preview.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const navbarRef = useRef(null);

  const toggleMobileMenu = (e) => {
    // e.stopPropagation(); // Prevent click from propagating to document
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // setIsMobileMenuOpen(false);
  };


  // const handleClickOutside = (event) => {
  //   if (navbarRef.current && !navbarRef.current.contains(event.target)) {
  //     setIsMobileMenuOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isMobileMenuOpen) {
  //     document.addEventListener('click', handleClickOutside);
  //   } else {
  //     document.removeEventListener('click', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [isMobileMenuOpen]);

  return (
    <nav className={styles.navbar} >
    {/* <nav className={styles.navbar} ref={navbarRef}> */}
      <div className={styles.navlogo}>
        <a href="/"><img src={logo1} alt="Logo"  className={styles.navslogo1} /></a>
      </div>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li className={styles.hov}><a href="/">Home</a></li>
        <li className={styles.hov}><a href="#about">About</a></li>
        <li className={styles.hov}><a href="#Gallery">Gallery</a></li>
        <li className={styles.hov}><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;