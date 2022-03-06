import React, { ChangeEvent, MouseEvent, useState } from "react";

import styled from "styled-components";

import { RegisterInfo } from "../../common/types";
import InputContainer from "../common/InputContainer";

interface RegisterFormContainerProps {
  onRegister: (info: RegisterInfo) => void;
}

const Container = styled.div`
  top: calc(50% - 18rem);
  left: calc(50% - 12rem);

  height: 36rem;
  width: 24rem;

  position: absolute;
  display: flex;

  flex-direction: column;
`;

const Spacer = styled.div`
  flex-basis: 1rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RegisterButton = styled.button`
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
 * 회원가입 폼 컨테이너 화면.
 */
const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({
  onRegister,
}) => {
  const [nickname, setNickname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [checkList, setCheckList] = useState<boolean[]>([false, false]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;

    const value = target.value;

    switch (target.name) {
      case "nickname":
        setNickname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
      default:
        break;
    }
  };

  const handleCheckBox = (event: MouseEvent<HTMLInputElement>) => {
    const name: string = event.currentTarget.name;
    const checked: boolean = event.currentTarget.checked;

    let _checkList = [...checkList];
    let index = name === "useCheckbox" ? 0 : 1;

    let useItem = _checkList[index];
    useItem = checked;
    _checkList[index] = useItem;
    setCheckList(_checkList);
  };

  const handleRegister = (event: MouseEvent<HTMLButtonElement>) => {
    if (!nickname || !email || !password || !nickname) {
      // @todo: register button inactive
    }

    const isCheckedAll: boolean =
      checkList.filter((element) => {
        return !element;
      }).length == 0;

    if (!isCheckedAll) {
      alert("이용약관 및 개인정보처리방침 동의가 필요 합니다.");
      return;
    }

    const registerInfo: RegisterInfo = {
      nickname: nickname ?? "",
      email: email ?? "",
      password: password ?? "",
    };

    onRegister(registerInfo);
  };

  return (
    <Container>
      <NotificationLabel>영문 또는 한글 2자 이상</NotificationLabel>
      <InputContainer
        identifier="nickname"
        placeholder="닉네임을 입력 해주세요."
        onChange={handleInput}
      />
      <Spacer />
      <NotificationLabel type="error">
        올바른 이메일 형식이 아닙니다.
      </NotificationLabel>
      <InputContainer
        identifier="email"
        placeholder="이메일을 입력 해주세요."
        onChange={handleInput}
      />
      <Spacer />
      <NotificationLabel>
        대소문자 및 숫자, 특수문자를 포함하여 8자 이상
      </NotificationLabel>
      <InputContainer
        inputType="password"
        identifier="password"
        placeholder="비밀번호를 입력 해주세요."
        onChange={handleInput}
      />
      <Spacer />
      <NotificationLabel type="error">
        동일한 비밀번호를 입력 해주세요.
      </NotificationLabel>
      <InputContainer
        inputType="password"
        identifier="confirmPassword"
        placeholder="비밀번호를 다시 입력 해주세요."
        onChange={handleInput}
      />
      <Spacer />
      <CheckBoxContainer>
        <InputContainer
          inputContainerType="checkbox"
          inputType="checkbox"
          identifier="useCheckbox"
          placeholder=""
          onClick={handleCheckBox}
        />
        <DescriptionLabel>이용약관에 동의 합니다.</DescriptionLabel>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <InputContainer
          inputContainerType="checkbox"
          inputType="checkbox"
          identifier="privacyCheckbox"
          placeholder=""
          onClick={handleCheckBox}
        />
        <DescriptionLabel>개인정보처리방침에 동의 합니다.</DescriptionLabel>
      </CheckBoxContainer>
      <Spacer />
      <RegisterButton onClick={handleRegister}>계정 생성 하기</RegisterButton>
    </Container>
  );
};

export default RegisterFormContainer;
