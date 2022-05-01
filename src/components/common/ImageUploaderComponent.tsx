import React, { MouseEvent, useRef } from "react";

import styled from "styled-components";

import ImageUploader, { ImageUploaderRef } from "./ImageUploader";

interface ImageUploaderComponentProps {
  onChangeFile: (file?: File) => void;
}

interface ImageModifierItem {
  name: ImageModifierType;
  title: string;
}

type ImageModifierType = "update" | "remove"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageBox = styled.div`
  flex-basis: 8rem;
  height: 8rem;
  border: 1px solid #dedede;
  border-radius: 1rem;
  text-align: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const DescriptionLabel = styled.div`
  top: 50%;
  text-align: left;
  color: black;
  white-space: pre;
`;

const ModifierContainer = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const ModifierImageButton = styled.button`
  color: black;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: underline;
`;

const HorizontalSpacer = styled.div`
  flex-basis: 1rem;
`;

/**
 * 회원가입 폼 컨테이너 화면.
 */
const ImageUploaderComponent: React.FC<ImageUploaderComponentProps> = ({
  onChangeFile,
}) => {

  const imageModifierItems: ImageModifierItem[] = [
    {name: "update", title: "수정"}, 
    {name: "remove", title: "삭제"}
  ]
  const imageUploaderRef = useRef<ImageUploaderRef>(null);

  const imageFileHandler = (file?: File) => {
    onChangeFile(file);
  };

  const imageDescription: String = "프로필 이미지를 등록해주세요.\n(10MB 미만)"

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {

    const name = event.currentTarget.name;
    switch (name) {
      case "update":
        imageUploaderRef.current?.update()
        break;
      case "remove":
        imageUploaderRef.current?.remove()
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <ImageBox>
        <ImageUploader
          iconSize="small"
          iconPosition={{ top: "30%" }}
          onChangeFile={imageFileHandler}
          ref={imageUploaderRef}
        />
      </ImageBox>
      <HorizontalSpacer />
      <DescriptionContainer>
        <DescriptionLabel>{imageDescription}</DescriptionLabel>
        <ModifierContainer>
          {
            imageModifierItems.map((item, index) => {
              return (
                <ModifierImageButton 
                  key={index} 
                  name={item.name} 
                  onClick={handleClick}
                >
                  {item.title}
                </ModifierImageButton>
              )
            })
          }
        </ModifierContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default ImageUploaderComponent;
