import React from "react";

import "./App.css";
import Nav from "./components/navbar/navbar";
import Search from "./components/search/searchHeader";
import Meetings from "./components/meetings/meetings";
import { useState } from "react";
import meetingData from "../src/common/dummy.json"; //"./common/dummy.json";
import ModalBackgroundContainer from "./components/common/modalBackgroundContainer";
import ModalCreateMeeting from "./components/meeting/modalCreateMeeting";
import { CreateMeetingInfo, RegisterInfo } from "./common/types";
import AddMeeting from "./components/addMeeting/addMeeting";
import RegisterFormContainer from "./components/loginRegister/registerFormContainer";
import MeetingDetail from "./components/meetingDetail";
import Categories from "./components/search/categories/categories";
import SearchHeader from "./components/search/searchHeader";

const App: React.FC = () => {
  const [isModalPresent, setIsModalPresent] = useState<boolean>(true);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalPresent(false);
  };

  const handleSubmit = (createMeetingInfo: CreateMeetingInfo) => {
    setIsModalPresent(false);
  };

  const onRegister = (registerInfo: RegisterInfo) => {};

  return (
    <div className="App">
      <Nav />
      <SearchHeader />
    </div>
  );
};

export default App;
