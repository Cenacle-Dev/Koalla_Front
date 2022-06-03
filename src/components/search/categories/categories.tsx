import React, { Dispatch, SetStateAction } from "react";
import Category from "../category/category";
import { PlaceType } from "../searchHeader";
import * as S from "./styles";

interface Props {
  handleCategory: Dispatch<SetStateAction<string | null>>;
  handlePlace: Dispatch<SetStateAction<PlaceType>>;
}

const Categories = ({ handleCategory, handlePlace }: Props) => {
  const searchOption = {
    카테고리: [
      "교양",
      "컴퓨터",
      "프로그래밍",
      "순수 문학",
      "과학",
      "비문학",
      "SF",
      "판타지",
      "무협",
    ],
    장소: ["온라인", "오프라인"],
  };

  return (
    <S.Filter>
      {Object.entries(searchOption).map((value) => (
        <Category
          description={value[0]}
          list={value[1]}
          handleCategory={handleCategory}
          handlePlace={handlePlace}
        />
      ))}
    </S.Filter>
  );
};
export default Categories;
