import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCmMyN5Jkx63Dz9X88R0RsT3lPmMu-Z7nE",
  authDomain: "vrhd-score-monitoring.firebaseapp.com",
  databaseURL: "https://vrhd-score-monitoring-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vrhd-score-monitoring",
  storageBucket: "vrhd-score-monitoring.appspot.com",
  messagingSenderId: "650435548029",
  appId: "1:650435548029:android:ebb65d0aa54300467a3214",
  measurementId: "G-63RNWW802V",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
