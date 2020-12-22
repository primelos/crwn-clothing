import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC2JXbhiQH_X-WyRYa0qW9IXjPoZxm6MGE",
  authDomain: "crwn-db-fbe5a.firebaseapp.com",
  projectId: "crwn-db-fbe5a",
  storageBucket: "crwn-db-fbe5a.appspot.com",
  messagingSenderId: "225956968712",
  appId: "1:225956968712:web:e1257a01a67c92958214bd",
  measurementId: "G-61Z4Z7N7MP",
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase