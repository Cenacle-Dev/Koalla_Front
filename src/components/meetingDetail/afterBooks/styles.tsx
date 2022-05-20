import styled, { css } from "styled-components";

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
`;

// ? 진행 예정 도서

const Main = styled.section`
  ${Section};
`;
const AfterBook = styled.li`
  ${Frame};
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 1 1 33.3%;
  }
`;

const BooksContainer = styled.ul`
  display: flex;
  gap: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    gap: 0;
  }
`;

const SubTitle = styled.h3``;
const BookCover = styled.img`
  width: 230px;
  height: 300px;
`;

export { AfterBook, Main, BooksContainer, SubTitle, BookCover };
