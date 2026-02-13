// Firebase Imports (Module Version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsFj7Ab8HFEyqfuYyXiGcTdXnZr5O-FR4",
  authDomain: "leakverse.firebaseapp.com",
  projectId: "leakverse",
  storageBucket: "leakverse.firebasestorage.app",
  messagingSenderId: "1062877213147",
  appId: "1:1062877213147:web:6167dcc5b7792afc2b77fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Get button
const loginBtn = document.getElementById("googleLogin");

// Login Click
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});

// Auto Redirect if already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
