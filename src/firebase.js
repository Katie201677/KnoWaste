import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyCTgaevqF2xu2P1PY5ILNfACNGeftykdXg",
  authDomain: "knowaste-ff8b9.firebaseapp.com",
  projectId: "knowaste-ff8b9",
  storageBucket: "knowaste-ff8b9.appspot.com",
  messagingSenderId: "489884345590",
  appId: "1:489884345590:web:6e1630a48d291a1bbaf8d7"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
