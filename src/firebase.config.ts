import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyABb2zvvCIG2Zfj5HU0c7gD6Bk28kMf1Ys",
  authDomain: "guilded-chatapp.firebaseapp.com",
  projectId: "guilded-chatapp",
  storageBucket: "guilded-chatapp.appspot.com",
  messagingSenderId: "281825630248",
  appId: "1:281825630248:web:e3125cc6b722b4952b3d1d"
});

export const db = getFirestore();