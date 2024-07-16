import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhvN1-BvJ0-x-HaT5i7aoeXx87ijmI5M",
  authDomain: "testing3reactapp.firebaseapp.com",
  projectId: "testing3reactapp",
  storageBucket: "testing3reactapp.appspot.com",
  messagingSenderId: "275935880885",
  appId: "1:275935880885:web:a07dff151aca0f154f40fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth }; 