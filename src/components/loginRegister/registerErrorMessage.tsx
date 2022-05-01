import { memo, useEffect, useState } from "react";
import styled from "styled-components";

interface StatusProps {
  target: string;
  status: string | null;
}

const ErrorMessage = memo(({ target, status }: StatusProps) => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    switch (target) {
      case "nickname":
        if (status === "none") {
          setMessage("닉네임을 입력해주세요.");
        } else if (status === "bad") {
          setMessage("2글자 이상 입력해주세요.");
        } else {
          return;
        }
        break;
      case "email":
        if (status === "none") {
          setMessage("이메일을 입력해주세요.");
        } else if (status === "bad") {
          setMessage("이메일 형식을 맞춰 입력해주세요.");
        } else {
          return;
        }
        break;
      case "password":
        if (status === "none") {
          setMessage("비밀번호를 입력해주세요.");
        } else if (status === "bad") {
          setMessage("대문자, 소문자, 특수문자 포함 8글자 이상 입력해주세요.");
        } else {
          return;
        }
        break;
      case "confirmPassword":
        if (status === "bad") {
          setMessage("비밀번호가 일치하지 않습니다.");
        } else if (status === "good") {
          return;
        } else {
          return;
        }
        break;
      default:
        break;
    }
  }, [target, status]);

  return (
    <Main>
      <Message isDisplay={status}>{message}</Message>
    </Main>
  );
});

const Main = styled.div`
  height: 30px;
  padding-top: 4px;
`;

const Message = styled.p<{ isDisplay: string | null }>`
  color: #f25555;
  display: ${(props) => {
    if (props.isDisplay === "good" || props.isDisplay === null) {
      return "none";
    } else {
      return "flex";
    }
  }};
  font-weight: 600;
  font-size: 0.8rem;
  margin: 0;
  flex-basis: 1.5rem;
  padding-left: 2px;
`;

export default ErrorMessage;
