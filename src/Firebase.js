import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR_8UK608-DzD1Dt88UkG3sL8J2_xGU4g",
  authDomain: "eshop-726fd.firebaseapp.com",
  databaseURL: "https://eshop-726fd-default-rtdb.firebaseio.com",
  projectId: "eshop-726fd",
  storageBucket: "eshop-726fd.appspot.com",
  messagingSenderId: "172211848265",
  appId: "1:172211848265:web:3e014adbefa06ecdd22b98",
  measurementId: "G-8CC35QZN8V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };