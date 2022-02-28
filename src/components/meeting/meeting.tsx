import React from "react";
import * as styles from "./styles";

const Meeting = ({ title, body, tag }: any) => {
	return (
		<styles.Meeting>
			<styles.Img
				src="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?s=612x612"
				alt=""
			/>
			<styles.Description>
				<h3>{title}</h3>
				<p>{body}</p>
				<p>#{tag}</p>
			</styles.Description>
		</styles.Meeting>
	);
};

export default Meeting;
