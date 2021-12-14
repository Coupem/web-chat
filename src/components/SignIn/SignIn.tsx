import React from 'react';
import firebase from 'firebase/compat';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { auth } from '../../utils/firebase';
import { SignInStyles } from './SignIn.styled';

const SingIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((res) => {
      // Access token missed type
      // @ts-ignore
      const { accessToken } = res?.credential || {};

      localStorage.setItem('auth_token', accessToken);
    });
  };

  return (
    <SignInStyles>
      <div className="signInContainer">
        <div className="title">Login with Google</div>

        <Button className="signInButton" variant="contained" onClick={signInWithGoogle} endIcon={<SendIcon />}>
          sign in
        </Button>
      </div>
    </SignInStyles>
  );
};

export default SingIn;
