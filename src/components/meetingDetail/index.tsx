import React from "react";
import AfterBooks from "./afterBooks/afterBooks";
import CurrentMeeting from "./currentMeeting/currentMeeting";
import Introduction from "./introduction/introduction";
import Map from "./map/map";
import MeetingNotes from "./meetingNotes/meetingNotes";
import * as S from "./styles";

const MeetingDetail = () => {
  return (
    <S.Main>
      <Introduction />
      <CurrentMeeting />
      <AfterBooks />
      <MeetingNotes />
      <Map />
    </S.Main>
  );
};

export default MeetingDetail;
