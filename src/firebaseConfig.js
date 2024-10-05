// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // trae el auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAUvWMRLZp9rM8MFwz-_BmiJfFb3oYPApU",
  authDomain: "auth-desafio-750e0.firebaseapp.com",
  projectId: "auth-desafio-750e0",
  storageBucket: "auth-desafio-750e0.appspot.com",
  messagingSenderId: "946182289869",
  appId: "1:946182289869:web:5c68ea8c51cfd3e1f76c84"
};
// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inicializa la autentiqueishon
const auth = getAuth(app);

export { auth };
