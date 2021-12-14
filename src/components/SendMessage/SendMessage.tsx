import React, { useState, MouseEventHandler } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { InteractionContainer, SendMessageStyles } from './SendMessage.styled';
import { sendToFirebase } from '../../utils/firebaseData';

export interface ISendMessageProps {
  handleOpenModal: MouseEventHandler<HTMLButtonElement>;
}

const SendMassage = ({ handleOpenModal }: ISendMessageProps) => {
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === '') return;

    sendToFirebase(message.trim(), null);

    setMessage('');
  };
  return (
    <SendMessageStyles>
      <div className="sendMessageWrapper">
        <form onSubmit={sendMessage}>
          <InteractionContainer>
            <Input
              className="inputField"
              value={message}
              placeholder="Write message"
              fullWidth
              onChange={handleInputChange}
            />

            <IconButton onClick={handleOpenModal} className="iconButton" color="primary" aria-label="upload picture">
              <PhotoCamera />
            </IconButton>

            <Button className="sendButton" type="submit" variant="outlined">
              send
            </Button>
          </InteractionContainer>
        </form>
      </div>
    </SendMessageStyles>
  );
};

export default SendMassage;
