import React, { Fragment, useEffect, useRef, useState } from "react";

import Resizer from "react-image-file-resizer";

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
};

type IconSize = "default" | "small" | "large";

type IconPosition = {
  readonly top: string;
};

export interface ImageUploadProps {
  readonly imageSize?: ImageSize;
  readonly iconSize?: IconSize;
  readonly iconPosition?: IconPosition;
  onChangeFile: (file: File) => void;
}

const ImageInput = styled.input``;
const Image = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 1rem;
`;

/**
 * 이미지 업로드시 프리뷰 및 파일처리
 */
export const ImageUploader: React.FC<ImageUploadProps> = ({
  imageSize,
  iconSize,
  iconPosition,
  onChangeFile,
}) => {
  const [selectedImageFile, setSelectedImageFile] = useState<File>();
  const [previewURL, setPreviewURL] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if (!selectedImageFile) {
      setPreviewURL(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImageFile);
    setPreviewURL(objectUrl);

    // Unmount 시 revoke 처리.
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImageFile]);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedImageFile(undefined);
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
              const stringURL = url as string;
              console.log(stringURL);
              setPreviewURL(stringURL);
            }
          );
        } catch (error) {
          console.log(error);
        }
      }

      setSelectedImageFile(imageFile);
      onChangeFile(imageFile);
    } else {
      setSelectedImageFile(undefined);
    }
  };

  return (
    <div>
      {selectedImageFile === undefined && (
        <Fragment>
          <label htmlFor="imageInputId">
            <AddCircleOutlineIcon
              style={{
                cursor: "pointer",
                marginTop: iconPosition?.top ?? "20%",
              }}
              sx={{
                fontSize: iconSize === "small" ? 50 : 70,
                color: red[400],
              }}
            />
          </label>
          <ImageInput
            id="imageInputId"
            type="file"
            onChange={fileChangeHandler}
            ref={inputRef}
            hidden
          />
        </Fragment>
      )}
      {selectedImageFile && previewURL && <Image src={previewURL} />}
    </div>
  );
};
