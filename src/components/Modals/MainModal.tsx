import React from 'react';

import UploadImage from './components/UploadImage/UploadImage';
import { ModalWrapper, ModalOverlay } from './MainModal.styled';
import { modalTypes } from './constants';

type Props = {
  modalType: string;
  modalProps?: object;
  isOpen?: boolean;
  onClose: () => void;
};

const MainModal = ({ modalType, modalProps, onClose, isOpen = false }: Props) => {
  if (!modalType || !isOpen) {
    return null;
  }

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper className="modalWrapper">
        {modalType === modalTypes.uploadImage && <UploadImage {...modalProps} />}
      </ModalWrapper>
    </>
  );
};

export default MainModal;
