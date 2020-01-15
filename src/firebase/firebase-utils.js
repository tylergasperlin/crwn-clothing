import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBfup_Jl7Snp3a54R5E4wOsGVi3FXxbaZc',
  authDomain: 'crwn-db-85798.firebaseapp.com',
  databaseURL: 'https://crwn-db-85798.firebaseio.com',
  projectId: 'crwn-db-85798',
  storageBucket: 'crwn-db-85798.appspot.com',
  messagingSenderId: '534616453233',
  appId: '1:534616453233:web:da8e155503a24b9eb0abd0',
  measurementId: 'G-Q99E8HV05Q'
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
      console.error('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      //pass encodeUri = object = pass string an gives you back string that evrey url can read
      //removes spaces
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  //pass in initial object indicated by {} at the end of the method
  //initial object goes into first new collection and sets the first value to title.tolowerccase = hats=hats.collection
  //goes to  second object = jackets = jackets.jacketscollection
  //this reduce makes it so that the titles within the object from firebase are the keys
  return transformedCollection.reduce((accumulator,collection) =>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//use this to add new documents to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  //foreach different than map in that it does is does not return a new array
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
