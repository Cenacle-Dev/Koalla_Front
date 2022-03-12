import React from "react";
import * as S from "./styles";

const Introduction = () => {
  const meetingInfo = {
    title: "클린 아키텍처",
    members: [1],
    memberLimit: 4,
    leader: "은영",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    meetingTime: 18,
    startDay: "2.12(토)",
    meetingCycle: "격주 2회",
    status: "마감 임박",
    description: "우리모임 소개 및 진행 내용 목표 등등",
  };

  const {
    title,
    members,
    img,
    leader,
    meetingCycle,
    meetingTime,
    startDay,
    status,
    memberLimit,
    description,
  } = meetingInfo;

  return (
    <S.Main>
      <S.Figure>
        <S.Title>{title}</S.Title>
        <S.NumberOfMembers>
          {members.length} / {memberLimit} 명 참여중
        </S.NumberOfMembers>
        <S.MeetingImg src={img} />
      </S.Figure>
      <S.Intro>
        <S.Figcaption>
          {status} / {startDay}시작 / {meetingTime}시 / {meetingCycle} /{" "}
          {leader}
          리더
        </S.Figcaption>
        <S.Buttons>
          <S.Button>신청하기</S.Button>
          <S.Button>찜하기</S.Button>
        </S.Buttons>
      </S.Intro>
      <S.Description>{description}</S.Description>
    </S.Main>
  );
};

export default Introduction;
