import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDcv6qPkWOYufuo-Z8_YtsC_p08IMxFebI",
  authDomain: "wataniya-series.firebaseapp.com",
  projectId: "wataniya-series",
  storageBucket: "wataniya-series.appspot.com",
  messagingSenderId: "492834824497",
  appId: "1:492834824497:web:d1f1991b2f1f1b1f015010",
  measurementId: "G-H4S532BT87",
});

export const auth = app.auth();
export default app;
