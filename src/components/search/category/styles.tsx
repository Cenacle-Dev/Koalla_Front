import styled from "styled-components";

const CategoryContainer = styled.article`
  display: flex;
  padding: 6px 0 6px 20px;
`;

const Title = styled.span`
  padding: 6px 0;
  width: 10%;
  display: flex;
  color: #90dce2;
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const SelectButton = styled.button`
  background-color: #90dce2;
  border-radius: 18px;
  padding: 6px 14px;
  margin: 8px;
`;

const SelectedOption = styled.span`
  color: white;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export {
  CategoryContainer,
  ButtonContainer,
  SelectButton,
  SelectedOption,
  Title,
};
