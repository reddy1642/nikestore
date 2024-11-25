
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDE3Ca-a-MlOD7i7C_IQgI-vadPSBP3JsY",
  authDomain: "nikestore-7589c.firebaseapp.com",
  projectId: "nikestore-7589c",
  storageBucket: "nikestore-7589c.appspot.com",
  messagingSenderId: "401471293058",
  appId: "1:401471293058:web:c966f9dce57e56474e169b",
  measurementId: "G-CYWNKHX35M",
  databaseURL: "https://nikestore-7589c-default-rtdb.firebaseio.com/",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
