import React, { ChangeEvent, MouseEvent } from "react";

import styled from "styled-components";
import BaseButton from "./baseButton";

import InputContainer from "./InputContainer";

export type CreateMeetingInfo = {
  image?: ImageData,
  title: string,
  description?: string,
  tags?: string[]
}

interface CreateMeetingProps {
  didTapCloseButton(event: MouseEvent<HTMLButtonElement>): void;
  didTapSubmitButton(createMeetingInfo: CreateMeetingInfo): void;
}

const ModalContainer = styled.div`
  height: 75%;
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
`

const CloseButton = styled.button`
  align-self: flex-end;
`

const ImageContainer = styled.div`
  display: flex;
`

const ImageBox = styled.button`
  flex-basis: 10rem;
  border: 1px solid #dedede;
  border-radius: 1rem;
`

const ImageDescLabel = styled.p`

`

const ButtonContainer = styled.div`
  display: flex;
`

const Spacer = styled.div`
  width: 1rem;
`

const ModalCreateMeeting: React.FC<CreateMeetingProps> = (
  { didTapCloseButton, didTapSubmitButton }
) => {

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.name);
    
    console.log(event.currentTarget.value);
  }

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // @todo title 미 입력시 alert 노출처리 추가.
    const createMeetingInfo: CreateMeetingInfo = {
      image: undefined,
      title: '',
      description: '',
      tags: []
    }

    didTapSubmitButton(createMeetingInfo)
  }

  return (
    <ModalContainer>
      
      <CloseButton onClick={didTapCloseButton}>X</CloseButton>
      <ImageContainer>
        <ImageBox/>
        <ImageDescLabel>모임의 대표 이미지를 등록해주세요.(10MB 미만)</ImageDescLabel>
      </ImageContainer>
      <InputContainer
        styled={{height: "2.5rem"}}
        identifier="title" 
        placeholder='모임 이름을 입력해주세요.' 
        onChange={inputHandler}
      />
      <InputContainer
        styled={{height: "8rem"}}
        identifier="description"
        placeholder='다른 사람이 모임에 참여할 수 있도록 간단한 설명을 작성 해주세요.' 
        onChange={inputHandler}
      />
      <InputContainer
        styled={{height: "2.5rem"}}
        identifier="tags"
        placeholder='#모임과 #연관된 #태그를 #추가' 
        onChange={inputHandler}
      />

      <ButtonContainer>
        <BaseButton styled={{height: "4rem"}} title="온라인" onClick={submitHandler}/>
        <Spacer></Spacer>
        <BaseButton styled={{height: "4rem"}} title="오프라인" onClick={submitHandler}/>  
      </ButtonContainer>

      <BaseButton styled={{height: "3rem"}} title="등록" onClick={submitHandler}/>
    </ModalContainer>
  );
}

export default ModalCreateMeeting;
