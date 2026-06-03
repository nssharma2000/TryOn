import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEzC3zG4lXeZ9LEsFCo01qPjjfXS9q5j8",
  authDomain: "tryon-f7aa8.firebaseapp.com",
  projectId: "tryon-f7aa8",
  storageBucket: "tryon-f7aa8.firebasestorage.app",
  messagingSenderId: "926875419156",
  appId: "1:926875419156:web:e928ab1304ae52fbd81d01",
  measurementId: "G-WZX8K2BDW5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);