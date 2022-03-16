import * as S from './styles';

const Meeting = ({ title, body, tag }: any) => {
  return (
    <S.Meeting>
      <S.Img
        src="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?s=612x612"
        alt=""
      />
      <S.MeetingInfo>
        <S.Title>{title}</S.Title>
        <S.Description>{body}</S.Description>
        <S.Tag>#{tag}</S.Tag>
      </S.MeetingInfo>
    </S.Meeting>
  );
};

export default Meeting;
