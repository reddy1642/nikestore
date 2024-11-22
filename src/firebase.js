import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDE3Ca-a-MlOD7i7C_IQgI-vadPSBP3JsY",
  authDomain: "nikestore-7589c.firebaseapp.com",
  projectId: "nikestore-7589c",
  storageBucket: "nikestore-7589c.firebasestorage.app",
  messagingSenderId: "401471293058",
  appId: "1:401471293058:web:c966f9dce57e56474e169b",
  measurementId: "G-CYWNKHX35M"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);