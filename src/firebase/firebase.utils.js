import firebase from "firebase/app";
// DATABASE
import 'firebase/firestore';
// AUTH
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCcpdWsDJp0RJYyU-Yp7_G-C_O6JY0jQfY",
  authDomain: "ubshop-7f5ad.firebaseapp.com",
  databaseURL: "https://ubshop-7f5ad.firebaseio.com",
  projectId: "ubshop-7f5ad",
  storageBucket: "",
  messagingSenderId: "307513766247",
  appId: "1:307513766247:web:1ffcbcdd93e1d785"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// GOOGLE AUTH
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;