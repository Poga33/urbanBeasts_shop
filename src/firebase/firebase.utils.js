import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCcpdWsDJp0RJYyU-Yp7_G-C_O6JY0jQfY",
  authDomain: "ubshop-7f5ad.firebaseapp.com",
  databaseURL: "https://ubshop-7f5ad.firebaseio.com",
  projectId: "ubshop-7f5ad",
  storageBucket: "ubshop-7f5ad.appspot.com",
  messagingSenderId: "307513766247",
  appId: "1:307513766247:web:1ffcbcdd93e1d785"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;