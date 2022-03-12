import React from "react";
import * as S from "./styles";

const MeetingNotes = () => {
  const meetingNotes = [
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  return (
    <S.Main>
      <S.SubTitle>모임 노트</S.SubTitle>
      <S.NotesContainer>
        {meetingNotes.map((note, idx) => (
          <S.Note key={idx}>
            <S.NoteUser>유저 1</S.NoteUser>
            <S.NoteCover src={note} alt="bookCover" />
          </S.Note>
        ))}
      </S.NotesContainer>
    </S.Main>
  );
};

export default MeetingNotes;
