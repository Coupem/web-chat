import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import SingIn from '../components/SignIn/SignIn';
import Chat from '../components/Chat/Chat';
import { MainLayoutStyles } from './MainLayout.styled';

export const MainLayout = () => {
  // useAuthState doesn't support auth type of interface
  const [user, loading] = useAuthState(auth as any);

  return (
    <MainLayoutStyles>
      <div className="mainContainer">
        {!user && (
          <div className="header">
            <h3>Welcome to chat</h3>
          </div>
        )}
        {!loading && <section>{!user ? <SingIn /> : <Chat />}</section>}
      </div>
    </MainLayoutStyles>
  );
};
