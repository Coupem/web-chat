import React, { useState, useEffect, useRef } from 'react';
import { DocumentData } from 'firebase/firestore';
import SignOut from '../SignOut/SignOut';
import {
  HeaderContainer,
  ChatStyles,
  MessageWindowWrapper,
  MessageContainerWrapper,
  ImageWrapper,
  UserInfoWrapper,
  MessageField,
} from './Chat.styled';

import { auth } from '../../utils/firebase';
import SendMassage from '../SendMessage/SendMessage';
import { getDataFromFirebase } from '../../utils/firebaseData';
import MainModal from '../Modals/MainModal';
import Portal from '../Portal/Portal';

interface IDataProps {
  text: string;
  id: string;
  createdAt: number;
  uid: string;
  photoURL: string;
  userName: string;
  imageURL?: string | null;
}

const Chat = () => {
  const [currentUserImage, setCurrentUserImage] = useState<string>('');
  const [data, setData] = useState<DocumentData | null>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const { currentUser } = auth;

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  useEffect(() => {
    if (currentUser) {
      currentUser.providerData.forEach((profile) => {
        if (profile?.photoURL) {
          setCurrentUserImage(profile?.photoURL);
        }
      });
    }
  }, [currentUser]);

  useEffect(() => {
    getDataFromFirebase('messages', 'createdAt', 50, setData);
  }, []);

  if (!data) return null;

  return (
    <>
      <Portal>
        <MainModal modalType="uploadImage" isOpen={isOpenModal} onClose={handleCloseModal} />
      </Portal>

      <ChatStyles>
        <div className="chatContainer">
          <HeaderContainer>
            <SignOut userImage={currentUserImage} />
          </HeaderContainer>

          <MessageWindowWrapper>
            {data.map(({ id, text, photoURL, uid, userName, imageURL }: IDataProps) => {
              const isCurrentUser = currentUser?.uid === uid;

              return (
                <MessageContainerWrapper key={id} className={`${isCurrentUser ? 'positionRight' : 'positionLeft'}`}>
                  <div className="messageContent">
                    <UserInfoWrapper className={`${isCurrentUser ? 'logoRight' : 'logoLeft'}`}>
                      <ImageWrapper>
                        <img alt="userPhoto" className="image" src={`${photoURL}`} />
                      </ImageWrapper>
                      <div className="userName">{userName}</div>
                    </UserInfoWrapper>

                    <MessageField ref={messagesEndRef} className={`${isCurrentUser ? 'textRight' : 'textLeft'}`}>
                      {text && text}
                      {imageURL && <img alt="imageM" className="imageMessage" src={imageURL} />}
                    </MessageField>
                  </div>
                </MessageContainerWrapper>
              );
            })}
          </MessageWindowWrapper>
        </div>

        <SendMassage handleOpenModal={handleOpenModal} />
      </ChatStyles>
    </>
  );
};

export default Chat;
