import React, { ChangeEvent } from "react";

import { Undefinable } from "../../../common/types";

import styled from "styled-components";

interface InputContainerProps {
  styled: StyledType;
  readonly target: string;
  readonly placeholder: string;
  onChangeTarget: (target: Undefinable<EventTarget & HTMLInputElement>) => void;
}

type StyledType = {
  height: string;
}

const Container = styled.div<StyledType>`
  height: ${props => {
    return props.height;
  }};
`

const InputField = styled.input`
  height: 100%;
  width: 100%;

  border: 1px solid #dedede;
  border-radius: 6px;

  outline-width: 0;
`

/**
 * 공용 입력창 컴포넌트
 */
const InputContainer: React.FC<InputContainerProps> = ({ styled, target, placeholder, onChangeTarget }) => {

  const handleInput = (event?: ChangeEvent<HTMLInputElement>) => {
    onChangeTarget(event?.target);
  }
  
  return (
    <Container height={styled.height}>
      <InputField 
        className="inputField"
        type="text"
        data-key={target} 
        placeholder={placeholder}
        onChange={handleInput}
      />
    </Container>
  );
}

export default InputContainer;