import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ModalBackgroundProps {
  children: ReactElement | null;
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

const ModalBackgroundContainer: React.FC<ModalBackgroundProps> = ({
  children,
}) => <Container>{children}</Container>;

export default ModalBackgroundContainer;
