import styled from "styled-components";

const Meeting = styled.li`
  flex: 0 0 23%;
  border-radius: 6px;
  background-color: white;

  @media (max-width: 480px) {
    flex: 0 0 100%;
    font-size: 8px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 6px 6px 0 0;
`;

const MeetingInfo = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 3px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
`;
const Description = styled.p`
  /* margin: 14% 0; */
`;
const Tag = styled.p`
  margin: 0;
`;

export { Meeting, MeetingInfo, Img, Description, Tag, Title };
