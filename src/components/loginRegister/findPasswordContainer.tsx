import React, { ChangeEvent, MouseEvent, useState } from "react";

import styled from "styled-components";

import InputContainer from "../common/InputContainer";

interface FindPasswordContainerProps {
  onComplete: () => void;
}

const Container = styled.div`
  top: calc(50% - 6rem);
  left: calc(50% - 14rem);

  height: 12rem;
  width: 28rem;

  position: absolute;
  display: flex;

  border-radius: 10px;
  border-color: white;
  border-width: 1rem;

  border: 0.2rem solid white;
`;

const InnerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem;
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

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const SubmitButton = styled.button`
  border-radius: 10px;
  border-color: white;
  border-width: 1rem;

  border: 0.2rem solid;

  color: white;

  font-weight: 700;
  font-size: large;

  flex-basis: 3rem;
`;

/**
 * 비밀번호 찾기 컨테이너 화면.
 */
const FindPasswordContainer: React.FC<FindPasswordContainerProps> = ({
  onComplete,
}) => {
  const [email, setEmail] = useState<string>();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    setEmail(target.value);
  };

  const handleSendEmail = (event: MouseEvent<HTMLButtonElement>) => {
    onComplete();
  };

  return (
    <Container>
      <InnerContainer>
        <NotificationLabel>
          비밀번호 재설정을 위해 메일을 전송 합니다.
        </NotificationLabel>
        <InputContainer
          identifier="email"
          placeholder="이메일을 입력 해주세요."
          onChange={handleInput}
        />
        <VerticalSpacer />
        <SubmitButton onClick={handleSendEmail}>
          비밀번호 재설정 메일 보내기
        </SubmitButton>
      </InnerContainer>
    </Container>
  );
};

export default FindPasswordContainer;
