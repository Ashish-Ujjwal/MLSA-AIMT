import React, { useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import logs from '../Images/LevelAlpha.png'


const Home = () => {

  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Set the initial state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.mlsa}>
            <h1><b>MLSA-AIMT</b></h1>
        </div>
        <div className={styles.para}>
          <h3><p>
            <span className={styles.para1}>Microsoft Learn Student Ambassadors - [MLSA] envisions a world where everyone has access to the benefits of technology. We believe that technology has the potential to be an effective tool for education, and we are committed to educating everyone about various tech stacks, thus keeping them updated.</span> <br></br><br></br>
            <span ref={textRef} className={isMobile ? styles.hidden : styles.para2}>To achieve this vision, we focus on several key objectives. Firstly, our educational outreach programs include organizing workshops, webinars, tech talks, and seminars on a wide range of topics. These events cater to different skill levels, ensuring that both beginners and advanced learners can benefit from the knowledge shared by experts and experienced professionals.</span>
            </p>
          </h3>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
        </div>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.whatsapp} ${styles.icon}`}> <FaWhatsapp className={styles.wlogo} /> Join WhatsApp </button>
        </a>
      </div>
      <div className={styles.logoContainer}>
        <img src={logs} alt="Logo" className={styles.logo} /><br></br>
        <span className={styles.banner}>MLSA - AIMT</span>
      </div>
    </div>
  );
};

export default Home;