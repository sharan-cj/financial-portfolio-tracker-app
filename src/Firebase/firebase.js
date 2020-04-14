import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAxtRrN_Hs3TYtZnbpt6s4Dsz42il7l4QI",
  authDomain: "financial-pf-tracker.firebaseapp.com",
  databaseURL: "https://financial-pf-tracker.firebaseio.com",
  projectId: "financial-pf-tracker",
  storageBucket: "financial-pf-tracker.appspot.com",
  messagingSenderId: "519600508744",
  appId: "1:519600508744:web:6cf8a2b6b825dd26c86d7d"
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
  