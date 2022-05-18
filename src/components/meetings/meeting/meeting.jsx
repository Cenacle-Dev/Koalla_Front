import React from "react";
import styles from "./meeting.module.css";

const Meeting = ({ title, body, tag }) => {
	return (
		<li className={styles.meeting}>
			<img
				className={styles.meeting__img}
				src="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?s=612x612"
				alt=""
			/>
			<div className={styles.meeting__description}>
				<h3>{title}</h3>
				<p>{body}</p>
				<p>#{tag}</p>
			</div>
		</li>
	);
};

export default Meeting;
