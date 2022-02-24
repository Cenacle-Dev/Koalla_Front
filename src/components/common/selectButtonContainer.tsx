import React, { Fragment, SyntheticEvent, useState } from "react";

import styled from "styled-components";
import BaseButton, { BaseButtonType } from "./baseButton";

export type SelectButtonType = {
  baseButtonTypes: BaseButtonType[];
  titles: string[];
};

interface SelectButtonContainerProps {
  type: SelectButtonType;
  onClick: (value: string) => void;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Spacer = styled.div`
  width: 1.5rem;
`;

const SelectButtonContainer: React.FC<SelectButtonContainerProps> = ({
  type,
  onClick,
}) => {
  const [buttonTypes, setButtonTypes] = useState<BaseButtonType[]>(
    type.baseButtonTypes
  );

  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as HTMLButtonElement;
    const value = target.value;

    setButtonTypes(
      buttonTypes.map((type) => {
        return type === "default" ? "selected" : "default";
      })
    );

    onClick(value);
  };

  const buttons: JSX.Element[] = type.titles.map((title, index) => (
    <Fragment key={index}>
      <BaseButton
        key={index}
        buttonType={buttonTypes[index]}
        title={title}
        onClick={handleClick}
      />
      {index != buttonTypes.length - 1 && <Spacer />}
    </Fragment>
  ));

  return (
    <ButtonContainer>
      {buttons}
    </ButtonContainer>
    );
};

export default SelectButtonContainer;
