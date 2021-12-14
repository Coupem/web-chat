import React from 'react';
import Button from '@mui/material/Button';
import { auth } from '../../utils/firebase';
import { ImgBtnWrapper, SignOutContainer } from './SignOut.styled';

interface IProps {
  userImage: string | undefined;
}

const SignOut: React.FC<IProps> = ({ userImage }: IProps) => (
  <SignOutContainer>
    <ImgBtnWrapper>
      <div className="imageWrapper">{userImage && <img alt="userImage" className="image" src={userImage} />}</div>
      <Button size="large" className="buttonLogout" onClick={() => auth.signOut()}>
        log out
      </Button>
    </ImgBtnWrapper>

    <div className="nameWrapper">
      <h5>{auth.currentUser?.displayName}</h5>
    </div>
  </SignOutContainer>
);

export default SignOut;
