import React, { useEffect, useRef, useState } from 'react';

import {
  UploadImageUploadArea,
  UploadImageIcon,
  UploadHelpTextWrapper,
  UploadImageHelpText,
  UploadImageSelectText,
  UploadImageOverlay,
  HiddenFileInput,
} from './SelectFile.styled';

import SaveImage from '../../../../../assets/save_image.png';

type Props = {
  onSelectFile: (file: File) => void;
};

const SelectFile = ({ onSelectFile }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const uploadAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCount = useRef(0);

  const handleDragIn = (ev: DragEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    dragCount.current += 1;

    if (ev.dataTransfer?.items && ev.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = (ev: DragEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    dragCount.current -= 1;

    if (dragCount.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (ev: DragEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
  };

  const handleDrop = (ev: DragEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

    dragCount.current = 0;
    setIsDragging(false);

    if (ev.dataTransfer?.files && ev.dataTransfer.files.length > 0) {
      onSelectFile(ev.dataTransfer.files[0]);
      ev.dataTransfer.clearData();
    }
  };

  const handleClickOnSelect = () => {
    if (!fileInputRef || !fileInputRef.current) {
      return;
    }

    fileInputRef.current.click();
  };

  const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target?.files?.[0]) {
      onSelectFile(ev.target.files[0]);
    }
  };

  useEffect(() => {
    if (!uploadAreaRef || !uploadAreaRef.current) {
      return;
    }

    uploadAreaRef.current.addEventListener('dragenter', handleDragIn);
    uploadAreaRef.current.addEventListener('dragleave', handleDragOut);
    uploadAreaRef.current.addEventListener('dragover', handleDragOver);
    uploadAreaRef.current.addEventListener('drop', handleDrop);

    return () => {
      if (!uploadAreaRef || !uploadAreaRef.current) {
        return;
      }

      uploadAreaRef.current.removeEventListener('dragenter', handleDragIn);
      uploadAreaRef.current.removeEventListener('dragleave', handleDragOut);
      uploadAreaRef.current.removeEventListener('dragover', handleDragOver);
      uploadAreaRef.current.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <>
      <HiddenFileInput ref={fileInputRef} type="file" onChange={onFileChange} />

      <UploadImageUploadArea ref={uploadAreaRef}>
        {isDragging && <UploadImageOverlay />}

        <UploadImageIcon src={SaveImage} alt="Upload image icon" />

        <UploadHelpTextWrapper>
          <UploadImageHelpText>Drag & Drop image file to upload or</UploadImageHelpText>
          <UploadImageSelectText onClick={handleClickOnSelect}>select</UploadImageSelectText>
          <UploadImageHelpText>it manually</UploadImageHelpText>
        </UploadHelpTextWrapper>
      </UploadImageUploadArea>
    </>
  );
};

export default SelectFile;
