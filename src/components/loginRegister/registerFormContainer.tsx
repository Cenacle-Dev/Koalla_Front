import React, {
  ChangeEvent,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import styled from "styled-components";

import { RegisterInfo } from "../../common/types";
import ImageUploaderComponent from "../common/ImageUploaderComponent";
import InputContainer from "../common/InputContainer";
import ErrorMessage from "./registerErrorMessage";

interface RegisterFormContainerProps {
  onRegister: (info: RegisterInfo) => void;
}

type Status = "none" | "bad" | "good";

// 회원가입 폼 컨테이너 화면.

const RegisterFormContainer: React.FC<RegisterFormContainerProps> = memo(
  ({ onRegister }) => {
    const [imageFile, setImageFile] = useState<File>();
    const [nickname, setNickname] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [checkList, setCheckList] = useState<boolean[]>([false, false]);
    const [nameStatus, setNameStatus] = useState<Status>("good");
    const [passwordStatus, setPasswordStatus] = useState<Status>("good");
    const [emailStatus, setEmailStatus] = useState<Status>("good");
    const [confirmStatus, setConfirmStatus] = useState<Status>("good");

    const nicknameForm = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
    const emailForm =
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    const passwordForm =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

    const handleImageFile = (file: File) => {
      // const imageFile: File = file;
      // setImageFile(imageFile);
    };

    const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const target = event.currentTarget;
      const value = target.value.replace(/\s/gi, "");

      switch (target.name) {
        case "nickname":
          setNickname(value);
          checkNickname(value);
          break;
        case "email":
          setEmail(value);
          checkEmail(value);
          break;
        case "password":
          setPassword(value);
          checkPassword(value);
          break;
        case "confirmPassword":
          setConfirmPassword(value);
          verifyPassword(value);
          break;
        default:
          break;
      }
    }, []);

    const checkNickname = useCallback((nickname: string) => {
      if (!nickname) {
        setNameStatus("none");
      } else if (!nicknameForm.test(nickname)) {
        setNameStatus("bad");
      } else {
        setNameStatus("good");
      }
    }, []);

    const checkEmail = useCallback((email: string) => {
      if (!email) {
        setEmailStatus("none");
      } else if (!emailForm.test(email)) {
        setEmailStatus("bad");
      } else {
        setEmailStatus("good");
      }
    }, []);

    const checkPassword = useCallback((password: string) => {
      if (!password) {
        setPasswordStatus("none");
      } else if (!passwordForm.test(password)) {
        setPasswordStatus("bad");
      } else {
        setPasswordStatus("good");
      }
    }, []);

    const verifyPassword = useCallback((confirmPassword: string) => {
      if (confirmPassword !== password) {
        setConfirmStatus("bad");
      } else {
        setConfirmStatus("good");
      }
    }, []);

    const handleCheckBox = useCallback(
      (event: MouseEvent<HTMLInputElement>) => {
        const name: string = event.currentTarget.name;
        const checked: boolean = event.currentTarget.checked;

        let _checkList = [...checkList];
        let index = name === "useCheckbox" ? 0 : 1;

        let useItem = _checkList[index];
        useItem = checked;
        _checkList[index] = useItem;
        setCheckList(_checkList);
      },
      []
    );

    const handleRegister = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (!nickname || !email || !password || !nickname) {
          // @todo: register button inactive
        }

        const isCheckedAll: boolean =
          checkList.filter((element) => {
            return !element;
          }).length === 0;

        if (!isCheckedAll) {
          alert("이용약관 및 개인정보처리방침 동의가 필요 합니다.");
          return;
        }

        const registerInfo: RegisterInfo = {
          profileImage: imageFile,
          nickname: nickname ?? "",
          email: email ?? "",
          password: password ?? "",
        };
        onRegister(registerInfo);
      },
      []
    );

    return (
      <Container>
        <ImageUploaderComponent onChangeFile={handleImageFile} />
        <Title>닉네임</Title>
        <InputContainer
          identifier="nickname"
          placeholder="띄어쓰기 제외 2자 이상"
          maxLength={20}
          onChange={handleInput}
          autocomplete="nickname"
        />
        <ErrorMessage target="nickname" status={nameStatus} />

        <Title>이메일</Title>
        <InputContainer
          identifier="email"
          placeholder="이메일을 입력 해주세요."
          onChange={handleInput}
          autocomplete="email"
        />
        <ErrorMessage target="email" status={emailStatus} />

        <Title>비밀번호</Title>
        <InputContainer
          inputType="password"
          identifier="password"
          placeholder="대문자, 소문자, 특수문자를 포함해서 8글자 이상"
          maxLength={20}
          onChange={handleInput}
          autocomplete="new-password"
        />
        <ErrorMessage target="password" status={passwordStatus} />

        <InputContainer
          inputType="password"
          identifier="confirmPassword"
          placeholder="비밀번호를 다시 입력 해주세요."
          onChange={handleInput}
          autocomplete="new-password"
        />
        <ErrorMessage target="confirmPassword" status={confirmStatus} />

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
        <RegisterButton onClick={handleRegister}>계정 생성 하기</RegisterButton>
      </Container>
    );
  }
);

const Container = styled.form`
  top: calc(50% - 18rem);
  left: calc(50% - 12rem);

  height: 36rem;
  width: 24rem;

  position: absolute;
  display: flex;

  flex-direction: column;
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
        return "#f25555";
    }
  }};

  font-weight: 600;
  font-size: 0.8rem;

  margin: 0;

  display: flex;
  flex-basis: 1.5rem;
`;

const Title = styled.p`
  color: #fdfdfd;
  font-weight: 600;
  text-align: left;
  font-size: 0.9rem;
  margin: 0;
  flex-basis: 1.5rem;
  padding-left: 2px;
  padding-bottom: 4px;
`;

export default RegisterFormContainer;
