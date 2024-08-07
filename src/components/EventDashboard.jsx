import React from 'react';
import EventItem from './EventItem';
import styles from './EventDashboard.module.css';

const events = [
  {
    date: '20nd Jul - 2024',
    status: 'UpComing',
    title: 'Git and GitHub',
    description: 'Topics to be covered in the Workshop: What are Git and GitHub? Structure of Tutorial Hands-on Practice using Git and GitHub.',
    icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    date: 'Feb 8th - 2024',
    status: 'Completed',
    title: 'Azure Skill Challenge',
    description: 'Embark on a journey of innovation with the Power Platform App Maker Challenge! Unleash your creativity and technical prowess as you design.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  },
  {
    date: '14th Jan - 2024',
    status: 'Completed',
    title: 'Git and GitHub',
    description: 'Topics to be covered in the Workshop: What are Git and GitHub? Structure of Tutorial Hands-on Practice using Git and GitHub.',
    icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    date: '17th Sep - 2023',
    status: 'Completed',
    title: 'Azure Skill Challenge',
    description: 'Embark on a journey of innovation with the Power Platform App Maker Challenge! Unleash your creativity and technical prowess as you design.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  },
];

const EventDashboard = () => {
  return (
    <div className={styles.eventdashboard}>
      <span className={styles.Title}>Events Dashboard</span>
      <div className={styles.timeline}></div>
      {events.map((event, index) => (
        <EventItem
          key={index}
          event={event}
          position={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default EventDashboard;
