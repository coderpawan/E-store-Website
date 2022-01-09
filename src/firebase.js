import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH5Tl45FepT7MkFgIdnL8r5OENejoigAU",
  authDomain: "clone-2349d.firebaseapp.com",
  projectId: "clone-2349d",
  storageBucket: "clone-2349d.appspot.com",
  messagingSenderId: "54277523268",
  appId: "1:54277523268:web:2a94bdb2f162282bc33911",
  measurementId: "G-0V3EVXC32M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
