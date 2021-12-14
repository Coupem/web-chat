import styled from 'styled-components';

interface ModalOverlayProps {
  onClick?: () => void;
}

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 5;
`;

export const ModalOverlay = styled.div<ModalOverlayProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.6);
`;
