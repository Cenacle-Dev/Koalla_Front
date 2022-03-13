import styled from "styled-components";

const Meetings = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export { Meetings };
