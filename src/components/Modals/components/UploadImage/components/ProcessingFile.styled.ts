import styled from 'styled-components';

interface ProgressBarWrapperProps {
  progress?: number;
}

export const UploadingFileImage = styled.img<ProgressBarWrapperProps>`
  width: 100%;
  height: auto;
  filter: ${(props) => (props.progress && props.progress === 100 ? 'none' : 'blur(2px)')};
  transition: filter 2s linear;
`;

export const ProgressBarWrapper = styled.div<ProgressBarWrapperProps>`
  opacity: ${(props) => (props.progress && props.progress === 100 ? 0 : 1)};
  transition: opacity 2s linear;
`;
