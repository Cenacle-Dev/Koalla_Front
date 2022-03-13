import React from "react";
import AddBoxIcon from "@mui/icons-material/Add";
import * as S from "./styles";

const AddMeeting = ({ handleClick }: any) => {
  return (
    <S.OpenModal onClick={handleClick}>
      <AddBoxIcon fontSize="large" />
    </S.OpenModal>
  );
};

export default AddMeeting;
