import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBa_6wxSvscfKwk8nMSdpoEnFqYoSlbv2s",
  authDomain: "gashaw-59a5a.firebaseapp.com",
  projectId: "gashaw-59a5a",
  storageBucket: "gashaw-59a5a.appspot.com",
  messagingSenderId: "529722215137",
  appId: "1:529722215137:web:331f6b7633b0b89503c5a0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=app.firestore();