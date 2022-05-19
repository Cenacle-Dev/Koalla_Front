import React from "react";

import styled from "styled-components";

interface ModalBackgroundProps<Element extends JSX.Element> {
  component: Element
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBackgroundContainer: React.FC<ModalBackgroundProps<JSX.Element>> = ({ component }) => {
  return (
    <Container>
      { component }
    </Container>
  );
}

export default ModalBackgroundContainer;