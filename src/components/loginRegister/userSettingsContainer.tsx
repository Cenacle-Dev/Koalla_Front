import React, { ChangeEvent, MouseEvent, useState } from "react";

import styled from "styled-components";

import { RegisterInfo } from "../../common/types";
import ImageUploaderComponent from "../common/ImageUploaderComponent";
import InputContainer from "../common/InputContainer";

interface UserSettingsContainerProps {
  onUpdate: (info: RegisterInfo) => void;
}

const Container = styled.div`
  top: calc(50% - 11rem);
  left: calc(50% - 12rem);

  height: 22rem;
  width: 24rem;

  position: absolute;
  display: flex;

  flex-direction: column;
`;

const VerticalSpacer = styled.div`
  flex-basis: 1rem;
`;

const UpdateButton = styled.button`
  color: white;

  padding: 0;

  font-weight: 700;
  font-size: 1rem;

  border: white solid;
  border-width: 0.2rem;
  border-radius: 0.7rem;

  flex-basis: 3rem;
`;

const DescriptionLabel = styled.p`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  margin-left: 0.2rem;
`;

type NotificationType = "default" | "error";

const NotificationLabel = styled.p<{ type?: NotificationType }>`
  color: ${(props) => {
    const type: NotificationType = props.type ?? "default";

    switch (type) {
      case "default":
        return "white";
      default:
        return "red";
    }
  }};

  font-weight: 600;
  font-size: 0.8rem;

  margin: 0;

  display: flex;
  flex-basis: 1.5rem;
`;

/**
 * 사용자 정보설정 화면.
 */
const UserSettingsContainer: React.FC<UserSettingsContainerProps> = ({
  onUpdate,
}) => {
  const [imageFile, setImageFile] = useState<File>();
  const [nickname, setNickname] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [checkList, setCheckList] = useState<boolean[]>([false, false]);

  const handleImageFile = (file: File) => {
    const imageFile: File = file;
    setImageFile(imageFile);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;

    const value = target.value;

    switch (target.name) {
      case "nickname":
        setNickname(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    if (!password) {
      // @todo: register button inactive
    }

    const registerInfo: RegisterInfo = {
      profileImage: imageFile,
      nickname: nickname ?? "",
      email: "",
      password: password ?? "",
    };

    onUpdate(registerInfo);
  };

  return (
    <Container>
      <ImageUploaderComponent onChangeFile={handleImageFile} />
      <VerticalSpacer />
      <NotificationLabel>영문 또는 한글 2자 이상</NotificationLabel>
      <InputContainer
        identifier="nickname"
        placeholder="사용자 닉네임"
        onChange={handleInput}
      />
      <VerticalSpacer />
      <NotificationLabel>
        수정을 위해 비밀번호를 입력 해주세요.
      </NotificationLabel>
      <InputContainer
        inputType="password"
        identifier="password"
        placeholder="비밀번호를 입력 해주세요."
        onChange={handleInput}
      />
      <VerticalSpacer />
      <UpdateButton onClick={handleUpdate}>수정 하기</UpdateButton>
    </Container>
  );
};

export default UserSettingsContainer;
