import React from 'react';
import styles from './EventItem.module.css';

const EventItem = ({ event, position }) => {
  return (
    <div className={`${styles.eventItem} ${styles[position]}`}>
      <div className={styles.dot}>
        <img src={event.icon} alt={`${event.title} logo`} className={styles.eventIcon} />
      </div>
      {/* <img src={event.icon} alt={event.title} className={styles.eventIcon} /> */}
      <div className={styles.eventContent}>
        {event.status === "Completed" ? 
          <p className={styles.eventDate}>
            {event.date} <span className={styles.eventStatus}>{event.status}</span>
          </p> : 
          <p className={styles.eventDate}>
            {event.date} <span className={styles.eventStatus1}>{event.status}</span>
          </p>
        }
        {/* <p className={styles.eventDate}>
          {event.date} <span className={styles.eventStatus}>{event.status}</span>
        </p> */}
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <p className={styles.eventDescription}>{event.description}</p>
      </div>
    </div>
  );
};

export default EventItem;

