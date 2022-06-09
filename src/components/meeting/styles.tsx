import styled from "styled-components";

const Main = styled.li`
  background-color: #f7f7f7;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 24%;
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 18px;

  margin-bottom: 10px;
  border-radius: 16px;
  @media (max-width: 480px) {
    flex: 0 0 100%;
    font-size: 8px;
  }
  :hover {
    & img {
      transform: scale(1.1);
    }
    & h3 {
      color: #7c7c7c;
    }
  }
`;

const Link = styled.a`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ImageContainer = styled.div``;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
`;

const Img = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 6px;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;

const Info = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 3px;
  padding-bottom: 16px;
`;

const Title = styled.h3`
  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Tag = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

export {
  Description,
  Img,
  Link,
  Wrapper,
  ImageContainer,
  Info,
  Main,
  Tag,
  Title,
};
