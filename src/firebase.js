import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCJypedQSVDr-lIILrJWSltWjcUQaHv6oc",
  authDomain: "knowaste-3c92c.firebaseapp.com",
  projectId: "knowaste-3c92c",
  storageBucket: "knowaste-3c92c.appspot.com",
  messagingSenderId: "1031894047710",
  appId: "1:1031894047710:web:1fa6e25d8b273608e89b4f",
  measurementId: "G-52P45TXG7Y"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
