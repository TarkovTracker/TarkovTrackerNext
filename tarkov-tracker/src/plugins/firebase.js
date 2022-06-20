import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzod-ZcUKOmlYNChDAeGWhoatPt6niPu0",
  authDomain: "tarkovtracker-next.firebaseapp.com",
  projectId: "tarkovtracker-next",
  storageBucket: "tarkovtracker-next.appspot.com",
  messagingSenderId: "260245547337",
  appId: "1:260245547337:web:e2821d280026b1af539298",
  measurementId: "G-JYJTN74JNW"
};

// Initialize Firebase
const fireapp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(fireapp);

export {firebase, fireapp, analytics}