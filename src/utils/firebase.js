// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuqm0_O9A5NOGyXSJikxDNQt4ZC6HoyQg",
  authDomain: "netflix-gpt-9b20b.firebaseapp.com",
  projectId: "netflix-gpt-9b20b",
  storageBucket: "netflix-gpt-9b20b.firebasestorage.app",
  messagingSenderId: "421669857686",
  appId: "1:421669857686:web:8c3e2abcf998b1a17055b7",
  measurementId: "G-2Y2P5S2JLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();