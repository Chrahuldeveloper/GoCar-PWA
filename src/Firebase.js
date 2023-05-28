import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlRJ_4mr2NvHIauLdwAhm-_4J5ZhJ_h3g",
  authDomain: "ecom-4784d.firebaseapp.com",
  projectId: "ecom-4784d",
  storageBucket: "ecom-4784d.appspot.com",
  messagingSenderId: "212417796647",
  appId: "1:212417796647:web:5f19125b6b609caed24c02",
  measurementId: "G-6M5WYT7V0Q",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
