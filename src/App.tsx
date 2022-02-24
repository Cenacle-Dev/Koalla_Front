import React from "react";

import "./App.css";
import Nav from "./components/navbar/navbar";
import Search from "./components/search/search";
import Meetings from "./components/meetings/meetings";
import { useState } from "react";
import meetingData from "../src/common/dummy.json"; //"./common/dummy.json";
import ModalBackgroundContainer from "./components/common/modalBackgroundContainer";
import ModalCreateMeeting, {
  CreateMeetingInfo,
} from "./components/meetings/meeting/modalCreateMeeting";

type Topic = {
  id: number;
  title: string;
  body: string;
  tag: string;
};

const App: React.FC = () => {
  const [meetings, setMeetings] = useState<Topic[]>(meetingData.topics);
  const [isModalPresent, setIsModalPresent] = useState<boolean>(false);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("close");

    setIsModalPresent(false);
  };

  const handleSubmit = (createMeetingInfo: CreateMeetingInfo) => {
    console.log("submit");
    console.log(createMeetingInfo);
    setIsModalPresent(false);
  };

  return (
    <div className="App">
      <Nav />
      <Search searchMeeting={() => {}} />
      <Meetings data={meetings} />
      {isModalPresent && (
        <ModalBackgroundContainer
          component={
            <ModalCreateMeeting
              didTapCloseButton={handleClose}
              didTapSubmitButton={handleSubmit}
            />
          }
        />
      )}
    </div>
  );
};

export default App;
