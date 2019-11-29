import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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


firebase.initializeApp(config)

export const auth= firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;