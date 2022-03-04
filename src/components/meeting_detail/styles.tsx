import styled from "styled-components";

const Main = styled.main`
  background-color: #fdfdfd;
  width: 1200px;
  padding: 24px;
  margin: auto;
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
  height: 400px;
  border-radius: 6px;
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
const Intro = styled.div`
  font-size: 18px;
  display: flex;
  margin: 20px 0;
  align-items: center;
`;
const Figcaption = styled.figcaption`
  flex: 0 0 80%;
  text-align: start;
`;
const Buttons = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const Button = styled.button`
  background-color: grey;
  color: white;
  padding: 8px 12px;
  font-size: 16px;
  transition: background-color, font-weight, 0.2s;
  border-radius: 6px;
  :hover {
    background-color: #5f5f5f;
    font-weight: bold;
  }
`;
const Description = styled.div`
  border: 1px solid gray;
  padding: 4px 8px;
  text-align: left;
`;
const CurrentMeeting = styled.div`
  text-align: left;
`;
const CurrentContainer = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Book = styled.div`
  width: 200px;
  height: 240px;
  margin-right: 20px;
`;
const BookCover = styled.img`
  width: 200px;
  height: 240px;
  border-radius: 6px;
`;
const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
`;
const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 50%;
`;
const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const AfterBooks = styled.div`
  text-align: left;
`;
const BooksContainer = styled.ul`
  display: flex;
`;
const MeetingNotes = styled.div`
  text-align: left;
`;
const NotesContainer = styled.ul`
  display: flex;
  gap: 20px;
`;
const Note = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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
};
