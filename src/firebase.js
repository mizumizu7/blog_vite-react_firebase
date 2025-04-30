// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANOTl32Vy62VhiWIeMC0hvNdlSfh5KPTw",
  authDomain: "blog-57a23.firebaseapp.com",
  projectId: "blog-57a23",
  storageBucket: "blog-57a23.firebasestorage.app",
  messagingSenderId: "793104703949",
  appId: "1:793104703949:web:79aeb0363dfb3229296484"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
