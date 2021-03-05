import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbIhD_wUTuY_CtmEBsHHnkd4P663D4gWU",
    authDomain: "real-recipe-app.firebaseapp.com",
    databaseURL: "https://real-recipe-app.firebaseio.com",
    projectId: "real-recipe-app",
    storageBucket: "real-recipe-app.appspot.com",
    messagingSenderId: "1018180141038",
    appId: "1:1018180141038:web:1339476a1c0a0ee64b98ff",
    measurementId: "G-67NGWN1LEG"
  };

  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore = firebase.firestore();
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };