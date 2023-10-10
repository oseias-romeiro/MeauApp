// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa3GqZylYsvkXHeHeWJ-trKGZr_MtpPjA",
  authDomain: "meau-bdcdd.firebaseapp.com",
  projectId: "meau-bdcdd",
  storageBucket: "meau-bdcdd.appspot.com",
  messagingSenderId: "1084724144062",
  appId: "1:1084724144062:web:9354b11a4cb1f5f1b8bbef",
  measurementId: "G-X3Z5VH4JPH"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(app);


export default auth;


