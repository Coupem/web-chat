import React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { SxProps } from '@mui/material';

const commonProgressProps = {
  size: 40,
  thickness: 5,
  variant: 'determinate' as const,
};

const styles: { [key: string]: SxProps } = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  backgroundCircle: {
    color: '#696969',
  },
  mainCircle: {
    color: '#ffffff',
    position: 'absolute',
    left: 0,
  },
  progressText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '13px',
  },
};

type Props = {
  value: number;
};

const ProgressBar = ({ value }: Props) => {
  return (
    <Box sx={styles.wrapper}>
      <CircularProgress {...commonProgressProps} sx={styles.backgroundCircle} value={100} />
      <CircularProgress {...commonProgressProps} sx={styles.mainCircle} value={value} />

      <Box sx={styles.progressText}>{`${value}%`}</Box>
    </Box>
  );
};

export default ProgressBar;
