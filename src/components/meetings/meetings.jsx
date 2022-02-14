import React from "react";
import Meeting from "./meeting/meeting";
import styles from "./meetings.module.css";

const Meetings = ({ data }) => {
	return (
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
};

export default Meetings;
