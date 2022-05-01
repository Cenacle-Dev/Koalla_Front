import React, { ChangeEvent, MouseEvent } from "react";

import styled from "styled-components";

type InputContainerType = "default" | "description" | "checkbox";

interface InputContainerProps {
  readonly inputContainerType?: InputContainerType;
  readonly inputType?: string;
  readonly identifier: string;
  readonly placeholder: string;
  readonly maxLength?: number;
  readonly autocomplete?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

const Container = styled.div<{ inputContainerType?: InputContainerType }>`
  height: ${(props) => {
    const type = props.inputContainerType ?? "default";
    switch (type) {
      case "description":
        return "6.5rem";
      case "default":
        return "2.5rem";
      default:
        break;
    }
  }};

  width: ${(props) => {
    const type = props.inputContainerType ?? "default";

    if (type === "checkbox") {
      return "1.5rem";
    }
  }};

  display: flex;
  align-items: center;
`;

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
`;

/**
 * 공용 입력창 컴포넌트
 */
const InputContainer: React.FC<InputContainerProps> = ({
  inputContainerType,
  inputType,
  identifier,
  placeholder,
  onChange,
  onClick,
  maxLength,
  autocomplete,
}) => {
  return (
    <Container inputContainerType={inputContainerType ?? "default"}>
      <InputField
        className="inputField"
        type={inputType ?? "text"}
        name={identifier}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        maxLength={maxLength}
        autoComplete={autocomplete}
      />
    </Container>
  );
};

export default InputContainer;
