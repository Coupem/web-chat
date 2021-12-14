import React, { useState, useRef, useMemo } from 'react';

import { uploadFile } from '../../../../utils/uploadFile';
import { sendToFirebase } from '../../../../utils/firebaseData';
import { fileFolders } from '../../../../constants/firebase';
import { uploadStatuses, descriptionTexts, headerTexts } from './constants';

import ProcessingFile from './components/ProcessingFile';
import SelectFile from './components/SelectFile';

import { UploadImageDescription, UploadImageModalWrapper, UploadImageTitle } from './UploadImage.styled';

const MAX_FILE_SIZE = 5242880;
const ACCEPTABLE_FILE_TYPE = 'image';

const UploadImage = () => {
  const [fileString, setFileString] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const fileName = useRef('');

  const uploadingStatus = useMemo(() => {
    if (!fileString) {
      return uploadStatuses.pending;
    }

    if (fileString && progress < 100) {
      return uploadStatuses.processing;
    }

    return uploadStatuses.finished;
  }, [progress, fileString]);

  const onProgress = (updateProgress: number) => {
    setProgress(Math.floor(updateProgress));
  };

  const onSuccess = (url: string) => {
    sendToFirebase(null, url);
  };

  const startUploading = (updateFileString: string) => {
    uploadFile(fileName.current, updateFileString, fileFolders.images, onProgress, onSuccess);
  };

  const onLoadFile = (ev: ProgressEvent<FileReader>) => {
    if (!ev.target?.result) {
      return;
    }

    const fString = ev.target.result as string;

    setFileString(fString);
    startUploading(fString);
  };

  const handleSelectFile = (file: File) => {
    const { size, type, name } = file;
    const [fileType] = type.split('/');

    if (size > MAX_FILE_SIZE || fileType !== ACCEPTABLE_FILE_TYPE) {
      console.error('File size or file type is not acceptable!');
      return;
    }

    const [clearName, extension] = name.toLowerCase().split('.');
    const nameWithTimestamp = `${clearName}_${Date.now()}.${extension}`;
    const reader = new FileReader();

    fileName.current = nameWithTimestamp;
    reader.onload = onLoadFile;
    reader.readAsDataURL(file);
  };

  return (
    <UploadImageModalWrapper>
      <UploadImageTitle>{headerTexts[uploadingStatus]}</UploadImageTitle>

      {!fileString && <SelectFile onSelectFile={handleSelectFile} />}

      {fileString && <ProcessingFile file={fileString} progress={progress} />}

      <UploadImageDescription>{descriptionTexts[uploadingStatus]}</UploadImageDescription>
    </UploadImageModalWrapper>
  );
};

export default UploadImage;
