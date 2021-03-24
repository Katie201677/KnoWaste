import firebase from "firebase/app";
import "firebase/firestore";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

export const firebaseConfig = {
  apiKey: "AIzaSyCJypedQSVDr-lIILrJWSltWjcUQaHv6oc",
  authDomain: "knowaste-3c92c.firebaseapp.com",
  projectId: "knowaste-3c92c",
  storageBucket: "knowaste-3c92c.appspot.com",
  messagingSenderId: "1031894047710",
  appId: "1:1031894047710:web:1fa6e25d8b273608e89b4f",
  measurementId: "G-52P45TXG7Y",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const firestore = firebase.firestore();
export default firebase;
