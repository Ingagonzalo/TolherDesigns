// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //conexion entre React y Firebase
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFKRgON9HlzIMOMrr-TYT9VlqCdUarfjQ",
  authDomain: "tolherdesigns.firebaseapp.com",
  projectId: "tolherdesigns",
  storageBucket: "tolherdesigns.appspot.com",
  messagingSenderId: "216971153880",
  appId: "1:216971153880:web:13105c52aea3bc321822ad"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//BASE DE DATOS
export const db = getFirestore(app)