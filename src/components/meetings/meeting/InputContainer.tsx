import React, { ChangeEvent } from 'react';

import styled from 'styled-components';

type StyledType = {
  height: string;
};
interface InputContainerProps {
  styled: StyledType;
  readonly identifier: string;
  readonly placeholder: string;
  onChange: (target: ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div<StyledType>`
  height: ${(props) => props.height};
`;

const InputField = styled.input`
  height: 100%;
  width: 100%;

  border: 1px solid #dedede;
  border-radius: 6px;

  outline-width: 0;
`;

/**
 * 공용 입력창 컴포넌트
 */
const InputContainer: React.FC<InputContainerProps> = ({
  styled,
  identifier,
  placeholder,
  onChange,
}) => (
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

export default InputContainer;
