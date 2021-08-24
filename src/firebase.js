import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAKYguXsPtFbnx14bRPz3kUOEpFxfou2x4",
    authDomain: "linkedin-clon-d857a.firebaseapp.com",
    projectId: "linkedin-clon-d857a",
    storageBucket: "linkedin-clon-d857a.appspot.com",
    messagingSenderId: "294534197168",
    appId: "1:294534197168:web:8cdc3f739e256bd9dd3075",
    measurementId: "G-EWF3Y0FLFQ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider}