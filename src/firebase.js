import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, child, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWNrwLfyQXwvTBP5aSFLIifGxxGFmXrhM",
  authDomain: "fir-26f00.firebaseapp.com",
  projectId: "fir-26f00",
  storageBucket: "fir-26f00.firebasestorage.app",
  messagingSenderId: "140884545234",
  appId: "1:140884545234:web:5ff72e1b1e5e45155a670b",
  measurementId: "G-6C1SJ37R54"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

export { ref, set, get, child, push };
