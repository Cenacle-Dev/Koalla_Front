import React, { ChangeEvent } from "react";

import styled from "styled-components";

interface SelectOptionContainerProps {
  readonly placeholder: string;
  readonly options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Container = styled.select`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  border: 1px solid #dedede;
  border-radius: 6px;

  :focus {
    outline: none;
  }
`;

const Option = styled.option`
`;

/**
 * 공용 Select 컴포넌트
 */
const SelectOptionContainer: React.FC<SelectOptionContainerProps> = ({
  placeholder,
  options,
  onChange
}) => {

  const makeOptionElements = (options: string[]) => {
    return options.map((option, index) => {
      return <Option key={index} value={option}>{option}</Option>
    })
  }

  return (
    <Container defaultValue="" onChange={onChange} >
      <Option value="" disabled>{placeholder}</Option>
      {makeOptionElements(options)}
    </Container>
  );
};

export default SelectOptionContainer;
