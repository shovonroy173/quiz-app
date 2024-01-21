// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWhlfHiEFKyQE2vAvp152GukUghBxEC7U",
  authDomain: "react-quiz-dev-ebbab.firebaseapp.com",
  databaseURL: "https://react-quiz-dev-ebbab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-dev-ebbab",
  storageBucket: "react-quiz-dev-ebbab.appspot.com",
  messagingSenderId: "625655462289",
  appId: "1:625655462289:web:0216a3eaeb1b1ffe888230" , 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;