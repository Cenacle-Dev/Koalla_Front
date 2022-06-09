import React from "react";
import Meeting from "../meeting/meeting";
import { IProps } from "../search/searchHeader";
import * as S from "./styles";

const Meetings = ({ data }: { data: IProps["topics"] }) => {
  return (
    <S.Meetings>
      {data.map((meeting) => (
        <Meeting
          key={meeting.id}
          title={meeting.title}
          body={meeting.body}
          category={meeting.category}
          image={meeting.image}
        />
      ))}
    </S.Meetings>
  );
};

export default Meetings;
