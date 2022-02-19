import React, { ChangeEvent } from "react";

import styled from "styled-components";

interface InputContainerProps {
  styled: StyledType;
  readonly identifier: string;
  readonly placeholder: string;
  onChange: (target: ChangeEvent<HTMLInputElement>) => void;
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
const InputContainer: React.FC<InputContainerProps> = ({ styled, identifier, placeholder, onChange }) => {  
  return (
    <Container height={styled.height}>
      <InputField 
        className="inputField"
        type="text"
        name={identifier}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
}

export default InputContainer;