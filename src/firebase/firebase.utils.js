import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2JXbhiQH_X-WyRYa0qW9IXjPoZxm6MGE",
  authDomain: "crwn-db-fbe5a.firebaseapp.com",
  projectId: "crwn-db-fbe5a",
  storageBucket: "crwn-db-fbe5a.appspot.com",
  messagingSenderId: "225956968712",
  appId: "1:225956968712:web:e1257a01a67c92958214bd",
  measurementId: "G-61Z4Z7N7MP",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get();
  // const collectionSnapShot = await collectionRef.get()
  // console.log({ collectionSnapShot })
  // console.log({ collection: collectionSnapShot.docs.map(doc => doc.data())});

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection
    return accum
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
