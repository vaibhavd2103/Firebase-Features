// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyAL_M7dV3F__52LW7kSiiKHO9-8Cx7zUzI',
  authDomain: 'fir-features-b79e7.firebaseapp.com',
  projectId: 'fir-features-b79e7',
  storageBucket: 'fir-features-b79e7.appspot.com',
  messagingSenderId: '503044633340',
  appId: '1:503044633340:web:b3b600bcd1448336b85d79',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebaseApp.firestore();

// export default firebase;
