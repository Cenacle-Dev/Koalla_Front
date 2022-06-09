import React from "react";
import * as S from "./styles";

const Meeting = ({ title, body, category, image }: any) => {
  return (
    <S.Main>
      <S.Link />
      <S.Wrapper>
        <S.Img src={image} alt="image" />
      </S.Wrapper>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{body}</S.Description>
        <S.Tag>#{category}</S.Tag>
      </S.Info>
    </S.Main>
  );
};

export default Meeting;
