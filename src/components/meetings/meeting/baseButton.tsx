import React from "react";

import styled from "styled-components";

interface BaseButtonProps {
  styled: StyledType;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type StyledType = {
  height: string;
}

const Button = styled.button<StyledType>`
  height: ${props => {
    return props.height;
  }};
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 0.5rem;
  font-size: medium;
  font-weight: normal;
`

const BaseButton: React.FC<BaseButtonProps>= ({ styled, title, onClick }) => {

  return (
    <Button height={styled.height} onClick={onClick}>{title}</Button>
  );
}

export default BaseButton;
