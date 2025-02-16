// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDisHg3TH-yJJ_w2s22jGrkc06_C08xqwE",
  authDomain: "netflix-gpt-40f6c.firebaseapp.com",
  projectId: "netflix-gpt-40f6c",
  storageBucket: "netflix-gpt-40f6c.firebasestorage.app",
  messagingSenderId: "1074598322021",
  appId: "1:1074598322021:web:7d7a3fc6d569bd20cc8b8c",
  measurementId: "G-J646KPGH2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;
