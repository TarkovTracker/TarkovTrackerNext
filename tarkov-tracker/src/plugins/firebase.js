import { reactive } from 'vue'
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore'
import 'firebase/compat/functions'
import 'firebase/compat/auth'

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
const fireapp = reactive(firebase.initializeApp(firebaseConfig));
const analytics = getAnalytics(fireapp);

// Set up a reactive object for using the user object from auth
const fireuser = reactive({})
fireapp.auth().onAuthStateChanged(function(user) {
  if (user) {
    Object.assign(fireuser, user?._delegate)
  } else {
    Object.keys(fireuser).forEach((key) => {
      delete fireuser[key]
    })
  }
});


// Use emulators if we're localhost
if (window.location.hostname === 'localhost') {
  fireapp.firestore().useEmulator('localhost', 5002)
  fireapp.functions().useEmulator('localhost', 5001)
  fireapp.auth().useEmulator('http://localhost:9099')
}

export {firebase, fireapp, analytics, fireuser}