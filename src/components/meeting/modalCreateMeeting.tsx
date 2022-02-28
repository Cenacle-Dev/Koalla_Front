import React, { ChangeEvent, MouseEvent, useState } from "react";

import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

import { ImageUpload } from "../common/imageUpload";
import InputContainer from "../common/InputContainer";
import SelectButtonContainer from "../common/selectButtonContainer";
import SelectOptionContainer from "../common/selectOptionContainer";
import BaseButton from "../common/baseButton";

import { Location, Category, CreateMeetingInfo } from "../../common/types";
import { CATEGORY, LOCATION } from "../../common/constant";

interface CreateMeetingProps {
  didTapCloseButton(event: MouseEvent<HTMLButtonElement>): void;
  didTapSubmitButton(createMeetingInfo: CreateMeetingInfo): void;
}

const ModalContainer = styled.div`
  height: 80%;
  width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  left: 50%;
  top: 50%;

  background-color: white;

  border-radius: 2rem;
  padding: 1.5rem;
  transform: translate(-50%, -50%);
  z-index: 101;
`;

const CloseButton = styled.button`
  align-self: flex-end;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const ImageBox = styled.div`
  flex-basis: 10rem;
  height: 8rem;
  border: 1px solid #dedede;
  border-radius: 1rem;
  text-align: center;
`;

const ImageDescLabel = styled.p`
  top: 50%;
`;

const ModalCreateMeeting: React.FC<CreateMeetingProps> = ({
  didTapCloseButton,
  didTapSubmitButton,
}) => {
  const [imageFile, setImageFile] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [location, setLocation] = useState<Location>("온라인");
  const [category, setCategory] = useState<Category>("");

  const imageFileHandler = (file: File) => {
    const imageFile: File = file;
    setImageFile(imageFile);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        setTags(value);
    }
  };

  const selectOptionsHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(event.currentTarget.value);

    const category = event.currentTarget.value as Category;

    if (category) {
      setCategory(category);
    } else {
      alert("카테고리를 선택 해주세요.");
    }
  };

  const selectButtonHandler = (value: string) => {
    console.log(value);

    const location: Location = value as Location;
    setLocation(location);
  };

  const submitHandler = (_: React.SyntheticEvent) => {
    if (!title || !category) {
      alert("모임 이름과 카테고리 선택이 필요합니다.");
      return;
    }

    didTapSubmitButton({
      image: imageFile,
      title: title,
      description: description,
      tags: tags,
      location: location,
      category: category,
    });
  };

  return (
    <ModalContainer>
      <CloseButton onClick={didTapCloseButton}>
        <CloseIcon />
      </CloseButton>

      <ImageContainer>
        <ImageBox>
          <ImageUpload onChangeFile={imageFileHandler} />
        </ImageBox>
        <ImageDescLabel>
          모임의 대표 이미지를 등록해주세요.(10MB 미만)
        </ImageDescLabel>
      </ImageContainer>

      <InputContainer
        inputType="default"
        identifier="title"
        placeholder="모임 이름을 입력해주세요."
        onChange={inputHandler}
      />

      <InputContainer
        inputType="description"
        identifier="description"
        placeholder="다른 사람이 모임에 참여할 수 있도록 간단한 설명을 작성 해주세요."
        onChange={inputHandler}
      />

      <InputContainer
        inputType="default"
        identifier="tags"
        placeholder="#모임과 #연관된 #태그를 #추가"
        onChange={inputHandler}
      />

      <SelectButtonContainer
        type={{
          baseButtonTypes: ["selected", "default"],
          titles: LOCATION,
        }}
        onClick={selectButtonHandler}
      />

      <SelectOptionContainer
        placeholder="카테고리를 선택 해주세요."
        options={CATEGORY}
        onChange={selectOptionsHandler}
      />

      <BaseButton buttonType="submit" title="등록" onClick={submitHandler} />
    </ModalContainer>
  );
};

export default ModalCreateMeeting;
