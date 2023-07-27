import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB5W99no_XVS4tGjQyCgC1OPt0x0P_NIjk",
  authDomain: "fashion-app-84f9f.firebaseapp.com",
  projectId: "fashion-app-84f9f",
  storageBucket: "fashion-app-84f9f.appspot.com",
  messagingSenderId: "732577223873",
  appId: "1:732577223873:web:7528eb197a4a26946d3040",
  measurementId: "G-8H04TWT1HJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
