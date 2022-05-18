import React from 'react';
import { arrayOf, number, objectOf, oneOfType, string } from 'prop-types';
import Meeting from './meeting/meeting';
import styles from './meetings.module.css';

const Meetings = ({ data }) => (
  <ul className={styles.meetings}>
    {data.map((meeting) => (
      <Meeting
        key={meeting.id}
        title={meeting.title}
        body={meeting.body}
        tag={meeting.tag}
      />
    ))}
  </ul>
);

// 임시
Meetings.propTypes = {
  data: arrayOf(objectOf(oneOfType([number, string]))).isRequired,
};

export default Meetings;
