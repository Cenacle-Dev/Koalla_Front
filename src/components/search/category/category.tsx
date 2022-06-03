import React, { Dispatch, SetStateAction, useState } from "react";
import { PlaceType } from "../searchHeader";
import * as S from "./styles";

interface Props {
  description: string;
  list: string[];
  handleCategory: Dispatch<SetStateAction<string | null>>;
  handlePlace: Dispatch<SetStateAction<PlaceType>>;
}

const Category = ({
  description,
  list,
  handleCategory,
  handlePlace,
}: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const categoryHandler = (condition: string) => {
    setClicked(!clicked);
    if (clicked) {
      handleCategory(condition);
    } else {
      handleCategory(null);
    }
  };

  const placeHandler = (condition: string) => {
    if (condition === "온라인") {
      handlePlace("online");
    } else {
      handlePlace("offline");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const condition: string = e.currentTarget.innerText;
    if (description === "카테고리") {
      categoryHandler(condition);
    } else {
      placeHandler(condition);
    }
  };

  return (
    <S.CategoryContainer>
      <S.Title>{description}</S.Title>
      <S.ButtonContainer>
        {list.map((value) => {
          return (
            <S.SelectButton onClick={handleClick}>
              <S.SelectedOption>{value}</S.SelectedOption>
            </S.SelectButton>
          );
        })}
      </S.ButtonContainer>
    </S.CategoryContainer>
  );
};

export default Category;
