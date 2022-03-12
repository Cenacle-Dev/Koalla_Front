import styled from "styled-components";

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

export { Main };
