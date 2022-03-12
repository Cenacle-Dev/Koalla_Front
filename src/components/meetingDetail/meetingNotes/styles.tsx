import styled, { css } from "styled-components";

// ? 공통

const Section = css`
  position: relative;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

const Main = styled.section`
  ${Section};
`;
const NotesContainer = styled.ul`
  display: flex;
  /* gap: 20px; */
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

const SubTitle = styled.h3``;

export { Map, Main, Note, NoteCover, NoteUser, NotesContainer, SubTitle };
