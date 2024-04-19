const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROYECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSASING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
