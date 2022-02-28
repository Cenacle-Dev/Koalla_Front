import React from "react";
import Meeting from "../meeting/meeting";
import * as styles from "./styles";

const Meetings = ({ data }: any) => {
	return (
		<styles.Meetings>
			{data.map((meeting: any) => (
				<Meeting
					key={meeting.id}
					title={meeting.title}
					body={meeting.body}
					tag={meeting.tag}
				/>
			))}
		</styles.Meetings>
	);
};

export default Meetings;
