import React from 'react';
import styles from './EventTimeline.module.css'; // Import the CSS module

const events = [
  { id: 1, title: 'GitHub Event', date: '2023-01-01', description: 'Description for GitHub event', icon: 'fab fa-github' },
  { id: 2, title: 'Azure Event', date: '2023-02-01', description: 'Description for Azure event', icon: 'fab fa-microsoft' },
  { id: 3, title: 'GenAI Event', date: '2023-03-01', description: 'Description for GenAI event', icon: 'fas fa-robot' },
  { id: 4, title: 'MS365 Event', date: '2023-04-01', description: 'Description for MS365 event', icon: 'fab fa-windows' },
];

const EventTimeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineStart}>Start</div>
      {events.map((event, index) => (
        <div key={event.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
          <div className={styles.dot}><i className={event.icon}></i></div>
          <div className={styles.eventDetails}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
          {index < events.length - 1 && <div className={styles.connector}></div>}
        </div>
      ))}
      <div className={styles.timelineEnd}>End</div>
    </div>
  );
};

export default EventTimeline;
