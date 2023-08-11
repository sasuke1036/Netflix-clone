// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDElUdMlwVagX6XDwSOfOQiohtY54mFlq4",
  authDomain: "netflix-clone-42c20.firebaseapp.com",
  projectId: "netflix-clone-42c20",
  storageBucket: "netflix-clone-42c20.appspot.com",
  messagingSenderId: "546587986769",
  appId: "1:546587986769:web:fcd462b83245958650a170",
  measurementId: "G-EJ4R08GXS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db = getFirestore(app);

export default app;
export {
  analytics,
  auth,
  db,
};