// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkSv0UrjEe83fKcYfNMfy_MQEJACJqZ4",
  authDomain: "house-marketplace-app-4aa3b.firebaseapp.com",
  projectId: "house-marketplace-app-4aa3b",
  storageBucket: "house-marketplace-app-4aa3b.appspot.com",
  messagingSenderId: "168152601876",
  appId: "1:168152601876:web:1338a192ab36ab9c549e01"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();