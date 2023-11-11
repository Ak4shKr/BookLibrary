// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA_tokvDXdHQWWD6GkazE0b6diMZRYvgk0",
//   authDomain: "fir-crud-5c49d.firebaseapp.com",
//   projectId: "fir-crud-5c49d",
//   storageBucket: "fir-crud-5c49d.appspot.com",
//   messagingSenderId: "158821635502",
//   appId: "1:158821635502:web:ca8637642c7b254bc1643f",
//   measurementId: "G-L385BQZW8P",
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3gWGgTLiPBf0HecnoSPDoUpoT2JykBmI",
  authDomain: "library-d142f.firebaseapp.com",
  projectId: "library-d142f",
  storageBucket: "library-d142f.appspot.com",
  messagingSenderId: "542230553262",
  appId: "1:542230553262:web:2eaa922d61debc22b3033f",
  measurementId: "G-N5MJPNG34L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
