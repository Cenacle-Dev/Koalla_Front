import React, { ChangeEvent, MouseEvent, useState } from "react";

import styled from "styled-components";

import { LoginInfo } from "../../common/types";
import InputContainer from "../common/InputContainer";

interface LoginRegisterContainerProps {
  onLogin: (loginInfo: LoginInfo) => void;
  onRegister: (event: MouseEvent<HTMLButtonElement>) => void;
  onFindInfo: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Container = styled.div`
  top: calc(50% - 4.5rem);
  left: calc(50% - 14rem);

  height: 9.6rem;
  width: 28rem;

  position: absolute;
  display: flex;

  flex-direction: column;
`;

const VertialContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30rem;
`;

const HorizontalContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const VerticalSpacer = styled.div`
  width: 1rem;
`;

const HorizontalSpacer = styled.div`
  flex-basis: 1rem;
`;

const SubmitButton = styled.button`
  aspect-ratio: 1;

  border-radius: 10px;
  border-color: white;
  border-width: 1rem;

  border: 0.2rem solid;

  color: white;

  font-weight: 700;
  font-size: large;
`;

const RegisterAndFindInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  flex-basis: 5rem;
`;
const RegisterButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1rem;

  padding: 0;
`;

const FindInfoButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 0 0 1rem;
`;
/**
 * 로그인 | 회원가입 | 아이디/비밀번호 찾기 컨테이너 화면.
 */
const LoginRegisterContainer: React.FC<LoginRegisterContainerProps> = ({
  onLogin,
  onRegister,
  onFindInfo,
}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;

    switch (target.name) {
      case "email":
        setEmail(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      default:
        break;
    }
  };
  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    if (!email) {
      alert("이메일을 입력 해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력 해주세요.");
      return;
    }

    const loginInfo: LoginInfo = {
      email: email,
      password: password,
    };

    onLogin(loginInfo);
  };
  const handleRegister = (event: MouseEvent<HTMLButtonElement>) => {
    onRegister(event);
  };

  const handleFindInfo = (event: MouseEvent<HTMLButtonElement>) => {
    onFindInfo(event);
  };

  return (
    <Container>
      <HorizontalContainer>
        <VertialContainer>
          <InputContainer
            identifier="email"
            placeholder="이메일을 입력 해주세요."
            onChange={handleInput}
          />
          <HorizontalSpacer />
          <InputContainer
            inputType="password"
            identifier="password"
            placeholder="비밀번호를 입력 해주세요."
            onChange={handleInput}
          />
        </VertialContainer>
        <VerticalSpacer />
        <SubmitButton onClick={handleLogin}>로그인</SubmitButton>
      </HorizontalContainer>
      <VerticalSpacer />
      <RegisterAndFindInfoContainer>
        <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
        <FindInfoButton onClick={handleFindInfo}>
          아이디/비밀번호 찾기
        </FindInfoButton>
      </RegisterAndFindInfoContainer>
    </Container>
  );
};

export default LoginRegisterContainer;
