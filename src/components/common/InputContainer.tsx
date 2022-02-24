import React, { ChangeEvent } from "react";

import styled from "styled-components";

type InputContainerType = 'default' | 'description';

interface InputContainerProps {
  readonly inputType: InputContainerType;
  readonly identifier: string;
  readonly placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div<{ inputType: InputContainerType }>`
  height: ${props => {
    switch (props.inputType) {
      case 'description':
        return '6.5rem';
      default:
        return '2.5rem';
    }
  }};
`

const InputField = styled.input`
  height: 100%;
  width: 100%;

  border: 1px solid #dedede;
  border-radius: 6px;

  font-weight: 600;
  font-size: 15px;

  outline-width: 0;
  
  ::-webkit-input-placeholder {
    color: #dedede;
  }
`

/**
 * 공용 입력창 컴포넌트
 */
const InputContainer: React.FC<InputContainerProps> = ({ inputType, identifier, placeholder, onChange }) => {  
  return (
    <Container inputType={inputType}>
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