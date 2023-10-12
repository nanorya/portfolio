// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4XS1CBLDq8on3RaNu0QnKPhml4moI0Vw",
  authDomain: "portfolio-1cd33.firebaseapp.com",
  projectId: "portfolio-1cd33",
  storageBucket: "portfolio-1cd33.appspot.com",
  messagingSenderId: "194336819219",
  appId: "1:194336819219:web:685e7514ef724f846a17e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db