import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const uploadFile = (
  fileName: string,
  fileString: string,
  storageFolder: string,
  onProgress: (progress: number) => void,
  onSuccess: (url: string) => void,
) => {
  const storage = getStorage();
  const fileRef = ref(storage, `${storageFolder}/${fileName}`);

  fetch(fileString)
    .then((res) => res.blob())
    .then((fileBlob) => {
      const uploadTask = uploadBytesResumable(fileRef, fileBlob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          onProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            onSuccess(downloadURL);
          });
        },
      );
    });
};
