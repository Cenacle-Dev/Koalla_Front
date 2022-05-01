import React from "react";
import * as S from "./styles";

const CurrentMeeting = () => {
  const bookCover = `${process.env.PUBLIC_URL}/images/book1.jpg`;
  const members = [
    {
      nickname: "태현1234123",
      profile:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      comment: "너무 재밌어요!",
    },
    {
      nickname: "알렉",
      profile:
        "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      comment: "유익합니다!",
    },

    {
      nickname: "네네",
      profile:
        "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80",
      comment: "굿",
    },

    {
      nickname: "경인",
      profile:
        "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      comment: "추천합니다!",
    },

    {
      nickname: "커피",
      profile:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      comment: "만족해요!",
    },

    {
      nickname: "녹차",
      profile:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      comment: "너무 재밌어요!",
    },
  ];

  return (
    <S.Main>
      <S.MeetingTitle>현재진행중</S.MeetingTitle>
      <S.Book>
        <S.BookCover src={bookCover} alt="BookCover" />
      </S.Book>
      <S.Members>
        {members.map((member, idx) => (
          <S.Member key={idx}>
            <S.UserInfo>
              <S.Profile src={member.profile} />
              {member.nickname}
            </S.UserInfo>
            <S.Comment>{member.comment}</S.Comment>
          </S.Member>
        ))}
      </S.Members>
    </S.Main>
  );
};

export default CurrentMeeting;
