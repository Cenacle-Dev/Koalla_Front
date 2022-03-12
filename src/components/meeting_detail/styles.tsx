import styled, { css } from "styled-components";

const Main = styled.main`
  background-color: #fdfdfd;
  margin: auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 700px;
    padding: 24px;
  }

  @media (min-width: 1024px) {
    width: 980px;
    padding: 24px;
  }
`;
const Figure = styled.figure`
  position: relative;
  margin: 0;
`;
const Title = styled.h2`
  font-size: 20px;
  color: white;
  position: absolute;
  left: 10px;
  top: -10px;
`;

const SubTitle = styled.h3``;

const MeetingImg = styled.img`
  width: 100%;
  max-height: 500px;

  @media (min-width: 768px) {
    height: 400px;
    border-radius: 6px;
  }
`;
const NumberOfMembers = styled.div`
  color: white;
  border: 1px solid white;
  font-size: 14px;
  border-radius: 20px;
  padding: 6px 12px;
  position: absolute;
  bottom: 18px;
  right: 14px;
`;

// ? 모임 소개
const Intro = styled.div`
  font-size: 18px;
  display: flex;
  margin: 20px 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    margin: 8px 8px 10px 0;
  }
`;
const Figcaption = styled.figcaption`
  flex: 0 0 70%;
  text-align: start;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const Buttons = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const Button = styled.button`
  background-color: grey;
  color: white;
  transition: background-color, font-weight, 0.2s;
  border-radius: 6px;
  font-size: 12px;
  padding: 4px 6px;

  :hover {
    background-color: #5f5f5f;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const Description = styled.div`
  border: 1px solid gray;
  padding: 4px 8px;
  text-align: left;
`;

// ? 공통

const Section = css`
  position: relative;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

const Frame = css`
  width: 230px;
  height: 300px;
  margin-right: 20px;
`;

// ? 진행중인 책, 모임

const CurrentMeeting = styled.section`
  display: grid;
  grid-template-columns: 230px 180px 180px 180px;
  grid-template-rows: ;
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
  ${Frame};
  box-shadow: 5px 5px 10px #6d6d6d45;
  @media (max-width: 640px) {
    margin: 0;
  }
`;

const BookCover = styled.img`
  width: 230px;
  height: 300px;
`;
const Members = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 640px) {
    margin-top: 10px;
    gap: 10px;
  }
  & :nth-child(2n) {
    justify-content: start;
  }
  & :nth-child(2n + 1) {
    justify-content: end;
  }
`;
const Member = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 50%;
  @media (max-width: 640px) {
    font-size: 12px;
    flex: 1 1 34%;
    gap: 4px;
    margin-bottom: 6px;
  }
`;
const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    justify-content: ;
  }
`;

// ? 진행 예정 도서

const AfterBooks = styled.section`
  ${Section};
`;
const AfterBook = styled.li`
  ${Frame};
  @media (max-width: 768px) {
    flex: 0 0 33.3%;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;

const BooksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

// ? 모임 노트

const MeetingNotes = styled.section`
  ${Section};
`;
const NotesContainer = styled.ul`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 0;
  }
`;
const Note = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 1 1 33.3%;
  }
`;

const NoteCover = styled.img`
  width: 100%;
`;

const NoteUser = styled.h3`
  position: absolute;
  bottom: 2px;
  color: white;
`;
const Map = styled.div``;

export {
  AfterBooks,
  MeetingImg,
  Button,
  Intro,
  CurrentMeeting,
  Description,
  Figcaption,
  Figure,
  Main,
  Map,
  MeetingNotes,
  NumberOfMembers,
  Title,
  Book,
  Member,
  Members,
  Note,
  CurrentContainer,
  BookCover,
  Profile,
  SubTitle,
  BooksContainer,
  NotesContainer,
  NoteUser,
  Buttons,
  AfterBook,
  NoteCover,
};
