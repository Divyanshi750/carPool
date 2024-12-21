import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBqxq8XJ67yVT-mhZ5gFDPmIH3AFI65Yc",
  authDomain: "finalcarpal.firebaseapp.com",
  projectId: "finalcarpal",
  storageBucket: "finalcarpal.firebasestorage.app",
  messagingSenderId: "241858494025",
  appId: "1:241858494025:web:ebfa95186d2e1f26860998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const sub=document.getElementById("login");
sub.addEventListener("click", function (event){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    event.preventDefault();

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed up 
const user = userCredential.user;
windows.location.href= "carpool.html";
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
// ..
});
})