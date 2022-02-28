import React, { Fragment, useEffect, useState } from "react";

import Resizer from "react-image-file-resizer"

import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { red } from "@mui/material/colors";

import { Optional } from "../../common/types";

/**
 * 이미지 리사이징 크기설정
 */
type ImageSize = {
  readonly maxHeight: number;
  readonly maxWidth: number;
}

export interface ImageUploadProps {
  readonly imageSize?: ImageSize;
  onChangeFile: (file: File) => void;
}

const ImageInput = styled.input``;
const Image = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
`;

/**
 * 이미지 업로드시 프리뷰 및 파일처리
 */
export const ImageUpload: React.FC<ImageUploadProps> = ({ imageSize, onChangeFile }) => {
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

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    const imageFile: Optional<File> = event.target.files[0];

    if (imageFile) {

      if (imageSize) {
        try {
          Resizer.imageFileResizer(
            imageFile,
            imageSize?.maxWidth ?? 0,
            imageSize?.maxHeight ?? 0,
            "JPEG",
            100,
            0,
            (url) => {
              const stringURL = url as string
              console.log(stringURL);
              setPreviewURL(stringURL);
            },
          )
        } catch (error) {
          console.log(error);
        }
      } 

      setSelectedFile(imageFile);
      onChangeFile(imageFile);
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
            onChange={fileChangeHandler}
            hidden
          />
        </Fragment>
      )}
      {selectedFile && previewURL && <Image src={previewURL} />}
    </div>
  );
};
