import styled from "styled-components";

const Main = styled.section`
  margin-bottom: 10px;
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

export {
  Button,
  Buttons,
  Description,
  Figcaption,
  Figure,
  Intro,
  MeetingImg,
  NumberOfMembers,
  SubTitle,
  Title,
  Main,
};
