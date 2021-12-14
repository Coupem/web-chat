import React from 'react';

import ProgressBar from './ProgressBar';
import { UploadingFileImage, ProgressBarWrapper } from './ProcessingFile.styled';

type Props = {
  file: string | null;
  progress: number;
};

const ProcessingFile = ({ file, progress }: Props) => {
  if (!file) {
    return null;
  }

  return (
    <div>
      <UploadingFileImage progress={progress} alt="Uploaded file" src={file} />

      <ProgressBarWrapper progress={progress}>
        <ProgressBar value={progress} />
      </ProgressBarWrapper>
    </div>
  );
};

export default ProcessingFile;
