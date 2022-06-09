import styled from "styled-components";

const Meetings = styled.ul`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
  gap: 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export { Meetings };
