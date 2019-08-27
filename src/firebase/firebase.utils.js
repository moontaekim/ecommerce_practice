import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtKip8NLyN0z0SX3BJzLUfUEBk16Bc_38",
  authDomain: "ecommerce-db-1df80.firebaseapp.com",
  databaseURL: "https://ecommerce-db-1df80.firebaseio.com",
  projectId: "ecommerce-db-1df80",
  storageBucket: "",
  messagingSenderId: "230615864150",
  appId: "1:230615864150:web:cc62776f26c9fe84"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
