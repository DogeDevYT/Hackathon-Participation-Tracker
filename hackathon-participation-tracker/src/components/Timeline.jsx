import React from 'react';
import styles from '../assets/styles/Timeline.module.css';

const Timeline = ({ events }) => {
  return (
    <div className={styles.timelineContainer}>
      {events.map((event, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.content}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            {event.details && (
              <div className={styles.details}>
                <h4>Project Details:</h4>
                <p>{event.details}</p>
              </div>
            )}
            {event.team && (
              <div className={styles.team}>
                <h4>Team Members:</h4>
                <ul>
                  {event.team.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            )}
            {event.awards && (
              <div className={styles.awards}>
                <h4>Awards Won:</h4>
                <ul>
                  {event.awards.map((award, idx) => (
                    <li key={idx}>{award}</li>
                  ))}
                </ul>
              </div>
            )}
            {event.links && (
              <div className={styles.links}>
                <h4>Links:</h4>
                <ul>
                  {event.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
