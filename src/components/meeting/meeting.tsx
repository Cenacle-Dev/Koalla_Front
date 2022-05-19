import React from 'react';
import { string } from 'prop-types';
import styles from './meeting.module.css';

const Meeting = ({ title, body, tag }) => (
  <li className={styles.meeting}>
    <img
      className={styles.meeting__img}
      src="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?s=612x612"
      alt=""
    />
    <div className={styles.meeting__description}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{`#${tag}`}</p>
    </div>
  </li>
);

// 임시
Meeting.propTypes = {
  title: string,
  body: string,
  tag: string,
};

Meeting.defaultProps = {
  title: '',
  body: '',
  tag: '',
};

export default Meeting;
