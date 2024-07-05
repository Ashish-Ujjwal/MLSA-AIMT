import React from 'react';
// import './EventItem.css';
import styles from './EventItem.module.css';

const EventItem = ({ event, position }) => {
  return (
    <div className={`${styles.eventitem} ${position}`}>
      <img src={event.icon} alt={event.title} className={styles.eventicon} />
      <div className={styles.eventcontent}>
        <p className={styles.eventdate}>{event.date} <span className={styles.eventstatus}>{event.status}</span></p>
        <h3 className={styles.eventtitle}>{event.title}</h3>
        <p className={styles.eventdescription}>{event.description}</p>
      </div>
    </div>
  );
};

export default EventItem;
