import React from "react";

import styled from "styled-components";

export type BaseButtonType = 'default' | 'selected' | 'submit';

interface BaseButtonProps {
  readonly buttonType: BaseButtonType;
  readonly title: string;
  onClick: (event: React.SyntheticEvent) => void;
}

const Button = styled.button<{ buttonType: BaseButtonType }>`
  height: ${props => {
    switch (props.buttonType) {
      case 'submit':
        return '3rem';
      default:
        return '4rem';
    }
  }};
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 0.5rem;
  font-size: medium;
  font-weight: normal;
  color: black;
  background-color: ${props => {
    switch (props.buttonType) {
      case 'selected':
        return '#dedede';
      default:
        return 'white';
    }
  }};
`;

const BaseButton: React.FC<BaseButtonProps> = ({ buttonType, title, onClick }) => {
  return (
    <Button buttonType={buttonType} onClick={onClick} value={title}>
      {title}
    </Button>
  );
};

export default BaseButton;
