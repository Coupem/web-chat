import firebase from 'firebase/compat';

const fireBaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA_KDMt2EvXFY0p3j3ugJbEMpxSqWGLGho',
  authDomain: 'web-chat-e0047.firebaseapp.com',
  projectId: 'web-chat-e0047',
  storageBucket: 'web-chat-e0047.appspot.com',
  messagingSenderId: '534667986427',
  appId: '1:534667986427:web:c03014115dd87f0504b75e',
  measurementId: 'G-1K66QP6VYG',
});

export const database = fireBaseApp.firestore();
export const auth = firebase.auth();
