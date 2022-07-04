import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA4gJ8V33ZgJgo14_voiEQzGtXjkEyC--0",
  authDomain: "reactzoo-37219.firebaseapp.com",
  projectId: "reactzoo-37219",
  storageBucket: "reactzoo-37219.appspot.com",
  messagingSenderId: "1051621593991",
  appId: "1:1051621593991:web:c0a22e3bc249c411be7922"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};