import React from 'react';
import styles from './Home.module.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import log from '../Images/LevelAlpha.png'
import logs from '../Images/Mlsa Header.png'


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className='mlsa'>
            <h1><b>MLSA - AIMT</b></h1>
        </div>
        <h3><p>MLSA envisions a world where everyone has access to the benefits of technology. We believe that technology has the potential to be an effective tool for education.We are committed to educating everyone about various tech stacks, thus keeping them updated. <br /><br />

Connecting people with technology and assisting them in using it to enhance their lives are the two main objectives of MLSA. In order to achieve this, we organize events, work on projects, and educate everyone on various tech stacks.</p></h3>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <button>Join WhatsAppp Group</button>
          </a>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={log} alt="Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Home;