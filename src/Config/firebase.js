import { initializeApp } from "firebase/app";
// Importing getAuth for authorization of User's.
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
  databaseURL: `https://${process.env.NEXT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_APP_FIREBASE_MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);