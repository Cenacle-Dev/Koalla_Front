import React from "react";
import * as S from "./styles";

const CurrentMeeting = () => {
  const bookCover = `${process.env.PUBLIC_URL}/images/book1.jpg`;
  const member = {
    profile:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  };
  const members = [member, member, member, member, member, member];

  return (
    <S.Main>
      <S.MeetingTitle>현재진행중</S.MeetingTitle>
      <S.Book>
        <S.BookCover src={bookCover} alt="BookCover" />
      </S.Book>
      <S.Members>
        {members.map((_member, idx) => (
          <S.Member key={idx}>
            <S.Profile src={_member.profile} />
            <S.Comment>너무 재미있어요!</S.Comment>
          </S.Member>
        ))}
      </S.Members>
    </S.Main>
  );
};

export default CurrentMeeting;
