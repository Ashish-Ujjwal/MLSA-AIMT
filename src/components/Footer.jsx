import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* <p>Stay connected with us on social media</p> */}
        <p className={styles.love}>
          Made with <FaHeart className={styles.heartIcon} /> by<b> Ashish Ujjwal</b>
        </p>
      </div>
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaLinkedin />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaWhatsapp />
        </a>
        <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;