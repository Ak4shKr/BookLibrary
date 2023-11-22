// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

export const db = getFirestore(app);
