import React, { useState } from 'react';
import styles from './FAQ.module.css'; // Import the CSS module
import faqLogo from '../Images/faqs-icon.png'

const FAQ = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqData = [
    { question: 'What is the MLSA Program?', answer: 'The Microsoft Learn Student Ambassadors (MLSA) program is a global group of on-campus ambassadors who are eager to help students, build their careers, and use technology to solve real-world problems.' },
    { question: 'How can I join the MLSA program?', answer: 'You can apply for the MLSA program through the Microsoft Learn Student Ambassadors website. The application process includes submitting an online application form and potentially an interview.' },
    { question: 'What are the benefits of becoming an MLSA?', answer: 'As an MLSA, you get access to exclusive resources, mentorship opportunities, and the chance to connect with like-minded peers and industry professionals. You also get the opportunity to enhance your skills through various learning resources.' },
    { question: 'How do I stay updated with MLSA activities?', answer: 'You can stay updated with MLSA activities by following the official MLSA social media channels and participating in community discussions on platforms like Microsoft Teams.' },
    { question: 'What kind of events can I organize as an MLSA?', answer: 'As an MLSA, you can organize workshops, hackathons, and other events to help fellow students learn about Microsoft technologies and other relevant topics.' },
    // Add more FAQ items as needed
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqLogo}>
        <img src={faqLogo} alt="FAQ Logo" />
      </div>
      <div className={styles.faqContent}>
        <h2>Frequently Asked Questions?</h2>
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`} 
            onClick={() => toggleFAQ(index)}
          >
            <h3 className={styles.faqQuestion}>{item.question}</h3>
            <p className={styles.faqAnswer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
