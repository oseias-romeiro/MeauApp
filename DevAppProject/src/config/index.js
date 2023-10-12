// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, SENDERID, APPID, MEASUREMENTID } from '@env';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: SENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(app);


export default auth;


