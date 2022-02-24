import React, { Fragment, useEffect, useState } from "react";

import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { red } from "@mui/material/colors";

import { Optional } from "../../common/types";

export interface ImageUploadProps {
  onSelectedFile: (file: File) => void;
}

const ImageInput = styled.input``;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageUpload: React.FC<ImageUploadProps> = ({ onSelectedFile }) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [previewURL, setPreviewURL] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreviewURL(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewURL(objectUrl);
    
    // Unmount 시 revoke 처리.
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile]);

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    const imageFile: Optional<File> = event.target.files[0];

    if (imageFile) {
      setSelectedFile(imageFile);
      onSelectedFile(imageFile);
    } else {
      setSelectedFile(undefined);
    }
  };

  return (
    <div>
      {selectedFile === undefined && (
        <Fragment>
          <label htmlFor="imageInputId">
            <AddCircleOutlineIcon
              style={{
                cursor: "pointer",
                marginTop: "20%",
              }}
              sx={{
                fontSize: 70,
                color: red[400],
              }}
            />
          </label>
          <ImageInput
            id="imageInputId"
            type="file"
            onChange={onSelectFile}
            hidden
          />
        </Fragment>
      )}
      {selectedFile && <Image src={previewURL} />}
    </div>
  );
};
