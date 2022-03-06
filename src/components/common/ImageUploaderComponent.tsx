import React, { useState, MouseEvent } from "react";

import styled from "styled-components";

import { ImageUploader } from "./ImageUploader";

interface ImageUploaderComponentProps {
  onChangeFile: (file: File) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageBox = styled.div`
  flex-basis: 7rem;
  height: 6.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  text-align: center;
  background-color: white;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const DescriptionLabel = styled.p`
  top: 50%;
  text-align: left;
  color: white;
`;

const ModifierContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const UpdateImageButton = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: underline;
`;

const RemoveImageButton = styled.button`
  color: white;
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
  onChangeFile
}) => {
  const [imageFile, setImageFile] = useState<File>();
  const [isUpdateImage, setIsUpdateImage] = useState<boolean>(false);

  const imageFileHandler = (file: File) => {
    setImageFile(file);
    onChangeFile(file);
  };

  const imageDescription: JSX.Element = (
    <div>
      프로필 이미지를 등록해주세요.
      <br />
      (10MB 미만)
    </div>
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name);

    const name = event.currentTarget.name;

    switch (name) {
      case "update":
        setIsUpdateImage(true)
        break;
      case "remove":
        setIsUpdateImage(true)
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
          iconPosition={{ top: "25%" }}
          onChangeFile={imageFileHandler}
        />
      </ImageBox>
      <HorizontalSpacer />
      <DescriptionContainer>
        <DescriptionLabel>{imageDescription}</DescriptionLabel>
      </DescriptionContainer>
    </Container>
  );
};

export default ImageUploaderComponent;
