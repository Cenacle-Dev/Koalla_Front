import styled, { css } from "styled-components";

// ? 공통

const Frame = css`
  width: 230px;
  height: 300px;
`;

// ? 진행중인 책, 모임

const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "header header"
    "book member";
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 300px 260px;
    grid-template-areas:
      "header"
      "book"
      "member";
    margin-top: 20px;
  }
`;

const MeetingTitle = styled.h3`
  grid-area: header;
  justify-self: start;
  align-self: center;
  @media (max-width: 640px) {
    justify-self: center;
  }
`;

const CurrentContainer = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Book = styled.div`
  grid-area: book;
  ${Frame};
  box-shadow: 5px 5px 10px #6d6d6d45;
  @media (max-width: 640px) {
    margin: 0;
    justify-self: center;
  }
`;

const BookCover = styled.img`
  width: 230px;
  height: 300px;
`;
const Members = styled.ul`
  grid-area: member;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  @media (max-width: 640px) {
    margin-top: 20px;
    row-gap: 10px;
    align-self: flex-start;
  }
`;
const Member = styled.li`
  display: flex;
  gap: 10px;
  flex: 0 0 40%;
  @media (max-width: 640px) {
    font-size: 12px;
    flex: 1 1 34%;
    gap: 4px;
    margin-bottom: 6px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  align-items: center;
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`;

const Nickname = styled.span`
  width: 60px;
  @media (max-width: 640px) {
    width: 40px;
  }
  overflow: hidden;
`;

const Comment = styled.p`
  transform: translateY(3px);
`;

export {
  Book,
  BookCover,
  Comment,
  CurrentContainer,
  Main,
  MeetingTitle,
  Member,
  Members,
  Profile,
  UserInfo,
  Nickname,
};
