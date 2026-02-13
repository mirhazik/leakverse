// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyAsFj7Ab8HFEyqfuYyXiGcTdXnZr5O-FR4",
  authDomain: "leakverse.firebaseapp.com",
  projectId: "leakverse",
  storageBucket: "leakverse.firebasestorage.app",
  messagingSenderId: "1062877213147",
  appId: "1:1062877213147:web:6167dcc5b7792afc2b77fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const loginBtn = document.getElementById("googleLogin");

loginBtn.addEventListener("click", () => {
    auth.signInWithPopup(provider)
    .then((result) => {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Auto redirect if already logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "dashboard.html";
    }
});
