import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfup_Jl7Snp3a54R5E4wOsGVi3FXxbaZc",
  authDomain: "crwn-db-85798.firebaseapp.com",
  databaseURL: "https://crwn-db-85798.firebaseio.com",
  projectId: "crwn-db-85798",
  storageBucket: "crwn-db-85798.appspot.com",
  messagingSenderId: "534616453233",
  appId: "1:534616453233:web:da8e155503a24b9eb0abd0",
  measurementId: "G-Q99E8HV05Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //if no data found create the data
    try {
      await userRef.set({
        displayName,
        email,
        userRef,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
