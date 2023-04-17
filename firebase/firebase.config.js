// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTG2_8wgbupiTEvKp1BoZI42YjmA8Pl8c",
  authDomain: "fir-with-tail.firebaseapp.com",
  projectId: "fir-with-tail",
  storageBucket: "fir-with-tail.appspot.com",
  messagingSenderId: "992413717732",
  appId: "1:992413717732:web:a7c0dfdf6505b21c50c8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;