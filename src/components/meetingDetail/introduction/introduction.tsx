import React from "react";
import * as S from "./styles";

const Introduction = () => {
  const meetingImg =
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80";

  return (
    <S.Main>
      <S.Figure>
        <S.Title>모임 이름</S.Title>
        <S.NumberOfMembers>1 / 4 명 참여중</S.NumberOfMembers>
        <S.MeetingImg src={meetingImg} />
      </S.Figure>
      <S.Intro>
        <S.Figcaption>
          마감임박 / 2.12(토)시작 / 6PM / 격주 2회 / 은영 리더
        </S.Figcaption>
        <S.Buttons>
          <S.Button>신청하기</S.Button>
          <S.Button>찜하기</S.Button>
        </S.Buttons>
      </S.Intro>
      <S.Description>우리모임 소개 및 진행 내용 목표 등등</S.Description>
    </S.Main>
  );
};

export default Introduction;
