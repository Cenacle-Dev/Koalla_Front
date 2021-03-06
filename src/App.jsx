import "./App.css";
import Nav from "./components/navbar/navbar";
import Search from "./components/search/search";
import Meetings from "./components/meetings/meetings";
import { useState } from "react";
import meetingData from "./common/dummy.json";

function App() {
	const [meetings, setMeetings] = useState(meetingData.topics);
	const searchMeeting = (title) => {
		setMeetings(
			meetingData.topics.map((meeting) => {
				if (meeting.title === title) {
					return meeting;
				}
			})
		);
		// const newMeetings = { ...meetingData };
		// newMeetings.topics = newMeetings.topics.filter((s) =>
		// 	s.title.includes(title)
		// );
		// setMeetings(newMeetings);
	};

	return (
		<div className="App">
			<Nav />
			<Search searchMeeting={searchMeeting} />
			<Meetings data={meetings} />
		</div>
	);
}

export default App;
