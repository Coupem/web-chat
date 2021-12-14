import firebase from 'firebase/compat';
import { auth, database } from './firebase';

export interface IData {
  text?: string;
  imageURL: string;
  createdAt: number;
  uid: string;
}

export const getDataFromFirebase = (
  collection: string,
  sortBy: string,
  limit: number,
  callback: (data: firebase.firestore.DocumentData) => void,
) => {
  database
    .collection(collection)
    .orderBy(sortBy)
    .limit(limit)
    .onSnapshot((snapshot) => {
      callback(
        snapshot.docs.map((doc) => {
          const docData = doc.data();
          const docId = doc.id;

          return { ...docData, id: docId };
        }),
      );
    });
};

export const sendToFirebase = (message: string | null, imageOnMessageURL: string | null = null) => {
  const { photoURL, uid } = auth.currentUser || {};

  if (!uid) {
    return;
  }

  database.collection('messages').add({
    text: message,
    photoURL,
    uid,
    imageURL: imageOnMessageURL,
    userName: auth.currentUser?.displayName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
