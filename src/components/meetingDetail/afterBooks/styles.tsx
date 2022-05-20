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
  @media (max-width: 768px) {
    & img {
      flex: 0 0 33.3%;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  }
`;

const BooksContainer = styled.ul`
  display: flex;
  gap: 20px;
  overflow: hidden;
`;

const SubTitle = styled.h3``;
const BookCover = styled.img`
  width: 230px;
  height: 300px;
`;

export { AfterBook, Main, BooksContainer, SubTitle, BookCover };
