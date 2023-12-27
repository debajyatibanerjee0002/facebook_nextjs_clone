import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "facebook-2-b866a",
  storageBucket: "facebook-2-b866a.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
