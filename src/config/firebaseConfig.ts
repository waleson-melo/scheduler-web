import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr1pQhnEaQIfN0ZicjAUJLAqJ1WjMQjbA",
  authDomain: "scheduler-4515d.firebaseapp.com",
  projectId: "scheduler-4515d",
  storageBucket: "scheduler-4515d.firebasestorage.app",
  messagingSenderId: "392282355845",
  appId: "1:392282355845:web:34f33f79812646d04491ec",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
